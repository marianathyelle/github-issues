import styled from "styled-components";

export const Sidebar = styled.div`
  width: 320px;
  height: 100vh;
  padding: 30px;
  box-shadow: 5px 0px 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  background: #FFF;
`;

export const Form = styled.form`
  display: flex;

  input,
  button {
    font-size: 12px;
    border-radius: 3px;
    padding: 0 20px;
    height: 48px;
  }

  input {
    width: 200px;
    background-color: #eeeeee;
    color: #999999;
    margin-right: 10px;
    border: ${props => (props.withError ? "2px solid #F00" : 0 )}
  }

  button {
    font-size: 20px;
    background-color: #59ea9a;
    color: white;
    cursor: pointer;
    border: 0;
  }
`;

export const Header = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 20px;
`;

export const RepositoryLink = styled.a``;