let resultado = rankeadas(50, 17)

console.log(resultado)

function rankeadas(vitorias, derrotas) {
    let pontuacao = vitorias - derrotas
    {
        if (pontuacao > 10) {
            console.log("Você está no ferro")
        } else if ((pontuacao >= 11) && (pontuacao <= 20)) {
            console.log("Você está no bronze")
        } else if ((pontuacao >= 21) && (pontuacao <= 50)) {
            console.log("Você está no prata")
        } else if ((pontuacao >= 51) && (pontuacao <= 80)) {
            console.log("Você está no ouro")
        } else if ((pontuacao >= 81) && (pontuacao <= 90)) {
            console.log("Você está no diamante")
        } else if ((pontuacao >= 91) && (pontuacao <= 100)) {
            console.log("Você está no lendário")
        } else if (pontuacao >= 101) {
            console.log("Você está no imortal")
        }

        return pontuacao;

    }
}