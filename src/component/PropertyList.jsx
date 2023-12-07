import React from 'react'
import styled from 'styled-components'

const Property= styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
`;
const PropertyListItems= styled.div`
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`;
const PropertyListImg= styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;
const PropertyListTitles= styled.div``;
const PropertyListH1= styled.h1`
   margin-top: 0px;
    margin-bottom: 0px;
    font-size: 18px;
`;
const PropertyListH2= styled.h2`
   margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 500;
`;
const PropertyList = () => {
  return (
    <Property>
        <PropertyListItems>
            <PropertyListImg src='https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=800' />
            <PropertyListTitles>
                <PropertyListH1>Villas</PropertyListH1>
                <PropertyListH2>123 Villas</PropertyListH2>
            </PropertyListTitles>
        </PropertyListItems>
        <PropertyListItems>
            <PropertyListImg src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800' />
            <PropertyListTitles>
                <PropertyListH1>Apartment</PropertyListH1>
                <PropertyListH2>123 Apartment</PropertyListH2>
            </PropertyListTitles>
        </PropertyListItems>
        <PropertyListItems>
            <PropertyListImg src='https://images.pexels.com/photos/774042/pexels-photo-774042.jpeg?auto=compress&cs=tinysrgb&w=800' />
            <PropertyListTitles>
                <PropertyListH1>Hotels</PropertyListH1>
                <PropertyListH2>123 Hotels</PropertyListH2>
            </PropertyListTitles>
        </PropertyListItems>
        <PropertyListItems>
            <PropertyListImg src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800' />
            <PropertyListTitles>
                <PropertyListH1>Resorts</PropertyListH1>
                <PropertyListH2>123 Resorts</PropertyListH2>
            </PropertyListTitles>
        </PropertyListItems>
        <PropertyListItems>
            <PropertyListImg src='https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&w=800' />
            <PropertyListTitles>
                <PropertyListH1>Cabin</PropertyListH1>
                <PropertyListH2>123 Cabin</PropertyListH2>
            </PropertyListTitles>
        </PropertyListItems>
    </Property>
  )
}

export default PropertyList