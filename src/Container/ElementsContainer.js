import styled from "styled-components";
import bg1 from "../images/bg-desktop-light.jpg";

export const Background = styled.div `
    background-image: url(${bg1});
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const MainCont = styled.div `
    width:100%;
    max-width:550px;
    margin: auto;
`
export const Heading = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top: -40%;
    color: hsl(0, 0%, 98%);
`
export const TitleHeading = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 15px;  
`
export const LightChange = styled.img`
    cursor:pointer;
`
export const Form = styled.form`
    display:flex;
    align-items:center;
    background-color:hsl(0, 0%, 98%);
    height:50px;
    padding: 1% 5%;
    border-radius:5px;
    margin-top: 10%;
`
export const InputImg = styled.div`
    border-radius:50%;
    height:20px;
    width:20px;
    border:2px solid hsl(236, 33%, 92%);
`
export const Input = styled.input`
    width: 85%;
    height: 70%;
    background-color: transparent;
    border: 0;
    font-size:20px;
    font-family: inherit;
    caret-color: hsl(220, 98%, 61%);
    &:focus {
        outline: none;
    }
`