import "./App.css";
import "./components/card_list/card_list.component";
import { Component } from "react";
import { CardList } from "./components/card_list/card_list.component";
import { SearchBox } from "./components/search_box/search_box.component";
import "./components/search_box/search_box.styles.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((body) =>
        this.setState({
          monsters: body,
        })
      );
  }

  _handleOnChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters..."
          onChange={this._handleOnChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
