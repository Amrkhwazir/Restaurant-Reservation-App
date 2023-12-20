import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.div`
    width: 100%;
    max-width: 1024px;
    font-size: 12px;
`;
const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;
const FooterList = styled.ul``;
const FooterListItems = styled.li`
    list-style-type: none;
    color: #003580;
    margin-top: 10px;
    font-weight: 500;
`;

const FooterText = styled.p`
    color: #003580;
    text-align: center;
    font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterCont>
        <FooterWrapper>
        <FooterList>
            <FooterListItems>Countries</FooterListItems>
            <FooterListItems>Regions</FooterListItems>
            <FooterListItems>Cities</FooterListItems>
            <FooterListItems>Districts</FooterListItems>
            <FooterListItems>Airports</FooterListItems>
            <FooterListItems>Hotels</FooterListItems>
        </FooterList>
        <FooterList>
            <FooterListItems>Countries</FooterListItems>
            <FooterListItems>Regions</FooterListItems>
            <FooterListItems>Cities</FooterListItems>
            <FooterListItems>Districts</FooterListItems>
            <FooterListItems>Airports</FooterListItems>
            <FooterListItems>Hotels</FooterListItems>
        </FooterList>
        <FooterList>
            <FooterListItems>Countries</FooterListItems>
            <FooterListItems>Regions</FooterListItems>
            <FooterListItems>Cities</FooterListItems>
            <FooterListItems>Districts</FooterListItems>
            <FooterListItems>Airports</FooterListItems>
            <FooterListItems>Hotels</FooterListItems>
        </FooterList>
        <FooterList>
            <FooterListItems>Countries</FooterListItems>
            <FooterListItems>Regions</FooterListItems>
            <FooterListItems>Cities</FooterListItems>
            <FooterListItems>Districts</FooterListItems>
            <FooterListItems>Airports</FooterListItems>
            <FooterListItems>Hotels</FooterListItems>
        </FooterList>
        <FooterList>
            <FooterListItems>Countries</FooterListItems>
            <FooterListItems>Regions</FooterListItems>
            <FooterListItems>Cities</FooterListItems>
            <FooterListItems>Districts</FooterListItems>
            <FooterListItems>Airports</FooterListItems>
            <FooterListItems>Hotels</FooterListItems>
        </FooterList>
        </FooterWrapper>
        <FooterText>Copyright 2023 Ticketbooking App </FooterText>
    </FooterCont>
  )
}

export default Footer