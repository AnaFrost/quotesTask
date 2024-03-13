import { About, Quotes } from '@src/pages';

import { Layout } from '@src/widgets/Layout';

import { Navigate, Route, Routes } from 'react-router-dom';

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/about" element={<About />} />
				<Route path="/quotes">
					<Route path=":quote" element={<Quotes />} />
					<Route index element={<Navigate to="/quotes/a" />} />
				</Route>
				<Route path="*" element={<Navigate to="/about" />} />
				<Route index element={<Navigate to="/about" />} />
			</Route>
		</Routes>
	);
};

export default Routing;
