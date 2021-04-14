import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >


        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Work</h2>
          <p>
            <h3>CEO - Saucy Apparel</h3>
            Co-owned business where I designed clothes and marketing materials. 
            Led outreach efforts to spread brand to local community.
          </p>
          <p>
            <h3>CEO - Limitless Apparel</h3>
            Self-owned business where I created designs for local organizations and programs.
          </p>
          <p>
            <h3>Intern - <a href="https://www.sperorehab.com/">Spero Rehab</a></h3>
            Performed as a physical therapist's assistant.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            I'm a first year student at the University of Virginia in the <a href="https://engineering.virginia.edu/"> School of Engineering and Applied Science </a> 
            graduating in May 2024. I'm pursuing a degree in Biomedical Engineering as well as a minor in Economics.
          </p>
          {close}
        </article>
        
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
