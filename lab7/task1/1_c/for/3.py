# ������ �335. ��������
# �������� ������
# �������� ��� ����� �� ������� �� a �� b, ���������� ������� ����������. ���� ����� ����� ���, �� ������ �������� �� �����.

from math import floor, sqrt
a, b = int(input()), int(input())
for x in [i * i for i in range(floor(sqrt(a)), b + 1)]:
    if a <= x <= b:
        print(x, end=' ')