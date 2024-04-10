import { createContext, useState } from "react";
const FavoritesContext= createContext({
    favorites:[],
    totalFavorites:0,

})

function FavoritesContextProvider(fav){
    const [userFavorites,setUserFavorites]= useState([]);
    function addFavoriteHandler(){
        setUserFavorites
    }
    function removeFavoriteHandler(){

    }
    function itemFavoriteHandler(){

    }
    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };
    return <FavoritesContext.Provider value={context}>
        {fav}
    </FavoritesContext.Provider>
}