import React, { useState, useEffect } from 'react';
import { ModalDatePickerWrapper } from './ModalDatePicker.styled';
import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';

interface IProps {
    setaDataFormDate: (date: string) => void;
    width?: string;
}
export const ModalDatePicker = ({setaDataFormDate, width}: IProps) => {

    const [value, setValue] = useState<dayjs.Dayjs>(dayjs());

    const handleChange = (newValue: dayjs.Dayjs | null) => {
        if (newValue) {
            setValue(newValue);
        }
    };

    useEffect(() => {

        const dateString = dayjs(`${value}`).format('DD.MM.YYYY');
        setaDataFormDate(dateString);

    },[setaDataFormDate, value]);

    return  (

        <ModalDatePickerWrapper width={width} className="modal-transaction-date-wrapper">
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Select date"
                    format="MM/DD/YYYY"
                    value={`${value}`}
                    onChange={handleChange}
                    //renderInput={(params: any) => <TextField  {...params}/>}
                    showDaysOutsideCurrentMonth
                    //InputProps={{sx: {'& .MuiSvgIcon-root': {color: 'var(--active-blue)'}}}}
                />
            </LocalizationProvider> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    format="MM.DD.YYYY"
                    value={value}
                    onChange={handleChange}
                />
            </LocalizationProvider>
            
        </ModalDatePickerWrapper>
        
    );
};
