

const tobeExecuted = () =>{

    const userpassword = document.getElementById("password").value;

       console.log(userpassword)

    if(userpassword ==="12345678"){
        console.log("success");
      document.getElementById("form_title").innerHTML ="THe Form Title has been Changed";
    }else{

        console.log('The password is incorrect');
    }
   
}

document.getElementById("submit").addEventListener('click', tobeExecuted)