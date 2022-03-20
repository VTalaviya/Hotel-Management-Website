function getPackageDetails()
{
  let pkcg =  sessionStorage.getItem('Package');

  if(pkcg=="Platinum")
  document.getElementById("pkcg").selectedIndex = 3;
  else if(pkcg=="Delux")
  document.getElementById("pkcg").selectedIndex = 2;
  else if(pkcg=="Gold")
  document.getElementById("pkcg").selectedIndex = 1;
  else
  document.getElementById("pkcg").selectedIndex = 0;
}
function getAccountData()
{   
    document.getElementById("name").value = localStorage.getItem("Name");
    document.getElementById("email").value = localStorage.getItem("Email");
    getPackageDetails();
}
function gotopayment(){
    window.open('../HTML/payment.html','_self');
}