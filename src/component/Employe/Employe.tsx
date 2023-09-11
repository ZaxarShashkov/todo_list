import React, { useContext } from 'react';
import styles from './Employe.module.scss';
import cn from 'classnames';
import { ThemeContext } from '../../App';
import { EmployeeContext } from '../Table/Table';

const Employe = () => {
	const { theme } = useContext(ThemeContext);
	const { name, age, subscription, employed } = useContext(EmployeeContext);
	console.log(name);
	return (
		<div
			className={cn(styles.table__employe, {
				[styles.table__employe_light]: theme,
			})}>
			<p className={styles.table__caption}>{name}</p>
			<p className={styles.table__caption}>{age}</p>
			<p className={styles.table__caption}>{subscription}</p>
			<p className={styles.table__caption}>{employed}</p>
		</div>
	);
};

// className={cn(styles.table__caption, {
// 	[styles.table__caption_light]: theme,
// })}

export default Employe;
