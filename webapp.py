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

	def GET(self, name):
                if name == "index" or name == "index.html" or name == "main" or name == "main.html" or not name:
                        data = {"yaks":self.loadYaks(6),"numberOfYaks":6}
                        for i in range(len(data["yaks"])):
                            data["yaks"][i]["comments"] = self.loadComments(data["yaks"][i]["id"])
                            data["yaks"][i]["numberOfComments"] = len(data["yaks"][i]["comments"])

                        return compile("index.html",data)
                else:
                        return compile("blank.html",{})

        def loadYaks(self,num):
                loadedYaks = self.yakker.get_yaks()
                yaks = []
                for i in range(num):
                        yaks.append(loadedYaks[i].get_yak())
                return yaks

        def loadComments(self,postID):
            comments = []
            commentsRaw = self.yakker.get_comments(postID[1:])
            for i in range(len(commentsRaw)):
                comments.append(commentsRaw[i].get_comment())
            return comments
    		

if __name__ == "__main__":
        app.run()
