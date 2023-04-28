// author : Dabana Intenque

import { items, states } from "./Record";

export const CustomerTotalCharge = (user_state, items) => {
  let price = 0;
  let totalCharge = 0;
  let tax = 0;

  for (let i = 0; i < items.length; i++) {
        if (user_state == "DE") {
        price += items[i].Price;
        totalCharge = price;
        } else if (user_state == "NJ") {
        if (items[i].type == "everything" || items[i].Name === "fur") {
            tax += items[i].Price * 0.066;
        }
        price += items[i].Price;
        totalCharge = (price + tax).toFixed(2);
        } else if (user_state == "PA") {
        if (items[i].type == "everything") {
            tax += items[i].Price * 0.06;
        }
        price += items[i].Price;
        totalCharge = (price + tax).toFixed(2);
        } else {
        console.log("wrong data");
        return(<div>
            <p id='error'>the value you enter is not allowed</p>
        </div>);
        }
    }

return totalCharge;
}; 

export const PrintTotalCharge = () => {
    const selectedState = states.New_Jersey;
   return ( 
        <div>
        <h1>Current selected state:  <p id='state'>{selectedState}</p></h1>
        <h1 >Your total charge is: <small id='total'>${CustomerTotalCharge(selectedState, items)}</small></h1>
        </div>
    );  
};