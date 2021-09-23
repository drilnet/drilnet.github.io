
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ---
// | Создать закон Ома и вставить в страницу!
// ---
function BuildOhm()
{
	var string;

	string = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	string += "<tr>";
		string += "<td align=\"center\">";

			string += "<table class=\"zomtitle\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			string += "<tr>";
			string += "<td align=\"center\">";
			string += "Формулы";
			string += "</td>";
			string += "</tr>";
			string += "</table>";

		string += "</td>";
	string += "</tr>";

	string += "<tr>"
		string += "<td style=\"padding-top: 6px;\">";

		string += "<a href=\"https://ru.wikipedia.org/wiki/Закон_Ома\" target=\"_blank\">";
		string += "<img class=\"icon\" src=\"images-ohm/formulas-zom_080_percent.png\" ";
		string += "title=\"Взято с https://ru.wikipedia.org/wiki/Закон_Ома (нажмите, откроется в новой вкладке)\">";
		string += "</a>";

		string += "</td>"
	string += "</tr>";

	string += "<tr>";
		string += "<td align=\"center\" style=\"padding-top: 6px;\">";

			string += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

				string += "<tr>";
				string += "<td>";

				string += "<b>U</b> - Напряжение";
				string += "<br>";
				string += "<b>I</b> - Сила тока";
				string += "<br>";
				string += "<b>P</b> - Мощность";
				string += "<br>";
				string += "<b>R</b> - Сопротивление";

				string += "</td>";
				string += "</tr>";

			string += "</table>";

		string += "</td>";
	string += "</tr>";

	string += "</table>";

	string += "<!-- Ссылки на Вики -->";

	string += "<table style=\"margin-top: 6px;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	string += "<tr>";
	string += "<td class=\"smalltxt\">";

	string += "<a href=\"https://en.wikipedia.org/wiki/Ohm\'s_law\" title=\"Ссылка на Английское Вики (откроется в новой вкладке)\" target=\"_blank\">ENG</a>, <a href=\"https://ru.wikipedia.org/wiki/Закон_Ома\" title=\"Ссылка на Русское Вики (откроется в новой вкладке)\" target=\"_blank\">RUS</a>, <a href=\"https://uk.wikipedia.org/wiki/Закон_Ома\" title=\"Ссылка на Украинское Вики (откроется в новой вкладке)\" target=\"_blank\">UKR</a>";

	string += "</td>";
	string += "</tr>";
	string += "</table>";

	string += "<!-- Кнопка; [Закрыть] -->";

	string += "<table class=\"txtbuttonsmall\" style=\"margin-top: 6px;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	string += "<tr>";
	string += "<td>";
	string += "<a href=\"javascript:ClosePopUpWindow(\'ZOm\')\">закрыть</a>";
	string += "</td>";
	string += "</tr>";

	string += "</table>";

	// вставить в страницу.
	document.getElementById('ZOm').innerHTML = string;
}