import {Sidebar} from "./components/Sidebar/Sidebar"
import { Content } from "./components/Content/Content";

import "./App.css"

function App() {
  return (
    <div className="App">
     <div className="container">
		 	<Sidebar/>
		 	<Content/>
		 </div>
    </div>
  );
}

export default App;
