import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/favorites-contex";

function MeetupItem(props) {
  const favoriteCntx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCntx.itemIsFavorite(props.id);

  function toogleFavoriteStatusHandler(){
    if(itemIsFavorite){
      favoriteCntx.removeFavorite(props.id)
    }else{
      favoriteCntx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description : props.description
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove Favorite' : 'to Favorite'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
