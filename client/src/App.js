import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";
//import {Switch} from "react-router"
//"react-router": "^6.7.0"
//"react-router-dom": "^6.7.0",

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadPage/>} />
          <Route path="/create" element={<CreatePage/>}/>
          <Route path="/update/:id" element={<UpdatePage/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

