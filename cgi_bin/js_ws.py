#!/usr/bin/python3

print("content-type:text/html")
print()

#------------------Main Code--------------------#

import subprocess
import cgi

get = cgi.FieldStorage()

cmd = get.getvalue("cmd")
out = subprocess.getoutput("sudo "+cmd)
print(out)

