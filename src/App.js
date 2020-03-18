import React from 'react'
import Title from './layouts/Title'
import Home from './layouts/Home'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			map: 'home',
			title: 'Kuro Reader',
			source: 'mangahere'
		}
	}

	changeRoute(route) {
		let title = ''
		this.setState({
			map: route,
			title: title
		})
	}

    render() {
        return (
            <div className="App">
				<Title title={this.state.title} />
                <Home display={this.state.map === 'home' ? true : false} changeRoute={this.changeRoute}/>
            </div>
        );
    }
}

export default App;
