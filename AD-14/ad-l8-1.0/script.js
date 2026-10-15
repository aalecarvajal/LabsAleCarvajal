// 1. Buscamos el formulario y el lugar donde irá la alerta
const form = document.getElementById('formContacto');
const alertPlaceholder = document.getElementById('alertPlaceholder');

// 2. script.js se carga en las 3 páginas, pero el formulario
//    solo existe en contact.html. Por eso revisamos que exista.
if (form) {

  // 3. Escuchamos cuando el usuario envía el formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // evita que la página se recargue

    // 4. Creamos la alerta de Bootstrap con botón para cerrarla
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="alert alert-paleta alert-dismissible fade show" role="alert">
        <strong>Message sent!</strong> Gracias por escribirme, te responderé pronto.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>`;

    // 5. La mostramos y limpiamos el formulario
    alertPlaceholder.append(wrapper);
    form.reset();
  });
}