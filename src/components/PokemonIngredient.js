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

export default function IngredientBox(){ 
    const GalleryArr= [
        {src:bean}, {src:apple},{src:egg},
        {src:herb},{src:soybean},{src:honey},
        {src:leek},{src:milk},{src:oil},
        {src:tail},{src:tomato},{src:potato},
        {src:cacao},{src:mushroom},{src:ginger}
    ]

    return(
        <div className="pokemonIngredients-container">
            <div>
                {GalleryArr.map(
                    (imgSrc, index) => (
                        <div className="ingredient-tile" key={index} >
                            <img src={imgSrc.src} alt={index}/>
                        </div>
                    )
                )}
            </div>
            <div>
                feaf
            </div>
        </div>
    );
}