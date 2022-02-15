import Router from './Router/Router';
import { Provider } from 'react-redux';
import generateStore from './Redux/store';

function App() {

  const store = generateStore();

  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
