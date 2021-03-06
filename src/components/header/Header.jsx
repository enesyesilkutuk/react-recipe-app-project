import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyles";

const Header = ({ setQuery, getData, mealTypes, setMeal, query }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        query={query}
      />
    </HeaderContainer>
  );
};

export default Header;
