import React, {useState} from 'react'
import { Background, Heading, TitleHeading, LightChange, MainCont, Form, InputImg, Input, ListCont, List, ListImg, SingleList, Deletebtn, Check, FooterDesktop, ItemsRemain, CurrentState, ClearCompleted,All, Active, Completed, Reorder, Currentstatemobile, Body } from './ElementsContainer';
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import icon from "../images/icon-check.svg";
import deleteicon from "../images/icon-cross.svg";


const Container = () => {

    // const [show, setShow] = useState(false);

    // const showLeave = () => setShow(false)
    // const showEnter = () => setShow(true)

    const [time, setTime] = useState(false);

    const changeTime = () => setTime(!time);

    return (
        <Body bgColor={time}>
            <Background time={time}/>
            <MainCont>
                <Heading>
                    <TitleHeading>TODO</TitleHeading>
                    <div onClick={changeTime}>
                        <LightChange 
                            onClick={changeTime}
                            src={time?sun:moon}
                            alt="light-change"
                        />
                    </div>
                </Heading>
                <Form>
                    <div style={{width:"10%"}}>
                        <InputImg />
                    </div>
                    <Input placeholder="Create a new todo.." type="text"/>
                </Form>
                <ListCont>
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List >
                            <div>
                                <p>Jog Around the park 3x </p>
                            </div> 
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List >
                            <div>
                                <p>Working with Javascript and praying</p>
                            </div> 
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List >
                            <div>
                                <p>Working with Javascript and praying</p>
                            </div> 
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List >
                            <div>
                                <p>Working with Javascript and praying</p>
                            </div> 
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    <FooterDesktop>
                        <ItemsRemain>5 Items Left</ItemsRemain>
                        <CurrentState>
                            <All>All</All>
                            <Active>Active</Active>
                            <Completed>Completed</Completed>
                        </CurrentState>
                        <ClearCompleted>Clear Completed</ClearCompleted>
                    </FooterDesktop>
                </ListCont>
                <Currentstatemobile>
                    <All>All</All>
                    <Active>Active</Active>
                    <Completed>Completed</Completed>
                </Currentstatemobile>
                <Reorder>
                    Drag and drop to reoder List
                </Reorder>
            </MainCont>




            <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="https://ee5.netlify.app">Emmanuel Effiong</a>.
            </div>
        </Body>
    )
}

export default Container
