import React from 'react'
import Consts from './config/Consts'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Title from './layouts/Title'
import Home from './layouts/Home'
import Trending from './layouts/Trending'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			path: Consts.path.home,
			title: 'Kuro Reader',
			site: Consts.sites.mangahere,
			mangaName: '',
			mangaChapter: ''
		}

		this.setPath = this.setPath.bind(this)
		this.mangaTitemClick = this.mangaTitemClick.bind(this)
	}

	setPath(path, title) {
		this.setState({
			path: path,
			title: title
		})
	}

	mangaTitemClick(name, url) {
		this.setState({
			path: Consts.path.info,
			mangaName: name,
			mangaLink: url
		})
	}

    render() {
        return (
            <div className="App pb-5">
				<Title title={this.state.title} />
				<Row className='col-12 m-0 p-0'>
					<Jumbotron className='col-12 bg-dark m-0' variant='primary'>
						<h1 style={{color: "white"}}>Kuro Reader</h1>
					</Jumbotron>
				</Row>
				<Home 
					display={this.state.path === Consts.path.home ? true : false} 
					changePath={this.setPath}
				/>
				<Trending 
					display={this.state.path === Consts.path.trending ? true : false} 
					changePath={this.setPath}  
					site={this.state.site}
					mangaTitemClick ={this.mangaTitemClick}
				/>
            </div>
        );
    }
}

export default App;
