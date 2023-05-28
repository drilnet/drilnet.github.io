
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

//
// Сброс.
//
function BF_Reset()
{
	// Вставить в страницу Таблицу 1.
	BF_CreateInsertTable('id_bf_table_1', 'id_code_', 'id_sym_');

	// Сброс Таблица 2.
	var temp = "---<br>---<br>---<br>---<br>---<br>---<br>---<br>---<br>";
		temp += "---<br>---<br>---<br>---<br>---<br>---<br>---<br>---";

	document.getElementById('id_bf_table_2').innerHTML = temp;

	// Пусто 1.
	document.getElementById('id_filename_size').innerHTML = "Файл: Пусто!";
	// Пусто 2.
	document.getElementById('id_bf_allbyte').innerHTML = "Всех байт: Пусто!";

	// -
	var txt = navigator.userAgent;

	// Если не Firefox, то сброс.
	if (txt.search(/Firefox/) < 0)
		{
		// Сброс inputfile.
		BF_Reset_InputFile()
		}
}

//
// Сброс inputfile.
//
function BF_Reset_InputFile()
{
	// Сбросить inputfile.
	document.getElementById('id_bf_filename').value="";
}

//
// Выбор файла (загрузка файла).
//
function BF_LoadFile(id_file)
{
	file = document.getElementById(id_file).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{

	var buffer = new Uint8Array(reader.result);

	// !
	BF_Reset();

	// Вставить в страницу имя файла и размер файла.
	document.getElementById('id_filename_size').innerHTML = "Файл: " + file.name + " (размер: " + buffer.length + " байт(а))";

	// ---

	// Здесь Hex-код (какие байты присутствуют в файле).
	// "--" - Hex-код (байт) отсутсвует.
	var ArrayDataHex = Array(256).fill('--'); // Заполнить массив "--".

	// Здесь результаты подсчётов (сколько раз байты (символы) встречаются в файле).
	// 0 - Подсчёт отсутствует.
	var ArrayTotalByte = Array(256).fill(0); // Заполнить массив 0.

	// ---

	var x, y, sw_1, sw_2, hex, dec, bl, count;

	sw_1 = 0;
	bl = buffer.length;

	for(x = 0; x < bl; x++)
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

					// Записать hex в массив.
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

				// Получить Hex или "--" из массива.
				hex = ArrayDataHex[y];

				// Если не "--", значит Hex.
				if (hex != '--')
					{
					// Hex в Dec.
					dec = parseInt(hex, 16);

					if (dec == buffer[x])
						{
						// Есть байт в массиве.

						count = ArrayTotalByte[y];
						count++;
						ArrayTotalByte[y] = count;

						sw_2 = 1;
						break;
						}
					}

				}

			// Записываем байт (новый байт) в массив.
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

						// Записать hex в массив.
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

	// На выходе два массива:
	// alert(ArrayDataHex);
	// alert(ArrayTotalByte);

	// Проверка. Self Control.
	// Результат должен быть - размер файла.

//	count = 0;

//	for(y = 0; y < 256; y++)
//		{
//		if (ArrayTotalByte[y] != 0)
//			{
//			count = count + ArrayTotalByte[y];
//			}
//		}

	// !
	// alert("Размер файла: " + count + " байт(а)");

	// Наполнить Таблицу 1.
	BF_InsertToTable1(buffer, 'id_code_', 'id_sym_', ArrayDataHex, ArrayTotalByte);

	// Здесь копия массива ArrayTotalByte.
	// Это временный массив, и он будет испорчен.
	var ArrayTotalByteZero = [];

	// В этом массиве и ArrayDataHex и ArrayTotalByte.
	// Без нулей.
	var ArrayDataHexArrayTotalByte = [];

	var total_byte, big_number, z1, z2, binary_code;

	// Скопировать массив ArrayTotalByte в массив ArrayTotalByteZero.
	for(y = 0; y < 256; y++)
		{
		ArrayTotalByteZero[y] = ArrayTotalByte[y];
		}

	total_byte = 0;

	// Считаем сколько всех байт в массиве ArrayTotalByteZero.
	// Ноль не считаем!
	for(y = 0; y < 256; y++)
		{
		if (ArrayTotalByteZero[y] != 0)
			{
			total_byte++;
			}
		}

	z1 = 0;

	// -
	for(x = 0; x < total_byte; x++)
		{
		big_number = 1;

		// Найти какой символ чаще всего встречается в файле.
		// Найти самое большое число в массиве ArrayTotalByteZero[].
		for(y = 0; y < 256; y++)
			{
			// Если нужно, пропускаем 0.
			if (ArrayTotalByteZero[y] != 0)
				{
				if (ArrayTotalByteZero[y] > big_number)
					{
					big_number = ArrayTotalByteZero[y];
					}
				}
			}

		// Создаём массив ArrayDataHexArrayTotalByte[].
		// Попутно где было самое большое число (массив ArrayTotalByteZero[]) - записать 0.
		for(y = 0; y < 256; y++)
			{
			if (big_number == ArrayTotalByteZero[y])
				{
				ArrayDataHexArrayTotalByte[z1++] = ArrayDataHex[y];
				ArrayDataHexArrayTotalByte[z1++] = ArrayTotalByteZero[y]; // (!)

				// Записать 0.
				ArrayTotalByteZero[y] = 0;
				// Прервать цикл.
				break;
				}
			}
		}
	// -

	// Наполнить таблицу 2.
	BF_InsertToTable2(ArrayDataHexArrayTotalByte);

	}
}

