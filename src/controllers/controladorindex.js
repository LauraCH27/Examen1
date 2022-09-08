/*Declarando arreglos en JS: es una variable especial que me permite almacenar multiples datos en 
// en una sola variables, un arreglo es un conjunto de elementos, cada arreglo dbe tener un indice y un valor
let numeros =[5,8,12,10]
//console.log(numeros[0])
//Instanciando una clase, se escribe en plural
let nombres = Array("juan","sara","carlos","laura")
//console.log(nombres[3])
//un objeto es una variables especial que permite que yo almacene multiples satos en una sola variable, un objeto tiene atributos
let persona={
    nombre:"Juan",
    profesion:"ingeniero",
    edad:33,
    hinchaDelmejor:true,
    materiasDisctadas:["Web2","Avanzadas","Nuevas tecnologias"],
    equiposFavoritos:["Nacional","Liverpool"],
    comida:{
        nombre:"bandeja paisa",
        precio: 25000
    }
}
console.log(persona.materiasDisctadas[2])
console.log(persona.equiposFavoritos[1])
console.log(persona.comida.precio)*/
let peliculas=[
    {
        Nombre: "Buena Suerte",
        Genero: "Ciencia Ficción",
        Duración: 220,
        Poster: "https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/buenasuerte.png?alt=media&token=23828ac1-dc91-4da6-89af-7145d34a468b",
        Sinopsis: "Nancy Stokes, una maestra de escuela jubilada, anhela algo de aventura y sexo. Sobre todo, buen sexo. Y tiene un plan para lograrlo: contratar a un joven trabajador sexual que se hace llamar Leo Grande.",
        Clasificacion: "General",
        Idioma: "Inglés",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    },
    {
        Nombre: "Dragon Ball",
        Genero: "Animado",
        Duración: 150,
        Poster: "https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/dragon.jpg?alt=media&token=55ebf474-2c91-4e5a-833a-00f8a12ab6ab",
        Sinopsis: "El Ejército de la Cinta Roja (Red Ribbon cuya sigla es RR) era el más poderoso de la Tierra hasta que entró en conflicto con Goku mientras buscaba las bolas del dragón. Luego el Doctor Gero buscó venganza creando androides e incluso a Célula, un rival extremadamente poderoso para los héroes. Ahora, esta malvada organización regresará en la película Dragon Ball Super: Super Hero.",
        Clasificacion: "General",
        Idioma: "Español",
        Director:"Jessica M. Thompson.",
        Actores:"Nathalie Emmanuel, Thomas Doherty, Stephanie Corneliussen"
    },
    {
        Nombre: "Gemelo Siniestro",
        Genero: "Terror",
        Duración: 202,
        Poster: "https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/gemelo.png?alt=media&token=85489906-b396-4051-9cb2-58f1d50e4bd4",
        Sinopsis: "Gemelo Siniestro por fin se estrena el próximo 14 de julio y en Panda Ancha nos dimos a la tarea de prepararte una reseña sin spoilers para develar si es capaz de hacer sentir el verdadero pavor a los presentes. También encontrarás una galería interactiva del elenco que conforma el trabajo más reciente del director finlandés Taneli Mustonen.",
        Clasificacion: "18+",
        Idioma: "Subtitulada Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    },
    {
        Nombre: "Minuons",
        Genero: "Animado",
        Duración: 190,
        Poster: "https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/minous.jpg?alt=media&token=8db5cacf-34f0-49d8-9e62-af2bd2371df7",
        Sinopsis: "La historia de LOS MINIONS se remonta al principio de los tiempos. Los Minions empezaron siendo organismos amarillos unicelulares que evolucionaron a través del tiempo, poniéndose siempre al servicio de los amos más despreciables. Ante su incapacidad para mantener a esos amos  desde el T. Rex a Napoleón , los Minions acaban encontrándose solos y caen en una profunda depresión.",
        Clasificacion: "General",
        Idioma: "Español",
        Director:"George Miller.",
        Actores:"Idris Elba, Tilda Swinton, Alyla Browne, Pia Thunderbolt."
        
    },
    {
        Nombre: "Telefono Negro",
        Genero: "Terror",
        Duración: 140,
        Poster: "https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/telefononegro.png?alt=media&token=39d1b7b1-d7d7-43e9-ac53-41940780b10c",
        Sinopsis: "Desde que vimos el primer tráiler, El teléfono negro (The Black Phone) llamó nuestra atención. Juega mucho a favor que siempre hemos creído que Ethan Hawke es un tremendo actor. Además, la complicidad entre la estrella de Hollywood y el director Scott Derrickson se siente natural. Este filme vuelve a demostrar que tienen un vínculo especial para hacer grandes cosas en el género de terror.",
        Clasificacion: "18+",
        Idioma: "Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    },
    {
        Nombre:"Jack En La Caja Maldita",
        Genero:"Terror",
        Duración:87,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-cb507.appspot.com/o/jack.png?alt=media&token=aeeaa111-ceab-45e5-98cb-ab3053b93927",
        Sinopsis:" Cuando el antiguo muñeco de Jack-in-the-box es sacado de la tierra y se abre, sus nuevos propietarios pronto tienen razones para creer que el espeluznante muñeco de payaso tiene vida propia.",
        Clasificacion:"18+",
        Idioma:"Inglés",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
    },
    {
        Nombre:"EL FANTASMA DE MARTYRS LANE (MARTYRS LANE)",
        Genero:"Terror",
        Duración:90,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-cb507.appspot.com/o/fantasma.jpg?alt=media&token=c1eabb1c-bf10-4645-9498-a2e568c546dc",
        Sinopsis:" Leah es una niña de 10 años, quien vive en una antigua y oscura parroquia donde se escuchan raros sonidos durante la noche. Ella no entiende por qué su mamá está fascinada con un viejo relicario.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
    },
    {
        Nombre:"Super Mascotas",
        Genero:"Animada",
        Duración:105,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-cb507.appspot.com/o/jack.png?alt=media&token=aeeaa111-ceab-45e5-98cb-ab3053b93927",
        Sinopsis:"Krypto el Superperro y Superman son amigos inseparables que comparten los mismos superpoderes y luchan juntos contra el crimen en Metrópolis. Cuando Superman y el resto de la Liga de la Justicia son secuestrados, Krypto debe convencer a un variopinto grupo de un albergue Ace el sabueso, PB la cerdita barrigona, Merton la tortuga y Chip la ardilla de dominar sus nuevos poderes y ayudarlo a rescatar a los superhéroes.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Barry Levinson.",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    },
    {
        Nombre:"Thor: Amor y Trueno",
        Genero:"Fantástico",
        Duración:118,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-cb507.appspot.com/o/thor.png?alt=media&token=3bf46a44-f5ac-4ff3-a343-f411469a5aff",
        Sinopsis:"El Dios del Trueno (Chris Hemsworth) emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses (Christian Bale), que busca la extinción de los dioses.",
        Clasificacion:"14+",
        Idioma:"Español",
        Director:"Rowe De Vasten",
        Actores:"Foster, Billy Magnussen, Vicky Krieps."
    },
    {
        Nombre:"Tren bala",
        Genero:"Acción",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-cb507.appspot.com/o/trenbala.jpg?alt=media&token=d22bbde4-34d2-4223-aed9-3fd5997b98be",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    }
    



    //Recorriendo un arreglo en JS
    //función: se reutiliza y se llama las veces que quiera...

]
//traer ID del html
let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.Nombre)
    console.log(pelicula.Genero)
    console.log(pelicula.Duración)
    console.log(pelicula.Poster)
    console.log(pelicula.Sinopsis)
    console.log(pelicula.Clasificacion)
    console.log(pelicula.Idioma)

    //TRAVERSING (crear etiquetas de html desde JS)
    //1. creamos una columna para cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")
    //2. creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")
    //3. creamos una imagen para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.Poster
    //4. creamos nombre para cada pelicula
    let nombre=document.createElement("h3")
    nombre.classList.add("card-title")
    //cambiar el contenido
    nombre.textContent=pelicula.Nombre
    //5. creamos el genero de cada pelicula
    let genero=document.createElement("h6")
    genero.classList.add("fw-bold")
    genero.textContent= "Género: "+ pelicula.Genero
    //6. creamos el idioma a cada pelicula
    let idioma=document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: "+ pelicula.Idioma
    //
    let director=document.createElement("h6")
    director.classList.add("fw-bold")
    director.textContent="Director: "+ pelicula.Director
    //
    let actores=document.createElement("h6")
    actores.classList.add("fw-bold")
    actores.textContent="Actores: "+ pelicula.Actores
    //
    let duracion=document.createElement("h6")
    duracion.classList.add("fw-bold")
    duracion.textContent="Duración: "+ pelicula.Duración
    let clasificacion=document.createElement("h6")
    clasificacion.classList.add("fw-bold")
    clasificacion.textContent="Clasificación: "+ pelicula.Clasificacion

    //7.creamos la sipnosis
    let sinopsis=document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.Sinopsis

    // Padres e hijos
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    

})
let peliculass=[
    {
        Nombre:"La Chica Salvaje",
        Genero:"Acción",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/cartelera1.png?alt=media&token=678c41d6-e0b3-4fcc-8e80-bbdce212136e",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
    },
    {
        Nombre:"El Arbol Rojo",
        Genero:"Acción",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/cartelera2.png?alt=media&token=97f2abe5-6617-49b8-b10e-9b99900aab8a",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
        
        

    },
    {
        Nombre:"Apocalipsis Zoombie",
        Genero:"Terror",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/cartelera3.png?alt=media&token=f4d6b144-b8d8-495f-aac2-2d2dee4bf4fc",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"

    },
    {
        Nombre:"Noches Con Mi Ex",
        Genero:"Romántica",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/cartelera4.png?alt=media&token=cd8c81fd-6629-4ce5-9d65-7fbd397cfe0e",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
    },
    {
        Nombre:"NCacería Reales",
        Genero:"Acción",
        Duración:126,
        Poster:"https://firebasestorage.googleapis.com/v0/b/cinemiercoles-57f53.appspot.com/o/cartelera5.png?alt=media&token=2c850345-64ef-4fb5-ae82-0acacdde2348",
        Sinopsis:"Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. Descubren que sus misiones no son ajenas entre sí. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.",
        Clasificacion:"18+",
        Idioma:"Español",
        Director:"Harold De Vasten",
        Actores:"Gilberto Obando, Héctor Paredes, Héctor Mejía"
    }
    

]
let cartelera=document.getElementById("cartelera")

