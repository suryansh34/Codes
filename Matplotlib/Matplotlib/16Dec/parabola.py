import matplotlib.pyplot as plt
import numpy as np
import math

x = np.linspace(1,10,100)
y = x**2 + 4*x

plt.plot(x, y)
plt.title("Parabola: y = x^2 + 4x")
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.savefig('parabola.png')
plt.show()