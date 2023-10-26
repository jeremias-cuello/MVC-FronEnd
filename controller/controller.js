import { Person } from "../model/model.js";

const result = document.querySelector('#resultado');
let op;

const validate = (name, birth) => {
    const regExp = {
        name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,}$/g,
        date: /^[1-2]{1}\w{3}-[0-1][0-9]{1}-[0-3]{1}\w{1}$/g
    }

    let validated = name.match(regExp.name);
    validated = validated && birth.match(regExp.date);

    const hoy = new Date();
    const dateBirth = new Date(birth);

    validated = validated && (dateBirth <= hoy)

    return validated;
}

document.querySelector('#guardar').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const birth = document.querySelector('#birth').value;

    if(validate(name, birth)){
        op = new Person(name, birth);
        document.querySelector('#saber-edad').hidden = false;
        document.querySelector('#saludar').hidden = false;
    }
    else {
        document.querySelector('#saber-edad').hidden = true;
        document.querySelector('#saludar').hidden = true;
        result.innerText = "";
        alert('campos incorrectos');
    }
})

document.querySelector('#saber-edad').addEventListener('click', () => {
    result.innerHTML += `La edad es: ${op.age}` + '<br>';
})

document.querySelector('#saludar').addEventListener('click', () => {
    alert(op.saludar());
})

document.onloadeddata = () => {
    document.querySelector('#name').click();
}

document.querySelector('#name').addEventListener('keyup', () => {
    document.querySelector('#saber-edad').hidden = true;
    document.querySelector('#saludar').hidden = true;
    result.innerText = "";
})

document.querySelector('#birth').addEventListener('keyup', () => {
    document.querySelector('#saber-edad').hidden = true;
    document.querySelector('#saludar').hidden = true;
    result.innerText = "";
})
