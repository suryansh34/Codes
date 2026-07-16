import matplotlib.pyplot as plt
import numpy as np  

y = np.array([45, 15, 25, 15])
mylabels = ["Maths ", "Python", "DSA", "OS"]
mycolors = ['red', 'blue', 'green', 'orange']
myexplode = [0.1, 0.1, 0.1, 0.1]
plt.pie(y, labels = mylabels, colors = mycolors, explode = myexplode)
plt.legend(loc="lower right")
plt.savefig('piecharts2.png')
plt.show()