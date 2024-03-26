const Foodlist = ({foodListData, searchAttempted}) => {
    return (
        <div>
            {foodListData?.length > 0 ? (
                foodListData.map((food, index) => (
                    <div key={index}>
                        <h3>{food.strMeal}</h3>
                        <p>{food.strCategory}</p>
                        <img src={food.strMealThumb} alt={food.strMeal}/>
                    </div>
                ))
            ) : (
                searchAttempted && <p>No results found</p>
            )}
        </div>
    )
}
export default Foodlist