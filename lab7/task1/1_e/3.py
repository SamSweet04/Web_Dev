# ������ �308. ����������� ���
# ������� ������
# �������� 2 ����� - x � y (x � y ����� 0 ��� 1, 0 ������������� �������� false, 1 ������������� �������� true).

# �������� ������
# ���������� ������� 0 ��� 1 - �������� ������� �� x � y.

def xor(x: bool, y: bool) -> bool:
    return (x or y) and not (x and y)

x, y = map(int, input().split())
print(int(xor(bool(x), bool(y))))