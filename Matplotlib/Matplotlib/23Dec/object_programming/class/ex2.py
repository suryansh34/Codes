class withconst:
    def __init__(self,x,y):
        self.x =x
        self.y = y

    def __str__ (self):
        return str(self.__class__)
    def add(self):
        print("Sum of ", self.x,"and",self.y,"=",self.x+self.y)
obj = withconst(200,300)
obj.add()
print(obj)