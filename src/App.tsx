import React, { useEffect, useState, useContext, createContext } from 'react';
import styles from './styles/App.module.scss';
import Table from './component/Table/Table';
import Form from './component/Form/Form';
import cn from 'classnames';
import { IData } from './interfaces/IData';
import { IThemeContext } from './interfaces/IThemeContext';

export const ThemeContext = createContext<IThemeContext | null>(null);

function App(): JSX.Element {
	const [data, setData] = useState<IData[]>([
		{ id: '1', name: 'Zakhar', age: 27, subscription: 'Subscribed', employment: 'Employed' },
		{ id: '2', name: 'Alex', age: 35, subscription: 'Other', employment: 'Unemployed' },
		{ id: '3', name: 'Denis', age: 25, subscription: 'Not Subscribed', employment: 'Employed' },
		{ id: '4', name: 'Kseniya', age: 23, subscription: 'Subscribed', employment: 'Employed' },
		{ id: '5', name: 'Mariya', age: 18, subscription: 'Other', employment: 'Unemployed' },
		{
			id: '6',
			name: 'Dmitriy',
			age: 43,
			subscription: 'Not Subscribed',
			employment: 'Employed',
		},
		{ id: '7', name: 'Ivan', age: 39, subscription: 'Subscribed', employment: 'Employed' },
		{ id: '8', name: 'Viktor', age: 21, subscription: 'Other', employment: 'Unemployed' },
	]);

	const [selectedEmployee, setSelectedEmployee] = useState<string | number | undefined>('');

	const [theme, setTheme] = useState<boolean>(false);

	const handleChangeTheme = () => {
		setTheme(!theme);
	};

	useEffect(() => {
		getLocalStorage('data');
	}, []);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(data));
	}, [data]);

	const getLocalStorage = (key: string, defaultValue = null): string | null => {
		const store: string | null = localStorage.getItem(key);

		if (typeof store === 'string') {
			setData(JSON.parse(store));
		}

		return defaultValue;
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				handleChangeTheme,
				setData,
				data,
				selectedEmployee,
				setSelectedEmployee,
			}}>
			<div className={styles.App}>
				<div
					className={cn(styles.App__container, {
						[styles.App__container_light]: theme,
					})}>
					<Form />
					<Table />
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
