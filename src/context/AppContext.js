import { createContext, useContext, useState } from "react";

const AppContext =createContext();

const AppProvider=({children})=>{
    const [searchDate,setSearchDate]=useState(false);

    const swapSearchDate = ()=>{
        setSearchDate(prev=>!prev);
    }

    return (
        <AppContext.Provider value={{searchDate,swapSearchDate}} >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppProvider;