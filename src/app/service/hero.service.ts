import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    //private hero:any[]=
    private hero:Hero[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC"
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel"
            }
    ];

    private villain:Hero[]=
        [
            {
              nombre: "Venom",
              bio: "El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano.",
              img: "assets/img/venom.jpg",
              aparicion: "1984-12-8",
              casa:"Marvel"
            },
            {
              nombre: "Joker",
              bio: "Se trata de uno de los criminales más notables de Gotham City, y es el enemigo principal de Batman.",
              img: "assets/img/joker.jpg",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Loki",
              bio: "Loki Laufeyson (Tom Hiddleston) fue el hijo de Laufey, gobernante de los Gigantes de Hielo de Jotunheim, que poco después de su nacimiento, fue adoptado por el Rey de Asgard, Odín, Loki fue criado por Odín y su esposa Frigga como un príncipe de Asgard, junto con su hijo biológico Thor. Cuando creció, se hizo conocido como el “Dios del engaño”.",
              img: "assets/img/loki.png",
              aparicion: "1949-07-25",
              casa:"Marvel"
            },
            {
              nombre: "Thanos",
              bio: "Thanos es uno de los villanos más poderosos de todo el Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.",
              img: "assets/img/thanos.jpg",
              aparicion: "1973-02-07",
              casa:"Marvel"
            }

            
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getHeros():Hero[]{
        return this.hero;
    }

    getVillains():Hero[]{
      return this.villain;
    }

    getHero(id:number){
        return this.hero[id];   
    }

    getVillain(id:number){
      return this.villain[id];   
    }

    buscarHeroe(palabra:string):Hero[]{
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      for( let hero of this.villain){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

}

export interface Hero{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
}