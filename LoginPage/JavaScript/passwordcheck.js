//şifre kontrolü
    
function validatePassword() {
    var password1 = document.getElementById("password");
    var password2 = document.getElementById("confirm-password");

    if (password1.value != password2.value) {
        password2.setCustomValidity("Şifreler uyuşmuyor!");
    } else {
        password2.setCustomValidity('');
    }
}