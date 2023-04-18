import { useContext } from "react";
import FavoriteContext from "../store/favorites-contex";
import MeetupList from "../components/meetups/MeetupList";


function FavoritePage(){
    const favoritesCtx = useContext(FavoriteContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You Got no Favorites Yet</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return <section>
        <h1>My Favorite</h1>
        {content}
    </section>
 }

 export default FavoritePage;