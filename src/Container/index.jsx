import React, {useState} from 'react'
import { Background, Heading, TitleHeading, LightChange, MainCont, Form, InputImg, Input, ListCont, List, ListImg, SingleList, Deletebtn, Check, FooterDesktop, ItemsRemain, CurrentState, ClearCompleted,All, Reorder, Currentstatemobile, Body, InputImgCont, Atrribution, AttributionA, InnerCont, } from './ElementsContainer';
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import icon from "../images/icon-check.svg";
import deleteicon from "../images/icon-cross.svg";
import {nanoid} from "nanoid";

const Container = () => {

    const [name, setName] = useState('');
    const [time, setTime] = useState(false);
    const [tasks, setTasks] = useState([]);


    const handleComplete = (index) => {
        let clickedTask = tasks[index];
        tasks[index] = {...clickedTask, completed: !clickedTask.completed};
        setTasks([...tasks]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) return;
        addTask(name);
        setName("");
    }

    const addTask = (name) => {
        const newTask = {id:nanoid(), name, completed:false};
        setTasks([...tasks, newTask]);
    }


    const handleChange = (e) => {
        setName(e.target.value)
    }


    const changeTime = () => setTime(!time);

    return (
        <Body bgColor={time}>
            <Background time={time}> 
            </Background>
            <MainCont>
                <InnerCont>
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
                <Form bgColor={time} onSubmit={handleSubmit}>
                    <InputImgCont>
                        <InputImg color={time} />
                    </InputImgCont>
                    <Input placeholder="Create a new todo.."    type="text" 
                    color={time} 
                    autoComplete="off" 
                    value={name} 
                    onChange={handleChange}/>
                </Form>
                
                <ListCont bgColor={time}>
                    {tasks.map((task, index) => (
                        <SingleList key={index} >
                            <div style={{width:"10%"}} >
                                <ListImg color={time} 
                                onClick={()=>handleComplete(index)} completed={task.completed}
                                >
                                    <Check src={icon} completed={task.completed}/>
                                </ListImg>
                                
                            </div>
                            <List color={time}>
                                <div>
                                    <p>{task.name}</p>
                                </div> 
                                <Deletebtn onClick={() => console.log(task.id)} src={deleteicon}/>
                            </List>
                        </SingleList>
                        )})}
                        

                </ListCont>

                <FooterDesktop bgColor={time}>
                        <ItemsRemain>{tasks.length} {tasks.length <= 1?"Item":"Items"} Left</ItemsRemain>
                        <CurrentState>
                            <All>All</All>
                            <All>Active</All>
                            <All>Completed</All>
                        </CurrentState>
                        <ClearCompleted>Clear Completed</ClearCompleted>
                </FooterDesktop>
                <Currentstatemobile bgColor={time}>
                    <All>All</All>
                    <All>Active</All>
                    <All>Completed</All>
                </Currentstatemobile>
                </InnerCont>
                <Reorder>
                    Drag and drop to reoder List
                </Reorder>
            </MainCont>

           <Atrribution>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <AttributionA href="https://ee5.netlify.app">Emmanuel Effiong</AttributionA>.
            </Atrribution>
        </Body>
    )
}

export default Container
