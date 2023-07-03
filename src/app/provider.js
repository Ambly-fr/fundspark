"use client";

import store from "./store";
import { Provider } from "react-redux";
import React from "react";
import { useSelector } from 'react-redux';


export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
