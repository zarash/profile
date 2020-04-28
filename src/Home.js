import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <body class="w3-light-grey">


      
      <div class="w3-content w3-margin-top" style={{maxXidth:"1400px"}}>
      
        
        <div class="w3-row-padding">
        
          
          <div class="w3-third">
          
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img src="https://www.upsara.com/images/o739758_zashrafi.jpg" style={{width:"100%"}} alt="Avatar" />
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2 id="name"></h2>
                </div>
              </div>
              <div class="w3-container">
                <p id="occupation"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Front-End Developer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Tabriz, Iran</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>Z.Ashrafi@yahoo.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+98 903 453 3190</p>
                <hr/>
      
                <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                <p>HTML/CSS</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>80%</div>
                </div>
                <p>React</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"60%"}}>
                    <div class="w3-center w3-text-white">60%</div>
                  </div>
                </div>
                <p>Ruby On Rails</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"45%"}}>45%</div>
                </div>
                <p>NodeJS</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"30%"}}>30%</div>
                </div>
                <br/>
      
                <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                <p>Turkish</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal turkesh" ></div>
                </div>
                <p>English</p>
                <div class="w3-light-grey w3-round-xlarge ">
                  <div class="w3-round-xlarge w3-teal english" ></div>
                </div>
                <p>German</p>
                <div class="w3-light-grey w3-round-xlarge">
                  <div class="w3-round-xlarge w3-teal german"></div>
                </div>
                <br/>
              </div>
            </div><br/>
      
          
          </div>
      
          
          <div class="w3-twothird">
          
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Software Developer / Parmis Tarahan Pasargad (PTP)</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i> 2017 - 2019</h6>
                <p></p>
                <hr/>
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Software Developer /  Iranian Hosh Afzone </b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i> 2015 - 2017</h6>
                <p></p><br/>
              </div>
            </div>
      
            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Tabriz Azad University</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2017</h6>
                <p>Master of Computer engineering</p>
                <hr/>
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Tabriz Azad University</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2008 - 2012</h6>
                <p>Bachelor of Computer engineering</p><br/>
              </div>
            </div>
      
          
          </div>
          
        
        </div>
        
        
      </div>
      
      <footer class="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
        
      </footer>

      
      
      
      </body>
    )
  }
}