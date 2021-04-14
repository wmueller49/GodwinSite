import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-flask"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Godwin Oluwafemi</h1>
        <p>
          Personal Website
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            My Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open("../Godwin Oluwafemi Resume.pdf")
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
