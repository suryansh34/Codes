class withconst:
    def __init__(self,x,y): #Constructor __init__    # self is default value 
        self.a = x
        self.b = y
    def add(self):
        print("Sum of Self.a and self.b is : ",self.a + self.b)
obj = withconst(200,300)
obj.add()            


#Output:
# Sum of Self.a and self.b is :  500