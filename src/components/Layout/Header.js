import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return <React.Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.showCartHandler}/>
      </header>
      <div className={classes['main-image']}>
          <img src={meals} alt='meals'/>
      </div>
  </React.Fragment>;
};

export default Header;
