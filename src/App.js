import "./styles.css";
import React, { Component } from "react";
import Table from "./Table";

const URL = "https://jsonplaceholder.typicode.com/users";

// const Table = () => {
//   return <table></table>;
// };

class App extends Component {
  state = {
    isLoading: true,
    tableData: null
  };

  getTable() {
    // return <Table tableData={this.state.tableData}></Table>;
    return <div>Hello</div>;
  }

  async componentDidMount() {
    let response = await fetch(URL);
    let responseData = await response.json();
    this.setState({ isLoading: false, tableData: responseData });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>;
    }

    if (!this.state.tableData) {
      return <div>No data fetched</div>;
    }
    console.log(this.state.tableData[0]);
    return <Table tableData={this.state.tableData} />;
    // return <button onClick={() => this.getTable()}>show Table data </button>;
  }
}

export default App;
