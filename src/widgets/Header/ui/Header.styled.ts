import styled from 'styled-components';

export const HEADER_HEIGHT = '90px';

export const HeaderEl = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 20px 0 20px;
	border-bottom: 1px solid rgba(84, 84, 84, 0.7);
	background: linear-gradient(to bottom right, #b991b4, #f196b2);
	box-sizing: border-box;
	height: ${HEADER_HEIGHT};
`;

export const HeaderTitle = styled.h1`
	margin: 0 20px 0 20px;
`;
