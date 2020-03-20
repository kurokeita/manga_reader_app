import React from 'react'
import Container from 'react-bootstrap/Container'
import axios  from 'axios'
import Consts from '../config/Consts'
import CardList from '../components/CardList'

class Trending extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            site: this.props.site,
        }
    }

    render() {
        if (this.props.display) {
            return(
                <Container fluid className='p-0 justify-content-center'>
                    <CardList 
                        title='Trending' 
                        type='trending' 
                        direction='vertical' 
                        site={this.state.site} 
                        changePath={this.props.changePath} 
                        path={Consts.path.trending}                        
                        mangaTitemClick ={this.props.mangaTitemClick}
                        fullList={true}
                    />
                </Container>
            )
        } else {
            return null
        }
    }
}

export default Trending