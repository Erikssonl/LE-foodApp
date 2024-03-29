import {useEffect, useState } from 'react'

const Fooddetailscomp = ({foodId}) => {
    const [detailsData, setDetailsData] = useState([]);
    const [fetchAttemted, setFetchAttemted] = useState(false)

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
                    setFetchAttemted(true)
                })
                .catch((error) => {
                    console.error("Fetching error:", error);
                    setDetailsData([]);
                })
        }
    }, [foodId])



  return (

    <>
        <div>
            {detailsData?.length > 0 ? (
                detailsData.map((details, index) =>
                <div key={index}>
                    <h2>{details.strMeal}</h2>
                    <h3>{details.strCategory}</h3>
                    <img className='result-img' src={details.strMealThumb} alt={details.strMeal}/>
                    <div>

                        <h3>Ingredients</h3>
                        <ul>
                            {details.ingredients.map((ingredient, i) => (
                                <li key={i}> {ingredient} </li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <h3>Instructions</h3>
                        <p>{details.strInstructions}</p>
                    </div>
                    <div>
                        {details.strYoutube}
                    </div>
                </div>
                )
                ) : (
                    fetchAttemted && <h2>No results found</h2>
                )}
        </div>
    
    </>
  )
}
export default Fooddetailscomp