const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

function saveFeedback(name, email, message) {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push({ name, email, message });
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
}

function displayFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbackList.innerHTML = "";

    feedbacks.forEach(feedback => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${feedback.name}</strong> (${feedback.email}):<br>${feedback.message}`;
        feedbackList.appendChild(listItem);
    });
}

window.onload = displayFeedbacks;

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Por favor, insira um nome válido.";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailRegex = /\S+@\S+\.\S+/;
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Por favor, insira um e-mail válido.";
        isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Por favor, insira uma mensagem válida.";
        isValid = false;
    }

    if (isValid) {
        saveFeedback(name, email, message);
        displayFeedbacks();
        alert("Feedback enviado com sucesso! Obrigado.");
        feedbackForm.reset();
    }
});
