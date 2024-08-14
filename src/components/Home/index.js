import React, { Component } from 'react';
import './index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Header from '../Header';

class Home extends Component {
  state = { isClicked: false };
  onClickNavigationButton = () => {
  
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <div>
        <div className="home-container">
          <section>
            <div className="hamburger-icon">
              <button
                onClick={this.onClickNavigationButton}
                type="button"
                aria-label="Toggle navigation"
                className="navigation-button"
              >
                <GiHamburgerMenu color="white" size="40px" />
              </button>
            </div>
            <div className="header-sec">
              <Header />
            </div>
            <div className="home-details-container">
              <div className="home-details">
                <h1>
                  BRAND
                  <span> MARK</span>
                </h1>
                <h3>Create a unique, professional logo for your business</h3>
                <p>
                  Kickstart your brand with business card designs, social media
                  graphics, app icons, letter heads and more
                </p>
                <div className="but">
                  <button type="button" className="button">
                    Create Your Logo
                  </button>
                </div>
                <div>
                </div>
              </div>
            </div>
          </section>
        </div>
    
      </div>
    );
  }
}

export default Home;
