// assets/js/components/pages/contact.js
/**
 * Formulario de Contacto - BEM
 * Con integración de EmailJS para envío automático
 */

// --- CAMBIO AQUÍ: Eliminamos el import y usamos la constante global ---
// El archivo env.js debe cargarse en el HTML antes que este script.
const CONFIG_EMAILJS = window.ENV_CONFIG; 

/* ========================================
   DOM ELEMENTS (BEM)
   ======================================== */
const DOM = {
  form: null,
  inputs: {},
  button: null,
  successMessage: null,
  errorElements: {}
};

/* ========================================
   CONFIGURACIÓN
   ======================================== */
const CONFIG = {
  minNameLength: 3,
  minMessageLength: 10,
  phoneLength: 10,
  successMessageDuration: 5000
};

/* ========================================
   INICIALIZACIÓN
   ======================================== */
function initContactForm() {
  // --- CAMBIO AQUÍ: Verificamos que las llaves existan ---
  if (!CONFIG_EMAILJS) {
    console.error('Error: No se encontró la configuración de ENV_CONFIG. Asegúrate de cargar env.js');
    return;
  }

  // Inicializar EmailJS con la llave del objeto global
  emailjs.init(CONFIG_EMAILJS.EMAILJS_PUBLIC_KEY);
  
  // Obtener elementos del DOM
  DOM.form = document.getElementById('contact-form');
  
  if (!DOM.form) {
    console.warn('Formulario de contacto no encontrado');
    return;
  }

  DOM.inputs = {
    name: DOM.form.querySelector('#name'),
    phone: DOM.form.querySelector('#phone'),
    email: DOM.form.querySelector('#email'),
    message: DOM.form.querySelector('#message')
  };

  DOM.button = DOM.form.querySelector('.contact-form__button');
  DOM.successMessage = document.getElementById('success-message');

  // Obtener elementos de error
  Object.keys(DOM.inputs).forEach(key => {
    DOM.errorElements[key] = DOM.form.querySelector(`[data-error="${key}"]`);
  });

  // Event listeners
  setupEventListeners();
}

/* ========================================
   EVENT LISTENERS (Sin cambios)
   ======================================== */
function setupEventListeners() {
  DOM.form.addEventListener('submit', handleSubmit);

  Object.entries(DOM.inputs).forEach(([name, input]) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearFieldError(input));
  });

  DOM.inputs.phone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });

  DOM.inputs.name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9]/g, '');
  });
}

/* ========================================
   MANEJO DE SUBMIT (Sin cambios)
   ======================================== */
async function handleSubmit(event) {
  event.preventDefault();

  const isValid = validateForm();
  
  if (!isValid) {
    showFormError('Por favor, corrige los errores antes de enviar');
    return;
  }

  const formData = getFormData();
  setButtonLoading(true);

  try {
    await sendEmail(formData);
    showSuccessMessage();
    resetForm();
  } catch (error) {
    console.error('Error enviando formulario:', error);
    showFormError('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
  } finally {
    setButtonLoading(false);
  }
}

/* ========================================
   ENVÍO DE EMAIL CON EMAILJS
   ======================================== */
async function sendEmail(formData) {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_name: 'IXEL Artesanías'
  };

  try {
    // --- CAMBIO AQUÍ: Usamos las constantes globales actualizadas ---
    const response = await emailjs.send(
      CONFIG_EMAILJS.EMAILJS_SERVICE_ID,
      CONFIG_EMAILJS.EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email enviado exitosamente:', response);
    return response;
    
  } catch (error) {
    console.error('Error al enviar email:', error);
    throw error;
  }
}

/* ========================================
   VALIDACIÓN Y UI (Resto del código sin cambios importantes)
   ======================================== */
// ... (Se mantienen iguales tus funciones validateForm, showFieldError, etc.)

function validateForm() {
  let isValid = true;
  Object.values(DOM.inputs).forEach(input => {
    if (!validateField(input)) isValid = false;
  });
  return isValid;
}

function validateField(input) {
  const value = input.value.trim();
  const name = input.name;
  clearFieldError(input);
  if (!value) {
    showFieldError(input, 'Este campo es obligatorio');
    return false;
  }
  switch (name) {
    case 'name':
      if (value.length < CONFIG.minNameLength) {
        showFieldError(input, `El nombre debe tener al menos ${CONFIG.minNameLength} caracteres`);
        return false;
      }
      break;
    case 'phone':
      if (value.length !== CONFIG.phoneLength) {
        showFieldError(input, `El teléfono debe tener ${CONFIG.phoneLength} dígitos`);
        return false;
      }
      break;
    case 'email':
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(value)) {
        showFieldError(input, 'Por favor, ingresa un correo válido');
        return false;
      }
      break;
    case 'message':
      if (value.length < CONFIG.minMessageLength) {
        showFieldError(input, `El mensaje debe tener al menos ${CONFIG.minMessageLength} caracteres`);
        return false;
      }
      break;
  }
  markFieldAsValid(input);
  return true;
}

function showFieldError(input, message) {
  input.classList.add('contact-form__input--error');
  const errorElement = DOM.errorElements[input.name];
  if (errorElement) errorElement.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('contact-form__input--error');
  const errorElement = DOM.errorElements[input.name];
  if (errorElement) errorElement.textContent = '';
}

function markFieldAsValid(input) {
  input.classList.add('contact-form__input--success');
}

function showFormError(message) {
  alert(message); // Simplificado para el ejemplo
}

function showSuccessMessage() {
  if (DOM.successMessage) {
    DOM.successMessage.style.display = 'block';
    setTimeout(() => { DOM.successMessage.style.display = 'none'; }, CONFIG.successMessageDuration);
  }
}

function setButtonLoading(isLoading) {
  if (!DOM.button) return;
  DOM.button.disabled = isLoading;
  isLoading ? DOM.button.classList.add('contact-form__button--loading') : DOM.button.classList.remove('contact-form__button--loading');
}

function getFormData() {
  return {
    name: DOM.inputs.name.value.trim(),
    phone: DOM.inputs.phone.value.trim(),
    email: DOM.inputs.email.value.trim(),
    message: DOM.inputs.message.value.trim()
  };
}

function resetForm() {
  DOM.form.reset();
  Object.values(DOM.inputs).forEach(input => input.classList.remove('contact-form__input--success'));
}

document.addEventListener('DOMContentLoaded', initContactForm);