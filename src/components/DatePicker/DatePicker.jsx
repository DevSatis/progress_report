import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./DatePicker.css";

const DatePicker = ( {dataReady }) => {
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), -364),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  console.log(range);
  const startDateP = format((range[0].startDate), "MMM yyyy");
  const endDateP = format((range[0].endDate), "MMM yyyy");
  console.log(startDateP)
  console.log(endDateP)
  
  const [monthsArray, setMonthsArray] = useState(null);
  useEffect(() => {
    const startDate =  new Date(startDateP);  // January 1, 2022
    const endDate = new Date(endDateP);  // January 1, 2023
    const monthArr = [];

    //Getting the Months which is in between Start date and end Date
    while (startDate <= endDate) {
      monthArr.push(startDate.toLocaleString('default', { month: 'short' }) + " " + startDate.getFullYear());
      startDate.setMonth(startDate.getMonth() + 1);
    }
    setMonthsArray(monthArr);
    dataReady(monthsArray);
    
  }, [startDateP, endDateP ]);
  console.log(monthsArray);

 
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    //Set the correct date in the component

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  //Hide if esc key press
  const hideOnEscape = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };
  //Hide if pressed outside of the date picker
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current);
    // console.log(e.target);
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="datepicker">
      <div className="inputWrap">
        <input
          value={`${format(range[0].startDate, "dd MMM yyyy")} to ${format(
            range[0].endDate,
            "dd MMM yyyy"
          )}`}
          readOnly
          className="inputbox"
          onClick={() => setOpen((open) => !open)}
        />
        <div className="arrow">
          <ArrowDropDownIcon onClick={() => setOpen((open) => !open)} />
        </div>
      </div>
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calenderelement"
          />
        )}
      </div>
    </div>
  );
};
export default DatePicker;
