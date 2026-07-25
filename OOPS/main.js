const createAccount = document.getElementsByClassName("create-btn")[0];
const updateAccount = document.getElementsByClassName("deposit")[0];
const name = document.getElementById("name")
const money = document.getElementById("money")
const deposit = document.getElementById("deposit")
const accountNumber = document.getElementById("accountNumber")
const accounts = [];


class bankAccount{
  name;
  #balance;
  accountNumber;
  constructor(name,balance=0){
    this.name = name;
    this.#balance = balance;
    this.accountNumber = Date.now()
  }
    
  
  deposit(amount){
    this.#balance += amount
  }
  
  withdraw(amount){
    this.#balance -= amount
  }
   get balance(){
     return this.#balance
   }
  
}

createAccount.addEventListener('click',(e)=>{
  e.preventDefault()
  if(name.value && money.value){
    const account = new bankAccount(name.value,+money.value)
    accounts.push(account)
  name.value = ""
  money.value = ""
  console.log(accounts)
  }
})

updateAccount.addEventListener('click',()=>{
  if(accountNumber.value && +deposit.value){
    let account = accounts.find((el)=>{
      if(el.accountNumber===+accountNumber.value){
        return el
      }
      return 0
  })
  
  if(account){
    account.deposit(+deposit.value)
  }
  else{
    alert("Not found")
  }
  deposit.value= "";
    accountNumber.value="";
  }
})

