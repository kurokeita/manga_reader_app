import React from 'react'
import Image from 'react-bootstrap/Image'
import Consts from '../config/Consts'

class MangaItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.onClick(Consts.path.info, this.props.title)
    }

    render() {
        if (this.props.direction === 'vertical') {
            return(
                <div className='m-auto'>
                    <a href={this.props.link} title={this.props.title} className='text-decoration-none' onClick={this.handleClick}>
                        <Image src={this.props.cover} className='h-75' fluid thumbnail/>
                    </a>
                    <p className='mt-2 mb-0' onClick={this.handleClick}>
                        <a href={this.props.link} title={this.props.title} className='text-decoration-none text-white font-weight-bolder title'>{this.props.title}</a>
                    </p>
                    <p onClick={this.handleClick}>
                        <a href={this.props.lastChapterLink} title={this.props.lastChapter} className='text-decoration-none text-white'>{this.props.lastChapter}</a>
                    </p>
                </div>
            )
        } else {
            return(
                <div className='col-2'>

                </div>
            )
        }
    }
}

export default MangaItem