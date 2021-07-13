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
    height:60px;
    padding: 0.7% 5%;
    border-radius:5px;
    margin-top: 10%;
`
export const InputImg = styled.div`
    border-radius:50%;
    height:25px;
    width:25px;
    border:2px solid hsl(236, 33%, 92%);
`
export const Input = styled.input`
    width: 85%;
    height: 80%;
    background-color: transparent;
    border: 0;
    font-size:20px;
    font-family: inherit;
    caret-color: hsl(220, 98%, 61%);
    &:focus {
        outline: none;
    }
`
export const ListCont = styled.div`
    background-color:hsl(0, 0%, 98%);
    border-radius:5px;
    margin-top:30px;
    
`
export const List = styled.div`
    background-color: transparent;
    font-size:20px;
    font-family: inherit;
    color: hsl(235, 19%, 35%);
    flex: 1;
    margin-left: 20px;
    display: flex;
    align-items:center;
`
export const Deletebtn = styled.img`
    height: 18px;
    width:18px;
    margin-right:20px;
    cursor: pointer; 
    margin-left:45%;
    /* display:${props => props.show ? "block" : "none"};  */

`

export const SingleList = styled.div`
    display:flex;
    align-items:center;
    height: 60px;
    justify-content: space-between;
    border-bottom:1px solid hsl(236, 33%, 92%);
`

export const ListImg = styled(InputImg)`
    margin-left: 50%;
    position:relative;
    cursor:pointer;
    &:hover{
        border: 1px solid hsl(220, 98%, 61%);
        background:linear-gradient(to right, #57DDFF, #C058F3);
    }
`

export const Check = styled.img`
    height: 13px;
    width:13px;
    position:absolute;
    top:6px;
    left:5px;
`