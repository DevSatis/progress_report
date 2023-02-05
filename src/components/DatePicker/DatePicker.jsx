import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./DatePicker.css";

const DatePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(),2),
      key: "selection",
    },
  ]);
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
          value={`${format(range[0].startDate,"dd MMM yyyy")} to ${format(
            range[0].endDate,"dd MMM yyyy")}`}
          readOnly
          className="inputbox"
          onClick={() => setOpen((open) => !open)}
        />
        <div className="arrow">
          <ArrowDropDownIcon
            onClick={() => setOpen((open) => !open)}
           />
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
