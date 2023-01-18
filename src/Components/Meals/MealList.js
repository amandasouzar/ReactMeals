import React, {useState} from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from './MealList.module.css'

const MealList = (props) => {

    const [Meals, SetMeals] = useState([])
    const [IsLoading, SetIsLoading] = useState(false)

    const LoadedMeals = []
  
    const MealsHandler = () => {
        SetIsLoading(true)

        fetch('https://react-meals-5fc2d-default-rtdb.firebaseio.com/meals.json')
        .then(response => {return response.json()})
        .then(data => { for (const id in data) {
            LoadedMeals.push({
            key: id,
            name: data[id].name,
            price: data[id].price,
            description:data[id].description
         })}
        return LoadedMeals
        })
        .then(data => SetMeals(data))
    } 
    
    const OnManageList = (data => 
        props.OnManageMeals(data))

    return <div className={styles.meals}>
        <Card>
            <div className={styles.FetchState}>
            {(Meals.length == 0 && !IsLoading)  && <button className={styles.FetchButton} onClick={MealsHandler}>Acess the Meals list</button>}
            {(IsLoading && Meals.length == 0)  && <h1>We are loading your data!</h1>}
            </div>
            <ul>
                {Meals.map((meal) => { return <MealItem OnManageList={OnManageList} 
                    key={meal.key}
                    id={meal.key}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}></MealItem>
                })}
            </ul>
        </Card>
        </div>
}

export default MealList