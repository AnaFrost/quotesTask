import styled, { keyframes } from 'styled-components';

const cellAnimation = keyframes`
  0% { opacity: 0;
    transform: scale(0.5)
  }
  100% {
    opacity: 1;
    transform: scale(1)}`;

export const StyledTable = styled.table`
	display: table;
	width: 100%;
	min-width: 650px;
	border-collapse: collapse;
	border-spacing: 0;
	border-color: gray;
`;

export const THead = styled.thead`
	display: table-header-group;
`;

export const TBody = styled.tbody`
	display: table-row-group;
`;

export const TRow = styled.tr`
	display: table-row;
	vertical-align: middle;
	outline: 0;
	cursor: pointer;
`;

export const THeaderCell = styled.th`
	display: table-cell;
	padding: 16px;
	text-align: left;
	font-size: 0.875rem;
	line-height: 1.5rem;
	border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const TDataCell = styled.td`
	display: table-cell;
	border-bottom: 1px solid rgba(224, 224, 224, 1);
	padding: 16px;
	font-size: 0.875rem;
	line-height: 1.5rem;
	animation: 1s ${cellAnimation} ease-out;
`;
