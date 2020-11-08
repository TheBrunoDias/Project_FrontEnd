import {createContext, useContext, useState} from 'react';
import light from '../styles/themes/light';

const ThemeContext = createContext();

export default function GlobalContextProvider({children}){

    const [theme,setTheme] = useState(light);
    return(
        <ThemeContext.Provider
            value={{
               theme,
               setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    const context = useContext(ThemeContext);
    const {theme,setTheme} = context;
    return {theme,setTheme};
}