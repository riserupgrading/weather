import React from 'react';
import ReactDOM from 'react-dom/client';
import './weathercard.css';
import searchicon from '../assets/search.png';
import clear  from '../assets/clear.png';
import cloud  from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';



 function Weathercard(){
         
         return(

           <div className="weathercard">


               <div className="searchbar">
                   <input type="text" placeholder="Enter City Name"/>
                    <img src={searchicon} alt="" />
                </div> 
             

               <div className="weathericon">

                <img src={clear} alt="" />

               </div>

                <div className="weatherdetails">

                    <div className="temperature"><p>25°c</p></div>
                    <div className="location"> <p>city_name</p> </div>
                    
                </div>


                <div className="weatherstats">

                    <div className="coln">

                      <img src={humidity} alt="" /> 
                      <p>91%</p>
                      <span>Humdity</span>

                      </div>

                    <div className="coln">

                      <img src={wind} alt="" />
                      <p>10 km/h</p>
                      <span>Wind Speed</span>

                    </div>
                       
                </div>
             
           </div>

         );

}

export default Weathercard;