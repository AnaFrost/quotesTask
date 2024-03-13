import { NavTabs } from '@src/shared/NavTabs';
import { INavTab } from '@src/shared/NavTabs/types';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IProps {
	tabs: INavTab[];
}

export const HeaderNavigation = ({ tabs }: IProps) => {
	const { pathname } = useLocation();

	const mainPath = pathname.split('/')[1];

	const [value, setValue] = useState<string>(mainPath || 'about');

	const handleChange = useCallback((_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	}, []);

	return <NavTabs tabs={tabs} handleChange={handleChange} value={value} />;
};
