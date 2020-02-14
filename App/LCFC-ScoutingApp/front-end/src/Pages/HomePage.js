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
        jamie: '',



    };

    componentDidMount() {

        this.gotohomepage();
    }

    gotohomepage = async () => {

        const response = await fetch('/api/hello', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

        });

        const body = await response.text();

        this.setState({ jamie: body });

        this.convertingstringintoJSON();

    };

    convertingstringintoJSON() {

        var myjson = JSON.parse(this.state.jamie);

        var numericArray = [];

        for (var i = 0; i < myjson.length; i++) {
           
            numericArray[i] = myjson.username[i];
        }

        console.log((numericArray[numericArray.length - 1]).toString());

    }

        render() {
            return (
                <div>

                    <p>{this.state.jamie}</p>
                   


                </div>


            );

        }
    }


    export default HomePage