import web, time
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
                        yaks[i]["time"] = self.difTime(loadedYaks[i])
                return yaks

        def loadComments(self,postID):
            comments = []
            commentsRaw = self.yakker.get_comments(postID[1:])
            for i in range(len(commentsRaw)):
                comments.append(commentsRaw[i].get_comment())
            return comments

        def difTime(self,y):
            yakTime = y.time
            yakSec = 60*60*int(yakTime[11:13])+60*int(yakTime[14:16])+int(yakTime[17:19])
            curTime = time.strftime("%Y-%m-%d %H:%M:%S")
            curSec = 60*60*int(curTime[11:13])+60*int(curTime[14:16])+int(curTime[17:19])
            if (curSec-yakSec) < 60:
                t = str(curSec-yakSec)+" sec ago"
            elif (curSec-yakSec) < 60*60:
                t = str((curSec-yakSec)/60)+" min ago"
            else:
                t = str(((curSec-yakSec)/60)/60)+" hrs ago"
            return t
    		

if __name__ == "__main__":
        app.run()
