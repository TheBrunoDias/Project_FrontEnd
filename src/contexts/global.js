import {createContext, useContext} from 'react';
import light from '../styles/themes/light';

import usePersistedSate from './usePersistedState';

const ThemeContext = createContext();

export default function GlobalContextProvider({children}){

    const [theme,setTheme] = usePersistedSate('theme', light);
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