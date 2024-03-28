import '../styles/Foodlistcomp-style.css'

const Foodlist = ({foodListData, searchAttempted}) => {

    if (!searchAttempted) {
        return null;
    }

    return (
    <div className='foodlist-wrap'>

        <div className="fooddata-wrap">
            {foodListData?.length > 0 ? (
                foodListData.map((food, index) => (
                    <div className='result-wrap' key={index}>
                        <img className='result-img' src={food.strMealThumb} alt={food.strMeal}/>
                        <h2>{food.strMeal}</h2>
                        <h3>{food.strCategory}</h3>
                    </div>
                ))
            ) : (
                searchAttempted && <h3>No results found</h3>
            )}
        </div>
    </div>
    )
}
export default Foodlist