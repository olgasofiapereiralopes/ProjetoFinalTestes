import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export function DateRangeCalendarCurrentMonthCalendarPositionProp() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        <DateRangeCalendar currentMonthCalendarPosition={2} enableFuture />
      </DemoContainer>
    </LocalizationProvider>
  );
}
