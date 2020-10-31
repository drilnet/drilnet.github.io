
// ---
// | Показать модальное окно (РЕПОЗИТОРИЙ).
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
// | Закрыть модальное окно (РЕПОЗИТОРИЙ).
// ---
function CloseModalWin(x)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadow");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ---
// | Спойлер.
// | Может быть так: Развернуть/Свернуть.
// | И может быть вот так: Свернуть/Развернуть.
// ---
function Spoiler(id_1, id_2)
{
	var ele = document.getElementById(id_1);
	var text = document.getElementById(id_2);

	if(ele.style.display == "block")
		{
		ele.style.display = "none";
//		text.innerHTML = "Показать";
		}
		else
		{
		ele.style.display = "block";
//		text.innerHTML = "Скрыть";
		}
}

// ---
// | Для Game-15.
// | Установить спойлер (Развернуть/Свернуть) без clock.gif
// | Т.е. изображения загружены, clock.gif не нужен.
// --
function G15_SetSpoiler()
{
	// Убрать иконку clock.gif (загрузка изображений).
	document.getElementById('g15_loader').innerHTML =

	"<table class=\"g15_title\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"
	+
	"<tr><td align=\"center\">"
	+
	"Игра Пятнашки: <a href=\"javascript:Spoiler('contentSpoiler', 'linkSpoiler');\" class=\"g15_link_spoiler\" id=\"linkSpoiler\" title=\"Нажмите\">Развернуть/Свернуть</a>"
	+
	"</td></td>"
	+
	"</table>";
}
