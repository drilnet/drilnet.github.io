
//
// Сброс.
//
function AdditionReset()
{
	var string;

	string = "\t\t" + "Text 1" + "\n" + "\t\t" + "Text 2" + "\n" + "\t\t" + "Text 3" + "\n";
	string +=  "\t\t" + "Text 4" + "\n" + "\t\t" + "Text 5" + "\n";

	// вставить в страницу (в textarea).
	document.getElementById('id_textarea_1').value = string;

	string = "var Array_1 =" + "\n\n" + "[" + "\n\n" + "\"0054\",\"0065\",\"0078\",\"0074\"" + "\n\n" + "]";

	// вставить в страницу (в textarea).
	document.getElementById('id_code_utf8').value = string;

	string = "var Array_1 =" + "\n\n" + "[" + "\n\n" + "\"54\",\"65\",\"78\",\"74\"" + "\n\n" + "]";

	// вставить в страницу (в textarea).
	document.getElementById('id_code_cp866').value = string;


	// Количество всех элементов в массиве.
	document.getElementById('id_elarray_1').innerHTML = "Нет данных";
	// Размер в байтах.
	document.getElementById('id_elarraybyte_1').innerHTML = "Нет данных";

	// Количество всех элементов в массиве.
	document.getElementById('id_elarray_2').innerHTML = "Нет данных";
	// Размер в байтах.
	document.getElementById('id_elarraybyte_2').innerHTML = "Нет данных";
}

//
// UTF-8
//
function AdditionCharCodeAt()
{
	var z, z2, lg, string;
	var temp;

	lg = document.getElementById('id_textarea_1').value.length;

	string = "";

	string = "var Array_1 = ";
		string += "\n";
			string += "\n";
				string += "[";
					string += "\n";
						string += "\n";

	// Сколько кодов в одной строке.
	z2 = 16;
	z3 = z2;

	// Здесь количество всех элементов в массиве.
	z4 = 0

	// 16.
	for(z = 0; z < lg; z++)
		{
		temp = document.getElementById('id_textarea_1').value[z];
		temp = temp.charCodeAt().toString(16);

		// Дополнить нулями (если нужно).
		switch (temp.length)
			{
			case 1:
			temp = "000" + temp;
			break;

			case 2:
			temp = "00" + temp;
			break;

			case 3:
			temp = "0" + temp;
			break;

			default:
			break;
			}

		string += "\"" + temp + "\"";

		// Считаем количество элементов в массиве.
		z4++;

		if (z < lg - 1)
			{
			string += ",";
			}

		z2--;

		// Сколько кодов в одной строке.
		// Переход на новую строку!
		if (z2 == 0)
			{
			string += "\n";
			z2 = z3;
			}
		}

	// Добавить <\n>.
	if (z2 != z3)
		{
		string += "\n";
		}

	string += "\n";
		string += "];";
			string += "\n";

	// вставить в страницу (в textarea).
	document.getElementById('id_code_utf8').value = string;

	// Вставить в страницу количество всех элементов в массиве.
	document.getElementById('id_elarray_1').innerHTML = z4;

	// Вставить в страницу размер в байтах.
	document.getElementById('id_elarraybyte_1').innerHTML = (z4 * 6) + " (без запятых)";

	// Теперь CP 866.
	AdditionCharCodeAt_2()
}

//
// CP 866
//
function AdditionCharCodeAt_2()
{
	var z, z2, lg, string;
	var temp;

	lg = document.getElementById('id_textarea_1').value.length;

	string = "";

	string = "var Array_1 = ";
		string += "\n";
			string += "[";
				string += "\n";
					string += "\n";

	// Сколько кодов в одной строке.
	z2 = 16;
	z3 = z2;

	// Здесь количество всех элементов в массиве.
	z4 = 0

	// 16.
	for(z = 0; z < lg; z++)
		{
		temp = document.getElementById('id_textarea_1').value[z];
		temp = temp.charCodeAt();
		temp = CodeUTF8toCodeCP866(temp).toString(16);

		// Дополнить нулём (если нужно).
		switch (temp.length)
			{
			case 1:
			temp = "0" + temp;
			break;
			}

		string += "\"" + temp + "\"";

		// Считаем количество элементов в массиве.
		z4++;

		if (z < lg - 1)
			{
			string += ",";
			}

		z2--;

		// Сколько кодов в одной строке.
		// Переход на новую строку!
		if (z2 == 0)
			{
			string += "\n";
			z2 = z3;
			}
		}

	// Добавить \n.
	if (z2 != z3)
		{
		string += "\n";
		}

	string += "\n";
		string += "];";
			string += "\n";

	// вставить в страницу (в textarea).
	document.getElementById('id_code_cp866').value = string;

	// Вставить в страницу количество всех элементов в массиве.
	document.getElementById('id_elarray_2').innerHTML = z4;

	// Вставить в страницу размер в байтах.
	document.getElementById('id_elarraybyte_2').innerHTML = (z4 * 4) + " (без запятых)";
}

