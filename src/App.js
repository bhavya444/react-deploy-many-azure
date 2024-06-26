import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_NAME}
      </header>
    </div>
  );
}

export default App;
