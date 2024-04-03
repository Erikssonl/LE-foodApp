import '../styles/Foodlistcomp-style.css'

const FoodItemcomp = ({food , index, setFoodId, setdetailmodalOpen}) => {
    const FoodDetailhHandler = () => {
        setFoodId(food.idMeal);
        setdetailmodalOpen(true);
    }

  return (
    <div>
        <div onClick={FoodDetailhHandler} className='result-wrap' key={index}>
            <img className='result-img' src={food.strMealThumb} alt={food.strMeal}/>
            <h2>{food.strMeal}</h2>
            <h3>{food.strCategory}</h3>
        </div>
    </div>
  )
}
export default FoodItemcomp