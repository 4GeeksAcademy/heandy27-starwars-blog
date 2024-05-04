import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  return (
    <div className="bg-light">
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link to={"/"}>
              <img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" style={{ height: "120px" }}></img>
            </Link>
          </a>

          <div className="dropdown ">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favorites {store.favorites.length}
            </button>

            <div className="dropdown-menu" style={{ width: "200px" }}>

              <div className="row px-3" >
                {store.favorites.map((value, index) => {
                  return <>
                    <div className="col-6"><p>{value}</p></div>
                    <div className="col-6"> <button 
                    className={`btn btn-primary ${store.favorites.length == 0 ? "opacity-0" : "opacity-100"}`} 
                    onClick={() => {
                      actions.removeFavorite(index);
                    }}><i class="fa-solid fa-trash-can"></i></button></div>
                  </>
                })}

              </div>
            </div>
          </div>
        </div >

      </nav >

    </div >

  );
};
