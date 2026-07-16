import matplotlib.pyplot as plt
import numpy as np  

x = np.array(["ML", "AI", "Data Science", "CSE", "ET&C"])
y = np.array([5, 7, 3, 8, 4])

plt.subplot(1,2,1)
plt.bar(x,y, color='orange') # Horizontal Bar Chart
plt.legend(["normal"])
plt.subplot(1,2,2)
plt.barh(x, y, color='red')  # Vertical Bar Chart
plt.legend(["horizontal"])
plt.savefig('more_on_bars.png')
plt.show()