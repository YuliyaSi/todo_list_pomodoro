import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {NextPage} from "next";
import Modal from "./Modal";
import {IFiller, ITimer} from "../../types";

const Timer: NextPage<ITimer> = ({time, start, setDone, timeStop}) => {

    const currTime = useRef(Number(time));
    const [progress, setProgress] = useState(100);
    const [modal, setModal] = useState(false)
    let myInterval = useRef<any>()

    const tick = () => {
        if (currTime.current > 0) {
            setProgress(Math.floor(--currTime.current * 100 / Number(time)))
        } else {
            setModal(true)
            timeStop()
        }
    }

    const handleRestart = () => {
        setModal(false)
        currTime.current = Number(time)
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
            {modal && <Modal handleFinishTask={handleFinishTask} handleRestart={handleRestart}/>}
        </>
    );
};

export default Timer;

const TimerContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: flex-start;
  padding: 2rem 3rem;
`
const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.free};
  border-radius: 50px;
  margin: 50px;
`;

const Filler = styled.div<IFiller>`
  height: 100%;
  width: ${({completed}) => completed}%;
  background-color: ${({theme}) => theme.colors.warning};
  border-radius: inherit;
  text-align: center;
  transition: width 1s ease-in-out;
`

const Label = styled.span`
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
`