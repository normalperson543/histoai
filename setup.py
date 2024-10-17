import os
import termcolor

print(termcolor.colored("Building the application.", "dark_grey"))

print(termcolor.colored("Checking Node...", "dark_grey"))
try:
	retcode = os.system("node -v")
	if retcode != 0:
		print(termcolor.colored("Error: ", "red") + "Could not run node. Please check if Node.js is installed.")
		exit(1)
except:
	print(termcolor.colored("Error: ", "red") + "There was a problem trying to run a command in your terminal. Check if Python can run commands in your shell.")
	exit(1)
	
print(termcolor.colored("Installing dependencies...", "dark_grey"))
retcode = os.system("pnpm i")
if retcode != 0:
	print(termcolor.colored("Error: ", "red") + "There was a problem running npm. Check if npm is installed and if you are running setup.py inside the HistoAI directory.")
	exit(1)

print(termcolor.colored("Creating the database...", "dark_grey"))

