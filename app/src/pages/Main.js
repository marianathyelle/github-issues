import React, { Component, Fragment } from 'react';
import { Sidebar, Form, Header } from './index';
import RepositoriesList from '../components/RepositoriesList';
import IssuesListHeader from '../components/IssuesListHeader';
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
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
      });
    } 
    
    catch (err) {
      this.setState({ repositoryError: true });
    } 
    
    finally {
      this.setState({ loading: false });
    }
  };

  handleShowIssues = async (name) => {

    const repositoryName = this.state.repositories.find(item => item.full_name === name)

    try {
      const response = await api.get(`/repos/${repositoryName.full_name}/issues?state=all`)
      const repository = await api.get(`/repos/${repositoryName.full_name}`);
      

      this.setState({
        issues: response.data,
        repositoryIssues: [ repository.data ]
      })
    }
    
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Fragment>
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

         <RepositoriesList 
          repositories={this.state.repositories} 
          showIssues={this.handleShowIssues} 
        />
        
        </Sidebar>

        <IssuesListHeader repositories={this.state.repositoryIssues} />
        <IssuesList issues={this.state.issues} />
      </Fragment>
    );
  }
}
