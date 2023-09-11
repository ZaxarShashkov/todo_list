import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import cn from 'classnames';
import styles from './Form.module.scss';

const Form = (): JSX.Element => {
	// const [checked, setChecked] = useState<boolean>(false);

	// const onChange = () => {
	// 	setChecked(!checked);
	// };

	const { theme, handleChangeTheme } = useContext(ThemeContext);

	console.log(theme);

	return (
		<div className={styles.form__container}>
			<p
				className={cn(styles.form__caption, {
					[styles.form__caption_light]: theme,
				})}>
				Insert Row
			</p>
			<form action='' className={styles.form}>
				<input
					className={cn(styles.form__input, {
						[styles.form__input_light]: theme,
					})}
					type='text'
				/>
				<input
					className={cn(styles.form__input, {
						[styles.form__input_light]: theme,
					})}
					style={{ marginTop: '12px' }}
					type='text'
				/>
				<div>
					<select
						className={cn(styles.form__select, {
							[styles.form__select_light]: theme,
						})}
						name=''
						id=''></select>
				</div>
				<div className={styles.checkbox__container}>
					<input
						id='checkbox'
						name='checkbox'
						type='checkbox'
						className={styles.form__checkbox}
					/>
					<label
						htmlFor='checkbox'
						className={cn(styles.form__label, {
							[styles.form__label_light]: theme,
						})}>
						Employed
					</label>
				</div>
				<button
					className={cn(styles.form__button, {
						[styles.form__button_light]: theme,
					})}>
					Insert
				</button>
				<div className={styles.form__line}></div>
				<div className={styles.form__switch}>
					<input
						type='checkbox'
						id='switch'
						className={styles.checkbox__switch}
						defaultChecked={theme}
						onChange={handleChangeTheme}
					/>
					<label
						className={cn(styles.switch__label, {
							[styles.switch__label_light]: theme,
						})}
						htmlFor='switch'>
						Toggle
					</label>
					<label
						htmlFor='switch'
						className={cn(styles.form__label, {
							[styles.form__label_light]: theme,
						})}
						style={{ marginLeft: '5px' }}>
						Mode
					</label>
				</div>
				<button
					className={cn(styles.form__button, {
						[styles.form__button_light]: theme,
					})}>
					Delete
				</button>
			</form>
		</div>
	);
};

export default Form;
