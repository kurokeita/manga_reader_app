import React from 'react'
import Container from 'react-bootstrap/Container'
import axios  from 'axios'
import Consts from '../config/Consts'
import CardList from '../components/CardList'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            site: Consts.sites.mangahere,
            trending: [],
            hot: []
        }
        this.getTrending = this.getTrending.bind(this)
    }

    componentDidMount() {
        this.getTrending()
    }

    getTrending = () => {
        axios
            .post(
                Consts.api.getTrending,
                {
                    'site': 'mangahere'
                },
            )
            .then(res => {
                this.setState({
                    trending: res.data.list
                })
            })
            .catch(err => {
                console.log(err)
                return null
            })
    }

    render() {
        if (this.props.display) {
            return(
                <Container fluid className='p-0 justify-content-center'>
                    <CardList title='Trending' type='trending' direction='vertical' site={this.state.site} onClick={this.props.onClick}/>
                    <CardList title='Latest Update' type='latest' direction='horizontal' site={this.state.site} onClick={this.props.onClick}/>
                </Container>
            )
        } else {
            return null
        }
    }
}

export default Home