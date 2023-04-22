declare module "react-weekdays-input"
{
	import * as React from "react";

	export interface WeekdaysInputProps {
		value: string | number[];
		showChars?: number;
		onChange?: (newValue: number[]) => void;
		onChange?: (newValue: string) => void;
		days: string[];
		forcedState?: {
			[index: number]: "none" | "active" | "inactive";
		};
		activeDayStyle?: CSSProperties;
		inactiveDayStyle?: CSSProperties;
		inputStyle?: CSSProperties;
		dayStyle?: CSSProperties;
		textCase?: "firstToUpper" | "toUpper" | "toLower";
		wrapperClassName?: string;
		selectorClassName?: string;
		renderOrder?: number[];
	}

	declare class WeekdaysInput<T = { [key: string]: any }> extends React.Component<WeekdaysInputProps> { }
	export { WeekdaysInput };
}