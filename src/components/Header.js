import React from "react";
import { FaSearch, FaGlobe, FaChevronDown, FaUserCircle } from "./icons";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <img
        className="header__img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt="airbnb-logo"
      />
      <div className="header__center">
        <input type="text" />
        <FaSearch />
      </div>
      <div className="header__user">
        <h3>Become a Host</h3>
        <FaGlobe />
        <FaChevronDown />
        <FaUserCircle />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: grid;
  grid-template-columns:auto 1fr auto ;
  align-items:center;
  margin:2rem 5rem;
  text-align:center;
  .header__img {
    height: 40px;
    object-fit: contain;
  }
  .header__center{
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    border:1px solid lightgray;
    border-radius:10px;
    width:200px;
    padding:8px 16px;
    margin:auto;
      input{
        width:60%;
        border:none;
        outline-width:0;
      }
  }
  .header__user{
    display:flex;
    align-items:center;
  }
`;

export default Header;
