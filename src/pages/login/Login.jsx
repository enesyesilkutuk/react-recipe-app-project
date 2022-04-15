import React from 'react'
import { FormContainer, Header, LoginContainer,StyledButton,StyledForm,StyledImg, StyledInput } from './LoginStyles'
import meal from '../../assets/meal.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
 
  const user = {
    username : "user"
  }
const handleSubmit=(e)=>{
e.preventDefault();
sessionStorage.setItem("user", JSON.stringify(user));
//window.location.href="/home";
navigate("/home");

}

  return (
   <LoginContainer>
<FormContainer>
<StyledImg src={meal} />
<Header> {"<Clarusway/>"}Recipe </Header>

<StyledForm  onSubmit={handleSubmit}  >

<StyledInput autoFocus="on" type="text" placeholder="username" required/>
<StyledInput type="password" placeholder="password" required/>

<StyledButton type="submit">Login</StyledButton>
  
</StyledForm>



</FormContainer>

   </LoginContainer>
  )
}

export default Login