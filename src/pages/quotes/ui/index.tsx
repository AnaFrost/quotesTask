import { Box } from '@mui/material';
import { QUOTES } from '@src/app/constants';
import { QuotesNavigation } from '@src/widgets/QuotesNavigation';
import { QuotesTable } from '@src/widgets/QuotesTable';

export const Quotes = () => {
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt="30px" gap="20px">
			<QuotesNavigation tabs={QUOTES.map((quote) => ({ label: `Котировка ${quote}`, value: `quotes/${quote}` }))} />
			<QuotesTable />
		</Box>
	);
};
