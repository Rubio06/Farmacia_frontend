
//------------------- METODOS DE LAS CADENAS DE TEXTO ------------------------------//

// length: devuelve la longitud de la cadena
let cadena_length = "Hello, World!";
console.log(cadena_length.length);

// charAt: Devuelve el carácter en el índice especificado
let cadena_chatAt = "Hello";
console.log(cadena_chatAt.charAt(1)); 

// charCodeAt: Devuelve el valor Unicode del carácter en el índice especificado.
let cadena_charCodeAt = "Hello";
console.log(cadena_charCodeAt.charCodeAt(cadena_charCodeAt)); // 101

//concat: Combina dos o más cadenas.
let cadena1_concat = "Hello";
let cadena2_concat = "World";
console.log(cadena1_concat.concat(' ', cadena2_concat)); // 'Hello, World'

//incudes: Determina si una cadena contiene otra cadena.
let cadena_includes = "Hello, World!";
console.log(cadena_includes.includes('Hello')); // true

//indexOf: Devuelve el índice de la primera aparición de un valor especificado
let cadena_indexof = "Hello, World!";
console.log(cadena_indexof.indexOf("d")); // 7

//lastIndexOf: Devuelve el índice de la última aparición de un valor especificado.
let cadena_lastIndexOf = "Hello, World! World!";
console.log(cadena_lastIndexOf.lastIndexOf("World")); // 14

//replace: Reemplaza la primera ocurrencia de una cadena con otra cadena.
let cadena_replace = "Hello, World!";
console.log(cadena_replace.replace("World", "Everyone")); // 'Hello, Everyone!'

//replaceAll: Reemplaza todas las ocurrencias de una cadena con otra cadena.
let cadena_replaceAll = "Hello, World! World!";
console.log(cadena_replaceAll.replaceAll("World", "Everyone")); // 'Hello, Everyone! Everyone!'

//slice: Extrae una sección de una cadena y devuelve una nueva cadena.
let cadena_slice = "Hello, World!";
console.log(cadena_slice.slice(7, 11)); 

//split: Divide una cadena en un array de subcadenas.
let cadena_split = "Hello, World!";
console.log(cadena_split.split(", ")); // ['Hello', 'World!']

//tolowercase:Convierte la cadena a minúsculas.
let caddna_toLowerCase = "Hello, World!";
console.log(caddna_toLowerCase.toLowerCase()); // 'hello, world!'

//toUpperCase: Convierte la cadena a mayúsculas.
let cadenato_UpperCase = "Hello, World!";
console.log(cadenato_UpperCase.toUpperCase())


//trim: Elimina los espacios en blanco de ambos extremos de la cadena.
let cadena_trim = "   Hello, World!   ";
console.log(cadena_trim.trim());


//trimStart: Elimina los espacios en blanco del inicio de la cadena.
let cadena_trimStart = "   Hello, World!";
console.log(cadena_trimStart.trimStart());

//trimEnd: Elimina los espacios en blanco del final de la cadena.
let cadena_trimEnd = "Hello, World!   ";
console.log(cadena_trimEnd.trimEnd());


//substring: Devuelve una parte de la cadena entre los índices de inicio y fin, o hasta el final de la cadena.
let cadena_substring = "Hello, World!";
alert(cadena_substring.substring(7, 12));

//substr: Devuelve una parte de la cadena empezando en el índice especificado y continuando por la cantidad de caracteres indicada.
let cadena_substr = "Hello, World!";
console.log(str.substr(7, 5)); 