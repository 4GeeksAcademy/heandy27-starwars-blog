import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardStarships = () => {
    const { store, actions } = useContext(Context)
    let storeFavorites = store.favorites
    return (
        <>
            {store.starships.map((value, index) => (

                <div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src={`${value.uid == 2 || value.uid == 3 || value.uid == 17 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                                : `https://starwars-visualguide.com/assets/img/starships/${value.uid}.jpg`}`} />

                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <div className="d-flex justify-content-between">
                                <Link to={`/singlestarshippage/${value.uid}`}>
                                    <button className="btn btn-primary">Learn more!</button>
                                </Link>
                                <button className={`btn btn-warning border-0 text-light  ${storeFavorites.includes(value.name) ? "disabled" : ""}`} onClick={() => {
                                    actions.getFavorite(value.name)
                                }}><i className="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default CardStarships