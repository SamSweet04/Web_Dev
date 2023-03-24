# Задача №335. Квадраты
# Выходные данные
# Выведите все числа на отрезке от a до b, являющиеся полными квадратами. Если таких чисел нет, то ничего выводить не нужно.

from math import floor, sqrt
a, b = int(input()), int(input())
for x in [i * i for i in range(floor(sqrt(a)), b + 1)]:
    if a <= x <= b:
        print(x, end=' ')