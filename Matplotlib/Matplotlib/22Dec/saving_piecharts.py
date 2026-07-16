import matplotlib.pyplot as plt
import numpy as np

sizes = [215, 130, 245, 210]
labels = ['A', 'B', 'C', 'D']
colors = ['gold', 'yellowgreen', 'lightcoral', 'lightskyblue']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=140)
plt.title('Pie Chart Example')

plt.savefig('pie_chart.svg', dpi=300)  # Save the figure
plt.show()