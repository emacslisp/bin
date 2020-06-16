import MainLibPython

def main():

    optionHelper = MainLibPython.OptionHelper()
    devArray = optionHelper.getOptionList()

    if len(devArray) != 2:
        print('pycat <file>')
        return

    FileName = devArray[1]
    
    fileHelper = MainLibPython.FileHelper()

    print(fileHelper.fileToString(FileName))

main()