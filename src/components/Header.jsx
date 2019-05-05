import React from 'react';
import logo from '../assets/img/marlo-logo.png'

class Header extends React.Component {

    render() {
        return (
            <header className="header-wrapper">
                <a className="logo-link" href="https://getmarlo.com">
                    <img className="logo-img" src={logo} alt="marlo-logo"/>
                </a>
                <div className="header">       
                    <p><a className="App-link" href="https://getmarlo.com" target="_blank" rel="noopener noreferrer"> Marlo </a>
                    Click the<br/> QR code for the UUID link!</p>
                </div>
            </header>
        );
    }
}

export default Header;