//
// Перекодировать код UTF8 в код CP 866 (один символ).
//
function CodeUTF8toCodeCP866(code_utf8)
{

var ArrayCodeUTF8 =
[

//
// Часть кодовой таблице UTF-8 (символы совпадают с символами CP 866).
//
//        не используется
//        |
//        null    ☺       ☻       ♥       ♦       ♣       ♠       •       ◘       таб.    пс.     ♂       ♀       ♪       ♫       ☼
	0x0000, 0x263a, 0x263b, 0x2665, 0x2666, 0x2663, 0x2660, 0x2022, 0x25d8, 0x0009, 0x000a, 0x2642, 0x2640, 0x266a, 0x266b, 0x263c,
//        ►       ◄       ↕       ‼       ¶       §       ▬       ↨       ↑       ↓       →       ←       ∟       ↔       ▲       ▼
	0x25ba, 0x25c4, 0x2195, 0x203C, 0x00b6, 0x00a7, 0x25ac, 0x21a8, 0x2191, 0x2193, 0x2192, 0x2190, 0x221f, 0x2194, 0x25b2, 0x25bc,
//                !       "       #       $       %       &       '       (       )       *       +       ,       -       .       /
	0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027, 0x0028, 0x0029, 0x002a, 0x002b, 0x002c, 0x002d, 0x002e, 0x002f,
//        0       1       2       3       4       5       6       7       8       9       :       ;       <       =       >       ?
	0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037, 0x0038, 0x0039, 0x003a, 0x003b, 0x003c, 0x003d, 0x003e, 0x003f,
//        @       A       B       C       D       E       F       G       H       I       J       K       L       M       N       O
	0x0040, 0x0041, 0x0042, 0x0043, 0x0044, 0x0045, 0x0046, 0x0047, 0x0048, 0x0049, 0x004a, 0x004b, 0x004c, 0x004d, 0x004e, 0x004f,
//        P       Q       R       S       T       U       V       W       X       Y       Z       [       \       ]       ^       _
	0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 0x0056, 0x0057, 0x0058, 0x0059, 0x005a, 0x005b, 0x005c, 0x005d, 0x005e, 0x005f,
//        `       a       b       c       d       e       f       g       h       i       j       k       l       m       n       o
	0x0060, 0x0061, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067, 0x0068, 0x0069, 0x006a, 0x006b, 0x006c, 0x006d, 0x006e, 0x006f,
//        p       q       r       s       t       u       v       w       x       y       z       {       |       }       ~       ⌂
	0x0070, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077, 0x0078, 0x0079, 0x007a, 0x007b, 0x007c, 0x007d, 0x007e, 0x2302,
//        А       Б       В       Г       Д       Е       Ж       З       И       Й       К       Л       М       Н       О       П
	0x0410, 0x0411, 0x0412, 0x0413, 0x0414, 0x0415, 0x0416, 0x0417, 0x0418, 0x0419, 0x041a, 0x041b, 0x041c, 0x041d, 0x041e, 0x041f,
//        Р       С       Т       У       Ф       Х       Ц       Ч       Ш       Щ       Ъ       Ы       Ь       Э       Ю       Я
	0x0420, 0x0421, 0x0422, 0x0423, 0x0424, 0x0425, 0x0426, 0x0427, 0x0428, 0x0429, 0x042a, 0x042b, 0x042c, 0x042d, 0x042e, 0x042f,
//        а       б       в       г       д       е       ж       з       и       й       к       л       м       н       о       п
	0x0430, 0x0431, 0x0432, 0x0433, 0x0434, 0x0435, 0x0436, 0x0437, 0x0438, 0x0439, 0x043a, 0x043b, 0x043c, 0x043d, 0x043e, 0x043f,
//        ░       ▒       ▓       │       ┤       ╡       ╢       ╖       ╕       ╣       ║       ╗       ╝       ╜       ╛       ┐
	0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0x2561, 0x2562, 0x2556, 0x2555, 0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b, 0x2510,
//        └       ┴       ┬       ├       ─       ┼       ╞       ╟       ╚       ╔       ╩       ╦       ╠       ═       ╬       ╧
	0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c, 0x255e, 0x255f, 0x255a, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0x2567,
//        ╨       ╤       ╥       ╙       ╘       ╒       ╓       ╫       ╪       ┘       ┌       █     ▄         ▌       ▐       ▀
	0x2568, 0x2564, 0x2565, 0x2559, 0x2558, 0x2552, 0x2553, 0x256b, 0x256a, 0x2518, 0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580,
//        р       с       т       у       ф       х       ц       ч       ш       щ       ъ       ы       ь       э       ю       я
	0x0440, 0x0441, 0x0442, 0x0443, 0x0444, 0x0445, 0x0446, 0x0447, 0x0448, 0x0449, 0x044a, 0x044b, 0x044c, 0x044d, 0x044e, 0x044f,
//        Ё       ё       Є       є       Ї       ї       Ў       ў       °       ∙       ·       √       №       ¤       ■       не используется (NBSP)
	0x0401, 0x0451, 0x0404, 0x0454, 0x0407, 0x0457, 0x040e, 0x045e, 0x00b0, 0x2219, 0x00b7, 0x221a, 0x2116, 0x00a4, 0x25a0, 0x00a0

];

	var z, lg;

	// Длина массива 256 - 1 = 255 (NBSP - не используется).
	lg = 255;
	// Указатель на 1 (null - не используется).
	z = 1;

	for(z = z; z < lg; z++)
		{
		if (code_utf8 == ArrayCodeUTF8[z])
			{
			// Возвращает код CP 866.
			return z;
			}
		}

	alert("Ошибка при перекодировке, код UTF-8 в код CP 866" + " (код: " + code_utf8 + "d, " + code_utf8.toString(16) + "h " + String.fromCharCode(code_utf8) + ")");
}

