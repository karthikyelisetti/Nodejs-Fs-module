const fs = require("fs");

console.log(process.argv[2]);

// get the input and printing the output
const inputData = process.argv[2];
const outputData = process.argv[3];

// validating the input and output files path
if (process.argv.length < 4) {
    console.log("Provide valid path for input and output files");
    process.exit(1);
}

// verify if the file is available or not
if (!fs.existsSync(inputData)) {
    console.log(`File is not available: ${inputData}`);
    process.exit(1);
}

// reading the file
const inputFileData = fs.readFileSync(inputData, "utf-8");

// splitting the data to get an array.
const splitLines = inputFileData.split("\r\n");
console.log(splitLines);

// function to trim spaces array push
var trimArr = splitLines.filter((ele) => {
    return ele.trim() != "" && ele[0] != "#";
})

// sorting the array alphabetically
var sortedArr = trimArr.sort();
console.log(sortedArr);

// printing the sorted array to a output file
function generateOutputFile(sortedArr) {
    fs.writeFileSync(outputData, sortedArr.join("\n")) // Joining back the array using new line.
    console.log(`Updated file has been generated: ${outputData}`);
}
generateOutputFile(sortedArr);

