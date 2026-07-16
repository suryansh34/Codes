# Follows or Java follows camel case convention for class names

class Test:
    """This is a simple class"""
print(Test.__doc__ )   # Specific built-in methods __doc__


class Test2:
    a = 10
    def show(self):
        print("data is:", self.a)
ob = Test2()  #Public access modifier
ob.show()        

print(Test2.__doc__)  