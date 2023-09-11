import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './Table.module.scss';
import Employe from '../Employe/Employe';
import { ThemeContext } from '../../App';

type Props = {};

const Table = (props: Props) => {
	const { theme } = useContext(ThemeContext);
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
					<Employe />
					<Employe />
					<Employe />
				</div>
			</div>
		</div>
	);
};

export default Table;
