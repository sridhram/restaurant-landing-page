import { React, useState } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import "./Footer.css";

const Footer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <article className="app__footer--main-container" id="book-table">
      <section className="app__footer--reserve-container">
        <SubHeading text="Reservations" />
        <h1>Book A Table</h1>
        <div className="app__footer--date-container">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            filterTime={filterPassedTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            maxDate={addDays(new Date(), 13)}
            showDisabledMonthNavigation
          />
        </div>
        <button className="app__home--btn">Book Now</button>
      </section>
    </article>
  );
};

export default Footer;
