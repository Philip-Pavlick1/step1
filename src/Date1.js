import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Date1({value, onChange }) {
const [date, setDate] = useState(new Date());

return (
<DatePicker selected={value} onChange={date => {setDate(date); onChange({target: {value: date}})}} />

);
}