import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "./Form";
import "./list.css";
import ListItem from "./ListItem";
import { Creators as ListActions } from "../store/actions/list";

class CreateList extends Component {
  
  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }

  render() {
    return (
      <div className="page-container">
        <Form addProduct={this.addProduct} />
        <div className="list-items-container">
          { this.props.list.items.map((item, index) => <ListItem item={item} key={index} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList);
