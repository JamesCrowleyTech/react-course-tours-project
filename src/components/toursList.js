import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
import Tour from "./tour.js";
import "./toursList.css";

export default function ToursList() {
    let [isDataResolved, setIsDataResolved] = useState(false);
    let [data, setData] = useState(null);

    useEffect(function () {
        fetch(API_URL)
            .then(function (d) {
                if (!d.ok) throw new Error("Could not load tour data");
                return d.json();
            })
            .then(function (newData) {
                setData(newData);
                setIsDataResolved(true);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!isDataResolved)
        return <h1 className="tourslist-loading">Loading...</h1>;
    else
        return (
            <div className="toursList">
                {data.map(function (tour) {
                    return (
                        <Tour {...tour} data={data} setData={setData}></Tour>
                    );
                })}
            </div>
        );
}
