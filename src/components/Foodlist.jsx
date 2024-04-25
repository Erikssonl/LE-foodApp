import '../styles/FoodListComp-style.css'
import FoodItemComp from './FoodItemComp';

const FoodList = ({foodListData, searchAttempted, setFoodId, setdetailmodalOpen}) => {

    if (!searchAttempted) {
        return null;
    }

    return (
    <div className='foodlist-wrap'>
        <div className="fooddata-wrap">
            {foodListData?.length > 0 ? (
                foodListData.map((food, index) => (
                    <FoodItemComp food={food} index={index} setFoodId={setFoodId} setdetailmodalOpen={setdetailmodalOpen} />
                ))
            ) : (
                searchAttempted && <h2>No results found</h2>
            )}
        </div>
    </div>
    )
}
export default FoodList