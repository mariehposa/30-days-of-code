# Enter your code here. Read input from STDIN. Print output to STDOUT

F = int(input())

for _ in range(F):
    n = int(input())

    # for i in range(2, n//2):
    if (n > 1):
        if(n == 2):
            print('Prime')
        elif (n % 2) == 0 or (n % 3) == 0:
            print("Not prime")
        else:
            print("Prime")
    else:
        print('Not prime')