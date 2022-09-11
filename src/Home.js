import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Search from './Search'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core';
import google_logo from './images/google_logo.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='about'></Link>
                    <Link to='Store'></Link>
                </div>
                <div className="home__headerRight">
                    <Link to='gmail'>Gmail</Link>   {/* gmail link */}
                    <Link to='images'>Images</Link>   {/* images link */}
                    <AppsIcon />                    {/* icon */}
                    <Avatar />            {/* profile */}
                </div>
            </div>

            <div className="home__body">
                <img src={google_logo} alt="google logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>


        </div>
    )
}

export default Home;
