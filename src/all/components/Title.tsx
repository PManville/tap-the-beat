import styled from "styled-components";
import styledTS from "styled-components-ts";

interface TitleProps {
	leaderboard?: boolean;
	position?: boolean;
	currentBPM?: boolean;
	tapText?: boolean;
	gameInfo?: boolean;
}

export const Title = styledTS<TitleProps>(styled.h2)`
	font-size: ${props => props.leaderboard ? "1.5rem" : props.leaderboard ? "3rem" : props.position ? "3.5rem" : "2.25rem"};
	display: ${props => props.gameInfo && 'inline-block'};
    width: ${props => props.gameInfo && '33%'};
    color: ${props => props.position && 'gold'};
    @media(max-width:600px){
    	font-size: ${props => props.gameInfo && "1.25rem"}
    }
`;

export default Title;