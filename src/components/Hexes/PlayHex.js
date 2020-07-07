import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

function PlayHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="Play">
                <h2>Play</h2>
              </div>
              <div class="Hex" id="PlayImage">
                <h2>Play</h2>
              </div>
            </div>
          </div>
        )}
      </Spring>     
      )}
export default PlayHex