//
// N-бит на символ.
// ---
// Reset 1 (Загрузка страницы).
//
function AdditionNBitSymReset_1(id_insert_table, id_c, id_s, id_insert_file_name, id_inputfile)
{
	// Вставить саму Таблицу.
	AdditionNBitSymInsertTable(id_insert_table, id_c, id_s);

	// Имя файла установить ---.
//	document.getElementById(id_insert_file_name).innerHTML = "---";

	// info (сколькими битами можно закодировать).
//	document.getElementById('id_info_bit_n_bit_symbol').innerHTML = "---";
//	document.getElementById('id_info_bit_n_bit_symbol_2').innerHTML = "---";

	// Сбросить input file.
	document.getElementById(id_inputfile).value = "";
}

//
// N-бит на символ.
// ---
// Reset 2 (Кнопка Сброс).
//
function AdditionNBitSymReset_2(id_insert_table, id_c, id_s, id_insert_file_name)
{
	// Вставить саму Таблицу.
	AdditionNBitSymInsertTable(id_insert_table, id_c, id_s);

	// Имя файла установить ---.
	document.getElementById(id_insert_file_name).innerHTML = "---";

	// info (сколькими битами можно закодировать).
	document.getElementById('id_info_bit_n_bit_symbol').innerHTML = "---";
	document.getElementById('id_info_bit_n_bit_symbol_2').innerHTML = "---";

	// Сколько раз встречаются байты (байт: 00 - 5 раз, байт: 01 - 3 раза и т.д.)
	document.getElementById('id_add_coding_t').innerHTML = "---<br>---<br>---";
}

