import web, simplejson
from pyak import *
from compile import *
        
urls = (
    '/(.*)', 'hello'
)
app = web.application(urls, globals())


class hello:

	def __init__(self):
                self.yakker = Yakker("0C3BB2C741122C5CE0EE6CABE286A63A",Location(40.606310, -75.376448))
		print ("Will probably need like 90 seconds to make sure everything start up properly, but who knows")

	def GET(self, name):
                if name == "index" or name == "index.html" or name == "main" or name == "main.html" or not name:
                        return compile("main.html",{"yaks":self.loadYaks(5),"numberOfYaks":5})
                else:
                        return compile("blank.html",{})

        def loadYaks(self,num):
                loadedYaks = self.yakker.get_yaks()
                yaks = []
                for i in range(num):
                        yaks.append(loadedYaks[i].get_yak())
                return yaks
    		

if __name__ == "__main__":
        app.run()
