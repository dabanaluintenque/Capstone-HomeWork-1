import React from "react";
    const CustomerTotalCharge = (user_state, items) => {
        //user_state = ["DE", "NJ", "PA"];

        let price = 0
        let totalCharge = 0;
        let tax = 0

        for(let i = 0; i< items.length; i ++){
            console.log(`items length ${items.length} items at i ${items[i].Price}  i value ${i}`)
            if (user_state == 'DE') {
                price+= items[i].Price;  
                //console.log(price)
                totalCharge = price;
            }
           else if (user_state == 'NJ') {
                    if (items[i].type == 'everything'  || items[i].type == 'food'){
                        tax += items[i].Price * (0.066)
                        console.log(`include tax ${(tax).toFixed(3)}`)
                    }
                price += items[i].Price  ;
                totalCharge = price + tax  ;

            }

            else if (user_state == 'PA') {
                price += items[i].Price;
                totalCharge = price + 10;
                
            } 

            else {
                console.log('wrong data');
                return -1
            }
        }
        return totalCharge;
    };

export const PrintTotalCharge = () => {

    const user_state = 'PA'
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
            
        }

    ]
    return CustomerTotalCharge(user_state, items)
    }
    console.log(PrintTotalCharge());
