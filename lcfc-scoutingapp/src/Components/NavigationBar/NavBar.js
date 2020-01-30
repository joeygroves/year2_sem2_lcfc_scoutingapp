import React from 'react';
import './NavBar.css';
import imageNav from '../../Images/NavLogo.png'

class navBar extends React.Component{
    render(){
        return(
            <div class = "NavigationBar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <header className = "NavBar">
                    <nav className= "NavBar_Nav">
                        <div></div>
                        <div className ="NavImage"><a href="/"><img src = {imageNav}  alt = "navimage"/></a></div>
                        <div className="NavBar_Items">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Report</a></li>
                                <li><a href="/">Team Report</a></li>
                                <li><a href="javascript:void(0);" class="icon" onclick="myFunction()"> 
                                    <i class="fa fa-bars"></i></a></li>
                            </ul>
                        </div>
                        
                    </nav>
                </header>
            </div>
        );
    }
}
export default navBar;