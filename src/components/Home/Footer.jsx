import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,



} from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faComments } from "@fortawesome/free-solid-svg-icons";
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
          <span className="icons"  >
            <a href="/" style={{}}
              className="home" target="blank">
              <FontAwesomeIcon style={{}} icon={faHome} size="3x" color="black" />
            </a>
            <a href="/user"
              className="home" target="blank">
              <FontAwesomeIcon icon={faUser} size="3x" color="black" />
            </a>
            <a href="/comments"
              className="home" target="blank">
              <FontAwesomeIcon icon={faComments} size="3x" color="black" />
            </a>
            <a href="https://www.facebook.com"
              className="facebook social" target="blank">
              <FontAwesomeIcon icon={faFacebook} size="3x" color="black" />
            </a>
            <a href="https://www.instagram.com"
              className="instagram social" target="blank">
              <FontAwesomeIcon icon={faInstagram} size="3x" color="black" />
            </a>
            <a href="https://www.tiktok.com"
              className="tiktok social" target="blank">
              <FontAwesomeIcon icon={faTiktok} size="3x" color="black" />
            </a>
          </span>
          <div style={{ marginTop: "160px" }} className='footer-copyright text-center ml-auto py-3'>
            &copy; 2021 - Jennifer Hunt - Red Badge
        </div>
        </div>

      </div >
    )

  }
}

export default Footer;