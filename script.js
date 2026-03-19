// ══════════════════════════════════════════════════
// INSTRUCCIÓN PARA AGENTE: reemplaza APPS_SCRIPT_URL
// con la URL del Web App publicado en Google Apps Script
// ══════════════════════════════════════════════════
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2poSOU7RLaS9821fyOa9MNGIH4AkKZrZ-TEV3D27EZ5pGl8XP2SAH0TV2893vZ_RJ/exec';

document.getElementById('regForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const now = new Date();
  const fecha = now.toLocaleDateString('es-PE') + ' ' + now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });

  const datos = {
    nombres: document.getElementById('nombres').value.trim(),
    apellidos: document.getElementById('apellidos').value.trim(),
    dni: document.getElementById('dni').value.trim(),
    telefono: document.getElementById('telefono').value.trim(),
    correo: document.getElementById('correo').value.trim(),
    institucion: document.getElementById('institucion').value.trim(),
    cargo: document.getElementById('cargo').value.trim(),
    tipo: document.getElementById('tipo').value,
    fecha
  };

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
  } catch (err) {
    console.error('Error al enviar:', err);
  }

  document.getElementById('formWrap').style.display = 'none';
  document.getElementById('successMsg').classList.add('show');
});

function resetForm() {
  document.getElementById('regForm').reset();
  document.getElementById('formWrap').style.display = 'block';
  document.getElementById('successMsg').classList.remove('show');
}
