// Preguntas almacenadas directamente en el script para este ejemplo
const questions = [
    { id: 4, text: "¿El sistema tiene un panel analógico?" },
    { id: 6, text: "¿El sistema genera o utiliza registros electrónicos regulados?" },
    { id: 18, text: "¿El sistema fue desarrollado dentro de la empresa?" },
    { id: 24, text: "¿Los datos extraídos del sistema son seguros y no modificables?" },
    { id: 29, text: "¿El proveedor ofrece configuraciones personalizadas para el sistema?" },
    { id: 30, text: "¿El sistema tiene configuraciones personalizadas específicas para la empresa?" }
];

// Mostrar preguntas en el formulario
const questionContainer = document.getElementById("questions");
questions.forEach(({ id, text }) => {
    questionContainer.innerHTML += `
        <div class="question">
            <label for="q${id}">${text}</label>
            <div class="options">
                ${["Sí", "No", "N/A"].map(opt => `
                    <label>
                        <input type="radio" name="q${id}" value="${opt}"> ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
});

// Evaluar el riesgo basado en las respuestas
function evaluateRisk() {
    const responses = Array.from(document.querySelectorAll("[name]")).reduce((acc, input) => {
        if (input.checked) acc[input.name] = input.value;
        return acc;
    }, {});

    const riskLevel = calculateRisk(responses);
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = `El nivel de riesgo del sistema es: ${riskLevel}`;
    resultsDiv.style.display = "block";
}

// Lógica para calcular el nivel de riesgo
function calculateRisk(responses) {
    if (responses["q4"] === "Sí" || responses["q6"] === "No") {
        return "Categoría 3 (Bajo)";
    } else if (responses["q6"] === "Sí" && responses["q24"] === "Sí" && responses["q29"] === "Sí" && responses["q30"] === "No") {
        return "Categoría 4 (Medio)";
    } else if (responses["q6"] === "Sí" && responses["q18"] === "Sí") {
        return "Categoría 5 (Alto)";
    } else {
        return "Indeterminado";
    }
}
