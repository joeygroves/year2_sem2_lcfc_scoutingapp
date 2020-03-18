import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import '../App.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';
import NavBar from '../Components/NavigationBar/NavBar'
import { withRouter } from 'react-router-dom';

class LogInForm extends Component {



    render() {

        return (

            <div>

                <div>

                    <NavBar />

                </div>
                <div>

                    <h1> Add Staff </h1>

                </div>

            </div>

        );

    }
}

export default withRouter(LogInForm);
