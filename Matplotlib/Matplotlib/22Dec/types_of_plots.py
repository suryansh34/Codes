import matplotlib.pyplot as plt
import numpy as np
x=np.arange(0,2*np.pi,0.1)
y=np.sin(x)
plt.subplot(1,2,1)
plt.stem(x,y)
plt.title('Stem plot')
plt.subplot(1,2,2)
plt.step(x,y)
plt.title('Step plot')
plt.savefig('stemp_step.png')
plt.show()


#figure and axis -- topoic in matplotlib