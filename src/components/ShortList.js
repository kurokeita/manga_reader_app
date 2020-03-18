import React from 'react'
import axios  from 'axios'
import Consts from '../config/Consts'
import Row from 'react-bootstrap/Row'
import ClipLoader from "react-spinners/ClipLoader"
import MangaItem from '../components/MangaItem'

class ShortList extends React.Component {
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
        switch(this.props.type) {
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
                    'site': this.props.site
                },
            )
            .then(res => {
                this.setState({
                    items: res.data.list
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
                <Row className='m-auto p-0 pt-5 col-12 justify-content-center'>
                    {
                        this.state.items.map(e => {
                            return <MangaItem key={e.title} {...e} direction={this.props.direction} onClick={this.props.onClick}/>
                        })
                    }
                </Row>
            )
        } else {
            return(
                <Row className='m-auto p-0 pt-5 col-12 justify-content-center'>
                    <ClipLoader size={150} color={"white"} loading={this.state.loading} />
                </Row>
            )
        }
    }
}

export default ShortList