import React, { Component } from 'react';
import { Container, Sidebar, Form, Header, RepositoryLink } from './index';
import RepositoriesList from '../components/RepositoriesList';
import IssuesList from '../components/IssuesList';
import api from '../services/api';

export default class Main extends Component {
  state = {
    repositories: [],
    repositoryInput: "",
    loading: false,
    repositoryError: false,
    repositoryIssues: [],
    issues: [],
    issuesLink: '',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
        issuesLink: response.data.full_name
      });
    } 
    
    catch (err) {
      this.setState({ repositoryError: true });
    } 
    
    finally {
      this.setState({ loading: false });
    }
  };

  handleShowIssues = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.issuesLink}/issues?state=all`)
      const repository = await api.get(`/repos/${this.state.issuesLink}`);

      this.setState({
        issues: [ response.data ],
        repositoryIssues: [ repository.data ]
      })
    }
    catch(err) {
      console.log(err);
    }

    finally {
      this.setState({ issuesLink: '' })
    }
  }

  render() {
    return (
      <Container>
        <Sidebar>
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

          <RepositoryLink href={this.state.issuesLink} onClick={this.handleShowIssues}>
            <RepositoriesList repositories={this.state.repositories} />
          </RepositoryLink>
        </Sidebar>

        <IssuesList issues={this.state.issues} repositories={this.state.repositoryIssues} />
      </Container>
    );
  }
}
