import React from "react";
import styles from './Header.module.css'
import HeaderButton from "./HeaderButton";
import MealImage from '../Assets/meals.jpeg'

const Header = (props) => {

    return <>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderButton SetModalShow={props.SetModalShow}></HeaderButton>
        </header>
        <div className={styles.MainImage}>
            <img src={MealImage}></img>
        </div>
    </>
}

export default Header