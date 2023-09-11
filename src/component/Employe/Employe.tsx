import React, { useContext } from 'react';
import styles from './Employe.module.scss';
import cn from 'classnames';
import { ThemeContext } from '../../App';

const Employe = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={cn(styles.table__employe, {
				[styles.table__employe_light]: theme,
			})}>
			<p className={styles.table__caption}>Zakhar</p>
			<p className={styles.table__caption}>27</p>
			<p className={styles.table__caption}>Subscribed</p>
			<p className={styles.table__caption}>Employed</p>
		</div>
	);
};

// className={cn(styles.table__caption, {
// 	[styles.table__caption_light]: theme,
// })}

export default Employe;
