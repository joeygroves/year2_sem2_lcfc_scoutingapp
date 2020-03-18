import React, { Component } from 'react';
import logo from '../Images/LCFC-Print.png';
import '../App.css';
import ReactDOM from 'react-dom';
import HomePage from '../App';
import NavBar from '../Components/NavigationBar/NavBar'
import { withRouter } from 'react-router-dom';

class LogInForm extends Component {

    state = {

        response: '', 
        
        username: '', password: '', first_name: '', last_name: '', role: 'Scout', 

        confirmation : '',
    }


    handleSubmit = async (e) => {

        this.setState({confirmation : 'User Has Been Succesfully Created.' });

        e.preventDefault();

        const response = await fetch('/api/admin/addStaff', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({
                username: this.state.username, 
                password: this.state.password, 
                first_name: this.state.first_name, 
                last_name: this.state.last_name,
                role: this.state.role

            }),

        });

        const body = await response.text();

        this.setState({ response: body });

    };



    render() {

        return (
            <div>

                <div>
                    <NavBar />
                </div>

                <form onSubmit={this.handleSubmit}>

                    <h1> Add Staff </h1>

                    <div class="grid-container">
                        <div class="grid-item">

                            <label>Username: </label>
                            <input value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>

                            <label>Password: </label>
                            <input value={this.state.password} onChange={e => this.setState({ password: e.target.value })}></input>

                            <label>First Name: </label>
                            <input value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })}></input>

                            <label>Last Name: </label>
                            <input value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}></input>

                            <label>Role: </label>
                            <select value={this.state.role} onChange={e => this.setState({ role: e.target.value })}>
                                <option>Scout</option>
                                <option>Senior Scout</option>
                                <option>Admin</option>
                            </select>

                            <br></br>
                        </div>

                    </div>
                    <p>{this.state.confirmation}</p>

                    <button type="submit">Submit</button>

                </form>

            </div>

        );

    }
}

export default withRouter(LogInForm);
