import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

function SocialMediaHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity : 1 }}
        config={{ delay: 2500, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="SocialMedia">
                <h2>Socialise</h2>
              </div>
              <div class="Hex" id="SocialMediaImage">
                <h2>Socialise</h2>
              </div>
            </div>
        </div>
        )}
      </Spring>     
    )}

export default SocialMediaHex