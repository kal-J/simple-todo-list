import React from 'react'
import { Background, Heading, TitleHeading, LightChange, MainCont, Form, InputImg, Input } from './ElementsContainer'
//import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
//import icon from "../images/icon-check.svg";

const Container = () => {
    return (
        <div>
            <Background />
            <MainCont>
                <Heading>
                    <TitleHeading>TODO</TitleHeading>
                    <div>
                    <LightChange 
                        src={moon}
                        alt="light-change"
                    />
                    </div>
                </Heading>
                <Form>
                    <div style={{width:"10%"}}>
                        <InputImg />
                    </div>
                    <Input />
                </Form>
            </MainCont>
        </div>
    )
}

export default Container
