import { useState, useEffect, Dispatch, SetStateAction } from "react";
import light from "../styles/themes/light";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T>{
  const [ state, setState ] = useState(() => {
    const storageValue = localStorage.getItem(key);

    return !storageValue ? initialState : JSON.parse(storageValue);  
  }); 

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState]
}

export default usePersistedState;