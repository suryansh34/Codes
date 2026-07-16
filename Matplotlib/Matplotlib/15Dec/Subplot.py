import matplotlib.pyplot as plt
import numpy as np
x = np.array([1,2,3,4,5])
y = np.array([10,20,25,30,40])

plt.subplot(1,2,1)  # (rows,columns,position)
plt.plot(x,y)
plt.grid(color='blue',linestyle='--',linewidth=0.5)
x = np.array([1,2,3,4,5])
y = np.array([40,30,25,20,10])
plt.subplot(1,2,2)
plt.plot(x,y)
plt.show()