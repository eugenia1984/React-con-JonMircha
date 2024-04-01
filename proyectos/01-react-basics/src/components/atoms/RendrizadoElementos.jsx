import { Component } from "react";
import data from "../../helpers/data.json";
import { ElementoLista } from "./ElementoLista";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Autumn", "Winter"],
    };
  }

  render() {
    return (
      <div>
        <h2>Elements rendering</h2>
        <h3>Seasons (from an array):</h3>
        <ul className="ul-none">
          {this.state.seasons.map((el) => (
            <li key={el}>- {el}</li>
          ))}
        </ul>
        <h3>Front End Frameworks - JavaScript (from a JSON):</h3>
        <ul className="ul-none">
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}
