import React from 'react';
import Header from './Header.js';
import "./style.css"

function Economy(){
    return(
        <div className = "list-group">
            <Header/>
            <div className = "list-group-item">
                <img src="https://picsum.photos/200/300.jpg" alt=""/>
                <label className ="whatif" for ="whatif">What if?!</label>
                
            </div>

            <div className = "list-group-item">
                <img src="https://picsum.photos/seed/picsum/200/300 " alt=""/>
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
                <img src="../images/sea.jpg" alt=""/>
                <label className ="whatif" for ="whatif">What if?!</label>           
            </div>
        </div>        
    )
};
export default Economy;                                         