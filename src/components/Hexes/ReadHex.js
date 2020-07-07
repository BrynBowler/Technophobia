import React from 'react';
import ReactDOM from "react-dom";
import { Transition, Spring } from 'react-spring/renderprops';

import './Hexes.css';
import { animated } from 'react-spring/renderprops-universal';

function ReadHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity : 1 }}
        config={{ delay: 2000, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="Read">
                <h2>Read</h2>
              </div>
              <div class="Hex" id="ReadImage">
                <h2>Read</h2>
              </div>
            </div>
          </div>
        )}
      </Spring>     
    )}

export default ReadHex