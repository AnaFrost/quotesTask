import { Tab, Tabs } from '@mui/material';
import { INavTab } from '@src/shared/NavTabs/types';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
	tabs: INavTab[];
	handleChange: (_: React.SyntheticEvent, newValue: string) => void;
	value: string;
}

const NavTabsComponent = ({ tabs, handleChange, value }: IProps) => {
	return (
		<Tabs value={value} onChange={handleChange} role="navigation" centered>
			{tabs.map(({ value, label }) => (
				<Tab key={value} value={value} label={label} to={`/${value}`} component={NavLink} />
			))}
		</Tabs>
	);
};

export const NavTabs = memo(NavTabsComponent);
