async function unixTime() {
    let argument = process.argv;
    let env;
    if (!(argument.length === 3 || argument.length >= 5)) {
      console.log('jsunixtime <number in milliseconds>');
      console.log('jsunixtime <year> <month> <day> <hour> <minutes> <second>');
      return;
    }

    if (argument.length === 3) {
        let milliseconds = argument[2];
        let date = new Date(parseInt(milliseconds));
        console.log(date.toString());
    }
    else if(argument.length >= 5) {
        let year = argument[2];
        let month = argument[3];
        let day = argument[4];
        let hour = 0;
        let minute = 0;
        let second = 0;

        if (argument.length >= 6) {
            hour = argument[5];
        } 
        
        if (argument.length >= 7) {
            minute = argument[6];
        }

        if (argument.length >= 8) {
            minute = argument[7];
        }

        let date = new Date(year, month - 1, day, hour, minute, second)
        console.log(date.toString());
        console.log(date.getTime());
    }
}

unixTime();