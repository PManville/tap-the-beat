import styled from "styled-components";
import styledTS from "styled-components-ts";

interface InfoProps{
	position?: boolean;
	username?: boolean;
	score?: boolean;
	bpm?: boolean;
}

export const Info = styledTS<InfoProps>(styled.div)`    
	padding: 0.875rem;
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 0.875rem;
`;

export default Info;