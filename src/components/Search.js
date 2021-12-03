import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FaUserFriends } from "react-icons/fa";
import styled from "styled-components";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const handleSelect = (dates) => {
    console.log(dates, "?");
    const { startDate, endDate } = dates.selection;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <Wrapper>
      <DateRangePicker className="search__date" ranges={[selectionRange]} onChange={handleSelect} />
      <div className="search__extra">
        <h2>
          Number of Guests
          <FaUserFriends />
        </h2>
        <input type="number" min={0} defaultValue={2} />
        <button>Search Airbnb</button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 2.5rem;
  width: 100vw;
  .search__date{
      margin:auto;
      position:relative;
      left:50%;
      transform:translateX(-50%);
  }
  .search__extra{
      text-align:center;
      position: relative;
      width:558px;
      background-color:white;
      margin:auto;
      h2{
          padding:1rem 2rem;
          display:flex;
          font-size:1.3rem;
          justify-content:space-between;
      }
      input{
        margin:1rem 0;
          font-size:1.4rem;
          border:none;
          outline-width:0;
      }
      button{
          display:block;
          color:white;
          width:100%;
          background-color:#ff5a5f;
          border:none;
          font-size:1.2rem;
          padding:1rem;
          &:hover{
              background-color:#ff544f99;
          }
      }
  }
`;

export default Search;
