import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';



const HeaderCont = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    background-color: #003580;
    position: relative;
`;
const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
`;
const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
    margin: 20px 0px;
`;
const HeaderButton = styled.button`
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: #0071c2;
    color: white;
`;
const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 2px solid #febb02;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`;
const HeaderSearchItems = styled.div`
`;
const HeaderSearchText = styled.span`
    color: lightgray;
    cursor: pointer;
`;
const TextIput = styled.input`
    border: none;
    outline: none;
    padding-left: 5px;
`;

const DateRange = styled.div`
position: absolute;
top: 55px;
left: 10px;
z-index: 2;
`;

const Option = styled.div`
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
const OptionItems = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
const OptionText = styled.span``;
const OptionCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: black;
    font-size: 12px;
`;
const OptionCounterButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1.5px solid #0071c2;
    color: #0071c2;
    background-color: transparent;
    cursor: pointer;

    &:disabled{
        cursor: not-allowed;
    }
`;
const OptionCounterNum = styled.span``;

const Header = ({type}) => {
  
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

      const [openOption, setOpenOption] = useState(false)
      const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });

      const optionHandler = (name, operation) => {
        setOption((prev)=>{
            return{
                ...prev,
                [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
            }
        })
      }

      
  return (
    <HeaderCont>
        <HeaderWrapper>
            <HeaderList>
            <HeaderItems >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </HeaderItems>
            <HeaderItems>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </HeaderItems>
          <HeaderItems>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </HeaderItems>
          <HeaderItems>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </HeaderItems>
          <HeaderItems>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </HeaderItems>
            </HeaderList>
            {type == "list" || <><HeaderTitle>A life of discount? It's a genius.</HeaderTitle>
            <HeaderDesc>
            Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </HeaderDesc>
            <HeaderButton>
            Sign in / Register
            </HeaderButton>
            <HeaderSearch>
                <HeaderSearchItems>
                    <FontAwesomeIcon icon={faBed} style={{color: "lightgray"}}/>
                    <TextIput type='text' placeholder='Where are you gong?'/>
                </HeaderSearchItems>
                {/* ------<>----- */}
                <HeaderSearchItems>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color: "lightgray"}}/>
                    {/* <TextIput type='text' placeholder='Where are you gong?'/> */}
                    <HeaderSearchText onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</HeaderSearchText>
                  {openDate &&  <DateRange>
                    <DateRangePicker
                        onChange={item => setDate([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        />;
                    </DateRange>}
                </HeaderSearchItems>
                 {/* ------<>----- */}
                <HeaderSearchItems>
                    <FontAwesomeIcon icon={faPerson} style={{color: "lightgray"}}/>
                    {/* <TextIput type='text' placeholder='Where are you gong?'/> */}
                    <HeaderSearchText onClick={()=> setOpenOption(!openOption)}>{` ${option.adult} adults .  ${option.children} children . ${option.room} room`}</HeaderSearchText>
               {openOption && <Option >
                <OptionItems>
                <OptionText>Adult</OptionText> 
                <OptionCounter>   
                <OptionCounterButton disabled={option.adult <= 1} onClick={()=> optionHandler("adult", "d")}>-</OptionCounterButton>
                <OptionCounterNum>{option.adult}</OptionCounterNum>
                <OptionCounterButton onClick={()=> optionHandler("adult", "i")}>+</OptionCounterButton>
                </OptionCounter>    
                </OptionItems>    
                <OptionItems>
                <OptionText>Children</OptionText> 
                <OptionCounter>   
                <OptionCounterButton disabled={option.children <= 0} onClick={()=> optionHandler("children", "d")}>-</OptionCounterButton>
                <OptionCounterNum>{option.children}</OptionCounterNum>
                <OptionCounterButton onClick={()=> optionHandler("children", "i")}>+</OptionCounterButton>
                </OptionCounter>    
                </OptionItems>    
                <OptionItems>
                <OptionText>Room</OptionText> 
                <OptionCounter>   
                <OptionCounterButton disabled={option.room <= 1} onClick={()=> optionHandler("room", "d")}>-</OptionCounterButton>
                <OptionCounterNum>{option.room}</OptionCounterNum>
                <OptionCounterButton onClick={()=> optionHandler("room", "i")}>+</OptionCounterButton>
                </OptionCounter>    
                </OptionItems>    
                </Option>    }
                </HeaderSearchItems>
                 {/* ------<>----- */}
                <HeaderSearchItems>
                 <HeaderButton>Search</HeaderButton>
                </HeaderSearchItems>
            </HeaderSearch> </>}
        </HeaderWrapper>
    </HeaderCont>
  )
}

export default Header