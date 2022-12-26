
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ---
// | Показать модальное окно.
// | CALCBSEE.
// ---
function CalcBSEEOpenShowModalWin(x)
{
	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowcalcbsee";
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
function CalcBSEECloseModalWin(x)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowcalcbsee");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ---
// | Создать калькулятор!
// ---
function BuildBSEE(id)
{
	var string = BSEEhtmlcode();

	// Горизонтальная линия.
	string += "<br>";
	string += "<hr class=\"calcbsee_hr\">";
	string += "<br>";

	// Кнопка закрыть.
	string += "<table align=\"center\" class=\"txtbutton\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	string += "<tr>";
	string += "<td>";
	string += "<a href=\"javascript:CalcBSEECloseModalWin(\'" + id + "\')\">закрыть</a>";
	string += "</td>";
	string += "</tr>";

	string += "</table>";

	// Отступ.
	string+="<br>";

	// вставить в страницу.
	document.getElementById(id).innerHTML = string;
}

// ---
// | Калькулятор BSEE (html-код).
// ---
function BSEEhtmlcode()
{
	var string;

	string = "<table align=\"center\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	string += "<tr>";
	string += "<td align=\"center\">";

	string += "<br>";
	string += "<hr class=\"calcbsee_hr\">";
	string += "<br>";

	string += "<!-- Заголовок -->";

		string += "<table class=\"calcbsee_title\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

		string += "<tr>";
		string += "<td align=\"center\">";

		string += "Калькулятор ближайшая стандартная электролитическая ёмкость (БСЭЁ)";

		string += "</td>";
		string += "</tr>";

		string += "</table>";

		string += "<br>";

		string += "<!-- Онлайн калькулятор БСЭЁ -->";
		string += "<!-- Найти ближайшую стандартную ёмкость -->";

		string += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		string += "<tr>";

			string += "<td valign=\"top\">";

				string += "<table class=\"calcbsee_bg1\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

				string += "<tr>";
				string += "<td align=\"center\">";

				string += "<img class=\"icon\" src=\"images-calcbsee/Capacitors_Contrast_40.png\" title=\"\">";

				string += "</td>";
				string += "</tr>";

				string += "</table>";

			string += "</td>";

			string += "<td style=\"padding-left: 8px;\">";

				string += "<table class=\"calcbsee_bg1\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

				string += "<tr>";
				string += "<td align=\"center\">";

					string += "<!-- Выбор: E6, E12 -->";

					string += "<table class=\"calcbsee_bg2\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
					string += "<tr>";

					string += "<!-- E6 -->";
					string += "<td>";
					string += "<span title=\"Всех конденсаторов: 30. Точность конденсаторов ±20%\">Набор конденсаторов <b>E6</b>:</span>&nbsp;";
					string += "</td>";

					string += "<td class=\"calcbsee_rbpaddingb calcbsee_rbpaddingr\">";

						string += "<!-- [   ] -->";
						string += "<input name=\"BSEE\" id=\"bseerb_1\" class=\"calcbsee_radiobutton\" type=\"radio\" value=\"\">";
						string += "<label for=\"bseerb_1\" class=\"calcbsee_label_radio\" title=\"Всех конденсаторов: 30. Точность конденсаторов: ±20%\"></label>";

					string += "</td>";

					string += "<!-- E12 -->";
					string += "<td>";
					string += "&nbsp;&nbsp;&nbsp;<span title=\"Всех конденсаторов: 60. Точность ±10%\">Набор конденсаторов <b>E12</b>:</span>&nbsp;";
					string += "</td>";

					string += "<td class=\"calcbsee_rbpaddingb calcbsee_rbpaddingr\">";

						string += "<!-- [ x ] -->";
						string += "<input name=\"BSEE\" id=\"bseerb_2\" class=\"calcbsee_radiobutton\" type=\"radio\" value=\"\" checked>";
						string += "<label for=\"bseerb_2\" class=\"calcbsee_label_radio\" title=\"Всех конденсаторов: 60. Точность конденсаторов: ±10%\"></label>";

					string += "</td>";

					string += "</tr>";
					string += "</table>";

				string += "</td>";
				string += "</tr>";

				string += "<tr>";
				string += "<td align=\"center\">";

					string += "<table class=\"calcbsee_bg3\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
					string += "<tr>";

					string += "<!-- 1 -->";
					string += "<td>";
					string += "Введите ёмкость:";
					string += "</td>";

					string += "<!-- 2 -->";
					string += "<td>&nbsp;</td>";

					string += "<!-- 3 -->";
					string += "<td>";
					string += "<input id=\"calcbsee_input\" type=\"number\" class=\"calcbsee_inputpx\" step=\"1\" min=\"1\" max=\"100000\" value=\"500\" ";
					string += "title=\"\">";
					string += "</td>";

					string += "<!-- 4 -->";
					string += "<td>";
						string += "&nbsp;<select id=\"bsr_option\" title=\"Невозможно изменить\">";
						string += "<option select value=\"мкФ\" title=\"\" selected>мкФ</option>";
						string += "</select>&nbsp;";
					string += "</td>";

					string += "<!-- 5 -->";
					string += "<td>";
						string += "[&nbsp;<a href=\"javascript:CALCBSEEClearInput()\"";
						string += "title=\"Очистить поле ввода\">Очистить</a>&nbsp;]";
					string += "</td>";

					string += "<!-- 6 -->";
					string += "<td>";
						string += "&nbsp;[&nbsp;<a href=\"javascript:CALCBSEESetInput()\"";
						string += "title=\"Установить поля ввода по умолчанию, плюс сбросить вычисления\">По умолчанию</a>&nbsp;]";
					string += "</td>";

					string += "</tr>";
					string += "</table>";

				string += "</td>";
				string += "</tr>";

				string += "<tr>";
				string += "<td align=\"center\" style=\"padding-top: 6px; padding-bottom: 6px;\">";

					string += "<!-- Кнопка \"Найти\" -->";
					string += "<input type=\"submit\" onclick=\"CALCBSEE()\" value=\"Найти ближайшую стандартную ёмкость\">";

				string += "</td>";
				string += "</tr>";

				string += "<!-- Результат сюда -->";

				string += "<tr>";
				string += "<td id=\"CALCIDBSEE\" align=\"center\" style=\"padding-top: 3px; padding-bottom: 3px;\">";

					string += "Ближайшая стандартная (<b>E12<b>): <span class=\"calcbsee_cquestion\">?</span>";

				string += "</td>";
				string += "</tr>";

				string += "</table>";

			string += "</td>";

		string += "</tr>";
		string += "</table>";

	string += "</td>";
	string += "</tr>";
	string += "</table>";

	return string;
}

// ---
// | Считаем (вычисления).
// | Найти ближайшую стандартную ёмкость.
// ---
function CALCBSEE()
{
	var C, E, El, Er, Eline, string;

	var ArrayCapacity = [];

	C = Number(document.getElementById('calcbsee_input').value);

	if (C == 0)
		{
		return false;
		}

	// Если набор конденсаторов E6.
	if (document.getElementById('bseerb_1').checked)
		{
		ArrayCapacity = CapacityESearchE6(C); // Ближайшее стандартное. Ряд E6.
		Eline = "(<b>E6</b>)";
		}

	// Если набор конденсаторов E12.
	if (document.getElementById('bseerb_2').checked)
		{
		ArrayCapacity = CapacityESearchE12(C); // Ближайшее стандартное. Ряд E12.
		Eline = "(<b>E12</b>)";
		}

	// - [!] -
	E = ArrayCapacity[0]; El =  ArrayCapacity[1]; Er =  ArrayCapacity[2];

	string = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	string += "<tr>";
	string += "<td align=\"center\" style=\"padding-bottom: 4px;\">";
		string += "Ближайшая стандартная " + Eline + ":";
	string += "</td>";
	string += "</tr>";

		// Самая первая ёмкость.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			string += "<tr>";
			string += "<td align=\"center\">";
				string += "<b>C</b> = <span class=\"calcbsee_canswer\">" + El + " <b>мкФ</b>" + "</span>";
			string += "</td>";
			string += "</tr>";
			}

		// Самая последняя ёмкость.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			string += "<tr>";
			string += "<td align=\"center\">";
				string += "<b>C</b> = <span class=\"calcbsee_canswer\">" + Er + " <b>мкФ</b>" + "</span>";
			string += "</td>";
			string += "</tr>";
			}

		// Ёмкость есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			string += "<tr>";
			string += "<td align=\"center\">";
				string += "<b>C</b> = <span class=\"calcbsee_canswer\">" + E + " <b>мкФ</b>" + "</span>";
			string += "</td>";
			string += "</tr>";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			string += "<tr>";
			string += "<td align=\"center\">";

				// Ёмкость конденсатора слева.
				string += "<b>C</b> = <span class=\"calcbsee_canswer\">" + El + " <b>мкФ</b>" + "</span>";
				// или

				string += " или ";

				// Ёмкость конденсатора справа.
				string += "<b>C</b> = <span class=\"calcbsee_canswer\">" + Er + " <b>мкФ</b>" + "</span>";

			string += "</td>";
			string += "</tr>";
			}

	string += "</table>";

	// вставить в страницу.
	document.getElementById('CALCIDBSEE').innerHTML = string;
}

