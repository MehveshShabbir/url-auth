import React from 'react'
import youtube from "./assets/Contact/icons8-youtube-50.png"
import twitter from "./assets/Contact/icons8-twitter-50.png"
import facebook from "./assets/Contact/icons8-facebook-50.png"
import instagram from "./assets/Contact/icons8-instagram-50.png"
import linkedin from "./assets/Contact/icons8-linkedin-50.png"
import whatsapp from "./assets/Contact/icons8-whatsapp-50.png"

const Footer = () => {
  return (
    <footer id="contact">
            {/* <h2> CONTACT </h2> */}
            {/*<!----------  Social Links  ------------->*/}
            <div class="social-links">
                <a href="https://www.youtube.com/" target="_blank">
                    <img src={youtube}/>
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                    <img src={twitter}/>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram}/>
                </a>
                <a href="https://pk.linkedin.com/" target="_blank">
                    <img src={linkedin}/>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <img src={whatsapp}/>
                </a>
            </div>
        
            <p> MEHVESH SHABBIR ©2023</p>
    </footer>
  )
};
export default Footer
