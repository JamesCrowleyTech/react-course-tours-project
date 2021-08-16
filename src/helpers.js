export const firstNWordsOfString = function (n, s, delimiter = " ") {
    const output = [];

    s.trim();

    let word = [];
    let currIdx = 0;

    while (n) {
        if (currIdx >= s.length) break;

        if (s[currIdx] === delimiter) {
            output.push(word.join(""));
            n -= 1;
            word = [];
        } else {
            word.push(s[currIdx]);
        }
        currIdx += 1;
    }

    return output.join(" ");
};
