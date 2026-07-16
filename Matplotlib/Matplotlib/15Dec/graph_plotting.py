import matplotlib.pyplot as plt
import numpy as np

x1 = np.array([80,85,90,95,100,105,110,115])
y1 = np.array([240,250,260,270,280,290,300,310])

font1 = {'family':'serif','color':'blue','size':20}
font2 = {'family':'serif','color':'red','size':15}

plt.title("Sports watch data",fontdict=font1,loc='left')
plt.xlabel("Average Pulse",fontdict=font2)
plt.ylabel("Calorie Burnage",fontdict=font2)
plt.plot(x1,y1)
plt.grid(color ='green', linestyle ='--', linewidth = 0.5)
plt.savefig('graph_plotting.png')
plt.show()