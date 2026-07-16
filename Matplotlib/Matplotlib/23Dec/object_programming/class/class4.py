class withconst:
    def __init__(self,x,y): #Constructor __init__    # self is default value 
        self.a = x
        print("constructor called")
        self.b = y
    def add(self):
        print("Sum of Self.a and self.b is : ",self.a + self.b)
        
obj = withconst(200,300)
obj.add()   
obj2 = withconst(100,1000)       


# why constructor called again --> because we have created another object obj2 of class withconst





