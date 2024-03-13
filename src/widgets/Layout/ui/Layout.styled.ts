import { FOOTER_HEIGHT } from '@src/widgets/Footer/ui/Footer.styled';
import { HEADER_HEIGHT } from '@src/widgets/Header/ui/Header.styled';
import styled from 'styled-components';

export const MainContent = styled.main`
	min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
	min-width: 1200px;
	margin: 0 auto;
`;
