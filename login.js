const email=document.getElementById('emailtxt')
const password=document.getElementById('passwordtxt')
const form=document.getElementById('form') 
const errorElement=document.getElementById('error')

form.addEventListener('submit', (e) => {
    
   let messages = []
   if(email.value==''){
       messages.push('Email is required')
   }

   if(password.value.length <=6){
       messages.push('Invalid password')
   }

   if (password.value.length >=20){
       messages.push("Less than 20 character")
   }
   if(messages.length > 0) {
    e.preventDefault()
    errorElement.innerText= messages.join(' / ')
   }
  
        
  
})