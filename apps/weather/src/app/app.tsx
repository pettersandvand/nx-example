import { API } from '../client';
import Weather from './weather';

export const api = new API({
  BASE: 'http://localhost:5115',
}).nxExampleMyApiVersion1000CultureNeutralPublicKeyTokenNull
// Create a client

export function App() {
  return (
    <div>
      <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome 👋
            </h1>
          </div>
      <Weather/>
    </div>
  );
}

export default App;
