import matplotlib.pyplot as plt
import seaborn as sns
t=sns.load_dataset("tips")
print(t.head())
print(t.shape)

plt.subplot(1,2,1)
plt.title("Count Plot")
sns.countplot(x="sex",data=t ,hue="smoker",palette="viridis")
plt.subplot(1,2,2)
plt.title("Scatter Plot")
sns.scatterplot(x=t["total_bill"], y=t["tip"],hue=t["sex"],style=t["smoker"])
plt.savefig("seaborn_example.png")
plt.show()