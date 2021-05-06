import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTikTok,

} from "@fortawesome/free-brands-svg-icons";
import React, { Component } from 'react';




export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="footer">
          <a href="https://www.facebook.com"
            className="facebook social" target="blank">
            <FontAwesomeIcon icon={faFacebook} size="4x" color="black" />
          </a>
          <a href="https://www.instagram.com"
            className="instagram social" target="blank">
            <FontAwesomeIcon icon={faInstagram} size="4x" color="black" />
          </a>
          {/* <a href="https://www.tiktok.com"
            className="tiktok social" target="blank">
            <FontAwesomeIcon icon={faTikTok} size="4x" />
          </a> */}
        </div>
      </div>
    )

  }
}

export default Footer;