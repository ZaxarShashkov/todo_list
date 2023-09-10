import React from 'react';
import styles from './Table.module.scss';
import Employe from '../Employe/Employe';

type Props = {};

const Table = (props: Props) => {
	return (
		<div className={styles.table__container}>
			<div className={styles.table}>
				<div className={styles.table__header}>
					<p className={styles.table__caption}>Name</p>
					<p className={styles.table__caption}>Age</p>
					<p className={styles.table__caption}>Subscription</p>
					<p className={styles.table__caption}>Employment</p>
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
