import React from 'react';
import { Container, IssueBox, Content } from './styles';

const IssuesList = ({ issues }) => (
  <Container>
    {issues.map(issue => (
     <IssueBox key={issue.id}>
      <Content>
        <img src={issue.user.avatar_url} alt={issue.user.login} />
        <div>
          <strong>{issue.title}</strong>
          <small>{issue.user.login}</small>
          <a href={issue.html_url} target="_blank"><i className="fa fa-external-link"></i>Abrir Issue</a>
        </div>
      </Content>
     </IssueBox>
    ))}
    
  </Container>
)

export default IssuesList;