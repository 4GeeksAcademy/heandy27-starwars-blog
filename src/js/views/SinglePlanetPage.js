import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

const SinglePlanetPage = () => {

    const { store, actions } = useContext(Context)
    const params = useParams();
    console.log(params.idPlanet);

    useEffect(() => {
        actions.getPlanetsSingle(params.idPlanet);
    }, [])

    return (
        <>

            <div>

                <div className="container">

                    <div className="row  border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col">  <img
                            src={`${params.idPlanet == 1 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                                : `https://starwars-visualguide.com/assets/img/planets/${params.idPlanet}.jpg`}`} /></div>
                        <div className="col text-center ">
                            <h1>{store.singlePlanetProperties.name}</h1>
                            <p>{store.singlePlanet.description}</p>
                        </div>


                    </div>

                    <div className="row py-5">
                        <div className="col">
                            <p><strong>Name</strong></p>
                            <p>{store.singlePlanetProperties.name}</p>
                        </div>
                        <div className="col">
                            <p><strong>Climate</strong></p>
                            <p>{store.singlePlanetProperties.climate}</p>
                        </div>
                        <div className="col">
                            <p><strong>Population</strong></p>
                            <p>{store.singlePlanetProperties.population}</p>
                        </div>
                        <div className="col">
                            <p><strong>Orbital Period</strong></p>
                            <p>{store.singlePlanetProperties.orbital_period}</p>
                        </div>
                        <div className="col">
                            <p><strong>Rotation Period</strong></p>
                            <p>{store.singlePlanetProperties.rotation_period}</p>
                        </div>
                        <div className="col">
                            <p><strong>Diameter</strong></p>
                            <p>{store.singlePlanetProperties.diameter}</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}


export default SinglePlanetPage