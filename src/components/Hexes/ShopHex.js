import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

function ShopHex(){
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity : 1 }}
        config={{ delay: 100, duration: 800 }}
      >
        {props => (
          <div style={props}>
            <div id="HexBorder">
              <div class="Hex" id="Shop">
                  <h2>Shop</h2>
              </div>
              <div class="Hex" id="ShopImage">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        )}
      </Spring>     
    )}
export default ShopHex
            