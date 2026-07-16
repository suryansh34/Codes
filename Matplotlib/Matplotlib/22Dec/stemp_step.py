import matplotlib.pyplot as plt
import numpy as np

# Create the figure and axes
# Use consistent names: ax1 and ax2
fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(10, 5))

x = np.linspace(1, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Plot on the first axis
ax1.plot(x, y1)
ax1.set_title('Sine Wave')

# Plot on the second axis
ax2.plot(x, y2, 'r--')
ax2.set_title('Cosine Wave')

plt.tight_layout() # Adjusts spacing so titles don't overlap
plt.savefig('stemp_step.png')
plt.show()