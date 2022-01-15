//Cuadrado

const perimetroCuadrado = (cuadrado) => cuadrado.lado * 4;
const areaCuadrado = (cuadrado) => Math.pow(cuadrado.lado, 2);
const mainCuadrado = () => {
  let cuadrado = {
    lado: 5,
  };
  cuadrado.perimetro = perimetroCuadrado(cuadrado);
  cuadrado.area = areaCuadrado(cuadrado);
  console.group("Cuadrado");
  console.log(`
  Cuadrado:{
      Lados: ${cuadrado.lado}cm,
      Perimetro: ${cuadrado.perimetro}cm,
      Area: ${cuadrado.area}cm^2}
  `);
  console.groupEnd();
};

//Triángulo
const perimetroTriangulo = (triangulo) =>
  triangulo.lado1 + triangulo.lado2 + triangulo.base;
const areaTriangulo = (triangulo) => (triangulo.base * triangulo.altura) / 2;
const mainTriangulo = () => {
  let triangulo = {
    lado1: 6,
    lado2: 6,
    base: 4,
    altura: 5.5,
  };
  triangulo.perimetro = perimetroTriangulo(triangulo);
  triangulo.area = areaTriangulo(triangulo);
  console.group("Triángulo");
  console.log(`
  Triángulo:{
      Lados:{
          lado1: ${triangulo.lado1}cm,
          lado2: ${triangulo.lado2}cm,
          base: ${triangulo.base}cm
          altura: ${triangulo.altura}cm
      },
      Perimetro: ${triangulo.perimetro}cm, 
      Area: ${triangulo.area}cm^2 
      }
    `);
  console.groupEnd();
};

//Círculo
const diametroCirculo = (circulo) => circulo.radio * 2;
const perimetroCirculo = (circulo) => circulo.diametro * Math.PI;
const areaCirculo = (circulo) => Math.pow(circulo.radio, 2) * Math.PI;
const mainCirculo = () => {
  let circulo = {
    radio: 4,
  };

  circulo.diametro = diametroCirculo(circulo);
  circulo.circunferencia = perimetroCirculo(circulo);
  circulo.area = areaCirculo(circulo);

  console.group("Círculo");
  console.log(`
    Triángulo:{
        Radio: ${circulo.radio}cm,
        Diametro: ${circulo.diametro}cm,
        Circunferencia: ${circulo.circunferencia}cm, 
        Area: ${circulo.area}cm^2 
        }
      `);
  console.groupEnd();
};

//Interactuar con HTML

const calcPerimetroCuadr = () => {
  let cuadrado = {
    lado: parseFloat(document.getElementById("ladoCuadrado").value),
  };
  alert(perimetroCuadrado(cuadrado));
};

const calcAreaCuadr = () => {
  let cuadrado = {
    lado: parseFloat(document.getElementById("ladoCuadrado").value),
  };
  alert(areaCuadrado(cuadrado));
};

const calcPerimetroTriang = () => {
  let triangulo = {
    lado1: parseFloat(document.getElementById("ladoATriangulo").value),
    lado2: parseFloat(document.getElementById("ladoBTriangulo").value),
    base: parseFloat(document.getElementById("baseTriangulo").value),
    altura: parseFloat(document.getElementById("alturaTriangulo").value),
  };
  alert(perimetroTriangulo(triangulo));
};

const calcAreaTriang = () => {
  let triangulo = {
    lado1: parseFloat(document.getElementById("ladoATriangulo").value),
    lado2: parseFloat(document.getElementById("ladoBTriangulo").value),
    base: parseFloat(document.getElementById("baseTriangulo").value),
    altura: parseFloat(document.getElementById("alturaTriangulo").value),
  };
  alert(areaTriangulo(triangulo));
};

const calcPerimetroCircu = () => {
  let circulo = {
    radio: parseFloat(document.getElementById("radioCirulo").value),
  };
  circulo.diametro = diametroCirculo(circulo);
  alert(Math.round(perimetroCirculo(circulo)*100)/100);
};

const calcAreaCircu = () => {
  let circulo = {
    radio: parseFloat(document.getElementById("radioCirulo").value),
  };
  alert(Math.round(areaCirculo(circulo)*100)/100);
};