//
// Вставить в страницу Таблицу 1.
//
function BF_CreateInsertTable(id_insert_table, id_c, id_s)
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

	// Вставить в странцу таблицу.
	document.getElementById(id_insert_table).innerHTML = temp;
}

//
// Наполнить Таблицу 1.
//
function BF_InsertToTable1(buffer, id_c, id_s, ArrayDataHex, ArrayTotalByte)
{

	var y, id_code, id_sym, title, hex, dec, sym;

	// Вставить в страницу (в Таблицу 1) Hex-код.
	// Дополнительно вставить title и class.
	for(y = 0; y < 256; y++)
		{
		// Если не "--", значит Hex.
		if (ArrayDataHex[y] != '--')
			{
			title = "Байт: " + ArrayDataHex[y] +  " (Dec: " + y + ") встречается в файле " + ArrayTotalByte[y] + " раз(а)";

			id_code = id_c + y;

			// Вставить title.
			document.getElementById(id_code).title = title;
			// Вставить class (class="bold").
			document.getElementById(id_code).className = "bold";
			// Вставить в страницу (в Таблицу 1) Hex-код.
			document.getElementById(id_code).innerHTML = ArrayDataHex[y];
			}
		}

	// Вставить в страницу (в Таблицу 1) Символы.
	for(y = 0; y < 256; y++)
		{
		// Получить Hex или "--" из таблицы.
		hex = ArrayDataHex[y];

		// Если не "--", значит Hex.
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

				// Вставить в страницу (в Таблицу 1) символ.
				document.getElementById(id_sym).innerHTML = sym;
				}

			else

			// Цифры: 0123456789.
			if (dec >= 0x30 && dec <= 0x39)
				{
				// Получаем символ по коду.
				sym = String.fromCharCode(dec);

				id_sym = id_s + y;

				// Вставить в страницу (в Таблицу 1) символ.
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

				// Вставить в страницу (в Таблицу 1) символ.
				document.getElementById(id_sym).innerHTML = sym;
				}
			}
		}
}

//
// Наполнить Таблицу 2.
//
function BF_InsertToTable2(ArrayDataHexArrayTotalByte)
{
	var temp, number, ab;

	number = 0;
	ab = 0;

	temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	for(y = 0; y < ArrayDataHexArrayTotalByte.length;)
		{
		temp += "<tr>";

		// Нумерация.
		temp += "<td align=\"right\">";
		temp += number + ".";
		temp += "</td>";

		temp += "<td align=\"left\">&nbsp;</td>";

		// Hex.
		temp += "<td align=\"left\" nowrap>";
		temp += "Байт: " + ArrayDataHexArrayTotalByte[y++];
		temp += "</td>";

		temp += "<td align=\"left\">&nbsp;</td>";

		// TotalByte.
		// Сколько раз встречается в файле.
		temp += "<td align=\"left\" nowrap>";
		temp += "встречается в файле ";

		temp += ArrayDataHexArrayTotalByte[y];

		ab = ab + ArrayDataHexArrayTotalByte[y++];

		temp += " раз(а)";
		temp += "</td>";

		temp += "</tr>";
		number++;
		}

	temp += "</table>";

	// Вставить в страницу (наполнить таблицу 2).
	document.getElementById('id_bf_table_2').innerHTML = temp;

	// Вставить в страницу всех байт.
	document.getElementById('id_bf_allbyte').innerHTML = "Всех байт: " + ab;
}
