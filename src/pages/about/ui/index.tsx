import { Box, Typography } from '@mui/material';
import { CAT_BROKER } from '@src/app/constants';

export const About = () => {
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" m="30px auto 0">
			<Typography variant="h4" align="center" pb="20px">
				О приложении
			</Typography>
			<Typography variant="body1" align="center" mb="20px">
				Это приложение позволяет отследить данные о биржевых котировках.
			</Typography>
			<img src={CAT_BROKER} alt="cat broker" />
		</Box>
	);
};
