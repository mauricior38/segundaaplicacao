let pessoas = [
  {
    altura: 1.8,
    sexo: "M",
    opiniao: 3,
    idade: 21,
  },
  {
    altura: 1.7,
    sexo: "M",
    opiniao: 2,
    idade: 22,
  },
  {
    altura: 1.68,
    sexo: "F",
    opiniao: 3,
    idade: 33,
  },
  {
    altura: 1.54,
    sexo: "F",
    opiniao: 3,
    idade: 18,
  },
  {
    altura: 1.3,
    sexo: "F",
    opiniao: 2,
    idade: 28,
  },
  {
    altura: 1.74,
    sexo: "M",
    opiniao: 1,
    idade: 29,
  },
  {
    altura: 1.84,
    sexo: "F",
    opiniao: 1,
    idade: 19,
  },
  {
    altura: 1.74,
    sexo: "M",
    opiniao: 2,
    idade: 15,
  },
  {
    altura: 1.44,
    sexo: "M",
    opiniao: 3,
    idade: 25,
  },
  {
    altura: 1.9,
    sexo: "F",
    opiniao: 3,
    idade: 29,
  },
  {
    altura: 1.29,
    sexo: "F",
    opiniao: 2,
    idade: 30,
  },
  {
    altura: 1.69,
    sexo: "F",
    opiniao: 1,
    idade: 24,
  },
  {
    altura: 1.92,
    sexo: "M",
    opiniao: 1,
    idade: 28,
  },

  {
    altura: 1.92,
    sexo: "M",
    opiniao: 1,
    idade: 21,
  },

  {
    altura: 1.72,
    sexo: "M",
    opiniao: 2,
    idade: 24,
  },
];

//Valores opininão - 03) ótimo - 02) bom - 1) Regular

const mediaOtimo = (array) => {
  let qtdOtimo = 0;
  let qtdBom = 0;
  let qtdRegular = 0;
  let soma = 0;
  let media = 0;
  let porcento = 0;

  array.forEach((item) => {
    if (item.opiniao === 3) {
      qtdOtimo++;
      soma = soma + item.idade;
      media = soma / qtdOtimo;
    }

    if (item.opiniao === 1) {
      qtdRegular++;
    }

    if (item.opiniao === 2) {
      qtdBom++;
    }
  });

  porcento = (qtdBom * 100) / array.length;

  console.log(
    `RESPOSTA 01) ${qtdOtimo} pessoas responderam ótimo e a média de idade entre elas foi de ${qtdOtimo}.`
  );
  console.log(
    `RESPOSTA 02) A quantidade de pessoas que respondeu regular foi de ${qtdRegular}.`
  );
  console.log(
    `RESPOSTA 03) A porcengatem de pessoas que responderam bom foi de ${porcento.toFixed(2)}%.`
  );
};

mediaOtimo(pessoas);
