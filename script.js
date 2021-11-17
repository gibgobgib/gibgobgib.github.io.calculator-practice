

// Use insert() function to insert the number in textview.
function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp);
}
}

function cos() {
	document.form1.textview.value = Math.cos(document.form1.textview.value);
}

function sin() {
	document.form1.textview.value = Math.sin(document.form1.textview.value);
}

function tan() {
	document.form1.textview.value = Math.tan(document.form1.textview.value);
}


/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. 
function backspace()
{
var exp = document.form1.btn.value;
document.form1.btn.value = exp.substring(0, exp.length - 1); from total length ? 
} */

