import React from 'react';
import { Repository, RepositoryContent } from './styles';
import PropTypes from 'prop-types';

const RepositoriesList = ({ repositories, showIssues }) => (
  <div>
    {repositories.map(repository => (
      <Repository key={repository.id} type="button" onClick={() => showIssues(repository.full_name)}>
        <RepositoryContent>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </div>
        </RepositoryContent>
        <div>
          <i className="fa fa-angle-right" />
        </div>
      </Repository>
    ))}
  </div>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string
      })
    })
  ).isRequired
};

export default RepositoriesList;
