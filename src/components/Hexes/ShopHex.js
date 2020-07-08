import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

import './Hexes.css';

class ShopHex extends React.Component {
  
  render(){
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
              <div onClick={this.props.ShopToggle} class="Hex" id="ShopImage">
                <h2 id="ShopButton">Shop</h2>
              </div>
            </div>
          </div>
        )}
      </Spring>
    )}
  }
export default ShopHex