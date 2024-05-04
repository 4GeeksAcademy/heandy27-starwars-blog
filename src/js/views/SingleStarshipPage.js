import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

const SingleStarshipPage = () => {
    const { store, actions } = useContext(Context)
    const params = useParams();
    console.log(params.idStar);

    useEffect(() => {
        actions.getStarshipSingle(params.idStar)
    }, [])
    return (
        <>

            <div>

                <div className="container">

                    <div className="row  border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col">  <img
                            src={`${params.idStar == 2 || params.idStar == 3 || params.idStar == 17 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                                : `https://starwars-visualguide.com/assets/img/starships/${params.idStar}.jpg`}`} /></div>
                        <div className="col text-center ">
                            <h1>{store.singleStarshipProperties.name}</h1>
                            <p>{store.singleStarship.description}</p>
                        </div>


                    </div>

                    <div className="row py-5">
                        <div className="col">
                            <p><strong>Name</strong></p>
                            <p>{store.singleStarshipProperties.name}</p>
                        </div>
                        <div className="col">
                            <p><strong>Model</strong></p>
                            <p>{store.singleStarshipProperties.model}</p>
                        </div>
                        <div className="col">
                            <p><strong>Cargo Capacity</strong></p>
                            <p>{store.singleStarshipProperties.cargo_capacity}</p>
                        </div>
                        <div className="col">
                            <p><strong>Passengers</strong></p>
                            <p>{store.singleStarshipProperties.passengers}</p>
                        </div>
                        <div className="col">
                            <p><strong>Crew</strong></p>
                            <p>{store.singleStarshipProperties.crew}</p>
                        </div>
                        <div className="col">
                            <p><strong>Consumables</strong></p>
                            <p>{store.singleStarshipProperties.consumables}</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default SingleStarshipPage