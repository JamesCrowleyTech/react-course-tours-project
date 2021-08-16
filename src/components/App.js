import React from "react";
import "./App.css";
import ToursList from "./toursList";
import PageTitle from "./pageTitle";

function App() {
    return (
        <div className="App">
            <PageTitle></PageTitle>
            <ToursList></ToursList>
        </div>
    );
}

export default App;
