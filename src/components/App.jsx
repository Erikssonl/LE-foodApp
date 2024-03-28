import { useState } from 'react'
import '../styles/App.css'
import Maincomp from './Maincomp'
import Foodlist from './Foodlist';
import FoodDetailscomp from './FoodDetailscomp';

function App() {
  const [foodListData, setFoodListData] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Maincomp setFoodListData={setFoodListData} setSearchAttempted={setSearchAttempted} />
      <FoodDetailscomp />
      <Foodlist foodListData={foodListData} searchAttempted={searchAttempted} setFoodId={setFoodId} />
    </>
  )
}

export default App
