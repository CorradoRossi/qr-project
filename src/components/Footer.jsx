import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer">        
                    <p>Made with <span role="img" aria-label="Heart">❤️</span> and <span role="img" aria-label="Coffee">☕</span> by 
                    <a className="copyright" href="https://motorossi.me" target="_blank" rel="noopener noreferrer"> MotoRossi </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;