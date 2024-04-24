import { useState } from 'react'
import '../styles/App.css'
import MainComp from './MainComp'
import FoodList from './FoodList';
import FoodDetailsComp from './FoodDetailsComp';


function App() {
  const [foodListData, setFoodListData] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [foodId, setFoodId] = useState("");
  const [detailmodalOpen, setdetailmodalOpen] = useState(false);

  return (
    <>
      <MainComp setFoodListData={setFoodListData} setSearchAttempted={setSearchAttempted} />
      {detailmodalOpen &&(
        <FoodDetailsComp foodId={foodId} setFoodId={setFoodId} setdetailmodalOpen={setdetailmodalOpen}/>
      )}
      <FoodList foodListData={foodListData} searchAttempted={searchAttempted} setFoodId={setFoodId} setdetailmodalOpen={setdetailmodalOpen} />
    </>
  )
}

export default App
