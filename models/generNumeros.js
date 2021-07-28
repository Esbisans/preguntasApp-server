class generNumeros{

    generar(){
        let numeros = [1,2,3,4,5,6,7,8,9,10];
        let pos1;
        let pos2;
        let val1;
        let val2;

        for (let i = 0; i < 10; i++) {
            pos1 = Math.floor((Math.random() * 10));
            pos2 = Math.floor((Math.random() * 10));

            val1 = numeros[pos1]
            val2 = numeros[pos2]

            numeros[pos2]=val1
            numeros[pos1]=val2

        }


        return numeros
    }


}
module.exports = generNumeros;