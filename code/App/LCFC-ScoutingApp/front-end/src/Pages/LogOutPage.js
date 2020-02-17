import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import LogIn from '../LoginForm/LoginForm'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


class LogOut extends React.Component {

    componentDidMount() {

        this.LogOut();

        this.movePage();
    }

    LogOut = async () => {

        const response = await fetch('/api/LogOutAuthentication');

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

    };


    movePage() {

        ReactDOM.render(<LogOut />, document.getElementById('root'));

    }

   

    render() {

        return (

            <header className="Login-header">

                <p>Logged Out</p>

            </header>

        );

    }
}


export default LogOut