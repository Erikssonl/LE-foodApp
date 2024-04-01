import '../styles/Fooddetailscomp-style.css'
import {useEffect, useState } from 'react'

const Fooddetailscomp = ({ foodId, setFoodId }) => {
    const [detailsData, setDetailsData] = useState([]);

    useEffect(() => {
        if (foodId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
                .then((response) => response.json())
                .then((data) =>{
                    if (data.meals && data.meals.length > 0){
                        const mealDetails = data.meals[0];
                        const ingredients = [];

                        let i = 1;
                        while (true) {
                            const ingredientKey = `strIngredient${i}`;
                            const measureKey = `strMeasure${i}`;
                            const ingredient = mealDetails[ingredientKey];
                            const measure = mealDetails[measureKey];

                            if (!ingredient || ingredient === "null" || !ingredient.trim()) break;


                            if (measure && measure !== "null" && measure.trim()) {
                                ingredients.push(`${ingredient} - ${measure}`);
                            } else {

                                ingredients.push(ingredient);
                            }

                            i++;
                        }
                        setDetailsData([{...mealDetails, ingredients}]);
                    } else {
                        setDetailsData([]);
                    }
                })
                .catch((error) => {
                    console.error("Fetching error:", error);
                    setDetailsData([]);
                })
        }
    }, [foodId])

    const CloseBtnHandler = () => {
        setFoodId([]);
    }

  return (

    <>
        <div>
            {detailsData.map((details, index) =>
            <div className='content-wrap' key={index}>
                <div className='detail-head'>
                    <div className='detail-title'>
                        <h2>{details.strMeal}</h2>
                        <h3>{details.strCategory}</h3>
                    </div>
                    <button onClick={CloseBtnHandler} className='detailBtn'>X Close</button>
                </div>
                <div className='detail-wrap'>
                    <div className='ingredient-wrap'>
                        <h3>Ingredients</h3>
                        <ul>
                            {details.ingredients.map((ingredient, i) => (
                                <li key={i}> {ingredient} </li>
                                ))}

                        </ul>
                    </div>
                        <img className='detail-img' src={details.strMealThumb} alt={details.strMeal}/>
                    <div className='instructions-wrap'>
                        <h3>Instructions</h3>
                        <p>{details.strInstructions}</p>
                    </div>
                    <div>
                        <iframe width="420" height="315" src={`https://www.youtube.com/embed/${details.strYoutube.substring(details.strYoutube.indexOf("=") + 1)}`} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            )}
        </div>
    
    </>
  )
}
export default Fooddetailscomp