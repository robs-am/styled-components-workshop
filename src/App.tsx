import React from 'react';

// import BasicTitle from "./components/BasicTitle/BasicTitle";
// import DefaultButton from "./components/DefaultButton/DefaultButton";
// import { HipsterButton } from './components/DefaultButton/DefaultButton.styles';
// import Button from '@mui/material/Button'
import ComplexTitle from './components/ComplexTitle/ComplexTitle';



const App: React.FC = () => {
  return (
    <>
      <div>
        <ComplexTitle title='Hello World' />

        {/* <BasicTitle>Hello</BasicTitle>
        <DefaultButton primary>Primary Button</DefaultButton>
        <DefaultButton>Secondary Button</DefaultButton>
        <HipsterButton>Secondary Button</HipsterButton>
        <Button color='primary' variant='contained'>Hello World</Button> */}
      </div>
    </>
  );
}

export default App;
