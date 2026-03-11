// ######### Sección para los datos dummies #########

const shoppingList = [
    {
        elementName: "Tortillero Martina",
        price: "1500",
        shopDate: "",
        image: "/assets/img/products/Tortillero Martina chico.png"
    },
    {
        elementName: "Tapa Olinalá",
        price: "1000",
        shopDate: "",
        image: "/assets/img/products/Tapa Olinala1.png"
    },
    {
        elementName: "Caja de té Martina",
        price: "2300",
        shopDate: "",
        image: "/assets/img/products/Caja te Martina Color.png"
    },
    {
        elementName: "Charola",
        price: "3500",
        shopDate: "",
        image: "/assets/img/products/charola.jpg"
    },
    {
        elementName: "Servilletero Jaguar",
        price: "750",
        shopDate: "",
        image: "/assets/img/products/Servilletero Jaguar.png"
    },
    {
        elementName: "Ensaladera",
        price: "1200",
        shopDate: "",
        image: "/assets/img/products/Ensaladera.png"
    },
    {
        elementName: "Caja base chica Olinalá",
        price: "2000",
        shopDate: "",
        image: "/assets/img/products/Caja base olinala linaloe.png"
    },
    {
        elementName: "Tortillero Narda",
        price: "2100",
        shopDate: "",
        image: "/assets/img/products/Tortillero Narda.png"
    },
    {
        elementName: "Tabla esquina pintada",
        price: "1800",
        shopDate: "",
        image: "/assets/img/products/Tablas esquina pintada 41x20 Martina.png"
    },
    {
        elementName: "Caja tapa Olinalá",
        price: "1700",
        shopDate: "",
        image: "/assets/img/products/Caja tapa Olinalá.png"
    }
]

const user = {
    email: "",
    name: "",
    password: "",
    lastName: "Williams",
    phone: "+559551583801",
    secondEmail: "",
    address: {
        street: "Leyes de Reforma 3a secc",
        extNumber: "673",
        intNumber: "s/n",
        zipCode: "09301",
        municipality: "Tlalpan",
        state: "Ciudad de México",
        country: "México",
        addressType: "Laboral",
        instructions: "Salón de fiestas"
    },
    shoppingList: [
        
    ]
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
    let day = getRandomIntInclusive(1, 28);
    let month = getRandomIntInclusive(1, 12);
    let year = getRandomIntInclusive(2024, 2026);
    return `${day}/${month}/${year}`;
}


function getRandomShoppingList() {
    let quantity = getRandomIntInclusive(0,10);
    const elementsList = [];

    for (let i = 0; i<quantity; i++) {
        let shoppingProduct = shoppingList[getRandomIntInclusive(0,9)];
        console.log(shoppingProduct);
        shoppingProduct["shopDate"] = getRandomDate();
        elementsList.push(shoppingProduct)
    }

    return elementsList;
}

function getUserInfo(data) {
    let localUser = user;
    localUser["name"] = data["nombre"];
    localUser["email"] = data["email"];
    localUser["password"] = data["password"];


    let shoppingList = getRandomShoppingList();
    localUser["shoppingList"] = shoppingList;
    return localUser;
}

// ######### Termina sección para los datos dummies #########


// inicio de sesion para el admin
const admin = {
    email: "pao@gmail.com",
    password: "Admin123@",
    rol: "admin",
    nombre: "Administrador"
};

//cambio entre login y registro
function toggleForm() {
    const container = document.getElementById("container");
    if (container.classList.contains("login-mode")) {
        container.classList.remove("login-mode");
        container.classList.add("register-mode");
    } else {
        container.classList.remove("register-mode");
        container.classList.add("login-mode");
    }
}

//validación contraseña y correo

const emailInputs = document.querySelectorAll('input[name="email"]');

emailInputs.forEach(input => {
    input.addEventListener('blur', function () {
        const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        const errorElement = this.parentElement.querySelector('.error-message');

        if (!regex.test(this.value)) {
            if (errorElement) {
                errorElement.textContent = "Correo inválido";
            }
            this.style.borderColor = "red";
        } else {
            if (errorElement) {
                errorElement.textContent = "";
            }
            this.style.borderColor = "green";
        }
    });
});

const passwordInputs = document.querySelectorAll('input[name="password"]');

passwordInputs.forEach(input => {
    input.addEventListener('blur', function () {

        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,}$/;
        const errorElement = this.parentElement.querySelector('.error-message');

        if (!regex.test(this.value)) {
            if (errorElement) {
                errorElement.textContent = "Mínimo 7 caracteres, 1 mayúscula y 1 símbolo";
            }
            this.style.borderColor = "red";
        } else {
            if (errorElement) {
                errorElement.textContent = "";
            }
            this.style.borderColor = "green";
        }
    });
});

//Guardar datos en JSON

function handleForm(formSelector, label) {
    const form = document.querySelector(formSelector);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log(label);
        console.log(JSON.stringify(data, null, 2));
    });
}

handleForm('.form', 'LOGIN DATA');
handleForm('.form2', 'REGISTER DATA');

//simulación backend
function showMessage(form, message, type = "error") {
    const prev = form.querySelector(".form-message");
    if (prev) prev.remove();
    const msg = document.createElement("p");
    msg.className = `form-message ${type}`;  
    msg.textContent = message;
    form.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
}
const registerForm = document.querySelector('.form2');
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData.entries());
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(user => user.email === data.email);
    if (exists) {
        showMessage(registerForm, "El usuario ya existe.", "error");
        return;
    }
    let userInfo = getUserInfo(data);
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Usuarios guardados:", users);
    showMessage(registerForm, "Registro exitoso. ¡Bienvenido!", "success");
});

const loginForm = document.querySelector('.form');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === data.email);

    if (data.email == admin.email && data.password === admin.password){
        localStorage.setItem("currentUser", JSON.stringify(admin ));
        showMessage(loginForm, "Bienvenida, Paola", "success");
        setTimeout(() => {window.location.href = "../admin/dashboard.html"}, 1200);
        return;
    }
    if (!user || user.password !== data.password) {
        showMessage(loginForm, "Correo o contraseña incorrectos.", "error");
        return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    console.log("Usuario logueado:", user);
    showMessage(loginForm, "Iniciando sesión...", "success");
    // setTimeout(() => { window.location.replace = "/index.html"; }, 1200);
    window.location.replace("/pages/users/users.html");

    });

if (JSON.parse(localStorage.getItem("currentUser"))) {
    window.location.replace("/pages/users/users.html");
}