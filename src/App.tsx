import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button disabled> Add </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Add </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled> Baidu Link </Button>
    </div>
  );
}

export default App;
