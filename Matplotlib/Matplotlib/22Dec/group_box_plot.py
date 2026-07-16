import matplotlib.pyplot as plt
import numpy as np
product_A_Sales = [100,110,95,105,160,170,48]
product_B_Sales = [90,120,130,140,150,94,170,180]
product_C_Sales = [80,120,130,140,150,160,56,80]
product_D_Sales = [70,120,79,140,96,48,170,180]

product_A_Sales.extend([300,80])
product_B_Sales.extend([50,300])
product_C_Sales.extend([70,250])

data_to_plot = [product_A_Sales, product_B_Sales, product_C_Sales, product_D_Sales]
plt.title('Monthly Sale performance by product ')
plt.xlabel('Products')
plt.ylabel('Sales')

plt.show()
