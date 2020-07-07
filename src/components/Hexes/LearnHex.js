import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

function LearnHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity : 1 }}
        config={{ delay: 1000, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="Learn">
                <h2>Learn</h2>
              </div>
              <div class="Hex" id="LearnImage">
                <h2>Learn</h2>
              </div>
            </div>
            </div>
        )}
      </Spring>     
      )}

export default LearnHex