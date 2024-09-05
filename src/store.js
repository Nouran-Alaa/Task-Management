import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./features/kanban/kanbanSlice";

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export default store;
