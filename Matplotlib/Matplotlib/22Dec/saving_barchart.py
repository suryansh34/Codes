import matplotlib.pyplot as plt
import numpy as np
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]
plt.bar(categories, values, color=['red', 'blue', 'green', 'orange'])
plt.title('Bar Chart Example')

plt.savefig('barchart.png', dpi=300)  # Save the figure
plt.show()