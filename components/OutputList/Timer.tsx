import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import Modal from "./Modal";
import {ITimer} from "../../types";

const Timer: NextPage<ITimer> = ({time, start, setDone, timeStop}) => {

    const currTime = useRef(time);
    const [progress, setProgress] = useState(100);
    const [modal, setModal] = useState(false)
    let myInterval = useRef<any>()

    const tick = () => {
        if(currTime.current > 0) {
            setProgress(Math.floor(--currTime.current * 100 / time))
        } else {
            setModal(true)
            timeStop()
        }
    }

    const handleRestart = () => {
        setModal(false)
        currTime.current = time
        setProgress(100)
    }

    const handleFinishTask = () => {
        setModal(false);
        setDone(true)
        setProgress(0)
    }

    useEffect(() => {
        start ? myInterval.current = setInterval(tick, 1000) : clearInterval(myInterval.current)
    },
        [start]);

    return (
        <>
            <TimerContainer>
            <Container>
                <Filler completed={progress}>
                    <Label>{`${progress}%`}</Label>
                </Filler>
            </Container>
        </TimerContainer>
            { modal && <Modal handleFinishTask={handleFinishTask} handleRestart={handleRestart}/> }
        </>
    );
};

export default Timer;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 3rem;
`
const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
`;

interface IFiller {
    completed: number,
}

const Filler = styled.div<IFiller>`
  height: 100%;
  width: ${({completed}) => completed}%;
  background-color: ${({theme}) => theme.colors.warning};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`

const Label = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`