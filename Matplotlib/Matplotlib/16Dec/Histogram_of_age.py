import matplotlib.pyplot as plt
import numpy as np

# x = np.linspace(-10, 10, 400)
# y = np.random.randint(1, 100, size=400)
# plt.hist(y, bins=20, color='blue', alpha=0.7)
# plt.title("Histogram of Random Ages")
# plt.xlabel("Age")
# plt.ylabel("Number of People")
# plt.show()


# plt.hist(x)
x = np.random.normal(170, 10, 50)
plt.hist(x, bins=50, color='green', histtype='step')
plt.savefig('Histogram_of_age.png')

plt.show()




#For Normal Distribution
# plt.plot(x)

# plt.show()