import React, { act, useState } from "react";
import { useContext } from "react";
import { Context } from "./../store/appContext"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const CardCharacters = () => {


    const { store, actions } = useContext(Context)


    let storeFavorites = store.favorites
    return (
        <div className="container">
            {store.characters.length == 0
                ? <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> :
                <div className="d-flex gap-5">
                    {store.characters.map((value, index) => (

                        <div>
                            <div className="card" style={{ width: "18rem" }}>

                                <img src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/singlecharacterpage/${value.uid}`}>
                                            <button className="btn btn-primary">Learn more!</button>
                                        </Link>
                                        <button className={`btn btn-warning border-0 text-light ${storeFavorites.includes(value.name) ? "disabled" : ""}`}><i className="fa-solid fa-heart" onClick={() => {
                                            actions.getFavorite(value.name)

                                        }}></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default CardCharacters