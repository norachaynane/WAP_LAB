window.onload = function() {

    document.getElementById("btnBold").onclick = timerDecorator;
    document.getElementById("checkboxBling").addEventListener('change', e => {

        if (e.target.checked) {
            document.getElementById("txtarea").style.fontWeight = "bold"
            document.getElementById("txtarea").style.color = "green";
            document.getElementById("txtarea").style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('./images/background.png')";


        } else {
            document.getElementById("txtarea").style.fontWeight = "normal"
            document.getElementById("txtarea").style.color = "red";
            document.getElementById("txtarea").style.textDecoration = "none";
            document.body.style.backgroundImage = "none";

        }

    });

    document.getElementById("igpay").onclick = igpay;
    document.getElementById("malkovitch").onclick = checkWord;

};



function toggleBling() {
    var isChecked = $('#checkboxBling').attr('checked') ? true : false
    if (isChecked) {
        alert("yes")
    } else {
        alert("noo")

    }
}

function timerDecorator() {
    var timer = null;
    if (timer === null) {
        timer = setInterval(changeStyle, 500);
    } else {
        x++;
        timer = setInterval(changeStyle, 500);
        if (x == 5) {
            window.clearInterval(timer);
        }
    }
}

function changeStyle() {
    document.getElementById("txtarea").style.color = "red";
    //  document.getElementById("txtarea").style.fontSize = "24pt";

    var currentFont = document.getElementById("txtarea");
    var style = window.getComputedStyle(currentFont, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    currentFont.style.fontSize = (fontSize + 2) + 'pt';

}


function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
}

function appendAy(a) {
    if (checkSpace(a) === false) {
        a = a + "ay";
        return a;
    }
}

function checkSpace(s) {
    return (/^\s+$/).test(s);
}

function checkWord() {
    var cal = document.getElementById('txtarea');
    var sentence = cal.value.trim();
    // var sen=([^\s-]).sentence;
    var nextLine = sentence.split("\n");
    var result = [nextLine.length];
    for (var line = 0; line < nextLine.length; line++) {

        var a = nextLine[line].split(" ");
        for (var i = 0; i < a.length; i++) {
            if (a[i].length >= 5) {
                a[i] = "Malkovich";
            }


        }

        var eachSentence = "";
        for (var s = 0; s < a.length; s++) {

            if (!checkSpace(a[s])) {
                eachSentence = eachSentence + a[s] + " ";

            }

        }

        result[line] = eachSentence;

    }
    var arrayFinal = "";

    for (var res = 0; res < result.length; res++) {
        arrayFinal = arrayFinal + result[res] + "\n";
    }

    cal.value = arrayFinal;


}

function character(a) {
    if (a.length > 5) {
        return "Malkovich";
    }
}

function igpay() {
    var cal = document.getElementById('txtarea');
    var sentence = cal.value.trim();

    var nextLine = sentence.split("\n");
    var result = [nextLine.length];
    for (var line = 0; line < nextLine.length; line++) {

        var a = nextLine[line].split(" ");
        for (var i = 0; i < a.length; i++) {
            var firstLetter = a[i].charAt(0);
            var test = vowelTest(firstLetter);
            if (test === false) {
                a[i] = a[i].substring(1, a[i].length) + firstLetter + "ay";

            } else {

                a[i] = a[i] + "ay";
            }
        }

        var eachSentence = "";
        for (var s = 0; s < a.length; s++) {

            if (!checkSpace(a[s])) {
                eachSentence = eachSentence + a[s] + " ";

            }

        }

        result[line] = eachSentence;

    }
    var arrayFinal = "";

    for (var res = 0; res < result.length; res++) {
        arrayFinal = arrayFinal + result[res] + "\n";
    }

    cal.value = arrayFinal;
}