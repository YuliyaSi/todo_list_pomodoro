import React from 'react';
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem 5rem;
  display: grid;
  place-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.base};
  position: fixed;
  bottom: 0;

  a {
    font-family: "Harlow Solid Italic", cursive;
    font-size: large;
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Link href='https://github.com/YuliyaSi/todo_list_pomodoro'>
                <a target='_blank' rel='noreferrer'>Link to source code on GitHub</a>
            </Link>
        </StyledFooter>
    );
};

export default Footer;