
const sendBtn = document.getElementById('sendBtn');
const formNote = document.getElementById('formNote');

sendBtn.addEventListener('click', () => {
  formNote.textContent = 'Your request was captured in this demo. Connect a real email, WhatsApp, or form tool to receive project leads.';
});
