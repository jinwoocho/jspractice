//<Goals and rules>
//    Return the length of the longest word in the provided sentence.
//    Your response should be a number.
//
//    <Given code>
//        function findLongestWord(str) {
//        return str.length;
//    }
//        findLongestWord(“The quick brown fox jumped over the lazy dog”);
//
//        <Testing>
//            findLongestWord(“The quick brown fox jumped over the lazy dog”) should return a number.
//            findLongestWord(“The quick brown fox jumped over the lazy dog”) should return 6.
//            findLongestWord(“May the force be with you”) should return 5.
//            findLongestWord(“Google do a barrel roll”) should return 6.

var arr = [];

function findLongestWord(str) {
    var splitstr = str.split(" ");
    arr = splitstr.push();
    console.log(arr);
    return str.length;

}
findLongestWord("The quick brown fox jumped over the lazy dog");