const pessoa = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  // O operador spread é utilizado para espalhar os atributos de um objeto em um novo objeto
  return { ...objeto }
}

const novoObjeto = clone(pessoa)
novoObjeto.nome = 'Caneta Bic Azul'

console.log(pessoa, novoObjeto)