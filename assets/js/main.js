$(document).ready(function(){
     const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const isPassword = password.type === 'password';
        password.type = isPassword ? 'text' : 'password';
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
    
    $("#email").on("input blur",function(){
    if($(this).val().trim()===""){
        $("#error").text("valid email is required");
    }
    
    else{
        $("#error").text("");
    }

  })

   



  $("#password").on("input blur",function(){
    if($(this).val().trim()==="")
    {
        $("#passerror").text("required valid password")
    }
    else if($("#password").length < 6){
         $("#passerror").text(" password must be length in 6")


    }
    else{
        $("#passerror").text("")

    }
  })
});
 
        