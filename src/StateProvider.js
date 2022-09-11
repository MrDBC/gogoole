import React, { createContext, useContext, useReducer } from 'react';

//  preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => ( //chidren is 
    //basically the <App /> component

    <StateContext.Provider value={useReducer(reducer, initialState,)} >
        {children}
    </StateContext.Provider>
);
// initialState is what the data layer looks when the app is loaded 
// reducer - listens to the changes 



// it is a hook which allows us to pull info from the data layer 
export const useStateValue = () => useContext(StateContext);