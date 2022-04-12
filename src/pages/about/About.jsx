import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>AshleyMiller </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Enes</h2>
        <h3>I'm currently a Full-Stack Developer trainee at Clarusway.</h3>
        <h4>
          
          I've been familiar with Python, HTML-CSS, JavaScript and React.Js so far and struggling diligently to be a Full-Stack Developer.
        </h4>
        <h2>
          <a href="mailto:enesyesilkutuk@gmail.com">Send email</a> :
          enesyesilkutuk@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;