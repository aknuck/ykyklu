import re

def compile(filename, args):
	code = open(filename,'r').read()
	rec = -1
	i = 0
	while i < len(code):
		if code[i] == '$':
			if i > 0 and code[i-1] == '\\':
				i+=1
				continue
			if rec == -1:
				rec = i
			else:
				code = code[:rec]+str((eval(code[rec+1:i])))+code[i+1:]#args[(code[rec+1:i])])+code[i+1:]
				rec = -1
				i -= i-rec
		i+=1
	return code