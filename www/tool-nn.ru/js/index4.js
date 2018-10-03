// btn1.addEventListener("click", AddDIV)
function AddDIV(){
	btn = document.createElement('div');
	btn.innerText = "Этот ДИВ добавлен из скрипта javascript без jQuery";
	btn.id = "#addedDIV#";
	document.body.appendChild(btn);
	test();
			
	//поиск элемента по id
	//----------------------
	var el = document.getElementById('txt1')
	el.value="значение из скрипта"
}

function test(){
	alert('hello world')
}