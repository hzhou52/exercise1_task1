import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
//import AcUnitIcon from '@material-ui/icons/AcUnit';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <HomeIcon />
        </Link>

        <Link to='/form'>
          <FavoriteIcon />
        </Link>



        <Link to='/ac'>
          <DirectionsRunIcon />
        </Link>

        {/* <Link to='/yourPathThatMatchesYourRoute'></Link> */}
      </div>
    );
  }
}
export default withRouter(NavBar);
