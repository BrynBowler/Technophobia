import React from 'react';
import ReactDOM from "react-dom";
import './Hexes.css';

import TechnophobiaHex from './TechnophobiaHex.js'
import ReadHex from './ReadHex.js'
import SocialMediaHex from './SocialMediaHex.js'
import WatchHex from './WatchHex.js'
import LearnHex from './LearnHex.js'
import PlayHex from './PlayHex.js'
import ShopHex from './ShopHex.js'


function Hexes(){
    return (
            <div id="Hexes">
              <TechnophobiaHex />
              <ReadHex />
              <SocialMediaHex />
              <WatchHex />
              <LearnHex />
              <PlayHex />
              <ShopHex />
            </div>
            )
          }

export default Hexes