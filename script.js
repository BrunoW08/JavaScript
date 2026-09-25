function diasemana() {
  let dia;
  do {
    dia = Number(prompt("Digite um número de 1 a 7:"));
  } while (!Number.isInteger(dia) || dia < 1 || dia > 7);

  let nomeDia;
  switch (dia) {
    case 1: nomeDia = "Domingo"; break;
    case 2: nomeDia = "Segunda-feira"; break;
    case 3: nomeDia = "Terça-feira"; break;
    case 4: nomeDia = "Quarta-feira"; break;
    case 5: nomeDia = "Quinta-feira"; break;
    case 6: nomeDia = "Sexta-feira"; break;
    case 7: nomeDia = "Sábado"; break;
  }

  console.log(nomeDia);
  console.log(dia === 1 || dia === 7 ? "Final de semana" : "Dia útil");
}

function contagemregressiva() {
  for (let n = 30; n >= 1; n--) {
    let msg = "";
    if (n % 3 === 0) msg += "Ping";
    if (n % 5 === 0) msg += "Pong";
    console.log(n, msg);
  }
}

function login() {
  let tentativas = 0;
  let liberado = false;

  do {
    let login = prompt("Login:");
    let senha = prompt("Senha:");
    tentativas++;

    if (login === "admin" && senha === "1234") {
      liberado = true;
    }
  } while (!liberado && tentativas < 3);

  console.log(liberado ? "Acesso liberado" : "Conta bloqueada");
}

function tabuada() {
  let n;
  do {
    n = Number(prompt("Número para a tabuada (1 a 10):"));
  } while (!Number.isInteger(n) || n < 1 || n > 10);

  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    let resultado = n * i;
    if (resultado % 4 === 0) {
      console.log(n + " x " + i + " = " + resultado);
      soma += resultado;
    }
  }

  console.log("Soma dos múltiplos de 4:", soma);
}

function multiploseteEprimo() {
  function ehPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && ehPrimo(i)) {
      console.log("Encontrado:", i);
      break;
    }
  }
}

function impares() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) continue;
    if (i % 3 === 0 || i % 7 === 0) continue;
    console.log(i);
  }
}

function somaacumulada() {
  let i = 1;
  let soma = 0;

  while (i <= 20) {
    if (i % 2 === 0 && i % 4 !== 0) {
      soma += i;
    }
    i++;
  }

  console.log("Soma:", soma);
}

function numerovalidosequencia() {
  let n;
  do {
    n = Number(prompt("Digite um número maior que 0:"));
  } while (Number.isNaN(n) || n <= 0);

  function ehPrimo(x) {
    if (x <= 1) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (ehPrimo(i)) console.log(i);
  }
}

function quadradoCubo() {
  for (let i = 2; i <= 30; i += 2) {
    console.log(i + "² = " + (i * i) + " | " + i + "³ = " + (i * i * i));
  }
}

function mesesavancado() {
  for (let mes = 1; mes <= 12; mes++) {
    let nome;
    switch (mes) {
      case 1: nome = "Janeiro"; break;
      case 2: nome = "Fevereiro"; break;
      case 3: nome = "Março"; break;
      case 4: nome = "Abril"; break;
      case 5: nome = "Maio"; break;
      case 6: nome = "Junho"; break;
      case 7: nome = "Julho"; break;
      case 8: nome = "Agosto"; break;
      case 9: nome = "Setembro"; break;
      case 10: nome = "Outubro"; break;
      case 11: nome = "Novembro"; break;
      case 12: nome = "Dezembro"; break;
    }

    console.log(nome);

    if (mes === 2) console.log("28 ou 29 dias");
    if (mes === 7 || mes === 12) console.log("Férias");
    if (mes === 5 || mes === 8 || mes === 10) console.log("Mês de provas");
  }
}

function integradofinal() {
  let dia;
  do {
    dia = Number(prompt("Digite um número de 1 a 7:"));
  } while (!Number.isInteger(dia) || dia < 1 || dia > 7);

  let nomeDia;
  switch (dia) {
    case 1: nomeDia = "Domingo"; break;
    case 2: nomeDia = "Segunda-feira"; break;
    case 3: nomeDia = "Terça-feira"; break;
    case 4: nomeDia = "Quarta-feira"; break;
    case 5: nomeDia = "Quinta-feira"; break;
    case 6: nomeDia = "Sexta-feira"; break;
    case 7: nomeDia = "Sábado"; break;
  }
  console.log(nomeDia);

  let soma = 0;
  for (let i = 1; i <= dia; i += 2) {
    if (dia > 20) break;
    console.log(i);
    soma += i;
  }

  function ehPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  console.log("Soma:", soma);
  console.log(ehPrimo(soma) ? "A soma é prima" : "A soma não é prima");
}
