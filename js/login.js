document.getElementById('login-btn').addEventListener('click', function(){
    // Get User Email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // Get User Password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
   
    // cheak email & password
    if(userEmail == 'sbsohag4@gmail.com' && userPassword == 'borna') {
        window.location.href = 'banking.html'
    }

})