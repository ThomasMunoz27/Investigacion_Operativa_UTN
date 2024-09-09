/*
2. Volúmen de un Tanque de Agua
En una fábrica de tanques de agua en acero y inoxidable necesitan calcular de forma rápida el volúmen de los tanques. Dados el diámetro y la altura retornar el volúmen. La función debe cumplir con los siguientes requerimientos:

El resultado debe ser expresado en litros.
Los datos de entrada pueden ser en cm o en m.
*/

function calcVolumen(diametro, altura, unidMedidaDiametro, unidMedidaAltura){

    //ponemos en minuscula las unidades de medida
    unidMedidaAltura = unidMedidaAltura.toLowerCase();
    unidMedidaDiametro = unidMedidaDiametro.toLowerCase();

    //Verificamos que las unidades de medida sean las solicitadas
    if(unidMedidaAltura == "cm" || unidMedidaAltura == "m" || unidMedidaDiametro == "cm" || unidMedidaDiametro == "m"){

        //verificamos que los datos sean de tipo númerico
        if(typeof(diametro) == "number" && typeof(altura) == "number"){

            //Verificamos que los datos a operar tenga la misma unidad de medida
            if(unidMedidaAltura == "cm" && unidMedidaDiametro == "m"){
                diametro *= 100;
                unidMedidaDiametro = "cm";
            }
            if(unidMedidaDiametro == "cm" && unidMedidaAltura == "m"){
                altura *= 100;
                unidMedidaAltura = "cm";
            }

            //calculamos el volumen del cilindro
            let volume = Math.PI * altura * ((diametro/2)**2)
            
            //Hacemos la conversion de la unidad de medida a litros
            if(unidMedidaAltura == "m"){
                let litros = volume * 1000;
                return console.log(`La cantidad admitida por el cilindro es de: ${litros} ltrs`);
                
            }

            if(unidMedidaAltura == "cm"){
                let litros = volume / 1000;
                return console.log(`La cantidad admitida por el cilindro es de: ${litros} ltrs`);
                
            }

        }else{
            return console.log("Los datos ingresados no son de tipo numérico");
        }
    }else{
        return console.log("Unidad de medida invalida");
        
    }
}

console.log(calcVolumen(10, 5, "cm", "m"));
