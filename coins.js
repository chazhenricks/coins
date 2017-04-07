

function coinCounter(ammount){
	var coinPurse = {};
	coinPurse.quarters=0;
	coinPurse.dimes=0;
	coinPurse.nickles=0;
	coinPurse.pennies=0;

  	ammount = ammount * 100; 

	if(Number.isInteger(ammount/25)){
		coinPurse.quarters += (ammount/25) ;
		ammount -=  (coinPurse.quarters * 25); 
	} else {
		coinPurse.quarters += Math.floor(ammount/25);
		ammount -=  (coinPurse.quarters * 25);
	}
	 
	if(Number.isInteger(ammount/10)){
		coinPurse.dimes += (ammount/10) ;
		ammount -= (coinPurse.dimes * 10); 
	} else {
		coinPurse.dimes += Math.floor(ammount/10);
		ammount -= (coinPurse.dimes * 10);
	}

	if(Number.isInteger(ammount/05)){
		coinPurse.nickles += (ammount/05) ;
		ammount -= (coinPurse.nickles * 05); 
	} else {
		coinPurse.nickles += Math.floor(ammount/05);
		ammount -= (coinPurse.nickles * 05);
	}

	if(Number.isInteger(ammount/01)){
		coinPurse.pennies += (ammount/01) ;
		ammount -= (coinPurse.pennies * 01); 
	} else {
		coinPurse.pennies += Math.floor(ammount/01);
		ammount -= (coinPurse.pennies * 01);
	}

console.log(coinPurse);

}

var money = 0.67;


coinCounter(money);
console.log(money);














