class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }
  
  calculaCategoria(){
    if(this.idade >= 9 && this.idade < 12){
      return "Infantil"
    }
    else if(this.idade >= 12 && this.idade < 14){
      return "Juvenil"
    }
    else if(this.idade >= 14 && this.idade < 16){
      return "Intermediário"
    }
    else if(this.idade >= 16 && this.idade < 30){
      return "Adulto"
    }
    else {
      return "Sem categoria"
    }
  }
  
  calculaIMC(){
    return this.peso / (this.altura * this.altura)
  }
  calculaMediaValida(){
    let soma = 0
    this.notas.sort().slice(1,4).forEach(function(nota){
      soma = soma + nota
    })
    return soma / (this.notas.length - 2)
  }  

  obtemNomeAtleta(){
    return this.nome
  }
  obtemIdadeAtleta(){
    return this.idade
  }
  obtemPesoAtleta(){
    return this.peso
  }
  obtemNotasAtletas(){
    return this.notas
  }
  obtemCategoria(){
    return this.calculaCategoria()
  }
  obtemIMC(){
    return this.calculaIMC()
  }
  obtemMediaValida(){
    return this.calculaMediaValida()
  }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta())
console.log("Idade: " + atleta.obtemIdadeAtleta())
console.log("Peso: " + atleta.obtemPesoAtleta())
console.log("Altura: " + atleta.altura)
console.log("Notas: " + atleta.obtemNotasAtletas())
console.log("IMC: " + atleta.obtemIMC())
console.log("Média válida: " + atleta.obtemMediaValida())




