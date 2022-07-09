import React, { useRef } from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const Form = ({ setQuery, getData, mealTypes, setMeal, query }) => {

  const handleSubmit = e => {
    e.preventDefault();
    getData();
    setTimeout(() => {
    setQuery("");
    }, 1500);
    inputRef.current.focus();
  }

  const inputRef = useRef();
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput autoFocus="on" onChange={(e) => setQuery(e.target.value)} type="text" value={query} ref={inputRef} placeholder='Search'/>
      <Button type='submit'>Search</Button>
      <Select onChange={(e) => setMeal(e.target.value)} name="mealTypes" id="mealTypes">
        {
          mealTypes.map((item, index) => 
          <option key={index} value={item.toLowerCase()}>{item}</option>
          )
        }
      </Select>
    </FormContainer>
  )
}

export default Form