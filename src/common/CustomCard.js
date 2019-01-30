import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CustomCard.css";

const CustomCard = props => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          {props.image && 
          <CardMedia 
            component="img"
            className="card-image"
            height="100"
            image={props.image}
            title="Chicára branca com café"
          /> }
          <CardContent className="card-content">
            {props.children}
          </CardContent>
        </CardActionArea>
        { props.footer && (
          <div>
            <Divider />
            <CardActions className="card-footer">
              { props.footer }
            </CardActions>
          </div>
        )}
      </Card>
    </Link>
  </div>
);

CustomCard.prototype = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.string,
  Link: PropTypes.string.isRequired,
  image: PropTypes.string
};
export default CustomCard;
