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
                        n = 8
                        data = {"yaks":self.loadYaks(n),"yaksHot":self.loadHotYaks(n),"numberOfYaks":n}
                        for i in range(len(data["yaks"])):
                            data["yaks"][i]["comments"] = self.loadComments(data["yaks"][i]["id"])
                            data["yaks"][i]["numberOfComments"] = len(data["yaks"][i]["comments"])
                        for i in range(len(data["yaksHot"])):
                            data["yaksHot"][i]["comments"] = self.loadComments(data["yaksHot"][i]["id"])
                            data["yaksHot"][i]["numberOfComments"] = len(data["yaksHot"][i]["comments"])

                        return compile("index.html",data)
                elif name == "faq.html" or name == "faq":
                        return compile("faq.html",{})
                else:
                        return compile("blank.html",{})

        #return a list of yaks of length equal to the parameter 'num'
        def loadYaks(self,num):
                loadedYaks = self.yakker.get_yaks()
                yaks = []
                for i in range(num):
                        yaks.append(loadedYaks[i].get_yak())
                        yaks[i]["time"] = self.difTime(loadedYaks[i])
                return yaks

        #return a list of hot yaks of length equal to the parameter 'num'
        def loadHotYaks(self,num):
                loadedYaks = self.yakker.get_area_tops()
                yaks = []
                for i in range(num):
                        yaks.append(loadedYaks[i].get_yak())
                        yaks[i]["time"] = self.difTime(loadedYaks[i])
                return yaks

        #return a list of all the comments from a yak in a format that the javascript can use
        def loadComments(self,postID):
            comments = []
            commentsRaw = self.yakker.get_comments(postID)
            for i in range(len(commentsRaw)):
                comments.append(commentsRaw[i].get_comment())
            return comments

        #Returns the difference in time from the current time, so the age of the yak can be returned in a string to be printed out
        def difTime(self,y):
            yakTime = y.time
            yakSec = 60*60*int(yakTime[11:13])+60*int(yakTime[14:16])+int(yakTime[17:19])
            curTime = time.strftime("%Y-%m-%d %H:%M:%S")
            curSec = 60*60*int(curTime[11:13])+60*int(curTime[14:16])+int(curTime[17:19])
            if (curSec-yakSec) < 15:
                t = "just now"
            elif (curSec-yakSec) < 60:
                t = str(curSec-yakSec)+" sec ago"
            elif (curSec-yakSec) < 60*60:
                t = str((curSec-yakSec)/60)+" min ago"
            else:
                t = str(((curSec-yakSec)/60)/60)+" hrs ago"
            return t

if __name__ == "__main__":
        app.run()
