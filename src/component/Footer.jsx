import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.div`
    width: 100%;
    max-width: 1024px;
    font-size: 12px;
    border: 1px solid red;
`;
const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;
const FooterList = styled.ul``;
const FooterListItems = styled.li``;

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
    </FooterCont>
  )
}

export default Footer