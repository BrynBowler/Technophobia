import React from 'react';
import ReactDOM from "react-dom";
import { Spring } from 'react-spring/renderprops';

class ShopPage extends React.Component {
  render(){
    return (
      <Spring
        from={{ marginTop: -500 }}
        to={{ marginTop: 0 }}
        config={{ duration: 800 }}
      > 
        {props => (
          <div style={props}>
            <div>
                <h1>Shop</h1>
            </div>
          </div>
        )}
      </Spring>
    )}
  }
export default ShopPage