import pandas as pd
import matplotlib.pyplot as plt

data = {"Month": ["January", "February", "March", "April"],
        "Sales": [2500, 3000, 4000, 3500]}
df = pd.DataFrame(data)

# Fix: Only use one 'kind' argument
df.plot(x="Month", y="Sales", kind="line", title="Monthly Sales", marker='o')
plt.savefig("monthly_sales.png")

plt.show()