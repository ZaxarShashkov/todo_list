import { IData } from './IData';

export interface IThemeContext {
	theme: boolean;
	handleChangeTheme: () => void;
	setData: (arg: IData[]) => void;
	data: IData[];
	selectedEmployee: string | undefined | number;
	setSelectedEmployee: (arg: string | undefined | number) => void;
}
