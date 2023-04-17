import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Table() {
  const { selectedChair } = useSelector((state) => state.OrderTicket);
  const dispatch = useDispatch();
  const handlePaying = () => {
    dispatch({ type: "table/thanhtoan" });
  };
  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr className="text-light">
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {selectedChair.map((item, index) => {
            return (
              <tr className="firstChar" key={`${index}-${item.soGhe}`}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button className="btn btn-primary">X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="firstChar">
            <td>Tổng</td>
            <td>
              {selectedChair.reduce((total, item) => {
                return (total += parseInt(item.gia));
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-secondary" onClick={handlePaying}>
        Thanh toán
      </button>
    </div>
  );
}

export default Table;
