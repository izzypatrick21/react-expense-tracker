import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // let total = 0;
  // for (var i in amounts) {
  //   total += amounts[i];
  // }



  return (
    <div>
      <h3 id="balance"> Balance : ${total} </h3>
    </div>
  )
}

export default Balance
