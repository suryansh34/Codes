import matplotlib.pyplot as plt
import numpy as np
x = np.array([1,2,3,4,5])
y = np.array([10,20,25,30,40])
cols =np.array(['r','g','b','y','c'])
plt.scatter(x, y, c=cols, s=100, marker='D', edgecolor='k', linewidth=1) 
plt.plot(x,y)
plt.savefig('dotted.png')
plt.show()

