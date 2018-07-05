import React, { Component } from "react";
import { Container, Form, Header } from "./index";
import RepositoriesList from "../components/RepositoriesList";
import api from "../services/api";

export default class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: "",
    loading: false,
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositories: [...this.state.repositories, response.data]
      });
    } 
    
    catch (err) {
      this.setState({ repositoryError: true });
    } 
    
    finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="Novo repositório"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-plus-circle" />}
            </button>
          </Form>
        </Header>

        <RepositoriesList repositories={this.state.repositories} />
      </Container>
    );
  }
}
