import React, { FunctionComponent, useState } from "react";

import { Meta, StoryObj } from '@storybook/react';

import WeekdaysInput from "./WeekdaysInput";

const meta: Meta<typeof WeekdaysInput> = {
	title: "WeekdaysInput/WeekdaysInput",
	component: WeekdaysInput,
	argTypes: {
		showChars: { control: "number" }
	},
};

export default meta;
type Story = StoryObj<typeof WeekdaysInput>;

const Template = ( args: Partial<any> | undefined ) => {
    const [days, setDays] = useState("0001100");
    const [daysObject, setDaysObject] = useState([0, 1, 0, 0, 0, 0, 1]);

    return (
		<>
			<h2>String value</h2>
			<WeekdaysInput
				value={days}
				onChange={(value) => setDays(value)}
				{...args}
			/>
			state: {days}
			<p/>

			<h2>Object value</h2>
			<WeekdaysInput
				value={daysObject}
				onChange={(value) => setDaysObject(value)}
				{...args} 
			/>

			state: {daysObject.map(value => <span>{value}</span>)}
		</>
	);
};

export const Primary: Story = {
	render: () => <Template />,
	args: {
		showChars: 2,
		days: [
			"monday", 
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
			"sunday"
		],
		forcedState: {
			0: "none",
			1: "none",
			2: "active",
			3: "inactive",
			4: "none",
			5: "none",
			6: "none"
		},
		textCase: "firstToUpper"
	}
};

export const Secondary: Story = {
	render: () => <Template />,
	args: {
		days: [
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
			"sunday"
		],      
		showChars: 2, //mo, tu, we, th, fr, sa, su
		activeDayStyle: {
			backgroundColor: "green",
			color: "white"
		},
		inactiveDayStyle: {
			backgroundColor: "pink",
			color: "black"
		},
		inputStyle: {
			margin: "10px",
			color: "white",
		},
		dayStyle: {
			border: "2px dotted black",
		},
	}
};