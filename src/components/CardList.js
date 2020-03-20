import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ShortList from './ShortList'

class CardList extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.props.changePath(this.props.path, this.props.title)
    }

    render() {
        return(
            <Row className='col-12 justify-content-center mt-5'>
                <Card bg='secondary' className='col-9'>
                    <Card.Header className='font-weight-bolder list-title' onClick={this.handleClick}>{this.props.title}</Card.Header>
                    <Card.Body>
                        <ShortList type={this.props.type} direction={this.props.direction} site={this.props.site} onClick={this.props.onClick}/>
                    </Card.Body>
                </Card>
            </Row>
        )
    }
}

export default CardList