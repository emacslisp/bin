import sys

def main():
    devArray = sys.argv

    if len(devArray) != 2:
        print('pycat <file>')
        return

    FileName = devArray[1]
    with open(FileName) as f:
        ewText=f.read()
        print(ewText)


main()