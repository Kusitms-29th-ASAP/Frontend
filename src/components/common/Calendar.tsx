import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import CustomInput from "./CustomInput";
import Image from "next/image";
import dayjs from "dayjs";
import styled from "styled-components";

export interface CalendarProps {
  value: string;
  onChange: (value: string) => void;
  color?: "black";
  disabled?: boolean;
  placeholder?: string;
}

const Calendar = (props: CalendarProps) => {
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const { value, onChange, disabled, placeholder } = props;

  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    setDate(newDate);
    if (newDate) {
      onChange(newDate.format("YYYY년 MM월 DD일"));
    } else {
      setDate(null);
      onChange("");
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDemoContainer components={["DatePicker"]}>
          <CustomInputContainer>
            <CalendarInput
              value={value}
              placeholder={placeholder ? placeholder : "날짜를 선택해주세요"}
              onChange={() => {}}
              readonly={true}
              color="black"
              disabled={disabled}
            />
            <IconImage
              src="/assets/icons/ic_calendar.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            {!disabled && (
              <StyledMobileDatePicker
                format="YYYY년 MM월 DD일"
                value={date}
                onChange={handleDateChange}
              />
            )}
          </CustomInputContainer>
        </StyledDemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default Calendar;

const StyledDemoContainer = styled(DemoContainer)`
  width: 100%;
  position: relative;
`;

const CustomInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledMobileDatePicker = styled(MobileDatePicker)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  & .MuiInputBase-root {
    height: 44px;
  }
`;

const CalendarInput = styled(CustomInput)`
  width: 440px;
  position: absolute;
  top: 0;
  left: 0;
`;

const IconImage = styled(Image)`
  position: absolute;
  top: 12px;
  right: 15px;
`;
