import UserContext from './src/context/UserContext';
import Route from './src/route/Route';
export default function App() {
  return (
    <UserContext>
      <Route/>
    </UserContext>
  );
}