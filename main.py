def addmultiplenumbers(numbers):
        return sum(numbers)
    
def multiplymultiplenumbers(numbers):
        result = 1
        for num in numbers:
            result *= num
        return result
    
def isiteven(num):
        if num % 2 == 0:
            return True
        else:
            return False
    
def isitaninteger(num):
        if isinstance(num, int):
            return True
        else:
            return False

def main():
        print("Hello learners!")
        print(addmultiplenumbers([1, 2, 3, 4, 5]))
        print(multiplymultiplenumbers([1, 2, 3, 4, 5]))
        print(isiteven(4))
        print(isitaninteger(4))

if __name__=="__main__":
  main()
