import matplotlib.pyplot as plt
import numpy as np

x = np.array(["ML", "AI", "Data Science", "CSE", "ET&C"])
y = np.array([5, 7, 3, 8, 4])

# plt.barh(x,y, color='orange') # Horizontal Bar Chart
plt.bar(x, y, color='red', width=0.5)  # Vertical Bar Chart
plt.savefig('creating_bars.png')
plt.show()