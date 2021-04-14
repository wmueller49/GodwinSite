import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/godwin-oluwafemii-6040611b6/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:goo4qe@virginia.edu"
                className="icon fa-envelope"
              >
                <span className="label">Mail</span>
              </a>
            </li>

          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
