import matplotlib.pyplot as plt
import numpy as np
x = np.array([0,1,2,3])
y = np.array([0,1,4,9])
plt.subplot(2,2,1)  # (rows,columns,position)
plt.plot(x,y)


x = np.array([0,1,2,3])
y = np.array([10,20,30,40])
plt.subplot(2,2,2)  # (rows,columns,position)
plt.plot(x,y)

x = np.array([0,1,2,3])
y = np.array([0,1,4,9])
plt.subplot(2,2,3)  # (rows,columns,position)
plt.plot(x,y)

x = np.array([0,1,2,3])
y = np.array([10,20,30,40])
plt.subplot(2,2,4)  # (rows,columns,position)
plt.plot(x,y)
plt.show()