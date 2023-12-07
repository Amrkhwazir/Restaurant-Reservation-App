import React from 'react'
import styled from 'styled-components'

const FProperty = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;
const FPItems = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const FPropertyImg = styled.img`
  width: 100%;
`;
const FPropertyName = styled.span`
  font-weight: bold;
`;
const FPropertyCity = styled.span`
  font-weight: 300;
`;
const FPropertyPrice = styled.span`
  font-weight: 500;
`;
const FPropertyRating = styled.div``;
const FPropertyButton = styled.button`
  border: none;
  background-color: #003580;
  color: white;
  padding: 3px;
  margin-right: 10px;
  font-weight: bold;
`;
const FPropertyReview = styled.span`
  font-size: 14px;
`;

const FeaturedProperties = () => {
  return (
    <FProperty>
      <FPItems>
        <FPropertyImg src='https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <FPropertyName>Aparthotel Stare Miasto</FPropertyName>
        <FPropertyCity>Madrid</FPropertyCity>
        <FPropertyPrice>Starting from $100</FPropertyPrice>
        <FPropertyRating>
          <FPropertyButton>8.9</FPropertyButton>
          <FPropertyReview>Excellent</FPropertyReview>
        </FPropertyRating>
      </FPItems>
      <FPItems>
        <FPropertyImg src='https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <FPropertyName>Aparthotel Stare Miasto</FPropertyName>
        <FPropertyCity>Madrid</FPropertyCity>
        <FPropertyPrice>Starting from $100</FPropertyPrice>
        <FPropertyRating>
          <FPropertyButton>8.9</FPropertyButton>
          <FPropertyReview>Excellent</FPropertyReview>
        </FPropertyRating>
      </FPItems>
      <FPItems>
        <FPropertyImg src='https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <FPropertyName>Aparthotel Stare Miasto</FPropertyName>
        <FPropertyCity>Madrid</FPropertyCity>
        <FPropertyPrice>Starting from $100</FPropertyPrice>
        <FPropertyRating>
          <FPropertyButton>8.9</FPropertyButton>
          <FPropertyReview>Excellent</FPropertyReview>
        </FPropertyRating>
      </FPItems>
      <FPItems>
        <FPropertyImg src='https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800' />
        <FPropertyName>Aparthotel Stare Miasto</FPropertyName>
        <FPropertyCity>Madrid</FPropertyCity>
        <FPropertyPrice>Starting from $100</FPropertyPrice>
        <FPropertyRating>
          <FPropertyButton>8.9</FPropertyButton>
          <FPropertyReview>Excellent</FPropertyReview>
        </FPropertyRating>
      </FPItems>
    </FProperty>
  )
}

export default FeaturedProperties