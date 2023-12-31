import React, { useContext, useState, MouseEvent, ReactNode } from 'react';

import { ThemeContext } from '../../App';
import { EmployeeContext } from '../Table/Table';

import styles from './Employe.module.scss';
import cn from 'classnames';
import { IThemeContext } from '../../interfaces/IThemeContext';
import { IData } from '../../interfaces/IData';

const Employe = (): JSX.Element => {
	const [select, setSelect] = useState<boolean>(false);
	const { theme, setSelectedEmployee } = useContext(ThemeContext) as IThemeContext;
	const { id, name, age, subscription, employment } = useContext(EmployeeContext) as IData;

	const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
		setSelect((select) => !select);
		setSelectedEmployee(e.currentTarget.dataset.id);
	};

	return (
		<div
			onClick={handleSelect}
			className={cn(styles.table__employe, {
				[styles.table__employe_light]: theme,
				[styles.table__employe_select]: select,
			})}
			data-id={id}>
			<p className={styles.table__caption}>{name}</p>
			<p className={styles.table__caption}>{age}</p>
			<p className={styles.table__caption}>{subscription}</p>
			<p className={styles.table__caption}>{employment}</p>
		</div>
	);
};

export default Employe;
