let user = JSON.parse(localStorage.getItem("currentUser"));

document.getElementById("account").addEventListener("click", function(event) {
    console.log("account");

    showForms("account");
});

document.getElementById("session").addEventListener("click", function(event) {
    console.log("session");

    showForms("session");
});

document.getElementById("address").addEventListener("click", function(event) {
    console.log("address");

    showForms("address");
});

document.getElementById("delivery").addEventListener("click", function(event) {
    console.log("delivery");

    showForms("delivery");
});

function renderAccount() {
    let inputName = document.getElementById("inputName");
    inputName.value = user["name"];
    inputName.disabled = true;

    let inputSurname = document.getElementById("inputSurname");
    inputSurname.value = user["lastName"];
    inputSurname.disabled = true;

    let inputPhone = document.getElementById("inputPhone");
    inputPhone.value = user["phone"];
    inputPhone.disabled = true;

    document.getElementById("edit1").addEventListener("click", function(event) {
        event.preventDefault();

        inputName.disabled = false;
        inputSurname.disabled = false;
        inputPhone.disabled = false;
    });

    document.getElementById("save1").addEventListener("click", function(event) {
        event.preventDefault();

        inputName.disabled = true;
        inputSurname.disabled = true;
        inputPhone.disabled = true;

        let inputNameValue = inputName.value;
        let inputSurnameValue = inputSurname.value;
        let inputPhoneValue = inputPhone.value;

        let users = JSON.parse(localStorage.getItem("users"));
        let searchUser = users.find(searchUser=>searchUser.email===user["email"]);
        searchUser["name"] = inputNameValue;
        searchUser["lastName"] = inputSurnameValue;
        searchUser["phone"] = inputPhoneValue;

        user = searchUser;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(searchUser));
        displayName();
    });
}

function renderSession() {
    let inputEmail = document.getElementById("inputEmail");
    inputEmail.value = user["email"];
    inputEmail.disabled = true;

    let inputPassword = document.getElementById("inputPassword");
    inputPassword.value = "**********";
    inputPassword.disabled = true;

    let inputEmail2 = document.getElementById("inputEmail2");
    inputEmail2.value = user["secondEmail"];
    inputEmail2.disabled = true;

    document.getElementById("edit2").addEventListener("click", function(event) {
        event.preventDefault();

        inputPassword.value = "";
    
        inputEmail.disabled = false;
        inputPassword.disabled = false;
        inputEmail2.disabled = false;    
    });

    document.getElementById("save2").addEventListener("click", function(event) {
        event.preventDefault();
    
        inputEmail.disabled = true;
        inputPassword.disabled = true;
        inputEmail2.disabled = true;

        let inputEmailValue = inputEmail.value;
        let inputPasswordValue = inputPassword.value;
        let inputEmail2Value = inputEmail2.value;

        if (!validateEmail(inputEmailValue) || !validateEmail(inputEmail2Value)) {
            inputEmail.value = user["email"];
            inputEmail2.value = user["secondEmail"];

            alert("El email es incorrecto");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users"));
        let searchUser = users.find(searchUser=>searchUser.email===user["email"]);
        searchUser["email"] = inputEmailValue;
        searchUser["secondEmail"] = inputEmail2Value;

        if (inputPasswordValue != "") {
            if (validatePassword(inputPassword)) {
                searchUser["password"] = inputPasswordValue;
            } else {
                inputPassword.value = "**********";
                alert("La contraseña es incorrecta");
                return;
            }
        }
        
        inputPassword.value = "**********";

        user = searchUser;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(searchUser));
    });
}

