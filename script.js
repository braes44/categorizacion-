function evaluateRisk() {
    const responses = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    let riskLevel;
    if (responses.q1 === "Sí" && responses.q2 === "No") {
        riskLevel = "Categoría 3 (Bajo)";
    } else if (responses.q1 === "Sí" && responses.q5 === "Sí" && responses.q4 === "No") {
        riskLevel = "Categoría 4 (Medio)";
    } else if (responses.q1 === "Sí" && responses.q3 === "Sí") {
        riskLevel = "Categoría 5 (Alto)";
    } else {
        riskLevel = "Indeterminado";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Nivel de riesgo: ${riskLevel}`;
    resultDiv.style.display = "block";
}
