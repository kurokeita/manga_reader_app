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
                <div className='col-2 '>
                    <a href={this.props.link} title={this.props.title} onClick={this.handleClick}>
                        <div style={{backgroundImage: 'url(' + this.props.cover + ')'}} className='image-cover img-thumbnail'></div>
                    </a>
                    <p className='mt-2 mb-0' onClick={this.handleClick}>
                        <a href={this.props.link} title={this.props.title} className='manga-item-title'>{this.props.title}</a>
                    </p>
                    {this.props.lastChapter &&
                        (
                            <p onClick={this.handleClick}>
                                <a href={this.props.lastChapterLink} title={this.props.lastChapter} className='manga-item-chapter'>{this.props.lastChapter}</a>
                            </p>
                        )
                    }
                    {this.props.newChapter &&
                        <p onClick={this.handleClick}>
                            <a href={this.props.link} title={this.props.title} className='manga-item-chapter'>{this.props.newChapter}</a>
                        </p>
                    }
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