import React from 'react';
import Header from './Header';
import Footer from './Footer';
import marlo from '../assets/img/marlo-lg.png';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {loaded: false}
    }

    render() {
        const uuid = this.props.location.pathname.slice(1)
        const goqr = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='
        const linkformat = 'https://interviews.getmarlo.com/?id=';
        return (
            <>
            <Header />
                <div className="app-wrapper">
                    <div className="img-wrapper">
                        {this.state.loaded ? null : <img src={marlo} alt="loading" style={{height: '300px', width: '300px'}} />}
                        <a className="qrlink" href={linkformat + uuid} style={this.state.loaded ? {} : {display: 'none'}}>
                            <img  
                                 className="qrimage" 
                                 src={goqr + uuid} 
                                 alt="qrimage"
                                 onLoad={() => this.setState({loaded: true})}
                            />
                        </a>
                    </div>
                </div>
            <Footer />
            </>
        );
    }
}

export default Main;