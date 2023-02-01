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
    else if(this.idade >= 16 && this.idade < 31){
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
    return "Nome: " + this.nome
  }
  obtemIdadeAtleta(){
    return "Idade: " + this.idade
  }
  obtemPesoAtleta(){
    return "Peso: " + this.peso
  }
  obtemAlturaAtleta(){
    return "Altura: " + this.altura
  }
  obtemNotasAtletas(){
    return "Notas: " + this.notas
  }
  obtemCategoria(){
    return "Categoria: " + this.calculaCategoria()
  }
  obtemIMC(){
    return "IMC: " + this.calculaIMC()
  }
  obtemMediaValida(){
    return "Média válida: " + this.calculaMediaValida()
  }
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtletas())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
