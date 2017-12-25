import React, { Component } from 'react';
import Background from'./page.png';
import './App.css'

class Title extends React.Component{
    render(){
        return(
            <div>
         	    <div id="welcomePage" style={{backgroundImage: "url("+ Background + ")"}}>
	                <p id="title">Welcome to our app...</p>
	                <p id="intro">We are here to help you organize your favorite Anime, Comics and Books!</p>
	                <p id="footer"> Contact Us @ </p>
	            </div>
            </div>
        )
    }
}

export default Title;