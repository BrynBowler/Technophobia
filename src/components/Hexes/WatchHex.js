import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

function WatchHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity : 1 }}
        config={{ delay: 1500, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="Watch">
                <h2>Watch</h2>
              </div>
              <div class="Hex" id="WatchImage">
                <h2>Watch</h2>
              </div>
            </div>
          </div>
        )}
      </Spring>     
    )}

export default WatchHex