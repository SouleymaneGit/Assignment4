
//script for the input form and the even hendling
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

// script for the hoving

function Alert(e){
    window.alert("Hey, I told you not to hover over me");
};

//script for the bonus part

function multiplyBy(){
    let pie = Math.PI;;
    value = document.getElementById("radius").value;
    result  = (4.0/3.0)*pie*(value*value*value);

      
    n = result.toFixed(2);
    window.alert("volume rounded for 2 decimal places =" +n);
}

// script for the Two buttons arguing 

function imRight() {
    document.querySelector("p").innerHTML = "Im Right"
}

function noImRight() {
    document.querySelector("p").innerHTML = "No, Im Right"
}