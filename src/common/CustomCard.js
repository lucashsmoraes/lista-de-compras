import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CustomCard.css";

const CustomCard = props => (
  <Link to={props.link}>
    <div className={props.containerClass}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          <CardContent className="card-content">{props.children}</CardContent>
        </CardActionArea>
        {props.footer && (
          <div>
            <Divider />
            <CardActions className="footer">{props.footer}</CardActions>
          </div>
        )}
      </Card>
    </div>
  </Link>
);

CustomCard.prototype = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.string
};
export default CustomCard;
