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

const win = 70;
const loss = 11;
const saldoVitorias = win - loss;

const nivelHeroi = calc(saldoVitorias);