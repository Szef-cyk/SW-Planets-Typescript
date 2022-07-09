import React, { createContext } from "react";
import { useState, useContext, useEffect, useRef } from "react";
const url = "https://swapi.dev/api/planets/";

type InputValue = HTMLInputElement | null;
export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  orbital_period: string;
  id:number;
}
interface IAppContext {
  data: Planet[];
  newData: Planet[];
  amountOfCards: number;
  loading: boolean;
  alert: boolean;
  inputRef: React.MutableRefObject<InputValue> | null;
  setData: (data: Planet[]) =>void;
  setNewData: (newData: Planet[])=>void;
  setAmountOfCards: (amountOfCards: number)=>void;
  setLoading: (loading: boolean)=>void;
  setAlert: (alert: boolean)=>void
}

const AppContext = createContext<IAppContext>({
  loading: true,
  data: [],
  newData: [],
  amountOfCards: 0,
  inputRef: null,
  alert: false,
  setData: () =>[],
  setNewData: ()=>[],
  setAmountOfCards: ()=>0,
  setLoading: ()=>true,
  setAlert: ()=>false,
});

const AppProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState<Planet[]>([]);
  const [newData, setNewData] = useState<Planet[]>([]);
  const [amountOfCards, setAmountOfCards] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [alert, setAlert] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchData = async function () {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    if (results) {
      const planetsList = results.map((planet: Planet) => {
        const { name, climate, terrain, orbital_period } = planet;
        return {
          name,
          climate,
          terrain,
          period: orbital_period,
          id: results.indexOf(planet) + 1,
        };
      });
      setData(planetsList);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        newData,
        loading,
        amountOfCards,
        alert,
        inputRef,
        setNewData,
        setAlert,
        setAmountOfCards,
        setData,
        setLoading,
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
