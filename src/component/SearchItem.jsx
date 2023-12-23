import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const ItemsContainer = styled.div`
    border: 1px solid black;
    height: 250px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 5px;
`;
const ItemsWrapperImage = styled.div`
    width: 30%;
    border-radius: 5px;
    padding: 5px;
`;
const ItemsImage = styled.img`
    width: 100%;
    height: 100%;
`;
const ItemsWrapper = styled.div`
    width: 45%;
    border-radius: 5px;
    padding: 5px;
`;
const ItemsTitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 20px;
    color: #0071c2;
`;
const ItemsDesc = styled.p`
    margin-top: 4px;
    font-size: 14px;
`;
const ItemsTransport = styled.h5`
    background-color: #0071c2;
    width: 110px;
    font-size: 14px;
    color: white;
    padding: 3px;
    margin-top: 0px;
    border-radius: 5px;
    font-weight: 500;
    margin-bottom: 10px;
`;
const ItemsDetailTitle = styled.h6`
      font-size: 14px;
      margin-top: 0px;
      margin-bottom: 10px;
`;
const ItemsDetailDesc = styled.p`
      font-size: 14px;
      margin-top: 0px;
      color: grey;
`;
const ItemsCancel = styled.p`
    font-size: 14px;
    margin-top: 0px;
    color: green;
    font-weight: 700;
`;
const ItemsBookingDetail = styled.p`
    font-size: 14px;
    margin-top: 0px;
    color: green;
`;

const ItemsWrapperRating = styled.div`
    width: 25%;
    border-radius: 5px;
    padding: 5px;
    `

const ItemsDetails = styled.div`
    height: 50%;
    position: relative;
`;
const ItemsReview = styled.span`
    font-weight: 700;
    font-size: 18px;
`;
const ItemsRating = styled.span`
    position: absolute;
    right: 5px;
    background-color: #003580;
    padding: 5px 6px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    margin-top: 5px;

`;
const ItemsPrice = styled.p`
    text-align: end;
    margin-right: 5px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`;
const ItemsPriceDesc = styled.p`
    color: gray;
    font-size: 14px;
    text-align: end;
    margin-right: 5px;
    margin-top: 0px;
`;
const ItemButton = styled.button`
    width: 100%;
    background-color: #0071c2;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const SearchItem = () => {

    const navigate = useNavigate();

  return (
    <ItemsContainer>
        <ItemsWrapperImage>
            <ItemsImage src='https://th.bing.com/th/id/R.0bd832ffca75f32a132ca5f4451ad62d?rik=Djm%2bpC5hJ00yGg&pid=ImgRaw&r=0' />
        </ItemsWrapperImage>
        <ItemsWrapper>
            <ItemsTitle>Tower Street Apartments</ItemsTitle>
            <ItemsDesc>500m from center</ItemsDesc>
            <ItemsTransport>Free Airport Taxi</ItemsTransport>
            <ItemsDetailTitle>Studio Apartment with AIr conditioning</ItemsDetailTitle>
            <ItemsDetailDesc>Entire studio . 1 bathroom . 21m 1 full bed</ItemsDetailDesc>
            <ItemsCancel>Free Cancellation</ItemsCancel>
            <ItemsBookingDetail>You can cancel later, so lock in this great price today!</ItemsBookingDetail>
        </ItemsWrapper>
        <ItemsWrapperRating>
            <ItemsDetails>
                <ItemsReview>Excellent</ItemsReview>
                <ItemsRating>8.7</ItemsRating>
            </ItemsDetails>
            <ItemsDetails>
                <ItemsPrice>$112</ItemsPrice>
                <ItemsPriceDesc> Include Taxes and Fees</ItemsPriceDesc>
                <ItemButton onClick={()=> navigate("/hotels/12344")}>See Availability</ItemButton>
            </ItemsDetails>
        </ItemsWrapperRating>
    </ItemsContainer>
  )
}

export default SearchItem
