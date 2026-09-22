import requests

#creamos la función trivia_fetch
def trivia_fetch(num):
        url = f"https://opentdb.com/api.php?amount={num}"

        response = requests.get(url)

        trivia = response.json()

        return trivia

#creamos la función main
def main():
        cantidad = int(input("¿Cuántas preguntas quieres? "))
        trivia = trivia_fetch(cantidad)
        #me salía como resultado un json muy largo,
        #así que investigué cómo imprimir solo las preguntas
        # y lo logré con un for
        for pregunta in trivia["results"]:
            print(pregunta["question"])

if __name__ == "__main__":
    main()
