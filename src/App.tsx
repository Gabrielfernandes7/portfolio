import React from "react";
import Home from "./pages/Home/Home";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';    

const App = () => {
  return (
    <div style={{
      margin: 0,
      padding: 0
    }}>
      <Home />
    </div>
  );
};

export default App;
