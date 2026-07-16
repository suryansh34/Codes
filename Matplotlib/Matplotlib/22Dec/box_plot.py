#Outliers --> points that fall outside the whisker
import matplotlib.pyplot as plt
import numpy as np 

age=np.random.randint(20,75,size=100)
age=np.append(age,[190,195,180,0,1])

plt.boxplot(age)
plt.show(True)
#Attributes
# vert --> if it is set true then graph will be vertical
# patch_artist --> either true or false if it true it fills the box with colour