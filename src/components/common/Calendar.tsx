import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import CustomInput from "./CustomInput";
import Image from "next/image";

export interface CalendarProps {
  value: string;
  onChange: (value: string) => void;
}

const Calendar = ({ value, onChange }: CalendarProps) => {
  const [deadline, setDeadline] = useState<string>("");
  const [date, setDate] = useState(null);

  // const handleDateChange = (newDate: any) => {
  //   setDate(newDate);
  //   onChange(newDate ? newDate.format("YYYY년 MM월 DD일") : null);
  // };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setDeadline(newDate ? newDate.format("YYYY년 MM월 DD일") : null);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDemoContainer components={["DatePicker"]}>
          <CalendarInput
            value={deadline}
            placeholder="날짜를 선택해주세요"
            onChange={(value: any) => setDeadline(value)}
            // value={value}
            // placeholder="날짜를 선택해주세요"
            // onChange={(value: any) => onChange(value)}
            readonly={true}
          />
          <IconImage
            src="/assets/icons/ic_calendar.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <StyledMobileDatePicker
            format="YYYY년 MM월 DD일"
            value={date}
            onChange={handleDateChange}
          />
        </StyledDemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Calendar;

const StyledDemoContainer = styled(DemoContainer)({
  position: "relative",
});

const StyledMobileDatePicker = styled(MobileDatePicker)({
  width: "90%",
  position: "absolute",
  top: "200px",
  left: "50%",
  transform: "translate(-50%, 0)",
  "& .MuiInputBase-root": {
    height: "44px",
    borderColor: "#FFD09C",
    color: "#334155",
    borderRadius: "10px",
    borderWidth: "1px",
    background: "rgba(255, 135, 0, 0.05)",
    fontWeight: "500",
    opacity: "0",
    "&:hover": {
      border: "none",
      outline: "none",
    },
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFD09C",
    color: "#334155",
    borderRadius: "10px",
    borderWidth: "1px",
    background: "rgba(255, 135, 0, 0.05)",
    fontWeight: "600",
  },
});

const CalendarInput = styled(CustomInput)({
  position: "absolute",
  top: "200px",
  left: "50%",
  transform: "translate(-50%, 0)",
});

const IconImage = styled(Image)({
  position: "absolute",
  top: "212px",
  right: "35px",
});
