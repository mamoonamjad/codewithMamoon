import React,{useEffect,useState} from "react";
import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "../BaseUrl/axios";

const AvailableMeals = () => {
const[meals,setMeals] = useState([]);
const [isLoading,setIsloading] = useState(true)
const [error,setError] = useState(false)

  useEffect(()=>{
    const fetchMeals = async()=>{
      await axios.get('/meals.json')
      .then((res)=>{
        const mealList =[];
        for(const key in res.data){
          mealList.push({
            id:res.data.key,
            description:res.data[key].description,
            name:res.data[key].name ,
            price:res.data[key].price
          })
        }
        console.log(mealList)
        setMeals(mealList);
        setIsloading(false)
      }).catch(()=>{
        setError(true);
        setIsloading(false);
      }
      )
    }
    fetchMeals();

  },[])

  if(isLoading){
    return <section className={classes.mealsLoading}>
    {isLoading && <p>Loading...</p>}
  </section>
  }
  if(error){
    return <section className={classes.error}>
    <p>Error Encountered... <br />Please Reload</p>
  </section>
  }

  const homeMealList = meals.map(meal=>
        <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
        />)
    return (  
        <>
            <section className={classes.meals}>
                <Card>
                <ul>
                    {homeMealList}
                </ul>
                </Card>
                
            </section>
        </>
    );
}
 
export default AvailableMeals;