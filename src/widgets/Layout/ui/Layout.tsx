import { Footer } from '@src/widgets/Footer';
import { Header } from '@src/widgets/Header';
import { HeaderNavigation } from '@src/widgets/HeaderNavigation';
import { MainContent } from '@src/widgets/Layout/ui/Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<Header>
				<HeaderNavigation
					tabs={[
						{ value: 'about', label: 'О Приложении' },
						{ value: 'quotes', label: 'Котировки' },
					]}
				/>
			</Header>
			<MainContent>
				<Outlet />
			</MainContent>

			<Footer />
		</>
	);
};
