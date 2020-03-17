import React from 'react';
import './NavBar.css';
import imageNav from '../../Images/NavLogo.png'
// eslint-disable-next-line
import PLayerReports from '../../Pages/PlayerReport'
// eslint-disable-next-line
import HomePage from '../../Pages/HomePage'
// eslint-disable-next-line
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


class navBar extends React.Component {

    state = {

        username: '',

        body: '',

        role: '',

    };

    componentDidMount() {

        this.getUsername();

        this.getRole();
    }

    myFunction = () => {

        var x = document.getElementById("myTopnav");

        if (x.className === "topnav") {

            x.className += " responsive";

        } else {

            x.className = "topnav";

        }
    }

    getUsername = async () => {

        const response = await fetch('/api/getUsername', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ post: this.state.post, password: this.state.password }),

        });

        const body = await response.text();

        this.setState({ username: body });


    }

    getRole = async () => {

        const response = await fetch('/api/getScoutRole', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

        });

        const body = await response.text();

        this.setState({ role: body });


    }

    render() {

        if (this.state.role == "Scout" || this.state.role == "Senior Scout") {

            return (
                <div class="NavigationBar">

                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <div className="topnav" id="myTopnav">

                        <div class="topLogo"><img src={imageNav} alt="navImage"></img></div>

                        { /* eslint-disable-next-line */}
                            <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>

                                <i class="fa fa-bars"></i>

                            </a>
                        
                        <div class="links" >
                           

                            {/* eslint-disable-next-line */}
                            <a><Link to={"/HomePage"}>Home</Link></a>

                            {/* eslint-disable-next-line */}
                            <a><Link to={"/PlayerReport"}>Create Player Reports</Link></a>

                            {/* eslint-disable-next-line */}
                            <a class="right"><Link to={"/LogOut"}>Logout</Link></a>



                        </div>

                        <div class="username">

                            <p > User : {this.state.username.toUpperCase()}</p>
                       
                        </div>
                   
                    </div>

                </div>

            );



        } else {

            return (
                <div class="NavigationBar">

                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <div className="topnav" id="myTopnav">

                        <div class="topLogo"><img src={imageNav} alt="navImage"></img></div>

                        { /* eslint-disable-next-line */}
                        <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>

                            <i class="fa fa-bars"></i>

                        </a>

                        <div class = "links"> 

                        {/* eslint-disable-next-line */}
                        <a><Link to={"/HomePage"}>Home</Link></a>

                        {/* eslint-disable-next-line */}
                        <a><Link to={"/PlayerReport"}>Create Player Reports</Link></a>

                        {/* eslint-disable-next-line */}
                        <a class="right"><Link to={"/LogOut"}>Logout</Link></a>

                        </div>

                        <div  class="username">
                            
                           <p>User : {this.state.username.toUpperCase()}</p> 
                            
                        </div>

                    </div>

                </div>

            );



        }
    }

}


export default navBar;
