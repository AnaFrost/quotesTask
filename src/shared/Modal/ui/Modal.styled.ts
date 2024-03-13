import styled, { keyframes } from 'styled-components';

const openModal = keyframes`
  0% { opacity: 0;
    transform: scale(0.5)
  }
  100% {
    opacity: 1;
    transform: scale(1)}`;

export const ModalContainer = styled.div`
	position: relative;
	top: 25%;
	width: 500px;
	margin: auto;
	padding: 16px;
	background-color: white;
	animation: 0.5s ${openModal} ease-out;
`;
