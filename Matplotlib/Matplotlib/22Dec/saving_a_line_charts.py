import matplotlib.pyplot as plt
import numpy as np
x = [1,2,3,4]
y = [10,20,25,30]
plt.plot(x, y,marker='o')
plt.title('Line Chart Example')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')
plt.savefig('line_chart.png', dpi=300)  # Save the figure
plt.show()