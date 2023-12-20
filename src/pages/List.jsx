import React, { useState } from 'react'
import Navbar from "../component/Navbar.jsx"
import Header from "../component/Header.jsx"
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../component/SearchItem.jsx';

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
  height: 450px;
  top: 10px;
`;

const LsTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
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
  margin-bottom: 5px;
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

const ListOptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:10px ;
    color: #555;
    font-size: 12px;
    padding: 0px 8px;
`;
const ListOptionText = styled.span``;
const ListOptionInput = styled.input`
    width: 50px;
`;

const ListSearchBtn = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  border-radius:5px ;
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

        <ListItem>
          <ListLabel>Options</ListLabel>
        <ListOptionItem>
        <ListOptionText>
          Min price <small>per night</small>
        </ListOptionText>
        <ListOptionInput />
        </ListOptionItem>

        <ListOptionItem>
        <ListOptionText>
          Max price <small>per night</small>
        </ListOptionText>
        <ListOptionInput />
        </ListOptionItem>

        <ListOptionItem>
        <ListOptionText>
            Adult
        </ListOptionText>
        <ListOptionInput type='number' min={1} placeholder={options.adult} />
        </ListOptionItem>

        <ListOptionItem>
        <ListOptionText>
          Children
        </ListOptionText>
        <ListOptionInput type='number' min={0} placeholder={options.children}/>
        </ListOptionItem>

        <ListOptionItem>
        <ListOptionText>
          Room
        </ListOptionText>
        <ListOptionInput type='number' min={1} placeholder={options.room}/>
        </ListOptionItem>
        </ListItem>
        <ListSearchBtn>Search</ListSearchBtn>
        </ListSearch>
        <ListResult>
        <SearchItem />  
        <SearchItem />  
        <SearchItem />  
        <SearchItem />  
        <SearchItem />  
        <SearchItem />  
        <SearchItem />  
        </ListResult>  
        </ListWrapper>
        </ListContainer>
        
    </div>
  )
}

export default List