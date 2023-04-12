import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="imgWelcome">
                        
                    </div>
                    <h1 className="home-title">GitHub social login implementation</h1>
                    <p>My web page: <a href='https://jramma.github.io/'>https://jramma.github.io/</a></p>
                </div>
            </div>
        )
    }
}

export default Home;