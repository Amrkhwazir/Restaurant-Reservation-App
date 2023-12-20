import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import styled from 'styled-components'
import Featured from '../component/Featured';
import PropertyList from '../component/PropertyList';
import FeaturedProperties from '../component/FeaturedProperties';
import MailList from '../component/MailList';
import Footer from '../component/Footer';
  
const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  `;

  const HomeH1 = styled.h1`
  width: 1024px;
  font-size: 20px;
  `;

function Home() {
  return (
    <div>
        <Navbar />  
        <Header />
        <HomeContainer>
          <Featured />
          <HomeH1>Browse by property type</HomeH1>
          <PropertyList/>
          <HomeH1>Homes guests love</HomeH1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </HomeContainer>
    </div>
        
  )
}

export default Home