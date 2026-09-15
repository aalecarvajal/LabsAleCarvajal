#Primero le pido al usuario que escriba dos números
#Decidí usar el float porque en algunos calculos como la división puede que el resultado sea en decimales

n1 = input("Digita el primer número: ")
n2 = input("Digita el segundo número: ")

#hacemos la operación de suma de los números
suma = float(n1) + float(n2)

#damos el resultado de la suma
print(suma)

#A continuación las funciones extra
print("\nA continuación las operaciones extra: ")

#Restamos el segundo número del primero e imprimimos el resultado
resta = float(n1) - float(n2)
print("resta: ",resta)

#Multiplicamos los dos números e imprimimos el resultado
multiplicacion = float(n1) * float(n2)
print("multiplicación: ",multiplicacion)

#Dividimos el primer número entre el segundo e imprimimos el resultado
division = float(n1) / float(n2)
print("división: ",division)

#Aun no conozco cómo realizar las siguientes funciones del ejercicio
