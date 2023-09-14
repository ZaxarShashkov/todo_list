import { IData } from './IData';

export interface IFormContenxt {
	value: IData;
	setValue: (arg: IData) => void;
	checked: boolean;
	setChecked: (arg: boolean) => void;
}
