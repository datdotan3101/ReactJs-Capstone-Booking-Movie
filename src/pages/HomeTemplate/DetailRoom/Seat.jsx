import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { setSeatSelected } from "./sliceBooking";
export default function Seat({ seat }) {
  const [isChoosing, setIsChoosing] = useState(false);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        setIsChoosing(!isChoosing);
        dispatch(setSeatSelected(seat));
      }}
      disabled={seat.daDat}
      className={`ghe ${seat.daDat ? "gheDaChon" : ""} ${
        isChoosing ? "gheDangChon" : ""
      }`}
    >
      {seat.tenGhe}
    </button>
  );
}
