import styled from "styled-components";
import styledTS from "styled-components-ts";

interface ButtonProps{
	leaderboard?: boolean;
	tapper?: boolean
}

export const Button = styledTS<ButtonProps>(styled.div)`
    display: inline-block;
    padding: 10px 45px;
    font-size: 1.125rem;
    cursor: pointer;
    margin-top: 20px;
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    color: white;
	font-family: 'Monoton', cursive;
    background: #464646;
    border: 4px solid black;
    border-top-color: grey;
    border-left-color: grey;
    &:active {
    	background: #272727;
    }
`;

export default Button;