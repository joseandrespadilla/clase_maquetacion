
let tiponumero = 7.644353458766
let tipecadenadetexto = 'Hola Mundo'
let tipobooleano = true
let tipoNulo = null
let tipolista = [
7,
60,
54,
3,
0,
23,
"hjfgu",
"kghjk",
"kjhoui",
undefined

 ]

 let tipoObjeto = {
    0: 7,
    1: 60, 
    100: 1914,
    name: "Jose",
    password: "1234",
    address: {
    city: "Valencia",
    country: "Venezuela",
    }
}
let tipoLista = [
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
]
if (5 === 8) {
    console.log("Se cumplio la funcion")
}  

else{
    console.log("Lo otro no se cumple")
}
5 === 8
? console.log ("Se cumplio la condicion")
: console.log ("lo otro no se cumplio")



function MiFuncion() {
    console.lopg('Hola')
console.log('Bienvenidos')
console.log ('a venezuela')
}
let MiFuncionFlecha =
() =>  {

}
console.log(
    MiFuncionFlecha()
    )

    // Una funcion
    //Reciba dos parametro
    //Retorne el resulta de la division de el primer parametro entre el segundo parametro

    let FuncionDividir = (num1, num2) => {
        return num1 / num2
    }
      console.log( FuncionDividir (0,2) )

     console.log(axios) 

     axios.get('https://leonardoapi.onrender.com/music')
     .catch(
        () => {

            console.log('La promesa ha fallado')
        }

)
.then(
   //Callback//

    (response) => {
        let canciones = response.data
        canciones.map((cancion) => {

          console.log(cancion.album)
        } )


    }
)


console.log(canciones)