import {useState, useEffect} from 'react';

export default function usePersistedState(key, inicialState){
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);
        if(storageValue){
            return JSON.parse(storageValue);
        }else{
            return inicialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    },[state, key]);

    return [state,setState];
}