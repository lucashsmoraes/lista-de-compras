import React from "react";
import ListItem from "./ListItem"

import Form from "./Form";
import "./list.css";;

const CreateList = () => (
  <div className="page-container">
    <Form />
    <div className="list-item-container">
      <ListItem />
    </div>
  </div>
);


export default CreateList;
