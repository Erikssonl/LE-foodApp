import { useRef, useState, useEffect } from 'react'
import '../styles/Searchcomp-style.css'

const Searchcomp = ({ setFoodListData, setSearchAttempted }) => {
    const [searchData, setSearchData] = useState('')
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
        <div className='search-wrap'>
            <input className='search-input' type="text" ref={searchInput} placeholder="What meal or food-category ar you looking for? "/>
            <button className='search-btn' onClick={searchHandler}>Search</button>
        </div>
    </>
  )
}
export default Searchcomp