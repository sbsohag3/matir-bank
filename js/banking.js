//haandle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    //get the amount deposited
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);

//    update deposit total
   const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
   depositTotal.innerText = newDepositTotal;

// Update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

   // clear the deposit input field
   depositInput.value = '';
})

// handle withdraw event handle
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //  get the amount Withdra
    const withdraInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdraInput.value;
    const newWithdrawAmountt = parseFloat(newWithdrawAmountText);
    

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmountt;
    withdrawTotal.innerText = newWithdrawTotal;

    // updat balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmountt;
    balanceTotal.innerText = newBalanceTotal;
   

// clear withdraw input
    withdraInput.value = '';

})