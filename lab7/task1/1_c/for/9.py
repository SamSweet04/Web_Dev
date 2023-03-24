# Задача №341. Количество делителей
# Входные данные
# Вводится натуральное число x.

# Выходные данные
# Выведите единственное число - количество делителей числа x.
import math

a = int(input())
divisors = set()

for i in range(1, int(math.sqrt(a)) + 1):
    if a % i == 0:
        divisors.add(i)
        divisors.add(a // i)

print(len(divisors))