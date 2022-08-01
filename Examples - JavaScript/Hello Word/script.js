    alert("Hello Word!"); // Função do javascript que exibe uma mensagem ao usuário

    let nome = prompt("Qual é seu nome? "); // permite solicitar uma informação do usuário e armazenar a resposta numa variável.

    document.write("Olá " + nome + "<br>");

    let idade = prompt("Qual a sua idade");
    if (idade < 18 || idade > 80) {
        alert("Acesso negado");
    } else {
        alert("Tudo certo!");
    }

    let resposta = confirm("Deseja sair?");

    if (resposta == true) {
        alert("Adios!");
    } else {
        alert("obrigado pela confiança!");
    }

    let data = new data().toLocaleString('pt-br');
    document.write(data);

    let somenteData = new data().toLocaleString();
    document.write("<br>" + somenteData);

    let anoAtual = 2022;
    let tempoParaAposentar = 3;
    let anoFinal = anoAtual + tempoParaAposentar;
    document.write("<br>" )
