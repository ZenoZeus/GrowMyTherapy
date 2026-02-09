import React from "react";
import "../style.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


function App() {
  return(

    <Routes>
        <Route path="/" element={<Home />} />
  </ Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MantineProvider><BrowserRouter><App /></BrowserRouter></MantineProvider>);

