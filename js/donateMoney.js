// document.getElementById('btn-donate-money').addEventListener('click',function(event){
//     event.preventDefault()
//     const donateMoney = getInputFieldValueById('input-donate-money');
//     const balance = getInputFieldValueById('balance')
//     const addMoney = donateMoney
//     console.log(donateMoney, addMoney);
// })

// Card 1
document.getElementById('btn-donate-money').addEventListener('click',function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-donate-money').value;
    const inputMoneyNumber = parseFloat(inputMoney)
    const donateMoney =document.getElementById('donate').innerText;
    const donateMoneyNumber = parseFloat(donateMoney)
    const donate = donateMoneyNumber + inputMoneyNumber;
    document.getElementById('donate').innerText = donate;

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)
    const totalBalance = accountBalanceNumber - donate;
    document.getElementById('account-balance').innerText = totalBalance;

    const p = document.createElement('p');
    p.innerText = `${donate} taka is Donated for flood at Noakhali,Bangladesh`;
    document.getElementById('history-container').appendChild(p)
})

// Card 2
document.getElementById('btn-donate-money2').addEventListener('click',function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-donate-money2').value;
    const inputMoneyNumber = parseFloat(inputMoney)
    const donateMoney =document.getElementById('donate2').innerText;
    const donateMoneyNumber = parseFloat(donateMoney)
    const donate = donateMoneyNumber + inputMoneyNumber;
    document.getElementById('donate2').innerText = donate;

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)
    const totalBalance = accountBalanceNumber - donate;
    document.getElementById('account-balance').innerText = totalBalance;
})

// Card 3
document.getElementById('btn-donate-money3').addEventListener('click',function(event){
    event.preventDefault();
    const inputMoney = document.getElementById('input-donate-money3').value;
    const inputMoneyNumber = parseFloat(inputMoney)
    const donateMoney =document.getElementById('donate3').innerText;
    const donateMoneyNumber = parseFloat(donateMoney)
    const donate = donateMoneyNumber + inputMoneyNumber;
    document.getElementById('donate3').innerText = donate;

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)
    const totalBalance = accountBalanceNumber - donate;
    document.getElementById('account-balance').innerText = totalBalance;
})