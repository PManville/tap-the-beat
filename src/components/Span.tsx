import styled from "styled-components";
import styledTS from "styled-components-ts";

interface SpanProps{
}

export const Span = styledTS<SpanProps>(styled.span)`
	display: block;
	color: gold;
	font-size: 2.25rem;
	min-height: 1.6em;
`;

export default Span;