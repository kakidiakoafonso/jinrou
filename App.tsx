import UserContext from './src/context/UserContext';
import Route from './src/route/Route';
import {Provider} from 'react-redux'
import store from './src/redux/index';
export default function App() {
  return (
    <Provider store={store}>      
      <UserContext>
        <Route/>
      </UserContext>
    </Provider>
  );
}