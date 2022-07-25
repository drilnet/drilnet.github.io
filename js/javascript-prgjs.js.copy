
//
// ---
// | Размещение программы JS на странице html.
// | Подготовка перед вставкой!
// | PrgJS.
// ---
//
function PrgJS(Array_2, width, codepage)
{
	var Array_3 = [];

	var string_2, z2, x, temp1, temp2;;

	string_1 = "";
	string_2 = "";

	z2 = 0;

	// Раскодировать текст.
	for(z = 0; z < Array_2.length; z++)
		{
		temp1 = Number("0x" + Array_2[z]);
		if ( codepage == "CP866" ){ temp1 = CodeCP866toCodeUTF8(temp1) }; // код CP866 в код UTF-8.
		temp2 = String.fromCharCode(temp1); // Возвращает символ из кода.

		if (temp2 == '\n')
			{
			temp2 = "<br>";

			if(string_2 == "")
				{
				// Записать только <br>.
				Array_3[z2++] = temp2;
				}
				else
				{
				// Записать строку без <br>.
				Array_3[z2++] = string_2;

				string_2 = "";
				}
			}
			else
			{
			string_2 += temp2;
			}

			// string_1 - Не используется (но я оставил)!
			// Ещё string_1 см. чуть ниже.
			string_1 += temp2;
		}

		// Получить остаток.
		// Эта концовка сработает тогда! Если в конце массива Array_2 не будет кода 0xa.
		if (temp2 != "<br>")
			{
			if (string_2 != "")
				{
				Array_3[z2] = string_2;
				}
			}

	// Заменить обычный пробел на неразрывный.
//	string_1 = string_1.replace(/ /g, "&nbsp;");

	// Заменить табуляцию на пробелы.
//	string_1 = string_1.replace(/\t/g, "&nbsp;&nbsp;&nbsp;");

	string_2 = "<table class=\"prgjs_zebra\" width=\"" + width + "\" cellspacing=\"0\" cellpadding=\"0\">";

	x = 1;

	for(z = 0; z < Array_3.length; z++)
		{
		string_2 += "<tr>";

		// Здесь можно вставить код, который будет определять сколько \t в начале строки!
		// Далее нужно сделать необходимый "padding-left" для каждой строки!
		// ...
		// ...
		// ...

		if (x == 1)
			{
			// Формируем строку B.
			// ---
			string_2 += "<td class=\"prgjs_bg_b\">";

			x = 0;
			}
			else
			{
			// Формируем строку A.
			// ---
			string_2 += "<td class=\"prgjs_bg_a\">";

			x = 1;
			}

			// ---

			// Заменить обычный пробел на неразрывный.
			temp1 = Array_3[z].replace(/ /g, "&nbsp;");

			// Заменить табуляцию на неразрывные пробелы.
			temp1 = temp1.replace(/\t/g, "&nbsp;&nbsp;&nbsp;");

			// ---

			// Раскрасить комментарий.
			temp1 = temp1.replace(/(\/\/[^]+)/g,'<span class="prgjsrem">$1</span>');

			// Раскрасить пустой комментарий.
			if (temp1 == "//")
				{
				temp1 = "<span class=\"prgjsrem\">" + "//" + "</span>";
				}

			// Раскрасить оператор(ы).
			temp1 = temp1.replace(/(if|else|for|break|return|switch|case)/g, "<span class=\"prgjsoper\">$1</span>");

			// Раскрасить фигурные скобки.
			// temp1 = temp1.replace(/(\{|\})/g, "<span class=\"prgjsbraces\">$1</span>");

			// Раскрасить function и var.
			string_2 += temp1.replace(/(function|var)/g, "<span class=\"prgjsfv\">$1</span>");

			// ---

			string_2 += "</td>";

		string_2 += "</tr>";
		}

	string_2 += "</table>";

	return string_2;
}
