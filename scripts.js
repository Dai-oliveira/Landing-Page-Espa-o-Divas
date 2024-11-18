document.getElementById('meuFormulario').addEventListener('submit', function(event) 
{ event.preventDefault(); 
    
const nome = document.getElementById('nome').value;
const procedimento = document.getElementById('procedimento').value; 
    
let mensagem = `Parabéns ${nome}, Você acabou de ganhar um Bônus de 10% de DESCONTO (no procedimento escolhido). Se você recebeu este alerta tire um print entre em CONTATO e saiba como fazer para adquirir seu bônus!!!`;

if (!procedimento) { mensagem += ' nenhum procedimento escolhido.'; } 
    
alert(mensagem); 

document.getElementById('nome').value = '';
document.getElementById('procedimento').value = '';
});
