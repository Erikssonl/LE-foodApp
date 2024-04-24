import SearchComp from "./SearchComp"
import '../styles/Maincomp-style.css'
import foodimg from '../img/food-img.png'

const MainComp = ({ setFoodListData, setSearchAttempted }) => {


  return (
    <>
      <div className="shape1-wrap">
        <div className="shape1"></div>
      </div>

      <div className="main-content">
        <div className="content">
            <div className="search-div">
              <h1>Epic Eats</h1>
              <SearchComp setFoodListData={setFoodListData} setSearchAttempted={setSearchAttempted} />
            </div>
            <img className="food-img" src={foodimg} alt="" />
        </div>
      </div>
      
      <div className="shape2-wrap">
        <div className="shape2"></div>
      </div>
    </>
  )
}
export default MainComp