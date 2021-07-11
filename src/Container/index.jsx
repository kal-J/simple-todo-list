import React from 'react'
import { Background, Heading, TitleHeading } from './ElementsContainer'
import './container.css'

const Container = () => {
    return (
        <div>
            <Background />
            <div>
                <Heading>
                    <TitleHeading>TODO</TitleHeading>
                </Heading>
            </div>
        </div>
    )
}

export default Container
