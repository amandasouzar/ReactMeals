import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from './MealList.module.css'

const MealList = (props) => {
    
    const OnManageList = (data => 
        props.OnManageMeals(data))

    return <div className={styles.meals}>
        <Card>
            <ul>
                {props.AllMeals.map((meal) => { return <MealItem OnManageList={OnManageList} 
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    price={meal.price}
                    description={meal.description}></MealItem>
                })}
            </ul>
        </Card>
        </div>
}

export default MealList