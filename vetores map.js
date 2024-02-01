//Método .map:

let notas = [10, 9.5, 8, 7, 6];

let porCento = notas.map(elemento => {
    elemento += elemento/10;
    return (elemento <= 10 ? elemento : 10) ;
});

console.log(porCento);
console.log(typeof porCento);

let nomes = ['nanda', 'Caio', 'RubeNs', 'mauríCIO', 'zeNilsu'];

let nomesAtuais = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtuais);
