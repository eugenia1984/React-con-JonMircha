import { Component } from "react";

export default class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // binding in the constructor
    this.handlerAdd = this.handlerAdd.bind(this);
    this.handlerSubtract = this.handlerSubtract.bind(this);
  }

  handlerAdd(e) {
    console.log("Adding - this: ", this);
    console.log("Event: ", e);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  handlerSubtract() {
    console.log("Subtracting - this :", this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Events and biding in class components with ES6</h2>
        <div>
          <button onClick={this.handlerAdd} style={{ marginRight: "20px" , fontWeight: "800", fontSize: "20px"}}>
            +
          </button>
          <span style={{ fontWeight: "800", fontSize: "32px", padding: "0px 12px" }}>
            {this.state.contador}
          </span>
          <button onClick={this.handlerSubtract} style={{ marginLeft: "20px" , fontWeight: "800", fontSize: "20px"}}>-</button>
        </div>
        <hr />
      </div>
    );
  }
}
