
import './App.css';
//import { CustomerTotalCharge } from './CustomerTotalCharge';
import { PrintTotalCharge } from './CustomerTotalCharge';

function App() {
    
    return (
      <div className="App">
        <h1>Capstone Homework #1</h1>
        <h2>Design with test</h2>
        <p data-testid="totalCharge">
        Your total Charge is: $
        <PrintTotalCharge />
        </p>
      </div>
    );
}
export default App;
