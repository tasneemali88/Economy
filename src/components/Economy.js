import React from 'react';
import Header from './Header.js';
import "./style.css";
import port from "../images/port.jpg";
import tax from "../images/tax.jpg";
import tower from "../images/tower.jpg";
import trade from "../images/trade.jpg";
import farm from "../images/farm.jpg";
import factory from "../images/factory.jpg";


function Economy(){
    return( 
        <div className = "list-group">
            <Header/>
            <div className = "list-group-item">
                <img className ="img2" src={trade}  alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            </div>

            <div className = "list-group-item">
                <img className ="img3" src={factory} alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
               
            </div>

            <div className = "list-group-item">
                <img className ="img4" src={tower} alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
               
            </div>

            <div className = "list-group-item">
                <img className ="img5" src={tax} alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
                
            </div>
            
            <div className = "list-group-item">
                <img className ="img6" src={farm} alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            </div>

            <div className = "list-group-item">
                <img className ="img7" src={port} alt=""/>
                <h1 className="whatif">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            </div>
        </div>        
    )
};
export default Economy;