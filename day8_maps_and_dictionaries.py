# Enter your code here. Read input from STDIN. Print output to STDOUT

n = int(input())
phoneBook = {}

for _ in range(0, n):
    name, number = input().split()
    phoneBook[name] = number
# print(phoneBook)

while True:
    try:
        name = input()
        if name in phoneBook:
            print('{}={}'.format(name, phoneBook[name]))
        else:
            print('Not found')
    except:
        break