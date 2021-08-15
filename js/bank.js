//********************************************************** */
//------------- This is the Deposit part ------------//
//*********************************************************** */


document.getElementById('deposit-btn').addEventListener('click', function () {

    //------------- DEPOSIT------------//

    // deposit input field value
    const depositInput = document.getElementById('deposit-field');

    // deposit input field value
    const myDepositAmount = depositInput.value;

    //old deposit amount id
    const oldDepositId = document.getElementById('old-deposit-amount');

    // putting the value of old deposit in a variable
    const oldDepositAmount = oldDepositId.innerText;


    if (myDepositAmount != '') {
        // 1.convert the oldDepositAmount string to float
        // 2.convert the myDepositAmount string to float
        // 3.Then addition and put a new variable
        const totalDeposit = parseFloat(oldDepositAmount) + parseFloat(myDepositAmount);

        // Assign the totalDeposit in  oldDepositId.innerText
        oldDepositId.innerText = totalDeposit;



        //------------- BALANCE------------//

        // old balance id
        const oldBalanceId = document.getElementById('old-balance-amount');

        // putting the value of old balance in a variable
        const oldBalance = oldBalanceId.innerText;

        // 1.convert the oldDepositAmount string to float
        // 2.convert the myDepositAmount string to float
        // 3.Then addition and put a new variable
        const totalBalance = parseFloat(oldBalance) + parseFloat(myDepositAmount);

        // Assign the totalDeposit in  oldDepositId.innerText
        oldBalanceId.innerText = totalBalance;

        // clear deposit input field 
        depositInput.value = '';
    }
    else {
        alert("Please enter your amount");
    }
});


//****************************************************************************** */
//------------- This is the Withdraw part ------------//
//****************************************************************************** */

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-field');
    const myNewWithDraw = withdrawInput.value;

    const oldWithdrawId = document.getElementById('old-withdraw-amount');
    const oldWithdrawAmount = oldWithdrawId.innerText;

    if (myNewWithDraw != '') {
        const totalWithdraw = parseFloat(myNewWithDraw) + parseFloat(oldWithdrawAmount);

        oldWithdrawId.innerText = totalWithdraw;

        const myOldBalanceId = document.getElementById('old-balance-amount');
        const myOldTotalBalanceAmount = myOldBalanceId.innerText

        const myTotalBalance = parseFloat(myOldTotalBalanceAmount) - parseFloat(myNewWithDraw);
        myOldBalanceId.innerText = myTotalBalance;

        withdrawInput.value = '';
    }
    else {
        alert("Please enter your amount");
    }
});