import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignContainer = styled.div`
width: 100%;
height: 100vh;
background-color: white;
position: relative;
`;

const Image = styled.div`
 background-image: url('https://th.bing.com/th/id/R.1bc84643137d3e49a77c6e48fb37f2c3?rik=NsDBNLS7vFesfg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1846097.jpg&ehk=fORGA%2bF%2bv0%2f3cdg1wyj13w%2bmKjd3OR%2bomtwKmABtVV8%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
  background-position: center;
  height: 100vh;
  opacity: 0.3;
`;

const SignWrapper = styled.div`
width: 350px;
height: 430px;
z-index: 9999;
position: absolute;
top: 70px;
left: 420px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: white;
box-shadow: 1px 1px 5px 1px gray;
`;


const SignTitle = styled.h2`
    font-size: 22px;
    margin-bottom: 0px;
`;
const SignInput = styled.input`
    width: 250px;
    padding: 10px;
    border: 1.5px solid #003580;
    border-radius: 5px;
    outline: none;
`;
const SignPara = styled.p`
    color: gray;
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 0px;
`;
const SignButton = styled.button`
    width: 150px;
    padding: 7px;
    border-radius: 5px;
    border: none;
    background-color: #003580;
    color: white;
    cursor: pointer;
`;

const Signin = () => {

    const navigate = useNavigate();

  return (
   <SignContainer>
        <Image></Image>
        <SignWrapper>
            <SignTitle>
                SIGN IN
            </SignTitle>
            <SignPara>Enjoy Your Journey</SignPara>
            <SignInput placeholder='Enter Your Email' />
            <SignInput placeholder='Enter Your Password'/>
            <SignPara>Forgot Password</SignPara>
            <SignButton>Sign In</SignButton>
            <SignButton onClick={()=> navigate("/signup")}>Register</SignButton>
        </SignWrapper>
   </SignContainer>
  )
}

export default Signin