function renderAddress() {
    let inputAddress = document.getElementById("inputAddress");
    inputAddress.value = user["address"]["street"];
    inputAddress.disabled = true;

    let inputExt = document.getElementById("inputExt");
    inputExt.value = user["address"]["extNumber"];
    inputExt.disabled = true;

    let inputDep = document.getElementById("inputDep");
    inputDep.value = user["address"]["intNumber"];
    inputDep.disabled = true;

    let inputZip = document.getElementById("inputZip");
    inputZip.value = user["address"]["zipCode"];
    inputZip.disabled = true;

    let inputCity = document.getElementById("inputCity");
    inputCity.value = user["address"]["municipality"];
    inputCity.disabled = true;

    let inputState = document.getElementById("inputState");
    inputState.value = user["address"]["state"];
    inputState.disabled = true;

    let inputCountry = document.getElementById("inputCountry");
    inputCountry.value = user["address"]["country"];
    inputCountry.disabled = true;

    let inputAddressType = document.getElementById("inputAddressType");
    inputAddressType.value = user["address"]["addressType"];
    inputAddressType.disabled = true;

    let inputIns = document.getElementById("inputIns");
    inputIns.value = user["address"]["instructions"];
    inputIns.disabled = true;
    
    document.getElementById("edit3").addEventListener("click", function(event) {
        event.preventDefault();

        inputAddress.disabled = false;
        inputExt.disabled = false;
        inputDep.disabled = false;
        inputZip.disabled = false;
        inputCity.disabled = false;
        inputState.disabled = false;
        inputCountry.disabled = false;
        inputAddressType.disabled = false;
        inputIns.disabled = false;
    });

    document.getElementById("save3").addEventListener("click", function(event) {
        event.preventDefault();

        inputAddress.disabled = true;
        inputExt.disabled = true;
        inputDep.disabled = true;
        inputZip.disabled = true;
        inputCity.disabled = true;
        inputState.disabled = true;
        inputCountry.disabled = true;
        inputAddressType.disabled = true;
        inputIns.disabled = true;

        let inputAddressValue = inputAddress.value;
        let inputExtValue = inputExt.value;
        let inputDepValue = inputDep.value;
        let inputZipValue = inputZip.value;
        let inputCityValue = inputCity.value;
        let inputStateValue = inputState.value;
        let inputCountryValue = inputCountry.value;
        let inputAddressTypeValue = inputAddressType.value;
        let inputInsValue = inputIns.value;

        let users = JSON.parse(localStorage.getItem("users"));
        let searchUser = users.find(searchUser=>searchUser.email===user["email"]);
        searchUser["address"]["street"] = inputAddressValue;
        searchUser["address"]["extNumber"] = inputExtValue;
        searchUser["address"]["intNumber"] = inputDepValue;
        searchUser["address"]["zipCode"] = inputZipValue;
        searchUser["address"]["municipality"] = inputCityValue;
        searchUser["address"]["state"] = inputStateValue;
        searchUser["address"]["country"] = inputCountryValue;
        searchUser["address"]["addressType"] = inputAddressTypeValue;
        searchUser["address"]["instructions"] = inputInsValue;

        user = searchUser;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(searchUser));
    });
}

async function showForms(elementId){
    let formContainer = document.getElementById("user-forms");
    let body;
    let fileName;

    switch(elementId){
        case "account":
            fileName = `/pages/users/${elementId}.html`;
            body = await getHtmlBody(fileName);
            formContainer.innerHTML = body;
            renderAccount();
            break;
        
        case "session":
            fileName = `/pages/users/${elementId}.html`;
            body = await getHtmlBody(fileName);
            formContainer.innerHTML = body;
            addAlert();
            renderSession();
            break;

        case "address":
            fileName = `/pages/users/${elementId}.html`;
            body = await getHtmlBody(fileName);
            formContainer.innerHTML = body;
            renderAddress();
            break;

        case "delivery":
            fileName = `/pages/users/${elementId}.html`;
            body = await getHtmlBody(fileName);
            formContainer.innerHTML = body;
            renderProducts();
            break;

        default:
            console.log("No se encontró el elemento especificado");
    }
}

async function getHtmlBody(htmlDoc) {
    try {
        const response = await fetch(htmlDoc);
        if (!response.ok) {
            console.error("Archivo no encontrado");
        }

        const htmlText = await response.text();
        return htmlText;

    } catch (error) {
        console.error("Error", error);
    }
}

function addAlert() {
    document.getElementById("remove").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("remove");
    let isConfirmed = confirm(`Esta acción no se puede revertir. ¿Estás seguro de continuar?`);
    if (isConfirmed) {

        // AGREGAR MÉTODO PARA HACER FETCH A BACKEND
        
    }
});
}

document.getElementById("cerrar").addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("currentUser");

    window.location.replace("/index.html");

})

function renderProducts() {
    let shoppingList = user["shoppingList"];
    let cardsList = "";
    
    for (const element of shoppingList) {
        console.log(element);
        let productsName = element["elementName"];
        let price = "$" + element["price"];
        let date = element["shopDate"];
        let img = element["image"]; 
    
        let card = `<div class="card m-2" style="max-width: 450px; height: 200px">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="${img}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${productsName}</h5>
                                <p class="card-text">${price}</p>
                                <p class="card-text"><small class="text-body-secondary">Fecha: ${date}</small></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                    `;
    
        cardsList += card;
    }
    
    if (shoppingList.length != 0) {
        document.getElementById("historyList").innerHTML = cardsList;
    }
}

function displayName() {
    let name = user["name"];
    document.getElementById("docTitle").innerHTML = `¡Te damos la bienvenida, ${name}!`;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,}$/;
    return regex.test(password);
}

showForms("account");

displayName();