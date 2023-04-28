
import React from "react";
    const CustomerTotalCharge = (user_state, items) => {
        let price = 0
        let totalCharge = 0;
        let tax = 0

        for(let i = 0; i< items.length; i ++){
            if (user_state == 'DE') {
                price+= items[i].Price;  
                totalCharge = price;
            }
           else if (user_state == 'NJ') {
                if (items[i].type == 'everything'  || items[i].Name === 'fur'  ){
                    tax += items[i].Price * (0.066)
                    console.log(`include tax ${(tax).toFixed(3)}`)
                }
                price += items[i].Price  ;
                totalCharge =(price + tax).toFixed(2)  ;
            }
            else if (user_state == 'PA') {
                if (items[i].type == 'everything') {
                  tax += items[i].Price * 0.06;
                }
                price += items[i].Price;
                totalCharge = (price + tax).toFixed(2);  
            }
            else {
                console.log('wrong data');
                return -1
            }
        }
        return totalCharge;
    };

export const PrintTotalCharge = () => {
    const user_state = 'NJ'
    const items = [
        {
            Name: 'cheese',
            Price: 10,
            type: 'food'
        },

        {
            Name: 'monitor',
            Price: 500,
            type: 'everything',
        },
        {
            Name: 'shirt',
            Price: 20,
            type: 'clothing'
            
        },
        {
            Name: 'fur',
            Price: 70,
            type: 'clothing'
        }

    ]
    return CustomerTotalCharge(user_state, items)
}
    console.log(PrintTotalCharge());
