import React, { ReactNode } from 'react';
import styles from './Form.module.scss';

const Form = (): JSX.Element => {
	return (
		<div className={styles.form__container}>
			<p className={styles.form__caption}>Insert Row</p>
			<form action='' className={styles.form}>
				<input className={styles.form__input} type='text' />
				<input className={styles.form__input} style={{ marginTop: '12px' }} type='text' />
				<div>
					<select className={styles.form__select} name='' id=''></select>
				</div>
				<div className={styles.checkbox__container}>
					<input
						id='checkbox'
						name='checkbox'
						type='checkbox'
						className={styles.form__checkbox}
					/>
					<label htmlFor='checkbox'>Employed</label>
				</div>
				<button className={styles.form__button}>Insert</button>
				<div className={styles.form__line}></div>
				<div className={styles.form__switch}>
					<input type='checkbox' id='switch' className={styles.checkbox__switch} />
					<label className={styles.switch__label} htmlFor='switch'>
						Toggle
					</label>
					<label htmlFor='switch' style={{ marginLeft: '5px' }}>
						Mode
					</label>
				</div>
				<button className={styles.form__button}>Delete</button>
			</form>
		</div>
	);
};

export default Form;
