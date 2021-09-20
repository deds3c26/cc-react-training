//2.Write a function which camelizes input word

function camelize(str) {
    var str1 = str.split('-');
    for (var i = 0; i < str1.length; i++) {
        if (i == 0)
            continue;
        var str2 = str1[i].split("");
        str2[0] = str1[i].charAt(0).toUpperCase();
        str1[i] = str2.join("");
    }
    str = str1.join("");
    return str;
}

console.log(camelize("background-color-"));
console.log("list-style-image");
console.log(camelize("-webkit-transition"));