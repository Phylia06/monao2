from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import pandas as pd
from data import *

revenue_data = pd.DataFrame(revenue)
revenue_data["data"] = pd.to_datetime(revenue_data["data"])

fig_1 = Figure(figsize=(2.5, 2.2), facecolor="#917FB3")
ax_1 = fig_1.add_subplot()
ax_1.fill_between(x=revenue_data["data"], 
                  y1=revenue_data["amount"], alpha=0.7)

canvas = FigureCanvasTkAgg(figure=fig_1, master=window)
canvas.draw()
canvas.get_tk_widget().place(x=400, y=600)