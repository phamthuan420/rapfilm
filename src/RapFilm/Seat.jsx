import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Seat() {
  const { dsGhe } = useSelector((state) => state.OrderTicket);
  const dispatch = useDispatch();
  const handleClick = (event, hang) => {
    event.stopPropagation();
    const soGhe = event.target.innerHTML;

    dispatch({ type: "seat/vitri", soGhe, hang });
  };
  return (
    <div className="mt-5">
      {dsGhe.map((item, index) => {
        return (
          <div key={item.hang} className="row">
            <span className="rowNumber">{item.hang}</span>
            <div className="col-10">
              <div className="row">
                {item.danhSachGhe.map((seat) => {
                  return (
                    <div key={`${index}-${seat.soGhe}`} className="col-1 ">
                      <button
                        className={
                          index === 0
                            ? "firstChar"
                            : seat.daDat
                            ? "gheDuocChon"
                            : seat.selected
                            ? "gheDangChon"
                            : "ghe"
                        }
                        onClick={(seat) => handleClick(seat, item.hang)}
                      >
                        {seat.soGhe}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Seat;