// ---
// | Очистить input.
// ---
function CALCBSEEClearInput()
{
	document.getElementById('calcbsee_input').value = "";
}

// ---
// | Установить по умолчанию.
// ---
function CALCBSEESetInput()
{
	// Установить в поле ввода 500.
	document.getElementById('calcbsee_input').value = 500;

	// Вставить в калькулятор БСЭЁ знак вопроса.
	document.getElementById('CALCIDBSEE').innerHTML = "Ближайшая стандартная (<b>E12<b>): <span class=\"calcbsee_cquestion\">?</span>";

	// Установиить Radio Buttons.
	document.getElementById('bseerb_1').checked = false; // E6.
	document.getElementById('bseerb_2').checked = true;  // E12.
}

// ---
// | Находим ближайшую стандартную ёмкость.
// | Набор E6.
// ---
function CapacityESearchE6(C)
{
	// Таблица ёмкостей E6 (в мкФ). Всего 30.
	// +- 20%.
	var ArrayE6 = [

		    1,   1.5,   2.2,   3.3,   4.7,   6.8,
		   10,    15,    22,    33,    47,    68,
		  100,   150,   220,   330,   470,   680,
		 1000,  1500,  2200,  3300,  4700,  6800,
		10000, 15000, 22000, 33000, 47000, 68000

		];

	var z, E6, E6l, E6r;

	E6 = 0; E6l = 0; E6r = 0;

	// [ Шаг 1 ]
	// Ищем ближайшее стандартное.
	// Самая первая ёмкость!
	if (C < ArrayE6[0])
		{
		E6l = ArrayE6[0];
		}
		else
		{
		// [ Шаг 2 ]
		// Ищем ближайшее стандартное.
		// Самая последняя ёмкость!
		if (C > ArrayE6[29])
			{
			E6r = ArrayE6[29];
			}
			else
			{
			// [ Шаг 3 ]
			// Ищем ближайшее стандартное.
			// Проверим, может такая ёмкость есть в массиве!
			for(z = 0; z < ArrayE6.length; z++)
				{
				if (C == ArrayE6[z])
					{
					E6 = C;
					break;
					}
				}

			if (E6 == 0)
				{
				// [ Шаг 4 ]
				// Ищем ближайшее стандартное.
				// Получаем значение слева и справа!
				for(z = 1; z < ArrayE6.length; z++)
					{
					if (ArrayE6[z] > C)
						{
						// Слева.
						E6l = ArrayE6[z - 1];
						// Справа.
						E6r = ArrayE6[z];
						break;
						}
					}
				}
			}
		}

	// Самая первая ёмкость!
	// E6 = 0, E6l = Значение, E6r = 0.

	// Самая последняя ёмкость!
	// E6 = 0, E6l = 0, E6r = Значение.

	// Ёмкость есть в массиве!
	// E6 = Значение, E6l = 0, E6r = 0.

	// Ближайшее значение слева и справа!
	// E6 = 0, E6l = Значение слева, E6r = Значение справа.

	// Возвращаем массив!
	return [E6, E6l, E6r];
}

