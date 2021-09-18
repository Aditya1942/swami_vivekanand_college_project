import { useContext } from "react";
import { AppContext } from "../Approuter";

export default function useLoader() {
  const App = useContext(AppContext);
   return App.Loader;
}
