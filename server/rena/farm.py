import tkinter as tk

frame1 = tk.Frame()
frame2 = tk.Frame()
frame3 = tk.Frame()

label1 = tk.Label(master=frame1, text="I'm in the first frame")
label1.pack()

label2 = tk.Label(master=frame2, text="I am in the second frame")
label2.pack()

label3 = tk.Label(master=frame3, text="I am in the second frame")
label3.pack()

frame1.pack()
frame2.pack()
frame3.pack()

mic = {

    "flat": tk.FLAT,
    "sunken": tk.SUNKEN,
    "raised": tk.RAISED,
    "groove": tk.GROOVE,
    "ridge": tk.RIDGE,
}
window = tk.Tk()

for relief_name, relief in mic.items():
    frame = tk.Frame(master=window, relief=relief, borderwidth=5)
    frame.pack(side=tk.TOP)
    label = tk.Label(master=frame, text=relief_name)
    label.pack()

window.mainloop()