    const addActive = () => {
    $("#first").click();
}
const peselValidation = () => {
    const value = document.forms["covidRegister"]["pesel"].value
    if (value > 11) {
        alert("Błąd. Pole PESEL nie może być dłuższe niż 11 znaków.");
        return false;
    }
}
