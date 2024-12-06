import React from 'react';
import BasicTitle from "./components/BasicTitle/BasicTitle";
import DefaultButton from "./components/DefaultButton/DefaultButton";
// import { HipsterButton } from './components/DefaultButton/DefaultButton.styles';

const App: React.FC = () => {
  return (
    <>
      <div>
        <BasicTitle>Hello</BasicTitle>
        <BasicTitle fontSize='80px'>Hello</BasicTitle>
        <BasicTitle>Hello</BasicTitle>
        <DefaultButton>Primary Button</DefaultButton>
        {/* <HipsterButton>Primary Button</HipsterButton> */}
        <DefaultButton primary>Primary Button</DefaultButton>
      </div>
    </>
  );
}

export default App;
