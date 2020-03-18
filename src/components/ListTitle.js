import React from 'react'
import Row from 'react-bootstrap/Row'

class ListTitle extends React.Component {
    render() {
        return(
            <Row className='col-8 m-auto bg-white rounded p-1'>
                <span className='ml-5 list-title text-secondary font-weight-bolder'>{this.props.name}</span>
            </Row>
        )
    }
}

export default ListTitle