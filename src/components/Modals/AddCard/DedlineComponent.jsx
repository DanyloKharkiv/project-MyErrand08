import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DedlineComponent({ value, onChange }) {
  console.log("DedlineComponent", value);
  console.log(onChange);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DatePicker"]}> */}
      {/* <DatePicker value={value} onChange={(newValue) => setValue(newValue)} /> */}
      {/* </DemoContainer> */}
      <DatePicker
        value={value}
        onChange={onChange}
        sx={{
          fontSize: "10px",
          marginBottom: "14px",
        }}
      />
    </LocalizationProvider>
  );
}