//
// N-бит на символ.
// ---
// Загрузка файла.
// Один файл для всех вариантов!
//
function AdditionLoadFile(id_file, id_insert_table)
{
	file = document.getElementById(id_file).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{

	var buffer = new Uint8Array(reader.result);

	// Вставить в страницу имя файла и размер файла.
	document.getElementById('id_fn_n_bit_symbol').innerHTML = file.name + " (размер: " + buffer.length + " байт(а))";

	// Сначала вставить саму таблицу.
	// Таблица 1.
	AdditionNBitSymInsertTable(id_insert_table, 'id_code_', 'id_sym_');

	// Теперь вставить в таблицу (наполнить её, наполнить Таблицу 1).
	// Возвращает два массива.
	//
	// Array_DataHex_TotalByte[0] - ArrayDataHex.
	// Array_DataHex_TotalByte[1] - ArrayTotalByte.
	//
	var Array_DataHex_TotalByte = AdditionNBitSymInsertToTable(buffer, 'id_code_', 'id_sym_');

	// Вариант 2.
	// Унарное кодирование.
	AdditionUnaryCoding(Array_DataHex_TotalByte[0], Array_DataHex_TotalByte[1])
	}

// ---------------

	var txt = navigator.userAgent;

	// Если не Firefox, то сброс для input file.
	if (txt.search(/Firefox/) < 0)
		{
		// Сбросить input file.
		document.getElementById(id_file).value = "";
		}

// ---------------

}

//
// N-бит на символ.
// ---
// Вставить саму Таблицу (Таблица 1).
//
function AdditionNBitSymInsertTable(id_insert_table, id_c, id_s)
{

	var x, y, code_h, hex, id_code, id_sym, temp;

	code_h = 0;

	// 0123456789ABCDEF по горизонтали.
	// --------------------------------

	temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	temp += "<tr>";

	temp += "<td>&nbsp;</td>";
	temp += "<td>&nbsp;&nbsp;</td>";

		temp += "<td>&nbsp;0</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;1</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;2</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;3</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;4</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;5</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;6</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;7</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;8</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;9</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;A</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;B</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;C</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;D</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;E</td>";
			temp += "<td>&nbsp;</td>";

		temp += "<td>&nbsp;F</td>";
			temp += "<td>&nbsp;&nbsp;</td>";

		temp += "<td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>";
		temp += "<td>8</td><td>9</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td>";

	temp += "</tr>";
	temp += "</table>";

	temp += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	id_code = 0; id_sym = 0;

	for(x = 0; x < 16; x++)
		{
		temp += "<tr>";

		// 0123456789ABCDEF по вертикали.
		// ------------------------------

		temp += "<td>";

			if (code_h >= 10)
				{
				// В Hex.
				hex = code_h.toString(16);

				// Символ в верхний регистр.
				temp += hex.toUpperCase();
				}
				else
				{
				temp += code_h;
				}

		temp += "</td>";

		// Пробел.
		temp += "<td>&nbsp;&nbsp;</td>";

		// Hex-Код.
		// --------

		for(y = 0; y < 16; y++)
			{
			temp += "<td id=" + id_c + id_code + ">";
			temp += "--";
			temp += "</td>";

			// Если не конец кода, то один пробел.
			if (y != 15)
				{
				// Пробел.
				temp += "<td>&nbsp;</td>";
				}
				else
				{
				// В конце два пробела.
				temp += "<td>&nbsp;&nbsp;</td>";
				}

			id_code++;
			}

		// Символы.
		// --------

		for(y = 0; y < 16; y++)
			{
			temp += "<td id=" + id_s + id_sym + ">";
			temp += ".";
			temp += "</td>";

			id_sym++;
			}

		temp += "</tr>";

		code_h++;
		}

	temp += "</table>";

	// Вставить в странцу саму таблицу.
	document.getElementById(id_insert_table).innerHTML = temp;
}

