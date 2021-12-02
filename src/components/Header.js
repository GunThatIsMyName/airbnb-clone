import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Wrapper>
      <img
        className="header__img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        alt="airbnb-logo"
      />
      <div className="div">
          <input type="text" name="" id="" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
    .header__img{
        height:50px;
        object-fit:contain;
    }
`;


export default Header;