peliculass.forEach(function(peli){
    console.log(peli.Nombre)
    console.log(peli.Genero)
    console.log(peli.Duración)
    console.log(peli.Poster)
    console.log(peli.Sinopsis)
    console.log(peli.Clasificacion)
    console.log(peli.Idioma)

    let columna=document.createElement("div")
    columna.classList.add("col")
    //2. creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")
    //3. creamos una imagen para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=peli.Poster
    //4. creamos nombre para cada pelicula
    let nombre=document.createElement("h3")
    nombre.classList.add("card-title")
    //cambiar el contenido
    nombre.textContent=peli.Nombre
    //5. creamos el genero de cada pelicula
    let genero=document.createElement("h6")
    genero.classList.add("fw-bold")
    genero.textContent= "Género: "+ peli.Genero
    //6. creamos el idioma a cada pelicula
    let idioma=document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: "+ peli.Idioma
    //
    let director=document.createElement("h6")
    director.classList.add("fw-bold")
    director.textContent="Director: "+ peli.Director
    //
    let actores=document.createElement("h6")
    actores.classList.add("fw-bold")
    actores.textContent="Actores: "+ peli.Actores
    //
    let duracion=document.createElement("h6")
    duracion.classList.add("fw-bold")
    duracion.textContent="Duración: "+ peli.Duración
    let clasificacion=document.createElement("h6")
    clasificacion.classList.add("fw-bold")
    clasificacion.textContent="Clasificación: "+ peli.Clasificacion
    //7.creamos la sipnosis
    let sinopsis=document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=peli.Sinopsis

    // Padres e hijos
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    cartelera.appendChild(columna)

})
