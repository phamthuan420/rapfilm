import { configureStore } from "@reduxjs/toolkit";
import OrderTicket from "./reducers/RapFilm";

const store = configureStore({
  reducer: {
    OrderTicket: OrderTicket,
  },
});

// store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
store.subscribe(() => {
  // store.getState(): Hàm dùng để lấy ra state hiện tại của store
  console.log("Giá trị state của store:", store.getState());
});
export default store;
