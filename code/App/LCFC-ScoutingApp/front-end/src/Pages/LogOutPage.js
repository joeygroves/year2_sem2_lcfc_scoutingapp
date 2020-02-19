import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import LogInForm from '../LoginForm/LoginForm';
import NavBar from '../Components/NavigationBar/LogOutNavBar';
import App from '../App';


class LogOut extends React.Component {

    componentDidMount() {

        this.LogOut();

    }

    LogOut = async () => {

        const response = await fetch('/api/LogOutAuthentication');

        const body = await response.text();

        if (response.status !== 200) throw Error(body.message);



    };

    render() {

        return (
            <div>
                <div><NavBar /></div>

                <header className="LogOut-header">

                    <p>Logged Out!</p>
                    
                </header>

            </div>
        );

    }
}


export default LogOut