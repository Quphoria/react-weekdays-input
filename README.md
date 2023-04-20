# react-weekdays-input 👋
A highly customizable and easy to use react input that allows users to select days of the week with a user friendly interface

![Example](https://i.imgur.com/KjXI4hs.png)

## Installation 
`npm i react-weekdays-input`

## Demo 👀
[https://axelmy-projects-showcase.firebaseapp.com/react-weekdays-input](https://axelmy-projects-showcase.firebaseapp.com/react-weekdays-input)

## Usage 💻

```javascript
import React, { useState } from 'react'
import { WeekdaysInput } from 'react-weekdays-input'

const Example = () => {
    const [daysAsString, setDaysAsString] = useState('0010010') //Wednesday and saturday active
    const [daysAsObject, setDaysAsObject] = useState([0, 0, 1, 0, 0, 1, 0]) //Wednesday and saturday active

    return (
        <>
            {/*Using default styling and props*/}
            <WeekdaysInput
                value={daysAsString}
                onChange={(value) => setDaysAsString(value)}
            />

            {/*Using custom props*/}
            <WeekdaysInput
                value={daysAsObject}
                onChange={(value) => setDaysAsObject(value)}
                days={[
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday'
                ]}        
                showChars={2} //mo, tu, we, th, fr, sa, su
                activeDayStyle={{
                    backgroundColor: 'pink',
                    color: '#000'
                }}
                inactiveDayStyle={{
                    backgroundColor: '#cececec',
                    color: 'white'
                }}
                dayStyle={{
                    border: '2px dotted black',
                }}
                inputStyle={{
                    margin: '10px',
                }}
                forcedState={{
                    0: 'none',
                    1: 'none',
                    2: 'active',
                    3: 'inactive',
                    4: 'none',
                    5: 'none',
                    6: 'none'
                }}
                textCase={'firstToUpper'} //Mo, Tu, We, Th, Fr, Sa, Su
            />
        </>
    )
}

export default Example
```

## API ✔

| Properties | type | default | description |
|--|--|--|--|
| value | string/array(int) | "0000000" | A string or an array of 7 integers representing the active days of the week. 0 being inactive, 1 being active. |
| showChars | int | null | The numbers of chars to show for the days names. Ex: Monday=Mo. null will display the entire word |
| onChange | function(string)/function(array(int)) | | The function that will be called when the user clicks on a day which provides the new value as a parameter. |
| days | array | ['monday','tuesday','wednesday'... | The array defining the name of the days |
| activeDayStyle | string |  | The CSS styling to apply to active days |
| inactiveDayStyle | string |  | The CSS styling to apply to inactive days |
| inputStyle | object |  | The CSS styling of the whole input |
| dayStyle | object |  | The CSS styling used for each days |
| forcedState | object |  | Force certain days to be active or inactive. See examples above |
| textCase | string | null | Defines the case of the text. Available: firstToUpper (Monday), toUpper (MONDAY), toLower (monday) |
| wrapperClassName | string | null| A class that you may optionally provide for external modifications of the wrapper style. |
| selectorClassName | string | null| A class that you may optionally provide for external modifications of the day selection style. |
| renderOrder | array(int) | [0, 1, 2, 3, 4, 5, 6] | Determines which position each day will render. [Index]: the renderring slot. [Value]: The numeric value representing a day (nth index of the days array) that should be renderred in this slot. (Useful for renderring days in a different order, rather than the order in which they appear in the days parameter) |