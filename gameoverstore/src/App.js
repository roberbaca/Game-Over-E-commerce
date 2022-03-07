import Router from './Router/Router';
import { Provider } from 'react-redux';
import store, {Persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {

  return (
    <div className="App">
      <Provider store={store}>    
        <PersistGate loading={null} persistor={Persistor}>
          <Router/>        
        </PersistGate>    
      </Provider>
    </div>
  );
}

export default App;
