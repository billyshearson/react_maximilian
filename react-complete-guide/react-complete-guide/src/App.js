import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Takaki", age: "21" },
      { name: "Bob", age: "21" },
      { name: "John", age: "21" },
      { name: "Yoko", age: "21" },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1> OMANKO </h1>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
