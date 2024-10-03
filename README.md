# Classificador de Nível de Heróis

## Descrição

Este projeto em JavaScript tem como objetivo calcular e classificar o nível de um herói com base em seu saldo de vitórias. A função `calc(saldoVitorias)` determina o nível do herói de acordo com o número total de vitórias acumuladas, proporcionando feedback sobre o desempenho do jogador.

## Funcionalidades

- **Cálculo de Nível:** Classificação do herói em diferentes níveis, dependendo do saldo de vitórias:
  - **Ferro:** até 10 vitórias
  - **Bronze:** 11 a 20 vitórias
  - **Prata:** 21 a 50 vitórias
  - **Ouro:** 51 a 80 vitórias
  - **Diamante:** 81 a 90 vitórias
  - **Lendário:** 91 a 100 vitórias
  - **Imortal:** acima de 100 vitórias

- **Saída Interativa:** Exibe no console o saldo de vitórias do herói e seu nível correspondente.

## Exemplo de Uso

```javascript
function calc(saldoVitorias) {
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }

    console.log(`O Herói tem de saldo ${saldoVitorias} vitórias e está no nível ${nivel}`);
}

const win = 70; // Total de vitórias
const loss = 11; // Total de derrotas
const saldoVitorias = win - loss; // Cálculo do saldo de vitórias

const nivelHeroi = calc(saldoVitorias); // Chamando a função para calcular o nível
