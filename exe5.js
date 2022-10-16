var num = document.getElementById("numero");
var tab = document.getElementById("lista");
var res = document.getElementById("mensagem");

var estoque = [];
var soma = 0;

function adicionar() {
  var val = Number(num.value);
  var opt = document.createElement("option");

  res.innerHTML = "";

  if (val >= 1 && val <= 100 && !estoque.includes(val)) {
    opt.text = `Valor ${val} adicionado`;
    tab.appendChild(opt);
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }

  estoque.push(val);
}

function finalizar() {
  for (let pos in estoque) {
    soma += estoque[pos];
  }

  res.innerHTML = `Ao todo temos ${estoque.length} números cadastrados </br>`;
  estoque.sort(function (a, b) {
    return b - a;
  });
  res.innerHTML += `O maior valor informado foi ${estoque[0]} </br>`;
  estoque.sort(function (a, b) {
    return a - b;
  });
  res.innerHTML += `O menor valor informado foi ${estoque[0]} </br>`;
  res.innerHTML += `Somando todos os valores, temos ${soma} </br>`;
  res.innerHTML += `A média dos valores digitados é ${
    soma / estoque.length
  } </br>`;
}
