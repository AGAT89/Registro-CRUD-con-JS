let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    apellido: ''
}

let editar = false;

const formulario = document.querySelector('#formulario')
const nombreInput = document.querySelector('#nombre')
const apellidoInput = document.querySelector('#apellido')
const btnEnviar = document.querySelector('#btnEnviar')


function validarFormulario(e){
    //Funcion : event.prevenetDefault()
    e.preventDefault();

    if(nombreInput.value === '' || apellidoInput.value === ''){
        alert('Por favor rellena todos los campos');
        return;
    }

    agregandoPersona();
}

function agregandoPersona(){
    //PUSH
    listaEmpleados.push({...objEmpleado});
}

function mostrarPersona(){
    //queryselector
    const divEmpleado = document.querySelector('.divEmpleado');

    listaEmpleados.forEach(persona => {
        const {id, nombre, apellido} = persona
        // 1 Fiorella Rodriguez

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${apellido} -`
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button')
        editarBoton.onclick
        cargarEmpleado()
    
    })
}

function cargarEmpleado(persona){
    const {id, nombre, apellido} = persona;
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    objEmpleado.id = id;
    
    const editarBoton = document.createElement;
    editarBoton.onclick = () => cargarEmpleado;
    editarBoton.textContent = 'Editar';
    editarBoton.classList.add('btn','btn-editar')
    editarBoton.append(editarBoton);
    //

    const eliminarEmpleado = document.createElement;
    eliminarBoton.onclick = () => cargarEmpleado;
    eliminarBoton.textContent = 'Editar';
    eliminarBoton.classList.add('btn','btn-editar')
    eliminarBoton.append(editarBoton);

    
}
