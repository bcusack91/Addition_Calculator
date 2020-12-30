function Create_Problem() {
    var ones = document.getElementById("onesplace")
    ones.value = Math.floor(Math.random()*10)

    var tens = document.getElementById("tensplace")
    tens.value = Math.floor(Math.random()*10)

    var hundreds= document.getElementById("hundredsplace")
    hundreds.value = Math.floor(Math.random()*10)

    var thousands = document.getElementById("thousandsplace")
    thousands.value = Math.floor(Math.random()*10)

    var second_ones = document.getElementById("second_onesplace")
    second_ones.value = Math.floor(Math.random()*10)

    var second_tens = document.getElementById("second_tensplace")
    second_tens.value = Math.floor(Math.random()*10)

    var second_hundreds = document.getElementById("second_hundredsplace")
    second_hundreds.value = Math.floor(Math.random()*10)

    var one = document.getElementById("onesplace")
    one.value = Math.floor(Math.random()*10)
}

function add_ones() {
    var onesplace = parseFloat(document.getElementById('onesplace').value);
    var second_onesplace = parseFloat(document.getElementById('second_onesplace').value);
    var ones_sum = onesplace + second_onesplace;

    if (ones_sum < 10) {
        var ones_sum_guess = parseFloat(document.getElementById('ones_answer').value);
        if (ones_sum_guess === ones_sum) {
            document.getElementById('ones_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('onescarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE TENS PLACE!");
            document.getElementById('tens_answer').style.visibility = "visible";
            document.getElementById('tenscarry').style.visibility = "visible";
            document.getElementById('add_ones_button').style.display = "none";
            document.getElementById('add_tens_button').style.display = "inline-block";
            document.getElementById('add_tens_button').style.color = "Purple";
        }
        else {
            document.getElementById('ones_answer').style.backgroundColor = '#ff6b6b';
            window.alert("You're ones place is incorrect!");
        }
    }

    else {
        var ones_place_answer = parseFloat((''+ones_sum)[1]);
        var ones_sum_guess = parseFloat(document.getElementById('ones_answer').value);
        var carry_ones = parseFloat(document.getElementById('onescarry').value);
        if (ones_place_answer === ones_sum_guess && carry_ones===1) {
            document.getElementById('ones_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('onescarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE TENS PLACE!")
            document.getElementById('tens_answer').style.visibility = "visible";
            document.getElementById('tenscarry').style.visibility = "visible";
            document.getElementById('add_ones_button').style.display = "none";
            document.getElementById('add_tens_button').style.display = "inline-block";
            document.getElementById('add_tens_button').style.color = "darkblue";
        }
        else if (ones_place_answer === ones_sum_guess && carry_ones !== 1) {
            document.getElementById('ones_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('onescarry').style.backgroundColor = '#ff6b6b';
            window.alert("Don't forget to carry the one!");
        }
    }
}

function add_tens() {
    var tensplace = parseFloat(document.getElementById('tensplace').value);
    var second_tensplace = parseFloat(document.getElementById('second_tensplace').value);
    var carry_spot = parseFloat(document.getElementById('onescarry').value);
    if (carry_spot === 1) {
        var tens_sum = tensplace + second_tensplace + carry_spot;
    }
    else {
        var tens_sum = tensplace + second_tensplace;
    }
    if (tens_sum < 10) {
        var tens_sum_guess = parseFloat(document.getElementById('tens_answer').value);
        if (tens_sum_guess === tens_sum) {
            document.getElementById('tens_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('tenscarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE Hundreds PLACE!");
            document.getElementById('hundreds_answer').style.visibility = "visible";
            document.getElementById('hundredscarry').style.visibility = "visible";
            document.getElementById('add_tens_button').style.display = "none";
            document.getElementById('add_hundreds_button').style.display = "inline-block";
            document.getElementById('add_hundreds_button').style.color = "green";
        }
        else {
            document.getElementById('tens_answer').style.backgroundColor = '#ff6b6b';
            window.alert("You're tens place is incorrect!");
        }
    }

    else {
        var tens_place_answer = parseFloat((''+tens_sum)[1]);
        var tens_sum_guess = parseFloat(document.getElementById('tens_answer').value);
        var carry_tens = parseFloat(document.getElementById('tenscarry').value);
        if (tens_place_answer === tens_sum_guess && carry_tens===1) {
            document.getElementById('tens_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('tenscarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE HUNDREDS PLACE!")
            document.getElementById('hundreds_answer').style.visibility = "visible";
            document.getElementById('hundredscarry').style.visibility = "visible";
            document.getElementById('add_tens_button').style.display = "none";
            document.getElementById('add_hundreds_button').style.display = "inline-block";
            document.getElementById('add_hundreds_button').style.color = "green";
        }
        else if (tens_place_answer === tens_sum_guess && carry_tens !== 1) {
            document.getElementById('tens_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('tenscarry').style.backgroundColor = '#ff6b6b';
            window.alert("Don't forget to carry the one!");
        }
    }
}

function add_hundreds() {
    var hundredsplace = parseFloat(document.getElementById('hundredsplace').value);
    var second_hundredsplace = parseFloat(document.getElementById('second_hundredsplace').value);
    var carry_spot = parseFloat(document.getElementById('tenscarry').value);
    if (carry_spot === 1) {
        var hundreds_sum = hundredsplace + second_hundredsplace + carry_spot;
    }
    else {
        var hundreds_sum = hundredsplace + second_hundredsplace;
    }
    if (hundreds_sum < 10) {
        var hundreds_sum_guess = parseFloat(document.getElementById('hundreds_answer').value);
        if (hundreds_sum_guess === hundreds_sum) {
            document.getElementById('hundreds_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('hundredscarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE Thousands PLACE!");
            document.getElementById('thousands_answer').style.visibility = "visible";
            document.getElementById('thousandscarry').style.visibility = "visible";
            document.getElementById('add_hundreds_button').style.display = "none";
            document.getElementById('add_thousands_button').style.display = "inline-block";
            document.getElementById('add_thousands_button').style.color = "purple";
        }
        else {
            document.getElementById('hundreds_answer').style.backgroundColor = '#ff6b6b';
            window.alert("You're hundreds place is incorrect!");
        }
    }

    else {
        var hundreds_place_answer = parseFloat((''+hundreds_sum)[1]);
        var hundreds_sum_guess = parseFloat(document.getElementById('hundreds_answer').value);
        var carry_hundreds = parseFloat(document.getElementById('hundredscarry').value);
        if (hundreds_place_answer === hundreds_sum_guess && carry_hundreds===1) {
            document.getElementById('hundreds_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('hundredscarry').style.backgroundColor = '#b3e0af';
            window.alert("FANTASTIC! NOW TRY THE THOUSANDS PLACE!")
            document.getElementById('thousands_answer').style.visibility = "visible";
            document.getElementById('thousandscarry').style.visibility = "visible";
            document.getElementById('add_hundreds_button').style.display = "none";
            document.getElementById('add_thousands_button').style.display = "inline-block";
            document.getElementById('add_thousands_button').style.color = "purple";
        }
        else if (hundreds_place_answer === hundreds_sum_guess && carry_hundreds !== 1) {
            document.getElementById('hundreds_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('hundredscarry').style.backgroundColor = '#ff6b6b';
            window.alert("Don't forget to carry the one!");
        }
    }
}

function add_thousands() {
    var thousandsplace = parseFloat(document.getElementById('thousandsplace').value);
    var carry_spot = parseFloat(document.getElementById('hundredscarry').value);
    if (carry_spot === 1) {
        var thousands_sum = thousandsplace + carry_spot;
    }
    else {
        var thousands_sum = thousandsplace;
    }
    if (thousands_sum < 10) {
        var thousands_sum_guess = parseFloat(document.getElementById('thousands_answer').value);
        if (thousands_sum_guess === thousands_sum) {
            document.getElementById('thousands_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('thousandscarry').style.backgroundColor = '#b3e0af';
            window.alert("Wonderful! You did it!");
            document.getElementById('add_thousands_button').style.display = "none";
            document.getElementById('add_tenthousands_button').style.display = "inline-block";
            document.getElementById('add_tenthousands_button').style.color = "pink";
        }
        else {
            document.getElementById('thousands_answer').style.backgroundColor = '#ff6b6b';
            window.alert("You're thousands place is incorrect!");
        }
    }

    else {
        var thousands_place_answer = parseFloat((''+thousands_sum)[1]);
        var thousands_sum_guess = parseFloat(document.getElementById('thousands_answer').value);
        var carry_thousands = parseFloat(document.getElementById('thousandscarry').value);
        if (thousands_place_answer === thousands_sum_guess && carry_thousands===1) {
            document.getElementById('thousands_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('thousandscarry').style.backgroundColor = '#b3e0af';
            window.alert("GREAT JOB! You've Completed This Problem!")
            document.getElementById('tenthousands_answer').style.visibility = "visible";
            document.getElementById('tenthousandscarry').style.visibility = "visible";
            document.getElementById('add_thousands_button').style.display = "none";
        }
        else if (thousands_place_answer === thousands_sum_guess && carry_thousands !== 1) {
            document.getElementById('thousands_answer').style.backgroundColor = '#b3e0af';
            document.getElementById('thousandscarry').style.backgroundColor = '#ff6b6b';
            window.alert("Don't forget to carry the one!");
        }
    }
}
