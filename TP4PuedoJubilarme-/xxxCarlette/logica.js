
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const resultado = document.getElementById('resultado');
  
    if (isNaN(edad) || !genero) {
      resultado.textContent = "Por favor, complete todos los campos.";
      resultado.style.color = "red";
      return;
    }
  
    if ((genero === "f" && edad >= 60) || (genero === "m" && edad >= 65)) {
      resultado.textContent = "Puede jubilarse                                            ";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "Aun no cumple los requisitos para jubilarse";
      resultado.style.color = "red";
    }
  });
  