# ������ �336. ����� � �����
# ������� ������
# �������� 2 �����: x � d.

# �������� ������
# ����������� � �������� ���� ����� - ������� ��� ����������� � ������ ������������ ����� x ����� d.

x, d, cnt = [int(a) for a in input()], int(input()), 0
for i in x:
    if(i == d):
        cnt += 1
print(cnt)