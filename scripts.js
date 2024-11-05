document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const procedimento = document.getElementById('procedimento').value;

    let mensagem = `Bem vindo(a) ao Espaço Divas ${nome}, você ganhou 10% de desconto no procedimento escolhido.`;
    if (!procedimento) {
        mensagem += ' nenhum procedimento escolhido.';
    }
    alert(mensagem);

    // Limpar os campos do formulário após o envio
    document.getElementById('nome').value = '';
    document.getElementById('procedimento').value = '';
});
