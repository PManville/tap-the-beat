import styled from "styled-components";
import styledTS from "styled-components-ts";

interface InputProps{
	position?: boolean;
	username?: boolean;
	score?: boolean;
	bpm?: boolean;
}

export const Input = styledTS<InputProps>(styled.input)`   
    padding: 0.875rem;
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
    color: gold;
    font-size: 1rem;
    background: transparent;
    border: none;
    text-align: center;
    outline: none;
    font-weight: bold;
    text-transform: uppercase;
`;

export default Input;