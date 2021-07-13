import React,{useState} from 'react'
import { Background, Heading, TitleHeading, LightChange, MainCont, Form, InputImg, Input, ListCont, List, ListImg, SingleList, Deletebtn, Check,  } from './ElementsContainer';
//import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import icon from "../images/icon-check.svg";
import deleteicon from "../images/icon-cross.svg";


const Container = () => {

    // const [show, setShow] = useState(false);

    // const showLeave = () => setShow(false)
    // const showEnter = () => setShow(true)


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
                <ListCont>
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List >
                           <p>Jog Around the park 3x </p>
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    <SingleList>
                        <div style={{width:"10%"}}>
                            <ListImg>
                                <Check src={icon}/>
                            </ListImg>
                        </div>
                        <List>
                           <p>Pick up Groceries </p>
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
                           <p>Practise Javascript </p>
                            <Deletebtn src={deleteicon}/>
                        </List>
                    </SingleList>
                    
                </ListCont>

            </MainCont>
        </div>
    )
}

export default Container
