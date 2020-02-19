import React from 'react';
import '../App.css';
// eslint-disable-next-line
import NavBar from '../Components/NavigationBar/NavBar'
// eslint-disable-next-line
import PlayerReport from './PlayerReport'
import Home from './HomePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class HomePage extends React.Component {


    state = {

        username: '',
        JSONStringDataForUsers: '',
        array: [],


    };

    componentDidMount() {

        this.gatherUserInformation();

    }

    gatherUserInformation = async () => {

        const response = await fetch('/api/GetUserInformation', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

        });

        const body = await response.text();

        this.setState({ JSONStringDataForUsers: body });


    };

    render() {

        return (
            <div>
                <div>

                    <NavBar />
                </div>
                <div>
                    <p>{this.state.JSONStringDataForUsers}</p>
                    
                </div>
            </div>
        );

    }
}


export default HomePage