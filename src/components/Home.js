import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return <Wrapper>
    <Banner />
    <div className="home__card" >
      <Card />
      <Card />
      <Card />
    </div>
  </Wrapper>;
}

const Wrapper = styled.div``;

export default Home;
