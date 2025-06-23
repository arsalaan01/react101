import axios from 'axios';
import { useState, useEffect } from 'react';
import '../mealstyle.css';

const Meals = () => {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) => {
            console.log(res.data.meals);
           setItems(res.data.meals);
        
        }).catch((err) => {
            console.error("Error fetching meals:", err);
        });
  },[]);

  const itemsList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <p>{strMeal}</p>
        <p>{idMeal}</p>
    </section>
  })
  console.log(itemsList);
  
  
  return (
    <div className="items-container">
        {itemsList}
    </div>
  )
}

export default Meals