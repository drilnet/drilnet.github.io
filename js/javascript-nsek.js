
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ---
// | Показать модальное окно.
// | НСЭК.
// ---
function NSEKOpenShowModalWin(x)
{

	var h = document.documentElement.clientHeight;

	// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
	h = h - 64 - 64;

	// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
	// h = h - 89 - 94;
	// h = h - 99 - 104; // Снизу отступ чуть-чуть больше.
	h = h - 99 - 104;

	// Растянуть...
	document.getElementsByClassName('nsek_window')[0].style.height = h + 'px';

	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadownsek";
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
function NSEKCloseModalWin(x)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadownsek");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ---
// | Создать НСЭК и вставить в страницу!
// ---
function BuildNSEK(id)
{
	var string;

	// Горизонтальная линия.
	string = "<br>";
	string += "<hr class=\"nsek_hr\">";
	string += "<br>";

	string += "<!-- Заголовок -->";

		// Заголовок.

		string += "<table class=\"nsektitle\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		string += "<tr>";
		string += "<td align=\"center\">";

		string += "Номиналы стандартных электролитических конденсаторов (НСЭК)";

		string += "</td>";
		string += "</tr>";
		string += "</table>";

		string += "<br>";

	// Таблицы.
	string += NSEKTableE6();

	// Горизонтальная линия.
	string += "<br>";
	string += "<hr class=\"nsek_hr\">";
	string += "<br>";

	// Кнопка закрыть.
	string += "<table class=\"txtbutton\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	string += "<tr>";
	string += "<td>";
	string += "<a href=\"javascript:NSEKCloseModalWin(\'" + id + "\')\">закрыть</a>";
	string += "</td>";
	string += "</tr>";

	string += "</table>";

	// Отступ.
	string+="<br>";

	// вставить в страницу.
	document.getElementById(id).innerHTML = string;
}

// ---
// | Таблицы НСЭК.
// ---
function NSEKTableE6()
{
	var string;

	// Окно с прокруткой.
	string = "<div class=\"nsek_window\">";

	string += E6();
		string += "<br>";
			string += E12();
				string += "<br>";

	string += "</div>";

	return string;
}

// ---
// | E6
// | Функция возвращает таблицу E6.
// ---.
function E6()
{
	// Массив ёмкостей E6.
	// Всех: 30 (5 столбцов, 6 строк).
	var arrayE6 = [

//      1    2    3   4     5
	  1, 10, 100, 1000, 10000, // 1-я строка.
	1.5, 15, 150, 1500, 15000, // 2-я строка.
	2.2, 22, 220, 2200, 22000, // 3-я строка.
	3.3, 33, 330, 3300, 33000, // 4-я строка.
	4.7, 47, 470, 4700, 47000, // 5-я строка.
	6.8, 68, 680, 6800, 68000  // 6-я строка.

	]

	string = "<b>E6:</b>";
	string += "<br>";
	string += "<br>";

	string += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	string += "<tr>";
	string += "<td>";

		// Бордюр вокруг таблицы E6.

		string += "<table class=\"nsek_bg\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		string += "<tr>";
		string += "<td>";

		// Таблица E6.
		string += "<table class=\"nsek_zebra\" cellspacing=\"0\" cellpadding=\"0\" border=\"1\">";

			var x, y, z, index;

			x = 0;
			index = 0;

			// Количество строк: 6.
			// Количество столцов: 5.

			// Строка.
			for(y = 0; y < 6; ++y)
				{
				string += "<tr>";

				// Прыгаем по столбцам (формируем строку).
				for(z = 0; z < 5; ++z)
					{

					if (x == 0)
						{
						string += "<td class=\"nsek_bg_a\">";
						}
						else
						{
						string += "<td class=\"nsek_bg_b\">";
						}

					string += arrayE6[index++];
					string += " мкФ (&#956F)";

					string += "</td>";
					}

				if (x == 0)
					{
					x = 1;
					}
					else
					{
					x = 0;
					}

				string += "</tr>";
				}

		string += "</table>";

		string += "</td>";
		string += "</tr>";
		string += "</table>";

	string += "</td>";
	string += "</tr>";

	// Всех в таблице: 30.

	string += "<tr>";
	string += "<td style=\"padding-top: 4px;\">";

	string += "&nbsp;&nbsp;Всех в таблице: " + index;
	string += "<br>";

		string += "&nbsp;&nbsp";
		string += "<span class=\"smalltxt\">";
		string += "Взято с: ";

			string += "<a href=\"http://www.irbislab.ru/modules.php?name=Guide&op=content&tid=14\" title=\"Откроется в новой вкладке\" target=\"_blank\">";
			string += "ссылка";
			string += "</a>";

		string += "</span>";

	string += "</td>";
	string += "</tr>";

	string += "</table>";

	return string;
}

// ---
// | E12
// | Функция возвращает таблицу E12.
// ---.
function E12()
{
	// Массив ёмкостей E12.
	// Всех: 60 (5 столбцов, 12 строк).
	var arrayE6 = [

//      1    2    3   4     5
	  1, 10, 100, 1000, 10000, //  1-я строка.
	1.2, 12, 120, 1200, 12000, //  2-я строка.
	1.5, 15, 150, 1500, 15000, //  3-я строка.
	1.8, 18, 180, 1800, 18000, //  4-я строка.
	2.2, 22, 220, 2200, 22000, //  5-я строка.
	2.7, 27, 270, 2700, 27000, //  6-я строка.
	3.3, 33, 330, 3300, 33000, //  7-я строка.
	3.9, 39, 390, 3900, 39000, //  8-я строка.
	4.7, 47, 470, 4700, 47000, //  9-я строка.
	5.6, 56, 560, 5600, 56000, // 10-я строка.
	6.8, 68, 680, 6800, 68000, // 11-я строка.
	8.2, 82, 820, 8200, 82000  // 12-я строка.

	]

	string = "<b>E12:</b>";
	string += "<br>";
	string += "<br>";

	string += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	string += "<tr>";
	string += "<td>";

		// Бордюр вокруг таблицы E12.

		string += "<table class=\"nsek_bg\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		string += "<tr>";
		string += "<td>";

		// Таблица E12.
		string += "<table class=\"nsek_zebra\" cellspacing=\"0\" cellpadding=\"0\" border=\"1\">";

			var x, y, z, index;

			x = 0;
			index = 0;

			// Количество строк: 12.
			// Количество столцов: 5.

			// Строка.
			for(y = 0; y < 12; ++y)
				{
				string += "<tr>";

				// Прыгаем по столбцам (формируем строку).
				for(z = 0; z < 5; ++z)
					{

					if (x == 0)
						{
						string += "<td class=\"nsek_bg_a\">";
						}
						else
						{
						string += "<td class=\"nsek_bg_b\">";
						}

					string += arrayE6[index++];
					string += " мкФ (&#956F)";

					string += "</td>";
					}

				if (x == 0)
					{
					x = 1;
					}
					else
					{
					x = 0;
					}

				string += "</tr>";
				}

		string += "</table>";

		string += "</td>";
		string += "</tr>";
		string += "</table>";

	string += "</td>";
	string += "</tr>";

	// Всех в таблице: 60.

	string += "<tr>";
	string += "<td style=\"padding-top: 4px;\">";

	string += "&nbsp;&nbsp;Всех в таблице: " + index;
	string += "<br>";

		string += "&nbsp;&nbsp;";
		string += "<span class=\"smalltxt\">";
		string += "Взято с: ";

			string += "<a href=\"http://www.irbislab.ru/modules.php?name=Guide&op=content&tid=14\" title=\"Откроется в новой вкладке\" target=\"_blank\">";
			string += "ссылка";
			string += "</a>";

		string += "</span>";

	string += "</td>";
	string += "</tr>";

	string += "</table>";

	return string;
}
