module.exports = function toReadable(n) {
    const res = [];
    const num = ("" + n).split("").reverse();
    if (n === 0) return "zero";

    if (num[2] == "1") res.push("one hundred ");
    if (num[2] == "2") res.push("two hundred ");
    if (num[2] == "3") res.push("three hundred ");
    if (num[2] == "4") res.push("four hundred ");
    if (num[2] == "5") res.push("five hundred ");
    if (num[2] == "6") res.push("six hundred ");
    if (num[2] == "7") res.push("seven hundred ");
    if (num[2] == "8") res.push("eight hundred ");
    if (num[2] == "9") res.push("nine hundred ");

    if (num[1] == "1") {
        if (num[0] == "0") res.push("ten");
        if (num[0] == "1") res.push("eleven");
        if (num[0] == "2") res.push("twelve");
        if (num[0] == "3") res.push("thirteen");
        if (num[0] == "4") res.push("fourteen");
        if (num[0] == "5") res.push("fifteen");
        if (num[0] == "6") res.push("sixteen");
        if (num[0] == "7") res.push("seventeen");
        if (num[0] == "8") res.push("eighteen");
        if (num[0] == "9") res.push("nineteen");
        return res.join("").trim();
    }

    if (num[1] == "2") res.push("twenty ");
    if (num[1] == "3") res.push("thirty ");
    if (num[1] == "4") res.push("forty ");
    if (num[1] == "5") res.push("fifty ");
    if (num[1] == "6") res.push("sixty ");
    if (num[1] == "7") res.push("seventy ");
    if (num[1] == "8") res.push("eighty ");
    if (num[1] == "9") res.push("ninety ");

    if (num[0] == "1") res.push("one");
    if (num[0] == "2") res.push("two");
    if (num[0] == "3") res.push("three");
    if (num[0] == "4") res.push("four");
    if (num[0] == "5") res.push("five");
    if (num[0] == "6") res.push("six");
    if (num[0] == "7") res.push("seven");
    if (num[0] == "8") res.push("eight");
    if (num[0] == "9") res.push("nine");

    return res.join("").trim();
};
