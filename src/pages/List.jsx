import React, { useState } from 'react'
import Navbar from "../component/Navbar.jsx"
import Header from "../component/Header.jsx"
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #ffcd44;
  padding: 10px;
  border-radius:10px ;
  position: sticky;
  top: 10px;
`;

const LsTitle = styled.h1`
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const ListLabel = styled.label`
  font-size: 12px;
`

const ListInput = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;

const ListSpan = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ListResult = styled.div`
  flex: 3;
`;


const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.option);
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <ListContainer>
        <ListWrapper>
        <ListSearch>
        <LsTitle>Search</LsTitle>
        <ListItem>
          <ListLabel>Destination</ListLabel>
          <ListInput placeholder={destination}/>
        </ListItem>
        <ListItem>
          <ListLabel>Check-in Date</ListLabel>
          <ListSpan onClick={()=> setOpenDate(!openDate)}>
          {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
          </ListSpan>
          {openDate && <DateRange onChange={(item) =>setDate([item.selection])} minDate={new Date()} ranges={date} />}
        </ListItem>
        </ListSearch>
        <ListResult>1</ListResult>  
        </ListWrapper>
        </ListContainer>
        
    </div>
  )
}

export default List