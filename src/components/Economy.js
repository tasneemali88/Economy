import React from 'react';
import Header from './Header.js';
import "./style.css"
import sea from "../images/sea.jpg"
import space from "../images/space.jpeg"
function Economy(){
    return( 
        <div className = "list-group">
            <Header/>
            <div className = "list-group-item">
                <img src={sea}  alt=""/>
                <label className ="whatif" for ="whatif">What if?!</label>
                
            </div>

            <div className = "list-group-item">
                <img src={space} alt=""/>
                <label className ="whatif" for ="whatif">What if?!</label> 
               
            </div>

            <div className = "list-group-item">
                <img src="https://picsum.photos/200/300.jpg" alt=""/>
                <label className ="whatif"  for ="whatif">What if?!</label>  
               
            </div>

            <div className = "list-group-item">
                    <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt=""/>
                <label className ="whatif"for ="whatif">What if?!</label>
                
            </div>
            
            <div className = "list-group-item">
                <img src="https://picsum.photos/200/300/?blur=2" alt=""/>
                <label className ="whatif" for ="whatif">What if?!</label>           
            </div>
        </div>        
    )
};
export default Economy;