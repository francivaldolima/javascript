const produtos = [
  { nome: "Detergente", valor: 2.0 },
  { nome: "Amaciante", valor: 6.5 },
  { nome: "Pão", valor: 2.0 },
  { nome: "leite", valor: 2.2 },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log("rodada, ", index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.valor;
  }, saldoDisponivel);
}

console.log(calcularSaldo(saldoDisponivel, produtos));