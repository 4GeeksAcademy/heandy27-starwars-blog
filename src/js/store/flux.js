import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			singleCharacter: {},
			singleCharacterProperties: {},
			singlePlanet: {},
			singlePlanetProperties: {},
			starships: [],
			singleStarship: {},
			singleStarshipProperties: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},
			getCharactersSingle: (id) => {

				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singleCharacter: data.result }, setStore({ singleCharacterProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getPlanetsSingle: (id) => {

				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singlePlanet: data.result }, setStore({ singlePlanetProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getStarships: () => {
				fetch(`https://www.swapi.tech/api/starships/`)
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))
			},
			getStarshipSingle: (id) => {

				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(data => setStore({ singleStarship: data.result }, setStore({ singleStarshipProperties: data.result.properties })))
					.catch(err => console.error("no hubo conexion en getCharacterSingle", err))
			},
			getFavorite: (name) => {
				let storeFavorites = getStore().favorites
				setStore({ favorites: [...storeFavorites, name] })

			},

			removeFavorite: (index) => {
				let storeFavorites = getStore().favorites
				storeFavorites.splice(index, 1)
				setStore({ favorites: storeFavorites })

			}


		}
	};
};

export default getState;
