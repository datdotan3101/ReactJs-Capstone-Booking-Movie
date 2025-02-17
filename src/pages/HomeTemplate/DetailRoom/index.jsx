import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListSeat } from "./sliceBooking";

export default function DatVe() {
  const state = useSelector((state) => state.ListSeatReducer);
  const { data } = state;

  const { id } = useParams;
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListSeat(id));
  }, []);

  const renderRow = () => {
    return (
      <div className="space-x-10">
        <span>A</span>
        {data?.danhSachGhe.map((seat) => (
          <button key={seat.maGhe}>{seat.tenGhe}</button>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-20">
      <h1>Phòng vé</h1>
      <div className="flex">
        {/* màn hình  */}
        <div>
          <div className="space-x-12">
            <span></span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
          </div>
          {renderRow()}
        </div>
        {/* Thông tin ghế  */}
        <div>
          <h1>Ghế đang chọn</h1>
        </div>
      </div>
    </div>
  );
}
