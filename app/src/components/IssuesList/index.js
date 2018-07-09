import React from 'react';
import { Container, Header } from './styles'

const IssuesList = ({ repositories, issues }) => (
  <Container>
    {repositories.map(repositories => (
      <Header key={repositories.id}>
        <img src={repositories.owner.avatar_url} alt="react"/>
        <div>
          <strong>{repositories.owner.login}</strong>
          <small>{repositories.name}</small>
        </div>
      </Header>
    ))}
  </Container>
)

export default IssuesList;