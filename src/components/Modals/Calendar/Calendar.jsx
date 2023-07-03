import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
//import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function Calendar({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DatePicker"]}> */}
      <DatePicker
        //defaultValue={dayjs()}
        views={["year", "month", "day"]}
        disablePast
        value={value}
        onChange={onChange}
        sx={{
          fontSize: "10px",
          marginBottom: "14px",
        }}
      />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}

// import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { parseISO } from 'date-fns';

// const Calendar = ({ prop, click, setFieldValue }) => {
//   const handleDateChange = (selectedDate) => {
//     click(selectedDate);
//     setFieldValue('deadline', selectedDate);
//   };

//   const date = new Date(prop);

//   return (
//     <DatePicker
//       selected={date}
//       minDate={new Date()}
//       calendarStartDay={1}
//       onChange={handleDateChange}
//     />
//   );
// };


// export default Calendar;
