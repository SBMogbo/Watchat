import React from "react";
import { StoreProvider } from "./utils/GlobalState";
import RootContainer from './RootContainer';
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./utils/AppSlice";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({
    reducer,
  });
  return (
    <Provider store={store}>
      <StoreProvider>
        <RootContainer />
      </StoreProvider>
    </Provider>

  );
}

export default App;
