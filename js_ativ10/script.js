function valida() {

    nome = document.getElementById("nome").value;
    ra = document.getElementById("ra").value;
    prim = document.getElementById("prim").value;
    seg = document.getElementById("seg").value;

    if (!nome)
        alert("Informe um nome válido!");

    else if (!ra)
        alert("Informe um RA válido!");

    else if (!prim)
        alert("Informe uma nota válida para o primeiro semestre!");

    else if (!seg)
        alert("Informe uma nota válida para o segundo semestre!");

    else {

        dados = { nome: nome, ra: ra, prim: prim, seg: seg };

        dadosAluno = JSON.parse(localStorage.getItem('dadosAluno'));

        if (dadosAluno == null)
            dadosAluno = { alunos: [] };

        dadosAluno.alunos.push(dados);
        localStorage.setItem("dadosAluno", JSON.stringify(dadosAluno));
    }
}

function listar() {
    dadosAluno = JSON.parse(localStorage.getItem("dadosAluno"));
    document.write(`
    <table border="1" cellspacing="0" cellpadding="1">
    <tr>
        <th>Nome:</th>
        <th>RA:</th>
        <th>1ºBibestre</th>
        <th>2ºBibestre</th>
        <th>Total</th>
        <th>Situação</th>
    </tr>`)
    for (i = 0; i < dadosAluno.alunos.length; i++) {
        document.write(`
        <tr>
        <td>${dadosAluno.alunos[i].nome}</td>
        <td>${dadosAluno.alunos[i].ra}</td>
        <td>${dadosAluno.alunos[i].prim}</td>
        <td>${dadosAluno.alunos[i].seg}</td>`);

        soma = parseFloat(dadosAluno.alunos[i].prim, 10) + parseFloat(dadosAluno.alunos[i].seg, 10);
        document.write(`<td>${soma}</td>`);

        if (soma >= 60)
            document.write(`<td>Aprovado</td></tr>`);
        else
            document.write(`<td>Reprovado</td></tr>`);
    }
    document.write(`</table>`)
}