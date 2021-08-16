import React from "react";
import "./tour.css";

export default function Tour({ id, name, info, image, price, data, setData }) {
    return (
        <article className="tour">
            <div className="tour-image-container">
                <img className="tour-image" src={image} alt="City"></img>
            </div>

            <div className="tour-title-row">
                <h2 className="tour-title-main">{name}</h2>
                <p className="tour-price">${price}</p>
            </div>
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
        </article>
    );
}
