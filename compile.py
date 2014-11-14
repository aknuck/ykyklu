import re

def compile(filename, args):
	code = open(filename,'r').read()
	recD = -1
	recP = -1
	i = 0
	while i < len(code):

		if code[i] == '%' or code[i] == "$":
			if code[i] == '%':
				if i > 0 and code[i-1] == '\\':
					code = code[:i-1]+code[i:]
					continue
				elif recP == -1:
					recP = i
				else:
					code = code[:recP]+"\n<script>\n"+open("static/"+code[recP+1:i],'r').read()+";\n</script>\n"+code[i+1:]#args[(code[rec+1:i])])+code[i+1:]
					#code.replace("$$$","var argsList = "+str(str(args).replace(": u\'",": \'"))+"\n")
					i = recP
					recP = -1
			elif code[i] == '$':
				if i > 0 and code[i-1] == '\\':
					code = code[:i-1]+code[i:]
					i += 1
					continue
				elif code[i:i+3] == "$$$":
					code = code[:i]+"var argsList = "+str(args).replace(": u\'",": \'")+"\n"+code[i+3:]
					i += len(str(args))+len("\"var argsDict = \"")
				elif recD == -1:
					recD = i
				else:
					#print "YOOOO"+code[recD-5:i+4]
					var = str((eval(code[recD+1:i])))
					code = code[:recD]+var+code[i+1:]#args[(code[rec+1:i])])+code[i+1:]
					i = irecD+len(var)
					recD = -1
					# add something to check for ' in the text of yaks and replace with \'. same for ""
		i+=1
	return code
