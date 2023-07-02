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
        defaultValue={dayjs()}
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

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import CustomInput from './CalendarInput';
// import { Container, DateDeadline } from './Calendar.Styled';

// function CustomDatePicker({ startDeadline, setStartDeadline }) {
//   const options = {
//     weekday: 'short',
//     month: 'short',
//     day: 'numeric',
//   };

//   return (
//     <Container>
//       <DatePicker
//         selected={startDeadline}
//         onChange={date => {
//           setStartDeadline(date);
//         }}
//         customInput={<CustomInput />}
//         dateFormat={'dd/MM/yyyy'}
//         minDate={new Date()}
//       />
//       <DateDeadline>
//         {startDeadline.toLocaleDateString('en-US', options)}
//       </DateDeadline>
//     </Container>
//   );
// }

// export default CustomDatePicker;
