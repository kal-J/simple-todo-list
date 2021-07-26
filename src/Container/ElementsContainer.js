import styled from "styled-components";
import bg1 from "../images/bg-desktop-light.jpg";
import bg2 from "../images/bg-mobile-light.jpg"
import bg1Dark from "../images/bg-desktop-dark.jpg";
import bg2Dark from "../images/bg-mobile-dark.jpg"

export const Body = styled.div`
    background-color:${props => props.bgColor ? "#25273C" :"#E4E5F1"}; 
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
   height:600px;
`
export const InnerCont = styled.div`
    width:100%;
    max-width:650px;
    margin: auto;
    margin-top:-14%;
    @media (max-width: 600px) {
        width:85%;
        margin-top:-50%;
    }
`
export const Heading = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: hsl(0, 0%, 98%);
    
`
export const TitleHeading = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 40px;
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
    background-color:${props => props.bgColor ? "#393A4C" :"#FAFAFA"};
    height:70px;
    padding: 0% 5%;
    border-radius:5px;
    margin-top:6%;
    @media (max-width: 375px){
        height:60px;
        margin-top:12%;
    }
`
export const InputImgCont = styled.div`
    width:8%;
    @media (max-width: 400px){
        width:12%;
    }
`
export const InputImg = styled.div`
    border-radius:50%;
    height:25px;
    width:25px;
    border:2px solid; 
    border-color: ${props => props.color ? "#777A92" :"#E4E5F1"};
    @media (max-width: 375px){
      height:20px;
      width:20px;  
    }
`
export const Input = styled.input`
    width: 80%;
    height: 90%;
    background-color: transparent;
    border: 0;
    color: ${props => props.color ? "#CACDE8" :"#484B6A"};
    font-size:25px;
    font-family: inherit;
    caret-color: hsl(220, 98%, 61%);
    @media (max-width: 500px){
        width:70%;
        font-size:16px;
    }
    
    &:focus {
        outline: none;
    }
`
export const ListCont = styled.div`
    background-color:${props => props.bgColor ? "#393A4C" :"#FAFAFA"};
    border-radius:5px;
    margin-top:5%;
    max-height: 300px;
    overflow-y:scroll;
`
    
export const Deletebtn = styled.img`
    height: 18px;
    width:18px;
    margin-right:20px;
    cursor: pointer;
    display:none;
    @media (max-width: 375px){
        height:13px;
        width:13px; 
        margin-left:3%;
        display: block; 
    }
`
    
export const SingleList = styled.div`
    display:flex;
    align-items:center;
    justify-items:center;
    height:70px;
    justify-content: space-between;
    border-bottom:0.8px solid hsl(236, 33%, 92%);
    @media (max-width: 375px){
        height:60px;
    }
    &:hover ${Deletebtn}{
        display:block;
    }
`

export const List = styled.div`
background-color: transparent;
font-size:22px;
font-family: inherit;
color: ${props => props.color ? "#D2D3DB" :"#484B6A"};
flex: 1;
margin-left: 20px;
display: flex;
align-items:center;
justify-items:center;
justify-content:space-between;
width:80%;
@media (max-width: 540px){
    font-size:14px;
    width:90%;   
}

`    

export const ListImg = styled(InputImg)`
margin-left: 50%;
background: ${props=>props.completed? null: "linear-gradient(to right, #57DDFF, #C058F3)" };
position:relative;
cursor:pointer;
&:hover{
    border: 2px solid #57DDFF;
    
}
`

export const Check = styled.img`
    display:${props => props.completed?"none" : "block"};
    height: 12px;
    width:12px;
    position:absolute;
    top:5px;
    left:5px;
    @media (max-width: 400px){
        display:${props => props.completed?"none" : "block"};
        height:10px;
        width:10px;
        top:4px;
        left:4px;
}
`
export const FooterDesktop = styled.div`
    height: 70px;
    display:flex;
    align-items:center;
    justify-items:center;
    justify-content:space-between;
    background-color:${props => props.bgColor ? "#393A4C" :"#FAFAFA"};
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    @media (max-width: 375px){
        height:60px;
    }
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

    @media (min-width:490px) and (max-width:600px){
        width: 35%;
    }
    @media (max-width: 500px){
        display: none
    }
`

export const All = styled.p`
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
    margin-top:3%;
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
        background-color:${props => props.bgColor ? "#393A4C" :"#FAFAFA"};
        height:40px;
        padding: 0 20%;
        border-radius:5px;
        &:hover{
        color:#393A4C;
        font-weight:300
    }
    }
`
    export const Atrribution = styled.div`
        font-size: 11px; 
        text-align: center; 
        padding: 5% 0;
    `
    export const AttributionA = styled.a`
        color: hsl(228, 45%, 44%);
    `