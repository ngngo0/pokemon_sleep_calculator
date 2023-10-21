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
/* import transparent from '../images/trans150.png' */

/* import IngredientBox from '../components/PokemonIngredient' */

import '../styles/CurrysAndStews.css';

import { useState } from "react";

export default function CurrysAndStews(){
   const [beanCount, setBeanCount] = useState(0);
   const [appleCount, setAppleCount] = useState(0);
   const [eggCount, setEggCount] = useState(0);
   const [herbCount, setHerbCount] = useState(0);
   const [soybeanCount, setSoybeanCount] = useState(0);
   const [honeyCount, setHoneyCount] = useState(0);
   const [leekCount, setLeekCount] = useState(0);
   const [milkCount, setMilkCount] = useState(0);
   const [oilCount, setOilCount] = useState(0);
   const [tailCount, setTailCount] = useState(0);
   const [tomatoCount, setTomatoCount] = useState(0);
   const [potatoCount, setPotatoCount] = useState(0);
   const [cacaoCount, setCacaoCount] = useState(0);
   const [mushroomCount, setMushroomCount] = useState(0);
   const [gingerCount, setGingerCount] = useState(0);


   const GalleryArr = [
      { src: bean, count: beanCount, setCount: setBeanCount },
      { src: apple, count: appleCount, setCount: setAppleCount },
      { src: egg, count: eggCount, setCount: setEggCount },
      { src: herb, count: herbCount, setCount: setHerbCount },
      { src: soybean, count: soybeanCount, setCount: setSoybeanCount },
      { src: honey, count: honeyCount, setCount: setHoneyCount },
      { src: leek, count: leekCount, setCount: setLeekCount },
      { src: milk, count: milkCount, setCount: setMilkCount },
      { src: oil, count: oilCount, setCount: setOilCount },
      { src: tail, count: tailCount, setCount: setTailCount },
      { src: tomato, count: tomatoCount, setCount: setTomatoCount },
      { src: potato, count: potatoCount, setCount: setPotatoCount },
      { src: cacao, count: cacaoCount, setCount: setCacaoCount },
      { src: mushroom, count: mushroomCount, setCount: setMushroomCount },
      { src: ginger, count: gingerCount, setCount: setGingerCount },
    ];
    
   
   function ingredientClickedOn(event, setFunction) {
      if (event.nativeEvent.button === 0) {
         setFunction(prev => prev+1);
      }
   }

   function leftClick(event, setFunction) {
      event.preventDefault();
      setFunction(prev => {
         if (prev-1 >= 0) {
            return prev-1;
         }
         else return 0;
      });
   }

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
   <div className="pokemonIngredients-container">
      <div id="ingredient-list">
         <div>
            {GalleryArr.map(
               (imgSrc, index) => (
                  <span className="ingredient-tile" onContextMenu={e => leftClick(e, imgSrc.setCount)} onClick={e => ingredientClickedOn(e, imgSrc.setCount)} key={index} style={{position: 'relative'}}>
                     <img src={imgSrc.src} alt={index}/>
                     <div className="counterCircle" style={{position: 'absolute', right: '20px', bottom: '10px'}}>{imgSrc.count}</div>
                  </span>
               )
            )}
         </div>
      </div>
      <div id="possible-dishes">
         <div id="possible-dishes-inner">
            <div>
               <h1>Possible Dishes to Create with Current Ingredients</h1>
               <h1>You could make this if you add x many more of this ingredient</h1>
            </div>
         </div>
      </div>
   </div>
    )
}