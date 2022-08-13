import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const values = {
    activeMenu,
    isClicked,
    screenSize,
    setActiveMenu,
    setIsClicked,
    handleClick,
    setScreenSize,
  };

  return <StateContext.Provider value={values}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
