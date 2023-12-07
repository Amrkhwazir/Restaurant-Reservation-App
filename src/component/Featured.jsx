import React from 'react'
import styled from 'styled-components'

const FeaturedContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    z-index: 1;
    `;
const FeaturedItem = styled.div`
    
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    color: white;
    cursor: pointer;
`;
const FeaturedImage = styled.img`
    width: 100%;
    object-fit: cover;
`;
const FeaturedTitle = styled.div`
position: absolute;
bottom: 10px;
left: 10px;
`;
const FeaturedH1 = styled.h1`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 22px;
`;
const FeaturedH2 = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 18px;
`;

const Featured = () => {
  return (
    <FeaturedContainer>
        <FeaturedItem>
            <FeaturedImage src='https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <FeaturedTitle>
                <FeaturedH1>Dublin</FeaturedH1>
                <FeaturedH2>123 properties</FeaturedH2>
            </FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedImage src='https://images.pexels.com/photos/5281394/pexels-photo-5281394.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <FeaturedTitle>
                <FeaturedH1>Dublin</FeaturedH1>
                <FeaturedH2>123 properties</FeaturedH2>
            </FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedImage src='https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <FeaturedTitle>
                <FeaturedH1>Dublin</FeaturedH1>
                <FeaturedH2>123 properties</FeaturedH2>
            </FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedImage src='https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <FeaturedTitle>
                <FeaturedH1>Dublin</FeaturedH1>
                <FeaturedH2>123 properties</FeaturedH2>
            </FeaturedTitle>
        </FeaturedItem>
    </FeaturedContainer>
  )
}

export default Featured