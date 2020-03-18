import React from 'react'
import Image from 'react-bootstrap/Image'

class MangaItem extends React.Component {
    render() {
        return(
            <div className='col-2'>
                <a href={this.props.href} title={this.props.title} className='text-decoration-none'>
                    <Image src={this.props.src} className='h-100' fluid thumbnail/>
                </a>
                <p className='mt-2 mb-0'>
                    <a href={this.props.href} title={this.props.title} className='text-decoration-none text-white font-weight-bolder title'>{this.props.title}</a>
                </p>
                <p>
                    <a href={this.props.hrefLastChapter} title={this.props.lastChapter} className='text-decoration-none text-white'>{this.props.lastChapter}</a>
                </p>
            </div>
        )
    }
}

export default MangaItem