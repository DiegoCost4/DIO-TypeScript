let valorAny: any;

valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny
let valorstring2: string = "testao"
valorString = valorAny

function somarStrings( string1: string, string2: string) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorstring2);

// é uma má pratica utilizar any