import re

def compile(filename, args):
	code = open(filename,'r').read()
	recD = -1
	recP = -1
	i = 0
	while i < len(code):
		if code[i].isalnum() or code[i] == '%' or code[i] == "$":
			if code[i] == '%':
				if i > 0 and code[i-1] == '\\':
					code = code[:i-1]+code[i:]
					continue
				elif recP == -1:
					recP = i
				else:
					code = code[:recP]+open("static/"+code[recP+1:i],'r').read()+code[i+1:]#args[(code[rec+1:i])])+code[i+1:]
					i = recP
					recP = -1
			elif code[i] == '$':
				if i > 0 and code[i-1] == '\\':
					code = code[:i-1]+code[i:]
					i += 1
					continue
				elif recD == -1:
					recD = i
				else:
					code = code[:recD]+str((eval(code[recD+1:i])))+code[i+1:]#args[(code[rec+1:i])])+code[i+1:]
					i = recD
					recD = -1
		i+=1
	return code