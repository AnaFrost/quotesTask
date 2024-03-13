import { Box } from '@mui/material';
import { StockMarketIcon } from '@src/shared';
import { HeaderEl, HeaderTitle } from '@src/widgets/Header/ui/Header.styled';

interface IHeader {
	children?: React.ReactNode;
}

export const Header = ({ children }: IHeader) => {
	return (
		<HeaderEl>
			<Box sx={{ display: 'flex', justifyContent: 'center', pr: '20px' }}>
				<HeaderTitle>Quote traker</HeaderTitle>
				<StockMarketIcon />
			</Box>
			{children}
		</HeaderEl>
	);
};
