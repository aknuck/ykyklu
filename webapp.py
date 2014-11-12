import web, simplejson
from compile import *
        
urls = (
    '/(.*)', 'hello'
)
app = web.application(urls, globals())


class hello:

    def GET(self, name):
        if name == "index" or name == "index.html" or name == "main" or name == "main.html" or not name:
        	return compile("main.html",{"yaks":[{"upvotes":15,"text":"This is a yak","comments":6},{"upvotes":15,"text":"This is a yak","comments":6}],"numberOfYaks":2});
        else:
        	return compile("blank.html",{})

if __name__ == "__main__":
    app.run()
