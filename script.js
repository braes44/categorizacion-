const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

function evaluateRisk() {
    const responses = {
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value,
        q6: document.querySelector('input[name="q6"]:checked')?.value,
        q18: document.querySelector('input[name="q18"]:checked')?.value,
        q24: document.querySelector('input[name="q24"]:checked')?.value,
        q29: document.querySelector('input[name="q29"]:checked')?.value,
        q30: document.querySelector('input[name="q30"]:checked')?.value
    };

    let riskLevel;
    if (responses.q4 === "Sí") {
        riskLevel = "Categoría 3 (Bajo)";
    } else if (responses.q6 === "No") {
        riskLevel = "Categoría 3 (Bajo)";
    } else if (responses.q5 === "Sí" && responses.q6 === "Sí" && responses.q2 === "No") {
        riskLevel = "Categoría 3 (Bajo)";
    } else if (responses.q5 === "Sí" && responses.q6 === "Sí" && responses.q2 === "Sí") {
        riskLevel = "Categoría 4 (Medio)";
    } else if (responses.q4 === "No" && responses.q5 === "No" && responses.q18 === "Sí" && responses.q29 === "No") {
        riskLevel = "Categoría 5 (Alto)";
    } else if (responses.q6 === "Sí" && responses.q24 === "Sí" && responses.q29 === "Sí" && responses.q30 === "No") {
        riskLevel = "Categoría 4 (Medio)";
    } else if (responses.q6 === "Sí" && responses.q24 === "Sí" && responses.q29 === "Sí" && responses.q30 === "Sí") {
        riskLevel = "Categoría 5 (Alto)";
    } else {
        riskLevel = "Completa bien las preguntas";
    }

    resultDiv.textContent = `Nivel de riesgo: ${riskLevel}`;
    resultDiv.style.display = "block";
}

form.addEventListener('change', evaluateRisk);