// ---
// | Находим ближайшую стандартную ёмкость.
// | Набор E12.
// ---
function CapacityESearchE12(C)
{
	// Таблица ёмкостей E12 (в мкФ). Всего 60.
	// +- 10%.
	var ArrayE12 = [

		    1,   1.2,   1.5,   1.8,   2.2,   2.7,   3.3,   3.9,   4.7,   5.6,  6.8,    8.2,
		   10,    12,    15,    18,    22,    27,    33,    39,    47,    56,   68,     82, 
		  100,   120,   150,   180,   220,   270,   330,   390,   470,   560,   680,   820,
		 1000,  1200,  1500,  1800,  2200,  2700,  3300,  3900,  4700,  5600,  6800,  8200,
		10000, 12000, 15000, 18000, 22000, 27000, 33000, 39000, 47000, 56000, 68000, 82000

	];

	var z, E12, E12l, E12r;

	E12 = 0; E12l = 0; E12r = 0;

	// [ Шаг 1 ]
	// Ищем ближайшее стандартное.
	// Самая первая ёмкость!
	if (C < ArrayE12[0])
		{
		E12l = ArrayE12[0];
		}
		else
		{
		// [ Шаг 2 ]
		// Ищем ближайшее стандартное.
		// Самая последняя ёмкость!
		if (C > ArrayE12[59])
			{
			E12r = ArrayE12[59];
			}
			else
			{
			// [ Шаг 3 ]
			// Ищем ближайшее стандартное.
			// Проверим, может такая ёмкость есть в массиве!
			for(z = 0; z < ArrayE12.length; z++)
				{
				if (C == ArrayE12[z])
					{
					E12 = C;
					break;
					}
				}

			if (E12 == 0)
				{
				// [ Шаг 4 ]
				// Ищем ближайшее стандартное.
				// Получаем значение слева и справа!
				for(z = 1; z < ArrayE12.length; z++)
					{
					if (ArrayE12[z] > C)
						{
						// Слева.
						E12l = ArrayE12[z - 1];
						// Справа.
						E12r = ArrayE12[z];
						break;
						}
					}
				}
			}
		}

	// Самая первая ёмкость!
	// E12 = 0, E12l = Значение, E12r = 0.

	// Самая последняя ёмкость!
	// E12 = 0, E12l = 0, E12r = Значение.

	// Ёмкость есть в массиве!
	// E12 = Значение, E12l = 0, E12r = 0.

	// Ближайшее значение слева и справа!
	// E12 = 0, E12l = Значение слева, E12r = Значение справа.

	// Возвращаем массив!
	return [E12, E12l, E12r];
}
