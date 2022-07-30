const Nombre = "Javier", 
Apellido = "Ubeda"
;

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = Nombre.concat(" ", Apellido, );
console.log(estudiante);

//Cadena estudiante en mayusculas
const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

//Cadena estudiante en minuscula
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

//Numero de letras de la cadena "estudiante"
console.log(estudiante.length)

//Variable que contenga la primera letra del nombre
const letraInicial = estudiante.slice(0, 1);
console.log(letraInicial)

//Otra variable que contenga la última letra del Apellido
 //Opcion 1
    const letraFinal = estudiante.slice(estudiante.length-1);
//Opcion 2
    const letraFinal2 = estudiante[estudiante.length-1];
console.log(letraFinal)
console.log(letraFinal2)

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const SinEspacios = estudiante.trim();

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const Busqueda = new RegExp(/Javier/);
console.log(Busqueda.test(estudiante));










