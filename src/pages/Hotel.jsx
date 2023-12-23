import React, { useState } from 'react'
import List from './List'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import styled from 'styled-components'
import {  faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MailList from '../component/MailList'
import Footer from '../component/Footer'


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  `;

const HotelContainer = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
`;

const HotelSlider = styled.div`
position: sticky;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.426);
display: flex;
align-items: center;
`;

const SliderWrapper = styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;
const SlideImg = styled.img`
  width: 80%;
  height: 80vh;
  
`;

const HotelDetail = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 150px;
  display: flex;
`;

const HotelNavigation = styled.div`
width: 60%;
`;
const HotelTitle = styled.h2`
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 0px;
`;
const HotelAddress = styled.p`
  font-size: 15px;
  margin-top: 12px;
  color: gray;
  font-weight: 500;
`;
const HotelOverview = styled.p`
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: #0071c2;
  font-weight: 500;

`;
const HotelTransport = styled.p`
    font-size: 15px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: green;
  font-weight: 500;
`;
const BookNow = styled.div`
width: 40%;
display: flex;
justify-content: end;
padding-top: 15px;
padding-right: 25px;

`;
const BookMeBtn = styled.button`
  height: 40px;
  background-color: #003580;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0px 12px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const HotelImages = styled.div`
    width: 100%;
    max-width: 1024px;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 8px;
`;

const HotelImg = styled.img`
  width: 32%;
  height: 250px;
`;
const HotelDesc = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
`;
const HotelSpecification = styled.div`  
width: 64%;
padding: 0px 4px;
text-align: justify;
word-wrap: normal;
margin-top: 10px;
`;
const HotelExtraDetails = styled.div`
width: 34%;
padding: 0px 24px;
`;

const DetailWrapper = styled.div`
background-color: #ebf6ff;
border-radius: 5px;
padding: 2px 15px;
margin-top: 10px;
`;
const DetailHeading = styled.h4``;
const Detailpara = styled.p`
  color: gray;
`;
const Detailprice = styled.p`
  font-weight: 600;
`;

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos  = [
    {
      src:'https://th.bing.com/th/id/R.d1ad93015e8f92033dc884aa6c12c480?rik=PhQDSTGRxb5ZUw&pid=ImgRaw&r=0'
    },
    {
      src:'https://th.bing.com/th/id/R.b1e1dfafa938387724d864593512d84f?rik=EwfUQD7xDNucEw&pid=ImgRaw&r=0'
    },
    {
      src:'https://th.bing.com/th/id/OIP._UFYXPXPeQjs4Oy4Pq38VAHaFj?rs=1&pid=ImgDetMain'
    },
    {
      src:'https://i2.wp.com/www.remodelingcosts.org/wp-content/uploads/2016/11/spacious-bathroom.jpg'
    },
    {
      src:'https://th.bing.com/th/id/R.33a020e8e5ac0ef66b6dc6e24635642d?rik=eKBzUtIQcD67TA&pid=ImgRaw&r=0&sres=1&sresct=1'
    },
    {
      src:'https://th.bing.com/th/id/OIP.u_051WJmnzt3mOoaBbATmgHaEr?rs=1&pid=ImgDetMain'
    },
    {
      src:'https://th.bing.com/th/id/R.02098baa170857c5ecf4b4db033841cd?rik=cOb1FOge48HdXQ&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2018%2f07%2fstudy-room-ideas.jpg&ehk=PMlclYVIgjwOsKCG6vpnLJtS7FbS0ckx3RPHm%2bfj0a8%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      src:'https://th.bing.com/th/id/R.11b31697093428871cfefd3a9c443700?rik=rqizN11wSdmR7Q&riu=http%3a%2f%2fwww.stevewilliamskitchens.co.uk%2fwp-content%2fuploads%2f2016%2f04%2fexamples-of-balcony-modern-interior-design-10.jpg&ehk=qT%2ftIVMs6sWLP1JgtpgW%2bHRDBP5FhT5sFioAXhlW3Lo%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      src:'https://th.bing.com/th/id/R.0bd832ffca75f32a132ca5f4451ad62d?rik=Djm%2bpC5hJ00yGg&pid=ImgRaw&r=0'
    },
  ];

  const openHandler = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }


  const handleMove = (direction) =>{
    let newSliderNumber;
    if(direction === "l") {
      newSliderNumber = slideNumber === 0 ? 8 : slideNumber - 1
    }else{
      newSliderNumber = slideNumber === 8 ? 0 : slideNumber + 1

    }

    setSlideNumber(newSliderNumber);
  }
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <HomeContainer>
      <HotelContainer>
      {open &&
        <HotelSlider>
        <FontAwesomeIcon icon={faCircleXmark} style={{position: "absolute", top: "20px", right: "20px", fontSize: "30px", color: "lightgrey", cursor: "pointer"}}  onClick={()=> setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft}  style={{margin: "20px", fontSize: "50px", color: "lightgray", cursor: "pointer"}} onClick={()=> handleMove("l")}/>
        <SliderWrapper>
        <SlideImg src={photos[slideNumber].src} />
        </SliderWrapper>
        <FontAwesomeIcon icon={faCircleArrowRight}style={{margin: "20px", fontSize: "50px", color: "lightgray", cursor: "pointer"}}  onClick={()=> handleMove("r")}/>
        </HotelSlider>}
        <HotelDetail>
          <HotelNavigation>
            <HotelTitle>Tower Street Apartments</HotelTitle>
            <HotelAddress><FontAwesomeIcon icon={faLocationDot} /> Tower I.I chandigar Road, Karachi</HotelAddress>
            <HotelOverview>Excellent location - 500m from center</HotelOverview>
            <HotelTransport>Book a stay over $114 at this property and get a free airport taxi</HotelTransport>
          </HotelNavigation>
          <BookNow>
            <BookMeBtn>Reserve or Book Now!</BookMeBtn>
          </BookNow>
        </HotelDetail>
        <HotelImages>
          {
            photos.map((photo, i)=>{
              return   <HotelImg onClick={() => openHandler(i)} src={photo.src} alt='there is image'/>
            })
          }
        
        </HotelImages>
        <HotelDesc>
          <HotelSpecification>
            <HotelTitle>Stay in the heart of Karachi</HotelTitle>
            <HotelAddress>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quasi dolorum? Iste sit quas eum sequi dicta sapiente saepe qui perferendis, nesciunt voluptate voluptatibus ducimus, in mollitia! Similique, iusto enim distinctio sed porro aperiam, consequuntur quia, quo dignissimos pariatur magnam ipsum architecto ex iste fugiat a esse explicabo laudantium mollitia voluptatibus et deleniti. Incidunt enim ipsam maiores! Corrupti nulla corporis libero eos voluptatibus nostrum consectetur incidunt at dolore repudiandae. Ea ipsam numquam hic incidunt ut aliquid, nihil odit sapiente accusamus. Omnis adipisci accusamus et, ex culpa voluptates ut, quasi deleniti placeat eius cum nisi accusantium molestiae excepturi dolores repellat eligendi.</HotelAddress>
          </HotelSpecification>
          <HotelExtraDetails>
            <DetailWrapper>
              <DetailHeading>Perfect for a 9 night stay!</DetailHeading>
              <Detailpara>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa minus eos sint nisi exercitationem eligendi recusandae.
              </Detailpara>
              <Detailprice>
                $945 <big>(9 nights)</big>
              </Detailprice>
              <BookMeBtn>Reserve or Book Now!</BookMeBtn>
            </DetailWrapper>
          </HotelExtraDetails>
        </HotelDesc>
      </HotelContainer>
      <MailList />
      <Footer />
      </HomeContainer>
    </div>
  )
}

export default Hotel