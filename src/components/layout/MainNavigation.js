import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './MainNavigation.module.css';
import FavoriteContext from "../../store/favorites-contex";

function MainNavigationPage() {
  const favoriteCntx = useContext(FavoriteContext);



  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorite
            <span className={classes.badge}>{favoriteCntx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationPage;
