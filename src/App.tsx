import * as React from 'react';
import { SFCCounterConnected } from './scenes/counter/counter.connected';

class App extends React.Component {
  public render() {
    return (
      <div className="main">
        <header className="header">
          <h1 className="text-center">Todo App</h1>
        </header>
        <section>
          <SFCCounterConnected label="test" />
        </section>
      </div>
    );
  }
}

export default App;
