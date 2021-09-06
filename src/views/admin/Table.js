import "./datatables.css";
import React, { Component } from "react";
import axios from "axios";
const $ = require("jquery");
$.Datatable = require("datatables.net");

export class Tbl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  //option 1
  async getUsersData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }

  //option 2
  async getUsersData1() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  }

  componentDidMount() {
    this.getUsersData().then(() => this.sync());
  }

  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.users, //option 1
      // data: this.getUsersData1(), //option 2
      columns: [
        { title: "Name", data: "name" },
        { title: "Username", data: "username" },
        { title: "Email", data: "email" },
        { title: "Phone", data: "phone" },
        { title: "Website", data: "website" },
      ],
    });
  }

  render() {
    return (
      <table
        className="display"
        width="100%"
        ref={(el) => (this.el = el)}
      ></table>
    );
  }
}

export default Tbl;
