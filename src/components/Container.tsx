import styled from "styled-components";
import styledTS from "styled-components-ts";

interface ContainerProps{
	leaderboard?: boolean;
	leaderboardRow?: boolean;
	active?: boolean;
}

export const Container = styledTS<ContainerProps>(styled.div)`
	text-align: center;
	margin: ${props => props.leaderboardRow ? '0 auto' : '50px auto'};
    max-width: ${props => props.leaderboard && '600px'};
    color: ${props => props.leaderboard && 'white'};
    color: ${props => props.active && 'gold'};
    ${props => props.leaderboardRow && `
	    margin: 10px auto;
	    border: 4px solid #541a1a;
	    border-left-color: #7f2b2b;
	    border-top-color: #7f2b2b;
	    background: #161616;
	    width: 95%;
    `}

`;

export default Container;