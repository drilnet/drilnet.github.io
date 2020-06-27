
// ---
// | Показать модальное окно.
// ---
function OpenShowModalWin(x)
{
	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadow";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.
		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.
			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// ---
function CloseModalWin(x)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadow");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}
