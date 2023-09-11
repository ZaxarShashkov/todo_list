import React, {
	useState,
	useContext,
	ChangeEvent,
	MouseEvent,
	createContext,
	useEffect,
	ReactNode,
} from 'react';
import { IData } from '../../interfaces/IData';
import { ThemeContext } from '../../App';

import Select from '../Select/Select';
import { CheckBox } from '../Checkbox/Checkbox';

import cn from 'classnames';
import styles from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const FormContext = createContext<any>(null);

const Form = (): JSX.Element => {
	const { theme, handleChangeTheme, data, setData, selectedEmployee } = useContext(ThemeContext);
	const [value, setValue] = useState<IData>({
		id: uuidv4(),
		name: '',
		age: '',
		subscription: '',
		employment: '',
	});

	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		if (checked) {
			setValue({ ...value, employment: 'Employed' });
		} else {
			setValue({ ...value, employment: 'Unemployed' });
		}
	}, [checked]);

	const onRemove = (e: MouseEvent) => {
		e.preventDefault();
		setData(data.filter((item: IData) => item.id !== selectedEmployee));
	};

	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setValue({ ...value, name: e.currentTarget.value });
	};
	const onChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
		setValue({ ...value, age: Number(e.currentTarget.value) });
	};

	const onChangeEmployed = () => {
		setChecked(!checked);
	};

	const onClickAgeUp = () => {
		if (Number(value.age) < 18) {
			setValue({ ...value, age: Number(value.age) + 18 });
		} else if (Number(value.age) >= 18) {
			setValue({ ...value, age: Number(value.age) + 1 });
		}
	};

	const onClickAgeDown = () => {
		if (Number(value.age) > 18) {
			setValue({ ...value, age: Number(value.age) - 1 });
		}
	};

	const addEmployee = (e: MouseEvent) => {
		e.preventDefault();
		setData([...data, value]);
		setValue({ id: uuidv4(), name: '', age: '', subscription: '', employment: '' });
	};

	return (
		<FormContext.Provider value={{ value, setValue, checked, setChecked }}>
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
					<div className={styles.form__input_container}>
						<div className={styles.arrow__close} onClick={onClickAgeDown}>
							<svg
								width='20'
								height='6'
								viewBox='0 0 20 9'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.433594 0.508411C0.705097 0.195587 1.17879 0.16209 1.49161 0.433594L8.9007 6.86403C9.49367 7.37867 10.5063 7.37867 11.0993 6.86403L18.5084 0.433594C18.8212 0.16209 19.2949 0.195587 19.5664 0.508411C19.8379 0.821235 19.8044 1.29493 19.4916 1.56643L12.0825 7.99686C10.9255 9.00106 9.07453 9.00106 7.9175 7.99686L0.508411 1.56643C0.195587 1.29493 0.16209 0.821235 0.433594 0.508411Z'
									fill='#d7dbdec9'
								/>
							</svg>
						</div>
						<div className={styles.arrow__open} onClick={onClickAgeUp}>
							<svg
								width='20'
								height='6'
								viewBox='0 0 20 9'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.433594 0.508411C0.705097 0.195587 1.17879 0.16209 1.49161 0.433594L8.9007 6.86403C9.49367 7.37867 10.5063 7.37867 11.0993 6.86403L18.5084 0.433594C18.8212 0.16209 19.2949 0.195587 19.5664 0.508411C19.8379 0.821235 19.8044 1.29493 19.4916 1.56643L12.0825 7.99686C10.9255 9.00106 9.07453 9.00106 7.9175 7.99686L0.508411 1.56643C0.195587 1.29493 0.16209 0.821235 0.433594 0.508411Z'
									fill='#d7dbdec9'
								/>
							</svg>
						</div>
					</div>
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
						<CheckBox />
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
						})}
						onClick={addEmployee}>
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
						})}
						onClick={(e) => onRemove(e)}>
						Delete
					</button>
				</form>
			</div>
		</FormContext.Provider>
	);
};

export default Form;
