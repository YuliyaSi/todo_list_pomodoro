import React from 'react';
import styled from "styled-components";
import {VscDebugRestart} from "react-icons/vsc";
import {AiOutlineFileDone} from "react-icons/ai";
import {NextPage} from "next";
import {IModal} from "../../types";

const Modal: NextPage<IModal> = ({ handleRestart, handleFinishTask }) => {

    return (
        <ModalContainer>
            <TextHolder>
                <h1>Time is up!</h1>
                <p>Are you sure want to finish this task?</p>
                <ButtonsHolder>
                    <Button onClick={handleRestart}>
                        <VscDebugRestart/>
                    </Button>
                    <Button onClick={handleFinishTask}>
                        <AiOutlineFileDone/>
                    </Button>
                </ButtonsHolder>
            </TextHolder>
        </ModalContainer>
    );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
`

const TextHolder = styled.div`
  width: 30rem;
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.light};
  text-align: center;
`

const ButtonsHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  gap: 1rem;
`
const Button = styled.button`
  cursor: pointer;
  max-width: 5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.attention};
  border: transparent;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  font-size: x-large; 
`