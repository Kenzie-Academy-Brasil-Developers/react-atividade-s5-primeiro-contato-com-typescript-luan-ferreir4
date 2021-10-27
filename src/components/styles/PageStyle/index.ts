import styled from "styled-components";
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  padding: 20px 0;
  border-color: #f5f5f5;
  box-shadow: 0px 1px 10px #7e7e7e;


  .App-logo {
    width: 250px;
    animation: App-logo-spin infinite 20s linear;
  }

  @media (min-width: 1024px) {
    height: inherit;
    width: 25vw;
    margin: 0;
    box-shadow: 1px 0px 10px #7e7e7e;
    .App-logo {
      width: 320px;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 10px;

  button{
    margin-top: 10px;
    padding: 10px 24px;
    background-color: lightblue;
    color: #757575;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: #f5f5f5;
      box-shadow: 0px 0px 4px 2px #757575;
      transition: 0.3s;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* flex-grow: 1; */
  width: 100vw;
  padding: 20px 0;
  background-color: #f0f0f0;

  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 95vw;
    margin: 0 auto;
  }
  @media (min-width: 750px) {
    .listContainer {
      flex-wrap: wrap;
      flex-direction: row;
      align-items: flex-start;
      width: 98%;
    }
  }
  @media (min-width: 1024px) {
    height: inherit;
    width: 75vw;
    margin: 0;
    box-shadow: 1px 0px 10px #7e7e7e;
  }
`;
