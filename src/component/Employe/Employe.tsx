import React from 'react';
import styles from './Employe.module.scss'

type Props = {};

const Employe = (props: Props) => {
	return (
		<div className={styles.table__employe}>
			<p className={styles.table__caption}>Zakhar</p>
			<p className={styles.table__caption}>27</p>
			<p className={styles.table__caption}>Subscribed</p>
			<p className={styles.table__caption}>Employed</p>
		</div>
	);
};

export default Employe;
