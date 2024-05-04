import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardCharacters from "./CardCharacters";
import CardPlanets from "./CardPlanets";
import CardStarships from "./CardStarships";

export const Home = () => (
	<div className="container">
		<h1 className="py-5 text-danger">Characters</h1>

		<div className="text-center  d-flex gap-5" style={{ overflowX: "auto" }}>
			<CardCharacters />


		</div>
		<h1 className="py-5 text-danger">Planets</h1>
		<div className="text-center  d-flex gap-5" style={{ overflowX: "auto" }}>
			<CardPlanets />
		</div>
		<h1 className="py-5 text-danger">Starships</h1>
		<div className="text-center  d-flex gap-5" style={{ overflowX: "auto" }}>
			<CardStarships />
		</div>
	</div>
);
