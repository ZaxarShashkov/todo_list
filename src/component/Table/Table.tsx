import React, { useContext, createContext } from 'react';

import { ThemeContext } from '../../App';
import { IData } from '../../interfaces/IData';
import { IThemeContext } from '../../interfaces/IThemeContext';
import Employe from '../Employe/Employe';
import cn from 'classnames';
import styles from './Table.module.scss';

export const EmployeeContext = createContext<IData | null>(null);

const Table = (): JSX.Element => {
	const { theme, data } = useContext(ThemeContext) as IThemeContext;

	return (
		<div className={styles.table__container}>
			<div className={styles.table}>
				<div
					className={cn(styles.table__header, {
						[styles.table__header]: theme,
					})}>
					<p
						className={cn(styles.table__caption, {
							[styles.table__caption_light]: theme,
						})}>
						Name
					</p>
					<p
						className={cn(styles.table__caption, {
							[styles.table__caption_light]: theme,
						})}>
						Age
					</p>
					<p
						className={cn(styles.table__caption, {
							[styles.table__caption_light]: theme,
						})}>
						Subscription
					</p>
					<p
						className={cn(styles.table__caption, {
							[styles.table__caption_light]: theme,
						})}>
						Employment
					</p>
				</div>
				<div className={styles.table__main}>
					{data?.map((item: IData) => {
						return (
							<EmployeeContext.Provider value={item} key={item.id}>
								<Employe key={item.id} />
							</EmployeeContext.Provider>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Table;
