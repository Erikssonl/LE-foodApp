import { useState } from 'react'
import '../styles/App.css'
import Maincomp from './Maincomp'
import Foodlist from './Foodlist';

function App() {
  const [foodListData, setFoodListData] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  return (
    <>
      <Maincomp setFoodListData={setFoodListData} setSearchAttempted={setSearchAttempted} />
      <Foodlist foodListData={foodListData} searchAttempted={searchAttempted} />
    </>
  )
}

export default App
