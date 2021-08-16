import React, { useState } from "react";
import "./tour.css";
import { firstNWordsOfString } from "../helpers";

export default function Tour({ id, name, info, image, price, data, setData }) {
    const unExpandedParagraphText = firstNWordsOfString(30, info) + " ...";

    let [paragraphExpanded, setParagraphExpanded] = useState(false);
    let [displayedInfo, setDisplayedInfo] = useState(unExpandedParagraphText);

    return (
        <article className="tour">
            <div className="tour-image-container">
                <img className="tour-image" src={image} alt="City"></img>
            </div>
            <div className="tour-details">
                <div className="tour-title-row">
                    <h2 className="tour-title-main">{name}</h2>
                    <p className="tour-price">${price}</p>
                </div>
                <p className="tour-paragraph">
                    {displayedInfo}{" "}
                    <span className="tour-toggle-paragraph">
                        <button
                            type="button"
                            className="tour-toggle-paragraph-button"
                            onClick={function () {
                                setDisplayedInfo(function () {
                                    if (!paragraphExpanded) return info;
                                    else return unExpandedParagraphText;
                                });
                                setParagraphExpanded(
                                    paragraphExpanded ? false : true
                                );
                            }}
                        >
                            {paragraphExpanded ? " Read Less" : " Read More"}
                        </button>
                    </span>
                </p>
                <button
                    className="tour-button"
                    type="button"
                    onClick={function () {
                        setData(
                            data.filter(function (t) {
                                return t.id !== id;
                            })
                        );
                    }}
                >
                    Not interested
                </button>
            </div>
        </article>
    );
}
