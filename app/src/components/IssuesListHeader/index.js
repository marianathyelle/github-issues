import React from 'react';
import { Header, RepositoryItem } from './styles'

const IssuesListHeader = ({ repositories }) => (
  <div>
    <Header>
      {repositories.map(repository => (
        <RepositoryItem key={repository.id}>
          <img src={repository.owner.avatar_url} alt="react"/>
          <div>
            <strong>{repository.owner.login}</strong>
            <small>{repository.name}</small>
          </div>
        </RepositoryItem>
      ))}
    </Header>
  </div>
)

export default IssuesListHeader;