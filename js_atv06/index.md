<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilo.css">

    <script>
        function cadastrar() {
            dados = document.getElementsByTagName("input");
            falha = [];

            for (i = 0; i < dados.length; i++) {
                if ((dados[i].type == "text") && !dados[i].value) {
                    if (!falha.includes(dados[i].name))
                        falha.push(dados[i].name);
                }
                else if ((dados[i].type == "number") && !dados[i].value) {
                    if (!falha.includes(dados[i].name))
                        falha.push(dados[i].name);
                }
                else if (form.Raca.selectedIndex == 0)
                    if (!falha.includes("Raça"))
                        falha.push("Raça");
                    else if (!dados[3].checked)
                        if (!falha.includes("Sexo"))
                            falha.push("Sexo");
            }
            if (falha.length > 0) {
                erros = falha.join(", ");
                alert(`Existem campos sem preenchimento: ${erros}`);
            }
            else
                alert(`Todos os dados foram preenchidos, Obrigado!`);
        }
    </script>
</head>

<body>
    <section class="container">
        <div class="centro">
            <h3>Cadastro de Cachorros</h3>
        </div>
        <form id="formulario" name="form">
            <label for="" class="subtitulos">Nome do Tutor:</label>
            <br>
            <input type="text" name="Tutor" size="50"></input>
            <br>
            <label for="" class="subtitulos">Nome do animal:</label>
            <br>
            <input type="text" name="Nome"></input>
            <br>
            <label for="" class="subtitulos">Sexo:</label>
            <br>
            <input type="radio" name="sexo" id="sexoM"><label for="sexoM">Macho</label>
            <input type="radio" name="sexo" id="sexoF"><label for="sexoF">Femea</label>
            <br>
            <label for="" class="subtitulos">Raça:</label>
            <br>
            <select id="raca" name="Raca">
                <option value="">Selecione</option>
                <option value="">Vira Lata</option>
                <option value="">Labrador</option>
                <option value="">Pastor Alemão</option>
                <option value="">Poodle</option>
                <option value="">Pinscher</option>
                <option value="">Pitbull</option>
                <option value="">Bulldogue</option>
            </select>
            <br>
            <label for="" class="subtitulos">Tamanho:</label>
            <br>
            <input type="number" value="" name="Tamanho"></input>
            <br>
            <label for="" class="subtitulos">Peso:</label>
            <br>
            <input type="number" value="" name="Peso"></input>
            <br>
            <label for="" class="subtitulos">Pelagem:</label>
            <br>
            <input type="text" size="50" placeholder="Ex: Branco, Amarelo, Manchado(informar as cores)."
                name="Cor"></input>
            <br>
            <label for="" class="subtitulos">Observações:</label>
            <br>
            <input type="textarea" size="50" placeholder="Ex: Rabo curto, orelha cortada..." name="Observacoes"></input>
            <br>
            <div class="centro">
                <input type="button" class="botao" value="Cadastrar" onclick="cadastrar()">
                <input type="button" class="botao" value="Limpar" onclick="reset()">
            </div>
        </form>
    </section>
</body>

</html>