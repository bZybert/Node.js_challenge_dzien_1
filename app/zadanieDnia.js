//Twój kod
process.argv.forEach((el, ind) => {
    let result = 0;
    for (let i = 2; i < process.argv.length; i++) {
        //console.log("help " + Number(process.argv[i] * 100))
        let ret = setTimeout(() => {
            return console.log(process.argv[i])
        }
            , Number(process.argv[i] * 1000))

    }
    // console.log(result)


});