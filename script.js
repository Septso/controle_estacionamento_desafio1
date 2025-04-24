document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const dados = {
    placa: document.getElementById('placa').value,
    proprietario: document.getElementById('proprietario').value,
    apartamento: document.getElementById('apartamento').value,
    bloco: document.getElementById('bloco').value,
    modelo: document.getElementById('modelo').value,
    cor: document.getElementById('cor').value,
    vaga: document.getElementById('vaga').value
  };

  console.log('Dados cadastrados:', dados);
  alert('Cadastro realizado com sucesso!');
});
