let listaEmpleados = [];

const objEmpleado = {
    id: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombre: '',
    telefono: '',
    email: '',
};

let editar = false;

const formulario = document.querySelector('#formulario');
const apellidoPaternoInput = document.querySelector('#apellidoPaterno');
const apellidoMaternoInput = document.querySelector('#apellidoMaterno');
const nombreInput = document.querySelector('#nombre');
const telefonoInput = document.querySelector('#telefono');
const emailInput = document.querySelector('#email');
const btnEnviar = document.querySelector('#btnEnviar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    //funcion : event.preventDefault()
    e.preventDefault();

    if (apellidoPaternoInput.value === '' || apellidoMaternoInput.value === '' || nombreInput.value === '' || telefonoInput.value === '' || emailInput.value === '') {
        alert('por favor ingresa todos los campos')
        return
    }

    if (editar) {
        editarPersona();
        editar = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.apellidoPaterno = apellidoPaternoInput.value;
        objEmpleado.apellidoMaterno = apellidoMaternoInput.value;
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.telefono = telefonoInput.value;
        objEmpleado.email = emailInput.value;
        agregandoPersona();
    }

}

function agregandoPersona() {
    //PUSH - agregar valores
    listaEmpleados.push({ ...objEmpleado });
    //MOSTRAR
    mostrarPersona();
    formulario.reset();
    limpiarObjetosPersona();
}

function limpiarObjetosPersona() {
    objEmpleado.id = '';
    objEmpleado.apellidoPaterno = '';
    objEmpleado.apellidoMaterno = '';
    objEmpleado.nombre = '';
    objEmpleado.telefono = '';
    objEmpleado.email = '';
}

function mostrarPersona() {
    const divEmpleados = document.querySelector('.div-empleados');
    
    // Limpiar contenido anterior de la tabla
    divEmpleados.innerHTML = '';

    listaEmpleados.forEach(persona => {
        const { id, apellidoPaterno, apellidoMaterno, nombre, telefono, email } = persona;
        
        // Crear una nueva fila
        const fila = document.createElement('tr');

        // Crear celdas y agregar datos
        const celdaId = document.createElement('td');
        celdaId.textContent = id;
        fila.appendChild(celdaId);

        const celdaApellidoPaterno = document.createElement('td');
        celdaApellidoPaterno.textContent = apellidoPaterno;
        fila.appendChild(celdaApellidoPaterno);

        const celdaApellidoMaterno = document.createElement('td');
        celdaApellidoMaterno.textContent = apellidoMaterno;
        fila.appendChild(celdaApellidoMaterno);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = nombre;
        fila.appendChild(celdaNombre);

        const celdaTelefono = document.createElement('td');
        celdaTelefono.textContent = telefono;
        fila.appendChild(celdaTelefono);

        const celdaEmail = document.createElement('td');
        celdaEmail.textContent = email;
        fila.appendChild(celdaEmail);

        // Agregar botones de editar y eliminar
        const celdaAcciones = document.createElement('td');

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(persona);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-Editar');
        celdaAcciones.appendChild(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-Eliminar');
        celdaAcciones.appendChild(eliminarBoton);

        fila.appendChild(celdaAcciones);

        // Agregar la fila a la tabla
        divEmpleados.appendChild(fila);
    });
}

function cargarEmpleado(persona) {
    const { id, apellidoPaterno, apellidoMaterno, nombre, telefono, email } = persona;
    apellidoPaternoInput.value = apellidoPaterno;
    apellidoMaternoInput.value = apellidoMaterno;
    nombreInput.value = nombre;
    telefonoInput.value = telefono;
    emailInput.value = email;
    objEmpleado.id = id;

    formulario.querySelector('button[type = "submit"]').textContent = 'Modificar';
    editar = true;
}

function eliminarEmpleado(id) {
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    mostrarPersona();
}


function editarPersona() {
    objEmpleado.apellidoPaterno = apellidoPaternoInput.value;
    objEmpleado.apellidoMaterno = apellidoMaternoInput.value;
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.telefono = telefonoInput.value;
    objEmpleado.email = emailInput.value;
    
    listaEmpleados = listaEmpleados.map(persona => {
        if (persona.id === objEmpleado.id) {
            return {
                id: objEmpleado.id,
                apellidoPaterno: objEmpleado.apellidoPaterno,
                apellidoMaterno: objEmpleado.apellidoMaterno,
                nombre: objEmpleado.nombre,
                telefono: objEmpleado.telefono,
                email: objEmpleado.email,
            };
        } else {
            return persona;
        }
    });

    mostrarPersona();
    formulario.reset();
    limpiarObjetosPersona();
    
    // Cambiar el texto del botón de "Modificar" a "Enviar" después de editar
    formulario.querySelector('button[type="submit"]').textContent = 'Enviar';
    editar = false;
}










