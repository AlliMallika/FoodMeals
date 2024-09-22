import React, { useEffect, useState } from 'react'
import './meal.css'

export const Meal = () => {

    const [mealData, setMealData] = useState([]);
    const [area, setArea] = useState(['Indian']);
    const [inputData, setInputData] = useState([])

    useEffect(() => {
      const fetchDataFromAPI = async()=>{
        const api = await 
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        const data = await api.json()
      console.log(data.meals);
      setMealData(data.meals);
      };
      fetchDataFromAPI()  
    }, [area])

  const submitHandler = async (e)=>{
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
    const data = await api.json()

    console.log("Search data:", data.meals)
    setMealData(data.meals);
    setInputData('')
  }
    
  return (
    <>
    <div className='my-3' style={{ width: '1000px', margin: 'auto' }}>
      <div className='mx-auto text-center'>
        <button type="button" 
        onClick={()=>setArea('Indian')}
         className="btn btn-outline-primary mx-3">Indian</button>
        <button type="button"
         onClick={()=>setArea('American')} 
         className="btn btn-outline-secondary mx-3">American</button>
        <button type="button"
         onClick={()=>setArea('Canadian')}
          className="btn btn-outline-success mx-3">Canadian</button>
        <button type="button" 
         onClick={()=>setArea('Thai')}
         className="btn btn-outline-danger mx-3">Thai</button>
        <button type="button"
         onClick={()=>setArea('Russian')}
          className="btn btn-outline-warning mx-3">Russian</button>
        <button type="button"
         onClick={()=>setArea('Italian')}
          className="btn btn-outline-info mx-3">Italian</button>
      </div>
    </div>
    
    <form onSubmit={submitHandler} className='mx-auto text-center my-3'>
      <input onChange={(e)=>setInputData(e.target.value)} type="text" /><i class="bi bi-search"></i>
    </form>

    <div
       style={{
         display: 'flex',
         justifyContent: 'center',
         gap: '5em',
         borderRadius: '10px',
         alignItems: 'center',
         flexWrap: 'wrap'
       }}
    >{mealData.map((data)=>(
      <div key={data.idMeal}
       style={{textAlign: 'center'}}
      >
        <div>
           <img src={data.strMealThumb} alt=''
            style={{
              width:'220px',
              borderRadius: '10px',
              border: '2px solid blue'
              }}/>
        </div>
        <h4>{data.strMeal}</h4>
      </div>
      ))}
      </div>
      </>
  )
}
