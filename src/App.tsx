import React, { useEffect, useState, useContext, createContext } from 'react';
import styles from './styles/App.module.scss';
import Table from './component/Table/Table';
import Form from './component/Form/Form';
import cn from 'classnames';
import { IData } from './interfaces/IData';

// const data: IData[] = [
// 	{ name: 'Zakhar', age: 27, subscription: 'Subscribed', employment: 'Employed' },
// 	{ name: 'Alex', age: 35, subscription: 'Other', employment: 'Unemployed' },
// 	{ name: 'Denis', age: 25, subscription: 'Not Subscribed', employment: 'Employed' },
// 	{ name: 'Kseniya', age: 23, subscription: 'Subscribed', employment: 'Employed' },
// 	{ name: 'Mariya', age: 18, subscription: 'Other', employment: 'Unemployed' },
// 	{ name: 'Dmitriy', age: 43, subscription: 'Not Subscribed', employment: 'Employed' },
// 	{ name: 'Ivan', age: 39, subscription: 'Subscribed', employment: 'Employed' },
// 	{ name: 'Viktor', age: 21, subscription: 'Other', employment: 'Unemployed' },
// ];

export const ThemeContext = createContext<any>(null);

function App() {
	const [data, setData] = useState<IData[]>([
		{ name: 'Zakhar', age: 27, subscription: 'Subscribed', employment: 'Employed' },
		{ name: 'Alex', age: 35, subscription: 'Other', employment: 'Unemployed' },
		{ name: 'Denis', age: 25, subscription: 'Not Subscribed', employment: 'Employed' },
		{ name: 'Kseniya', age: 23, subscription: 'Subscribed', employment: 'Employed' },
		{ name: 'Mariya', age: 18, subscription: 'Other', employment: 'Unemployed' },
		{ name: 'Dmitriy', age: 43, subscription: 'Not Subscribed', employment: 'Employed' },
		{ name: 'Ivan', age: 39, subscription: 'Subscribed', employment: 'Employed' },
		{ name: 'Viktor', age: 21, subscription: 'Other', employment: 'Unemployed' },
	]);

	const [theme, setTheme] = useState<boolean>(false);

	const handleChangeTheme = () => {
		setTheme(!theme);
	};

	useEffect(() => {
		getLocalStorage('data');
	}, []);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(data));
		console.log(localStorage.getItem('data'));
	}, [data]);

	const getLocalStorage = (key: string, defaultValue = null): string | null => {
		const store: string | null = localStorage.getItem(key);

		if (typeof store === 'string') {
			setData(JSON.parse(store));
		}

		return defaultValue;
	};

	return (
		<ThemeContext.Provider value={{ theme, handleChangeTheme, setData, data }}>
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
