import styled from 'styled-components';

export const Header = styled.div`
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2);
  padding-left: 340px;
  width: 100vw;

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
    color: #999999;
  }
`;

export const RepositoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;