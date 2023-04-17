import danhSachGhe from "../RapFilm/danhSachGhe.json";

const data = {
  dsGhe: danhSachGhe,
  selectedChair: [],
};
function OrderTicket(state = data, action) {
  switch (action.type) {
    case "seat/vitri": {
      const indexHang = state.dsGhe.findIndex(
        (item) => item.hang === action.hang
      );
      const danhSachGhe = state.dsGhe[indexHang].danhSachGhe.map((item) => {
        if (item.soGhe === action.soGhe) {
          if (!item.selected) {
            return { ...item, selected: true };
          } else if (item.selected) {
            return { ...item, selected: false };
          }
        }
        return item;
      });
      console.log("danhSachGhe", danhSachGhe);

      const dsGhe = state.dsGhe.map((item) => {
        if (item.hang === action.hang) {
          return { ...item, danhSachGhe: danhSachGhe };
        }
        return item;
      });
      console.log("dsGhe", dsGhe);

      const seatBooking = dsGhe[indexHang].danhSachGhe.find(
        (item) => item.soGhe === action.soGhe
      );
      console.log("searBooking", seatBooking);
      let selectedChair = [...state.selectedChair];

      if (seatBooking?.selected) {
        selectedChair.push(seatBooking);
      } else {
        const index = selectedChair.findIndex(
          (item) => item.soGhe === action.soGhe
        );

        // if (index !== -1) {
        //   selectedChair = selectedChair.filter(
        //     (item) => item.soGhe !== action.soGhe
        //   );
        // }

        console.log("index", index);
        selectedChair.splice(index, 1);
      }
      // selectedChair.filter((item) => {
      //   item.soGhe !== action.soGhe;
      // });
      console.log("selected", selectedChair);
      return { ...state, dsGhe, selectedChair };
    }
    case "table/thanhtoan": {
      const dsGhe = state.dsGhe.map((item) => {
        const danhSachGhe = item.danhSachGhe.map((ghe) => {
          if (ghe.selected) {
            return { ...ghe, daDat: true, selected: false };
          }
          return ghe;
        });
        return { ...item, danhSachGhe };
      });
      const selectedChair = [];
      //   const selectedChair = selectedPaying.map((item) => {
      //     if (item.selected) {
      //       return { ...item, daDat: true, selected: false };
      //     }
      //     return item;
      //   });
      console.log("Thanh toán");
      return { ...state, dsGhe, selectedChair };
    }

    default:
      return state;
  }
}
export default OrderTicket;
