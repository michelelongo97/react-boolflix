import { createContext, use, useContext, useState } from "react";

//Creo contesto
const AppDataContext = createContext();

// Definisco un custom proivider (chi trasmette dati da condividere)

function AppDataProvider({ children }) {
  //aggiungi stato movies da condividere
  const [movies, setMovies] = useState([]);
  return (
    <AppDataContext.Provider value={{ movies, setMovies }}>
      {children}
    </AppDataContext.Provider>
  );
}

// Creo un custom hook (una funzione ) per consumare questo contensto
// servità per recuperare i datI DAL CONTESTO
function useAppDataContext() {
  const context = useContext(AppDataContext);
  return context;
}

//esporto dsia provider che l'hook per consumare il contesto
export { AppDataProvider, useAppDataContext };
