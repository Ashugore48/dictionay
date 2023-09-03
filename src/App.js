import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchComp from "./components/SearchComp";
import SearchHistory from "./components/SearchHistory";
import store from "./components/store";
import { Provider } from "react-redux";

function App() {
  const [showSearchComp, setShowSearchComp] = useState(true);
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  const toggleComponents = () => {
    setShowSearchComp(!showSearchComp);
    setShowSearchHistory(!showSearchHistory);
  };

  return (
    <Provider store={store}>
      <Navbar onHistoryClick={toggleComponents} />
      {showSearchComp && <SearchComp />}
      {showSearchHistory && <SearchHistory />}
    </Provider>
  );
}

export default App;
