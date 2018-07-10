import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 340px;
  padding-top: 30px;
  background-color: #F5F5F5;
`;

export const IssueBox = styled.div`
  background-color: white;
  width: 340px;
  margin: 0 20px 20px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50px;
    margin-right: 10px;
  }

  strong {
    display: block;
    max-width: 60px;
    height: 25%;
    font-size: 15px;
    margin-bottom: 5px;
  }

  small {
    display: block;
    color: #999999;
    font-size: 12px;
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    background-color: #B286D1;
    padding: 5px 10px;
    color: white;
    text-decoration: none;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;

    i {
      margin-right: 5px;
    }
  }
`;