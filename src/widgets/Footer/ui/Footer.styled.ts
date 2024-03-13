import styled from 'styled-components';

export const FOOTER_HEIGHT = '85px';

export const FooterElement = styled.footer`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	padding: 30px 20px 30px 0;
	border-top: 1px solid rgba(84, 84, 84, 0.7);
	background: linear-gradient(to bottom right, #b991b4, #f196b2);
	height: ${FOOTER_HEIGHT};
`;

export const FooterLink = styled.a`
	color: #292929;
	transition: 0.3s opacity ease-in;
	text-decoration-color: #292929;
	text-decoration: underline;

	&:hover {
		opacity: 0.6;
		transition: 0.3s opacity ease-in;
	}
`;
