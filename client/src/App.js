import React, { Fragment } from "react";
import NavBar from './components/NavBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <SearchBar />
    </Fragment>

  );
}

export default App;
