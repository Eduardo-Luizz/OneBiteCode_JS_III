
const media_aritmetica_simples = (...nums) => {
    const soma_dos_parametros = nums.reduce((amount, num) => amount + num, 0)
    return soma_dos_parametros / nums.length
}
console.log(media_aritmetica_simples(10, 10, 10))

const media_aritmetica_ponderada = (...nums) => {
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < nums.length; i += 2) {
        const nota = nums[i];
        const peso = nums[i + 1];
        somaNotas += nota * peso;
        somaPesos += peso;
    }

    if (somaPesos === 0) {
        return 0; // Evita divisão por zero se nenhum peso for fornecido
    }

    return somaNotas / somaPesos;
}
console.log(media_aritmetica_ponderada(7, 2, 9, 5, 3, 1))

const mediana = (...nums) => {

    const indiceDoMeio = Math.floor(nums.length / 2);

    if (nums.length % 2 !== 0) {
        return nums[indiceDoMeio];
    } else {
        const numerosMeio = [nums[indiceDoMeio - 1], nums[indiceDoMeio]]
        const resultado = (numerosMeio[0] + numerosMeio[1]) / 2
        return resultado
    }
}
console.log(mediana(11, 23, 34, 45, 56))
console.log(mediana(111, 233, 555, 455, 566, 789))
console.log(mediana(111, 233, 666, 455, 566, 789, 11, 121))

const moda = (...valores) => {
     // Criar um objeto para armazenar a contagem de cada valor
  const contagem = {};

  // Percorrer os valores e contar quantas vezes cada valor ocorre
  for (let valor of valores) {
    if (contagem[valor]) {
      contagem[valor]++;
    } else {
      contagem[valor] = 1;
    }
  }

  // Encontrar o valor(es) com a maior contagem
  let moda = [];
  let maiorContagem = 0;
  for (let valor in contagem) {
    if (contagem[valor] > maiorContagem) {
      maiorContagem = contagem[valor];
      moda = [valor];
    } else if (contagem[valor] === maiorContagem) {
      moda.push(valor);
    }
  }

  return moda;
}

console.log(moda(1, 2, 2, 3, 4, 4, 4))
console.log(moda(1, 2, 2, 3, 3, 4, 4))