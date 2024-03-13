import { QUOTES } from '@src/app/constants';
import { NavTabs } from '@src/shared/NavTabs';
import { INavTab } from '@src/shared/NavTabs/types';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

interface IProps {
	tabs: INavTab[];
}

export const QuotesNavigation = ({ tabs }: IProps) => {
	const { quote } = useParams();

	const [value, setValue] = useState<string>(`quotes/${quote}` || `quotes/${QUOTES[0]}`);

	const handleChange = useCallback((_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	}, []);

	return <NavTabs tabs={tabs} handleChange={handleChange} value={value} />;
};
