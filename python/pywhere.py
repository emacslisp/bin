import sys
import os
import os.path
from os import listdir
from os.path import isfile, join

def main():
    devArray = sys.argv

    if len(devArray) != 2:
        print('pywhere <command-name>')
        return
    commandName = devArray[1]
    path = os.environ['PATH']
    pathSpliter = "/"
    spliter = ":"
    if os.name == 'nt':
        spliter = ";"
        pathSpliter = "\\"
    paths = path.split(spliter)

    pathDict = {}
    for p in paths:
        if os.path.exists(p):
            for fileName in listdir(p):
                targetFilePath = join(p, fileName)
                if isfile(targetFilePath) and commandName in fileName:
                    if targetFilePath in pathDict:
                        continue
                    pathDict[targetFilePath] = 1

                    print(targetFilePath)

main()