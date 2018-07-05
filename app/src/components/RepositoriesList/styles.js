import styled from 'styled-components';

export const Repository = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  strong {
    display: block;
  }

  small {
    font-size: 12px;
  }

  button {
    border: 0;
    font-size: 16px;
  }
`;

export const RepositoryContent = styled.div`
  display: flex;
  align-items: center;
`;
