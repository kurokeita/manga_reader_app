import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import axios  from 'axios'
import Consts from '../config/Consts'
import MangaItem from '../components/MangaItem'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trending: [],
            hot: []
        }
        this.getTrending = this.getTrending.bind(this)
        this.test = this.test.bind(this)
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
    test() {
        console.log(this.state)
    }

    render() {
        if (this.props.display) {
            let trending
            if (this.state.trending.length) {
                trending = (
                    <Row className='mt-60 col-12 justify-content-center'>
                        {
                            this.state.trending.map(e => {
                                return <MangaItem href={e.link} title={e.title} src={e.cover} hrefLastChapter={e.lastChapterLink} lastChapter={e.lastChapter}/>
                            })
                        }
                    </Row>
                )
            } else {
                trending = <Row className='mt-60 col-12 justify-content-center'>Loading...</Row>
            }

            return(
                <Container fluid className='p-0 justify-content-center'>
                    <Row className='col-12 m-0 p-0'>
                        <Jumbotron className='col-12 bg-dark' variant='primary'>
                            <h1 style={{color: "white"}}>Kuro Reader</h1>
                        </Jumbotron>
                    </Row>
                    <Row className='col-12 m-0 p-0 pl-5'>
                        <p className='ml-5'>Trending</p>
                    </Row>
                    {trending}
                </Container>
            )
        } else {
            return null
        }
    }
}

export default Home