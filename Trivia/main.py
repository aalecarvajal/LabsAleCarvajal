def trivia_fetch(num):
    #Diccionario con trivia sobre el número dado del 1 al 10.
    diccionario = {
    1: "No es un número primo. Además, si lo multiplicas por cualquier otro número, el resultado siempre es ese mismo número." ,
    2: "Es el único número primo par. todos los demás números pares se pueden dividir entre 2." ,
    3: "En la cultura popular y los cuentos, el 3 representa el equilibrio y la perfección." ,
    4: "En español, el número 454 es el número menor de 1,000 que tiene más letras al escribirse." ,
    5: "El número 5 tiene exactamente cinco letras en la palabra con la que se escribe." ,
    6: "Para algunos es el número de la suerte del dinero." ,
    7: "Es el número favorito de la mayoría de las personas en el mundo." ,
    8: "Si tumbas el número 8, se convierte en el símbolo de infinito." ,
    9: "Si multiplicas cualquier número por 9 y sumas las cifras del resultado siempre obtendrás 9." ,
    10: "Es la base de nuestro sistema de numeración porque tenemos 10 dedos en las manos." 
}

    if num in diccionario:
        return {"number": num, "text": diccionario[num], "found": True}
    #Si el número es mayor a 10 se devuelve un mensaje indicando que no hay trivia disponible para ese número.
    else:
        return {
        "number": num,
        "text": "No hay trivia disponible para este número, intenta un número entre 1 y 10.",
        "found": False,
     }

#Ahora indicamos la función main que se encargará de pedir al usuario un número y mostrar la trivia correspondiente.    
def main():
    numero = int(input("Ingresa un número del 1 al 10 para conocer un dato curioso sobre éste: "))

    trivia = trivia_fetch(numero)

    print(trivia["text"])

if __name__ == "__main__":
    main()

    
