import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";

const APP_KEY = "5423c197bcaf8e1b7d6422ac871934f9";
const APP_ID = "833dbd9d";

const Home = () => {

  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Teatime", "Snack"];
  
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
    const result = await axios.get(url);
    setFood(result.data.hits);
    console.log(food);
    }
    else {
      alert("Please fill in the form");
    }
  }
  return (
    <div>
    <Header  setQuery={setQuery}
    getData={getData}
    mealTypes={mealTypes}
    setMeal={setMeal}
    
    />
    
    {food ? (
    <MainContainer>
    {food.map((liste,index)=>(
      <RecipeCardComp key={index} recipe1={liste.recipe}/>
    ))}
    
    </MainContainer>
    
    ):<ImgDiv>
    <HomeImg src={homeSvg}/>
    </ImgDiv>}
    
    
    
    
        </div>
    
  );
  }

export default Home;
