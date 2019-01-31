import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const units = ["kg", "lt", "un"];

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: ''
  }

  handleChange = (event) => (
    this.setState({
      [event.target.name]: event.target.value
    })
  )

  render() {
    return (
      <form className="form-container">
        <div className="form-row">
          <TextField
            label="Lista"
            name="list"
            value={this.state.list}
            onChange={this.handleChange}
            required
          />
          <Button variant="outlined" color="secondary">
            Adicionar
          </Button>
        </div>
        <div className="form-row">
          <TextField
            label="Produto"
            name="product"
            value={this.state.product}
            onChange={this.handleChange}
            required
          />
          <TextField
            label="Quantidade"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            required
          />
          <TextField
            select
            label="Unidade"
            name="unity"
            value={this.state.unit}
            onChange={this.handleChange}
            required
          >
            {units.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Preço"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              )
            }}
          />
        </div>
      </form>
    );
  }
}

export default Form;
