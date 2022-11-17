import React from 'react';
import { RootRouter } from './Routes/Router';
import { Provider } from 'react-redux/es/exports';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/initStore';
import './styles/style.scss';

function App() {
    return (
      <React.Fragment>
        <Provider store={store}>
	        <PersistGate persistor={persistor} loading={'Loading...'}>
            <RootRouter />
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
}

export default App;