//
// N-бит на символ.
// ---
// Вставить в Таблицу 1 (наполнить её).
//
function AdditionNBitSymInsertToTable(buffer, id_c, id_s)
{

	// ...
	var ArrayTotalByte = Array(256).fill(0); // Заполнить массив 0.

	// ...
	var ArrayDataHex = Array(256).fill('--'); // Заполнить массив --.

	var x, y, sw_1, sw_2, hex, dec, id_code, count, countbytes;
	var title;

	sw_1 = 0;

	for(x = 0; x < buffer.length; x++)
		{

		if (sw_1 == 0)
			{
			// Для первого раза (новый байт).
			// ---

			for(y = 0; y < 256; y++)
				{
				if (buffer[x] == y)
					{
					// В Hex.
					hex = buffer[x].toString(16);

					// В верхний регистр.
					hex = hex.toUpperCase();

					// Если нужно, дополнить нулём.
					if (hex.length == 1) { hex = "0" + hex; }

					// Записать в таблицу.
					ArrayDataHex[y] = hex;
					// Попутно считаем сколько таких байт всего (всего 1 байт).
					// Информацию о этом храним в массиве ArrayTotalByte.
					ArrayTotalByte[y] = 1;

					sw_1 = 1;
					break;
					}
				}
			}
			else
			{
			// Остальные разы.
			// ---

			sw_2 = 0;

			for(y = 0; y < 256; y++)
				{

				// Получить Hex или -- из таблицы.
				hex = ArrayDataHex[y];

				// Если не --, значит Hex.
				if (hex != '--')
					{
					// Hex в Dec.
					dec = parseInt(hex, 16);

					if (dec == buffer[x])
						{
						// Есть байт в таблице.

						count = ArrayTotalByte[y];
						count++;
						ArrayTotalByte[y] = count;

						sw_2 = 1;
						break;
						}
					}

				}

			// Записываем байт (новый байт) в таблицу.
			if (sw_2 == 0)
				{

				for(y = 0; y < 256; y++)
					{
					if (buffer[x] == y)
						{
						// В Hex.
						hex = y.toString(16);

						// В верхний регистр.
						hex = hex.toUpperCase();

						// Если нужно, дополнить нулём.
						if (hex.length == 1) { hex = "0" + hex; }

						// Записать в таблицу.
						ArrayDataHex[y] = hex;
						// Попутно считаем сколько таких байт всего (всего 1 байт).
						// Информацию о этом храним в массиве ArrayTotalByte.
						ArrayTotalByte[y] = 1;

						break;
						}
					}

				}

			}

		}

	countbytes = 0;

	// Вставить в страницу (в таблицу) Hex-код.
	// Дополнительно title и class.
	for(y = 0; y < 256; y++)
		{
		// Если не --, значит Hex.
		if (ArrayDataHex[y] != '--')
			{
			title = "Байт: " + ArrayDataHex[y] +  " (Dec: " + y + ") встречается в файле " + ArrayTotalByte[y] + " раз(а)";

			id_code = id_c + y;

			// Вставить title.
			document.getElementById(id_code).title = title;
			// Вставить class (class="add_bold").
			document.getElementById(id_code).className = "add_bold";
			// Вставить в страницу Hex-код.
			document.getElementById(id_code).innerHTML = ArrayDataHex[y];

			// Байты, которые есть в таблице.
			// Считаем их.
			countbytes++;
			}
		}

	// Проверка. Self Control.
	// Результат должен быть - размер файла.

//	count = 0;

//	for(y = 0; y < 256; y++)
//		{
//		count = count + ArrayTotalByte[y];
//		}

//	alert("Размер файла: " + count + " байт(а)");

	// Вставить Sym.
	// ---

	var sym, id_sym;

	for(y = 0; y < 256; y++)
		{
		// Получить Hex или -- из таблицы.
		hex = ArrayDataHex[y];

		// Если не --, значит Hex.
		if (hex != '--')
			{
			// Hex в Dec.
			dec = parseInt(hex, 16);

			// Буквы: ABCDEFGHIJKLMNOPQRSTUVWXYZ.
			// Буквы: abcdefghijklmnopqrstuvwxyz.
			if ( (dec >= 0x41 && dec <= 0x5a) || (dec >= 0x61 && dec <= 0x7a) )
				{
				// Получаем символ по коду.
				sym = String.fromCharCode(dec);

				id_sym = id_s + y;

				// Вставить в страницу символ.
				document.getElementById(id_sym).innerHTML = sym;
				}

			else

			// Цифры: 0123456789.
			if (dec >= 0x30 && dec <= 0x39)
				{
				// Получаем символ по коду.
				sym = String.fromCharCode(dec);

				id_sym = id_s + y;

				// Вставить в страницу символ.
				document.getElementById(id_sym).innerHTML = sym;
				}

			else

			// Остальное: ~!@#$%^&*()_+=[]{},.?/\"' плюс пробел
			if (
				dec == 0x7e || dec == 0x21 || dec == 0x40 || dec == 0x23 || dec == 0x24 ||
				dec == 0x25 || dec == 0x5e || dec == 0x26 || dec == 0x2a || dec == 0x28 ||
				dec == 0x29 || dec == 0x5f || dec == 0x2b || dec == 0X3d || dec == 0x5b ||
				dec == 0x5d || dec == 0x7b || dec == 0x7d || dec == 0x2c || dec == 0x2e ||
				dec == 0x3f || dec == 0x2f || dec == 0x5c || dec == 0x22 || dec == 0x27 || dec == 0x20)
				{
				// Получаем символ по коду.
				sym = String.fromCharCode(dec);

				id_sym = id_s + y;

				// Вставить в страницу символ.
				document.getElementById(id_sym).innerHTML = sym;
				}
			}
		}

	var data, flag, txt;

	flag = 255; data = 255; txt = "";

	// Закодировать можно однобитным кодом.
	if (countbytes == 1)
		{
		data = "1"; flag = 1;
		txt = "Закодировать можно однобитным кодом!";
		}

	else

	// Закодировать можно однобитным кодом.
	if (countbytes == 2)
		{
		data = "1"; flag = 2;
		txt = "Закодировать можно однобитным кодом!";
		}

	else

	// Закодировать можно двухбитным кодом.
	// 2 бита. 3 = 3h = 11b.
	if (countbytes == 3)
		{
		data = "2";
		txt = "Закодировать можно двухбитным кодом!";
		}

	else

	// Закодировать можно трёхбитным кодом.
	// 3 бита. 4 = 4h = 100b. 7 = 7h = 111b.
	if (countbytes >= 4 && countbytes <= 7)
		{
		data = "3";
		txt = "Закодировать можно трёхбитным кодом!";
		}

	else

	// Закодировать можно четырёхбитным кодом.
	// 4 бита. 8 = 8h = 1000b. 15 = Fh = 1111b.
	if (countbytes >= 8 && countbytes <= 15)
		{
		data = "4";
		txt = "Закодировать можно четырёхбитным кодом!";
		}

	else

	// Закодировать можно пятибитным кодом.
	// 5 бит. 16 = 10h = 10000b. 31 = 1Fh = 11111b.
	if (countbytes >= 16 && countbytes <= 31)
		{
		data = "5";
		txt = "Закодировать можно пятибитным кодом!";
		}

	else

	// Закодировать можно шестибитным кодом.
	// 6 бит. 32 = 20h = 100000b. 63 = 3Fh = 111111b.
	if (countbytes >= 32 && countbytes <= 63)
		{
		data = "6";
		txt = "Закодировать можно шестибитным кодом!";
		}

	else

	// Закодировать можно семибитным кодом.
	// 7 бит. 64 = 40h = 1000000b. 127 = 7Fh = 1111111b.
	if (countbytes >= 64 && countbytes <= 127)
		{
		data = "7";
		txt = "Закодировать можно семибитным кодом!";
		}

	else

	// Закодировать можно восьмибитным кодом.
	// 8 бит. 128 = 80h = 10000000b. 255 = fFh = 11111111b.
	if (countbytes >= 128 && countbytes <= 256)
		{
		// Нет смысла кодировать!
		data = "8";
		txt = "Закодировать можно восьмибитным кодом (нет смысла кодировать)!";
		}

	// Вставить в страницу info (сколькими битами можно закодировать).
	document.getElementById('id_info_bit_n_bit_symbol').innerHTML = txt;
	document.getElementById('id_info_bit_n_bit_symbol_2').innerHTML = data + " бит на символ!<br>Размер файла * n-бит на символ и / на 8 (будет приблизительно сжатый размер).";

	// Вернуть два массива.
	return [ ArrayDataHex, ArrayTotalByte ];
}

//
// N-бит на символ.
// ---
// Вариант 2.
// Унарное кодирование.
//
function AdditionUnaryCoding(ArrayDataHex, ArrayTotalByte)
{
	// Двоичный: 0, 1, 0...
	var ArrayBinary = [];

	// Двоичный закодированный.
	var ArrayBinaryCoding = [];

	var temp, y, hex,

	// Таблица 2.
	temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
	temp += "<tr><td align=\"left\">";

	for(y = 0; y < 256; y++)
		{
		if (ArrayTotalByte[y] != 0)
			{
			temp += "Байт: " + ArrayDataHex[y] + " встречается в файле " + ArrayTotalByte[y] + " раз(а)." + "<br>";
			}
			else
			{
			// В Hex.
			hex = y.toString(16);
			// В верхний регистр.
			hex = hex.toUpperCase();
			// Если нужно, дополнить нулём.
			if (hex.length == 1) { hex = "0" + hex; }

			temp += "Байт: " + hex + " --" + "<br>";
			}
		}

	temp += "</td></tr>";
	temp += "</table>";

	// Вставить в страницу.
	document.getElementById('id_add_coding_t').innerHTML = temp;
}
