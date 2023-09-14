import React, { ChangeEvent, useContext, useEffect } from 'react';

import { FormContext } from '../Form/Form';

import styles from './Checkbox.module.scss';
import { IFormContenxt } from '../../interfaces/IFormContext';

export const CheckBox = (): JSX.Element => {
	const { checked, setChecked } = useContext(FormContext) as IFormContenxt;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		if (checked) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	};

	return (
		<div className={styles.checkbox}>
			<input
				className={styles.checkbox__input}
				id='checkbox'
				checked={checked}
				type='checkbox'
				onChange={handleChange}
			/>
			<label className={styles.checkbox__label} htmlFor='checkbox'></label>
		</div>
	);
};
