import styled from "styled-components";
import bg1 from "../images/bg-desktop-light.jpg";
import bg2 from "../images/bg-mobile-light.jpg"
import bg1Dark from "../images/bg-desktop-dark.jpg";
import bg2Dark from "../images/bg-mobile-dark.jpg"

//${props => props.show ? "block" : "none"}
export const Body = styled.body`
    font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:${props => props.bgColor ? "#25273C" :"#E4E5F1"};
  height:100%; 
`
export const Background = styled.div `
    background-image: url(${props => props.time ? bg1Dark : bg1});
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 375px) {
        background-image: url(${props => props.time ? bg2Dark : bg2});
    }

`
export const MainCont = styled.div `
    width:100%;
    max-width:600px;
    margin: auto;
    @media (max-width: 600px) {
        width:85%;
  }
`
export const Heading = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top: -40%;
    color: hsl(0, 0%, 98%);
    @media (max-width: 375px){
       margin-top:-65%; 
    }
`
export const TitleHeading = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 35px;
    letter-spacing: 15px; 
    @media(max-width:375px){
       letter-spacing:10px;
       font-size:30px; 
    } 
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
    @media (max-width: 375px){
        
    }
`
export const InputImg = styled.div`
    border-radius:50%;
    height:25px;
    width:25px;
    border:2px solid hsl(236, 33%, 92%);
    @media (max-width: 375px){
      height:20px;
      width:20px;  
    }
`
export const Input = styled.input`
    width: 85%;
    height: 80%;
    background-color: transparent;
    border: 0;
    font-size:20px;
    font-family: inherit;
    caret-color: hsl(220, 98%, 61%);
    @media (max-width: 375px){
        width:80%;
        font-size:16px;
    }
    &:focus {
        outline: none;
    }
`
export const ListCont = styled.div`
    background-color:white;
    border-radius:5px;
    margin-top:30px;
    overflow-y:scroll;
    max-height: 300px;
    height:100%;
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
    justify-items:center;
    justify-content:space-between;
    width:80%;
    @media (max-width: 375px){
        font-size:14px;
        width:90%;   
    }
`

export const Deletebtn = styled.img`
    height: 18px;
    width:18px;
    margin-right:20px;
    cursor: pointer;
    @media (max-width: 375px){
      height:13px;
      width:13px; 
      margin-left:3%; 
    }
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
    @media (max-width: 400px){
        height:11px;
        width:11px;
        top:4px;
        left:3px;
    }
`
export const FooterDesktop = styled.div`
    height: 60px;
    display:flex;
    align-items:center;
    justify-items:center;
    justify-content:space-between;
    background-color:white;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
`
export const ItemsRemain = styled.p`
    margin-left: 30px;
    font-size:14px;
    color: hsl(236, 9%, 61%);
    font-weight:300;
    @media (max-width: 400px){
        font-size:12px;
        margin-left:20px;
    }
`
export const CurrentState = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:30%;
    cursor:pointer;
    @media (max-width: 500px){
        display: none
    }
`

export const All = styled.div`
    color: hsl(236, 9%, 61%);
    &:hover{
        color:Black;
        font-weight:700
    }
`
export const Active = styled.div`
    color: hsl(236, 9%, 61%);
    &:hover{
        color:Black;
        font-weight:700
    }
`
export const Completed = styled.div`
    color: hsl(236, 9%, 61%);
    &:hover{
        color:Black;
        font-weight:700
    }
`
export const ClearCompleted = styled.p`
    margin-right: 20px;
    font-size:14px;
    color: hsl(236, 9%, 61%);
    font-weight:300;
    cursor:pointer;
    @media (max-width: 400px){
        font-size:12px;
        margin-right:7%;
    }
`

export const Reorder = styled(ItemsRemain)`
    text-align:center;
    margin-top:10%;
    margin-left:0;
`

export const Currentstatemobile = styled(CurrentState)`
    display:none;
    @media (max-width: 500px){
        display:flex;
        font-size:14px;
        font-weight:700;
        margin-top:5%;
        align-items:center;
        justify-content:space-between;
        cursor:pointer;
        width:100%;
        background-color:white;
        height:40px;
        padding: 0 20%;
        border-radius:5px;
    }
`