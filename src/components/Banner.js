import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/AppContext';
import Search from './Search';

function Banner() {
    const {searchDate,swapSearchDate}=useAppContext();


    return (
        <Wrapper>
            {searchDate && <Search />}
            <button onClick={swapSearchDate} className="banner__search">{searchDate ? "Hide" : "Search Date"}</button>
            <div className="banner__info">
                <h1>Get out and strech your Imagination</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos suscipit rem placeat, aperiam odit distinctio sit esse explicabo nostrum aliquam? Quam eos, qui ab accusantium earum ratione sunt nisi?</h5>
                <button>Expolore Nearby</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background:url("https://images.unsplash.com/photo-1523351964962-1ee5847816c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")center center ;
    min-height:20vh;
    position:relative;
    .banner__search{
        width:100%;
        border:none;
        background:#fff;
        font-size:1.4rem;
        transition:0.3s linear;
        padding:8px 0;
        &:active{
            background:#FF5A5F;
        }
    }
    .banner__info{
        padding:10vh 50px 6rem 40px;
        background:#222;
        color:#fff;
        width:300px;
        h1{
            font-size:2rem;
            text-transform:uppercase;
            line-height:2.3rem;
            font-weight:bold;
            margin-bottom:2rem;
        }
        h5{
            font-size:1.2rem;
        }
        button{
            font-size:1.2rem;
            margin-top:20px;
            padding:8px 16px;
            background:#FF5A5F;
            border-radius:10px;
            border:none;
            cursor: pointer;
            transition:0.3s linear;
            &:hover{
                background:#fff;
                color:#FF5A5F;
            }
        }
    }
`;

export default Banner
