module.exports = {
    vowelsAndConsonants: function(s){
        let arr = s.split("");
        let vowels= "";
        let constants ="";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
                vowels += arr[i];
            }
            else {
                constants += arr[i];
            }
        }
        arr = vowels + constants;
        return arr;        
    }
};