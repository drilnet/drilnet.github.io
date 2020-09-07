
// ---
// Вставить список литературы с ссылками.
// ---
function LoadBook()
{

	// Название литературы и ссылки на google-диск.
	var ArrayBook = [

		[
		"Начинающему радиолюбителю. В.И. Галкин. 2-е издание. 1989г.djvu",
		"https://drive.google.com/file/d/1wN_sa4P7x8sdZjONRlFUA_hgmfZ9l0qh/view?usp=sharing",
		"6.632.477 байт"
		],

		[
		"Начинающему радиолюбителю. В.И. Галкин. 2-е издание. 1989г.pdf",
		"https://drive.google.com/file/d/1uYHb9UG6mFYeKxunu6GLIV5Qbwrd82X0/view?usp=sharing",
		"14.065.775 байт"
		],

		[
		"Начинающему радиолюбителю. В.И. Галкин. 3-е издание. 1995г.djvu",
		"https://drive.google.com/file/d/1ff5K-XQ9U6giC5j_cMF6xTLXyDMYUMxk/view?usp=sharing",
		"19.605.087 байт"
		],

		[
		"Первые шаги в радиоэлектронике. Атанас Шишков. 2-е издание. 1986г.djvu",
		"https://drive.google.com/file/d/1ueGQWWv_DlO3aokRDlz3tdKCYwT7M-D8/view?usp=sharing",
		"3.100.430 байт"
		],

		[
		"Сборник формул для Радиолюбителя. О.Кронегер. 1964г.djvu",
		"https://drive.google.com/file/d/1Pmnv0hEszDeaxFa0J0eZJAQ5M6SIg4AB/view?usp=sharing",
		"997.104 байт"
		]

		];

	// Сортировка.
	ArrayBook.sort();

	// Подготовка к вставке.
	var temp = "<br>";

	temp += "<span style=\"font-size: 0.8em;\">";
	temp += "Если я, нарушаю чьи-либо права, напишите мне, и я удалю нужную Вам литературу.";

	temp += "<br>";
	temp += "<b>bbarsinov[ухо]gmail.com</b>";
	temp += "<br><br>";

	temp += "</span>";

	temp += "<table align=\"center\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	temp += "<tr>";
	temp += "<td>";

	for(var z = 0; z < 5; z++)
		{
		temp += z+1 + ". " + "<a href=\"" + ArrayBook[z][1] + "\" title=\"Скачать с google-диска. Объём: " + ArrayBook[z][2] + "\">";
		temp += ArrayBook[z][0] + "</a><br>";
		}

	temp += "</td>";
	temp += "</tr>";
	temp += "</table>";

	// Вставка.
	document.getElementById('book_lit').innerHTML = temp;
}

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
