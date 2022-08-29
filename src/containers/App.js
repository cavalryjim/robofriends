import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
      // console.log('check');
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots =  robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>Users</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                      <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }

    }
}

export default App;
