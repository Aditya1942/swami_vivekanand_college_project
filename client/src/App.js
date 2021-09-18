import "./App.css";
import {
  CoCurricularActivitiesData,

  NssGaleryData,
} from "./Database";
import Router from "./Router";

function App() {
  console.log(NssGaleryData);
  console.log(CoCurricularActivitiesData);
  return( 
      <Router />
  )
}

export default App;
