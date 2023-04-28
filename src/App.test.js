import { render, screen } from '@testing-library/react';
import App from './App';
import { PrintTotalCharge} from './CustomerTotalCharge';
import { CustomerTotalCharge } from './CustomerTotalCharge';
import { items } from './Record';

test('App main page', () => {
    render(<App />);
    const cHomework1 = screen.getByText(/Capstone Homework #1/i);
    const dWithTest = screen.getByText(/Design with test/i);
    const yTotal = screen.getByText(/Your total Charge is:/i);
    const tCharge = screen.getByTestId('totalCharge')
    expect(cHomework1).toBeInTheDocument();
    expect(dWithTest).toBeInTheDocument();
    expect(yTotal).toBeInTheDocument()
    expect(tCharge).toBeInTheDocument();
});


test('should return the tax result', () => {
   
    render(<PrintTotalCharge/>)
    let totalCharge =0;
    const states = {
        New_Jersey: 'NJ',
        Delware: 'DE',
        Pennsylvania: 'PA'
    }
    const stateValue = states.New_Jersey
    const result = CustomerTotalCharge(stateValue, items);
    
    for (let i = 0; i < 4; i ++){
        if (stateValue === states.New_Jersey) {
           totalCharge = (637.62).toString()
        }
        else if (stateValue === states.Delware) {
            totalCharge = 600
        }

        else if (stateValue === states.Pennsylvania) {
            totalCharge = (630.00).toString()
            
        }
        else {
            totalCharge = -1
        }
   }
    expect(result).toBe(totalCharge);
})

