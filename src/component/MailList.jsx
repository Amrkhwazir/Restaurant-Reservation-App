import React from 'react'
import styled from 'styled-components'

const Mail = styled.div`
    width: 100%;
    max-width: 1024px;
    margin-top: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
`;
const MailTitle = styled.h1``;
const MailDesc = styled.span``;
const MailInputCont = styled.div``;
const MailInput = styled.input`
    width: 300px;
    height: 20px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    outline: none;
`;
const MailButton = styled.button`
    height: 40px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 0 20px;
    cursor:pointer;
    transition: 1s all ease;

    &:active{
        scale: calc(0.8);
    }
`;

const MailList = () => {
  return (
    <Mail>
        <MailTitle>Save time, save money!</MailTitle>
        <MailDesc>Sign up and we'll send the best deals to you</MailDesc>
        <MailInputCont>
        <MailInput type='text' placeholder='Your Email' />
        <MailButton>Subscribe</MailButton>
        </MailInputCont>
    </Mail>
  )
}

export default MailList