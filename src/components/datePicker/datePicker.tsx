import * as React from "react";
import Calendar from "@mui/icons-material/Event";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { es } from "date-fns/locale";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import styles from "./styles.module.scss";

const DatePicker = () => {
  return (
    <div>
      <LocalizationProvider locale={es} dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDateRangePicker"]}>
          <MobileDateRangePicker
            
            label="Промежуток времени"
            slots={{ field: SingleInputDateRangeField }}
            slotProps={{
              textField: {
                InputProps: { endAdornment: <Calendar /> },
                size: "small",
                InputLabelProps: { shrink: true },
                sx:{
                  "& .MuiInputBase-root": {
                    height: 40,
                    borderRadius: 2.5,
                    
                  },
                }
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export default DatePicker;
