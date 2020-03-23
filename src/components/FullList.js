import React from 'react'
import axios from 'axios'
import Consts from '../config/Consts'
import Row from 'react-bootstrap/Row'
import ClipLoader from "react-spinners/ClipLoader"
import MangaItem from '../components/MangaItem'

class FullList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            items: []
        }

        this.getList = this.getList.bind(this)
    }

    componentDidMount() {
        this.getList()
    }

    getList = () => {
        let url = ''
        switch (this.props.type) {
            case 'trending':
                url = Consts.api.getTrending
                break
            case 'latest':
                url = Consts.api.getNewUpdate
                break
            default:
                break
        }
        axios
            .post(
                url,
                {
                    'site': this.props.site,
                    'getAll': 'true'
                },
            )
            .then(res => {
                console.log(res.data.list)
                let chunks = []
                for (let i = 0; i < res.data.list.length; i += 6) {
                    chunks.push(res.data.list.slice(i, i + 6))
                }
                console.log(chunks)
                this.setState({
                    items: chunks
                })
            })
            .catch(err => {
                console.log(err)
                return null
            })
    }

    render() {
        if (this.state.items.length) {
            return(
                <div>
                    {
                        this.state.items.map((e, i) => {
                            // console.log(i)
                            return(
                                <Row key={i} className='m-auto p-0 pt-5 col-12 justify-content-center'>
                                    {
                                        e.map(elm => {
                                            return <MangaItem key={elm.title} {...elm} direction={this.props.direction} onClick={this.props.onClick}/>
                                        })
                                    }
                                </Row>
                            )
                        })
                    }
                </div>

            )
        } else {
            return (
                <Row className='m-auto p-0 pt-5 col-12 justify-content-center'>
                    <ClipLoader size={150} color={"white"} loading={this.state.loading} />
                </Row>
            )
        }
    }
}

export default FullList