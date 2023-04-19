const fs = require("fs");

// getting the input and output files
const inputDataFile = process.argv[2];
const outputDataFile = process.argv[3];

// checking if the input and output file path is provided
if (process.argv.length < 3) {
    console.error("Please provide the valid input and output file path.");
    process.exit(1);
} else if(process.argv.length >= 3 && process.argv.length < 4) {
    console.error("Please provide the valid output file path.");
    process.exit(1);
}

// Reading the input file and processing it.
fs.readFile(inputDataFile, "utf-8", (err, data) => {
    if (err) {
        console.error("Please provide a valid input file.");
        process.exit(1);
    }

    var inputFileArr = data.split("\r\n");
    console.log("============Splitting the input file data into array===========");
    console.log(inputFileArr);

    // trimming the spaces and commented(#) lines from the input file
    var trimInputFileArr = inputFileArr.filter((row) => {
        return row.trim() != "" && row[0] != "#";
    });

    console.log("============Input file array after trimming spaces and commented(#) rows==========");
    console.log(trimInputFileArr);

    // Sorting the array elements
    trimInputFileArr = trimInputFileArr.sort();
    console.log("============Input file array after sorting the data============");
    console.log(trimInputFileArr);

    // writting the sorted array of elements into output file
    fs.writeFileSync(outputDataFile, trimInputFileArr.join("\r\n"));
    console.log("===========Input data is sorted and has been updated to the output file successfully=============")
});


