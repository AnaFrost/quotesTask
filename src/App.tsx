import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Routing />
		</BrowserRouter>
	);
};

export default App;
