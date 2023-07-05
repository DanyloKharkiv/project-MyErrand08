import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

export default function Calendar({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={dayjs()}
        views={["year", "month", "day"]}
        disablePast
        value={value}
        onChange={onChange}
        sx={{
          fontSize: "24px",
          marginBottom: "14px",
          backgroundColor: "var(--modalInputBg)",
          borderRadius: "8px",
          border: "1px solid var(--modalInputBorder)",
        }}
      />
    </LocalizationProvider>
  );
}
