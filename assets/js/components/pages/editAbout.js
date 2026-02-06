const aboutText = document.getElementById("aboutText");
const textArea = document.getElementById("editTextArea");
const saveBtn = document.getElementById("saveBtn");
const modal = document.getElementById("exampleModal");

// When modal opens, preload text
modal.addEventListener("show.bs.modal", () => {
    textArea.value = aboutText.innerText.trim();
});

// Save edited text
saveBtn.addEventListener("click", () => {
    aboutText.innerText = textArea.value;

    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
});

