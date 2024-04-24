import '../styles/Fooddetailscomp-style.css'
import {useEffect, useState } from 'react'

const FoodDetailsComp = ({ foodId, setFoodId, setdetailmodalOpen }) => {
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
        setdetailmodalOpen(false);
    }

  return (
    <>
        <div className='modal-container'>
            {detailsData.map((details, index) =>
            <div className='content-wrap' key={index}>
                <div className='detail-head'>
                    <div className='detail-title'>
                        <h1>{details.strMeal}</h1>
                        <h2>{details.strCategory}</h2>
                    </div>
                    <button onClick={CloseBtnHandler} className='detailBtn'>&times; Close</button>
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
                        {details.strInstructions.split('\n\r').map((instr, idx) => (
                            <p style={{ padding: '5px' }} key={idx}>{instr}</p>
                        ))}
                    </div>
                    {/* <div className='iframe-wrap'>
                        <iframe src={`https://www.youtube.com/embed/${details.strYoutube.substring(details.strYoutube.indexOf("=") + 1)}`} frameborder="0"></iframe>
                    </div> */}
                </div>
            </div>
            )}
        </div>
    </>
  )
}
export default FoodDetailsComp