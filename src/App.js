import React from 'react'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Title from './layouts/Title'
import Home from './layouts/Home'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			path: 'home',
			title: 'Kuro Reader',
			source: 'mangahere'
		}

		this.setPath = this.setPath.bind(this)
	}

	setPath(path, title) {
		this.setState({
			path: path,
			title: title
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
                <Home display={this.state.path === 'home' ? true : false} changePath={this.setPath}/>
            </div>
        );
    }
}

export default App;
