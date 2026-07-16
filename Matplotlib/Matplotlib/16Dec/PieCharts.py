import matplotlib.pyplot as plt
import numpy as np
y = np.array([45, 15, 25, 15])
x = np.array(["Maths ", "Python", "DSA", "OS"])
plt.bar(x, y, color=['red', 'blue', 'green', 'orange'])
plt.pie(y, labels=x,autopct='%1.1f%%')
plt.savefig('PieCharts.png')
plt.show()