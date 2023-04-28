
import './App.css';
//import { CustomerTotalCharge } from './CustomerTotalCharge';
import { PrintTotalCharge } from './CustomerTotalCharge';

function App() {
    
    return (
      <div className="App">
        <h1>Capstone Homework #1</h1>
        <h2>Design with test</h2>
        <div data-testid="totalCharge">
        <PrintTotalCharge />
        </div>
      </div>
    );
}
export default App;
