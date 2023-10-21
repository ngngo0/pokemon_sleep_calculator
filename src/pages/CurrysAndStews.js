import React from "react";
import bean from '../images/beansausage.jpg'
import apple from '../images/fancyapple.png'
import egg from '../images/fancyegg.png'
import herb from '../images/fieryherb.png'
import soybean from '../images/greengrasssoybeans.png'
import honey from '../images/honey.png'
import leek from '../images/largeleek.png'
import milk from '../images/moomoomilk.png'
import oil from '../images/pureoil.png'
import tail from '../images/slowpoketail.png'
import tomato from '../images/snoozytomato.png'
import potato from '../images/softpotato.png'
import cacao from '../images/soothingcacao.png'
import mushroom from '../images/tastymushroom.png'
import ginger from '../images/warmingginger.png'
import transparent from '../images/trans150.png'

import IngredientBox from '../components/PokemonIngredient'

export default function CurrysAndStews(){

     const GalleryArr= [{src:bean}, {src:apple},{src:egg},{src:herb},{src:soybean},{src:honey},{src:leek},
      {src:milk},{src:oil},{src:tail},{src:tomato},{src:potato},{src:cacao},{src:mushroom},{src:ginger}];
    return (
   /*<div id= "GalleryHolder">
      <h1>Curry </h1>
      <div className="gridContainer">

         {GalleryArr.map(
            (imgSrc, index) => (
            <>
               <img className="tiles" src={imgSrc.src} key={index} alt={index}/>

            </>
            )
         )}
      </div>
      <div className="gridContainerOver">
         {GalleryArr.map(
            (imgSrc, index) => (
            <>
               <img className="down" src={transparent} key={index} alt={index}/>
               <img className="up" src={transparent} key={index} alt={index}/>
            </>
            )
         )}
      </div>
    </div>
   */
   <div className="CurrysAndStew">
     <IngredientBox/>
   </div>
    )
}