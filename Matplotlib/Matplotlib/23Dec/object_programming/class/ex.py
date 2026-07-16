# Create a python class that takes two data members from the user and displays the multiplication of these two data members.

class myproduct:
    def getinput (self):
        self.a = int(input("Enter First Data: "))
        self.b = int(input("Enter Second Data: "))
    def showproduct (self):
        print("Product =",self.a*self.b)
obj = myproduct()
obj.getinput()
obj.showproduct()         
