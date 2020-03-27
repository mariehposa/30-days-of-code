class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0
    # Add your code here

    def computeDifference(self):

        maxi = 0;

        for i in range(0, len(a)):
            for j in range(i+1, len(a)):
                diff = abs(a[i] - a[j]);
                if(diff > maxi):
                    maxi = diff;
                
        self.maximumDifference = maxi

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)