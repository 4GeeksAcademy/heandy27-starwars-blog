import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";




const SingleCharacterPage = () => {

    const { store, actions } = useContext(Context)
    const params = useParams();
    console.log(params.idCharacter);


    useEffect(() => {
        actions.getCharactersSingle(params.idCharacter);
    }, [])

    return (
        <>

            <div>

                <div className="container">

                    <div className="row  border-bottom border-2 pb-4 border-danger py-5">
                        <div className="col"> <img src={`https://starwars-visualguide.com/assets/img/characters/${params.idCharacter}.jpg`}></img></div>
                        <div className="col text-center ">
                            <h1>{store.singleCharacterProperties.name}</h1>
                            <p>{store.singleCharacter.description}</p>
                        </div>


                    </div>

                    <div className="row py-5">
                        <div className="col">
                            <p><strong>Name</strong></p>
                            <p>{store.singleCharacterProperties.name}</p>
                        </div>
                        <div className="col">
                            <p><strong>Birth Year</strong></p>
                            <p>{store.singleCharacterProperties.birth_year}</p>
                        </div>
                        <div className="col">
                            <p><strong>Gender</strong></p>
                            <p>{store.singleCharacterProperties.gender}</p>
                        </div>
                        <div className="col">
                            <p><strong>Height</strong></p>
                            <p>{store.singleCharacterProperties.height}</p>
                        </div>
                        <div className="col">
                            <p><strong>Skin Color</strong></p>
                            <p>{store.singleCharacterProperties.skin_color}</p>
                        </div>
                        <div className="col">
                            <p><strong>Eye Color</strong></p>
                            <p>{store.singleCharacterProperties.eye_color}</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default SingleCharacterPage