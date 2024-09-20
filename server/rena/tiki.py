import tkinter as tk

label = tk.Label(
    text="Hi Over THere",
    fg="white",
    bg="#92e1e2",
    width=50,
    height=10,
    )
button = tk.Button(
    text="Click Me",
    width=25,
    height=5,
    bg="blue",
    fg="red",
)

entry = tk.Entry(
    fg="yellow",
    bg="blue",
    width=50,
)
entry.insert(0, "What's yout name?")


entry.pack()
label.pack()
button.pack()
tk.mainloop()