from pyak import *


yakker = Yakker("0C3BB2C741122C5CE0EE6CABE286A63A",Location(40.606310, -75.376448))

for yak in yakker.get_yaks():
    yak.print_yak()

yakker.get_yaks()[1].add_comment("real quick")
