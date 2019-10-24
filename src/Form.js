import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPet: "",
      favColor: "",
      favCar: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    this.props.history.push({
      pathname: "/results",
      state: this.state,
      

    });
    alert('A name was submitted: ' + this.state.firstPet);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <TextField
          label='Fav Pet'
          name='firstPet'
          value={this.state.pet}
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <br>
        </br>
        <TextField
          label='Fav Color'
          name='favColor'
          value={this.state.Color}
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <br></br>
        <TextField
          label='Fav Car'
          name='favCar'
          value={this.state.Car}
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
         <br></br>
        <Button variant='contained' onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}
export default Form;
