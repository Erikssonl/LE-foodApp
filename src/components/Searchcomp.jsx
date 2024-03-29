import { useRef, useState, useEffect } from 'react'
import Foodlist from './Foodlist'

const Searchcomp = () => {
    const [foodListData, setFoodListData] = useState([])
    const [searchData, setSearchData] = useState('')
    const [searchAttempted, setSearchAttempted] = useState(false); 

    const searchInput = useRef()

    useEffect(() => {
        if (searchData.trim()) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`)
                .then((response) => response.json())
                .then((data) =>{
                    setFoodListData(data.meals || []);
                    setSearchAttempted(true); 
                })
                .catch((error) => {
                    console.error("Fetching error:", error);
                    setFoodListData([]);
                    setSearchAttempted(true); 
                })
        }
    }, [searchData])

    const searchHandler = () => {
        setSearchData(searchInput.current.value);
    }

  return (
    <>
        <div>
            <input type="text" ref={searchInput} placeholder="What meal or food-category ar you looking for? "/>
            <button onClick={searchHandler}>Search</button>
        </div>
        <div>
            <Foodlist foodListData={foodListData} searchAttempted={searchAttempted}/>
        </div>
    </>
  )
}
export default Searchcomp