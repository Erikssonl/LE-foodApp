import { useState } from 'react'
import '../styles/App.css'
import Maincomp from './Maincomp'
import Foodlist from './Foodlist';
import FoodDetailscomp from './FoodDetailscomp';


function App() {
  const [foodListData, setFoodListData] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [foodId, setFoodId] = useState("");
  const [detailmodalOpen, setdetailmodalOpen] = useState(false);

  return (
    <>
      <Maincomp setFoodListData={setFoodListData} setSearchAttempted={setSearchAttempted} />
      {detailmodalOpen &&(
        <FoodDetailscomp foodId={foodId} setFoodId={setFoodId} setdetailmodalOpen={setdetailmodalOpen}/>
      )}
      <Foodlist foodListData={foodListData} searchAttempted={searchAttempted} setFoodId={setFoodId} setdetailmodalOpen={setdetailmodalOpen} />
    </>
  )
}

export default App
