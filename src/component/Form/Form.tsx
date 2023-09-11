import React, { useState, useContext, ChangeEvent, MouseEvent, createContext } from 'react';
import { ThemeContext } from '../../App';
import cn from 'classnames';
import styles from './Form.module.scss';
import Select from '../Select/Select';

interface IValue {
	name: string;
	age: number | string;
	subscription: string;
}

export const FormContext = createContext<any>(null);

const Form = (): JSX.Element => {
	const [value, setValue] = useState<IValue>({ name: '', age: '', subscription: '' });
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setValue({ ...value, name: e.currentTarget.value });
		console.log(value);
	};
	const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
		setValue({ ...value, age: e.currentTarget.value });
	};

	// const handleClick = (e: MouseEvent<HTMLInputElement>) => {
	// 	setValue({ ...value, subscription: e.currentTarget.value });
	// };

	return (
		<FormContext.Provider value={{ value , setValue }}>
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
						placeholder='Name'
						value={value.name}
						onChange={(e) => onChangeName(e)}
					/>
					<input
						className={cn(styles.form__input, {
							[styles.form__input_light]: theme,
						})}
						style={{ marginTop: '12px' }}
						type='text'
						placeholder='Age'
						value={value.age}
						onChange={(e) => onChangeAge(e)}
					/>
					<div>
						<Select />
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
		</FormContext.Provider>
	);
};

export default Form;
