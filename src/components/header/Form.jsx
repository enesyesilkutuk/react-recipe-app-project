
import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {

  const handleSubmit = e => {
    e.preventDefault();
    getData();
  }
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput autoFocus="on" onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search'/>
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