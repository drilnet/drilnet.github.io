
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ----------------- //
// Кодирование VRLE8 //
// ----------------- //


//
// Общий сброс.
//
function VRLE8Reset()
{
	// Сбросить справочную информацию.
	VRLE8ResetReference();

	// Сбросить справочную информацию в Оценить.
	VRLE8ResetReferenceEstimate();

	// Сделать кнопку Оценить неактивной.
	VRLE8ResetEstimate();

	// Сбросить адреса, hex-данные, sym-данные.
	VRLE8ResetHex();

	// Установить имя файлу пусто и изменить цвет.
	VRLE8ResetFileName();

	// Сделать кнопку Сохранить VRLE8-файл неактивной.
	VRLE8ResetFileSave();
}

//
// Сбросить справочную информацию.
//
function VRLE8ResetReference()
{

	// Сбросить справочную информацию, установить Нет данных.
	document.getElementById('id_vrle8_info_filename').innerHTML = "Нет данных";
		document.getElementById('id_vrle8_info_filesize').innerHTML = "Нет данных";
}

//
// Сбросить справочную информацию в Оценить.
//
function VRLE8ResetReferenceEstimate()
{

	var est = document.getElementById('id_vrle8_sum1').innerHTML;

	// Удалить \t (если есть).
	est = est.replace(/\t/g, "");
	// Удалить \n (если есть).
	est = est.replace(/\n/g, "");

	// Сбросить справочную информацию в Оценить.
	if (est != 'Нет данных')
		{
		// Сбросить справочную информацию, установить Нет данных.
		// В td стоит title="Нет данных"! Устанавливать title="Нет данных" не будем!
		document.getElementById('id_vrle8_sum1').innerHTML = "Нет данных";
			document.getElementById('id_vrle8_sum2').innerHTML = "Нет данных";
				document.getElementById('id_vrle8_cod_size').innerHTML = "Нет данных";
		}
}

//
// Сделать кнопку Оценить неактивной.
//
function VRLE8ResetEstimate()
{
	// Установить серый цвет.
	document.getElementById('id_vrle8_estimate').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_vrle8_estimate').className = "";
	// Удалить title.
	document.getElementById('id_vrle8_estimate').title = "";

	// Удалить onClick (FireFox, Google Chrome).
	id_vrle8_estimate.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_vrle8_estimate.onclick = function(){};
}

//
// Сбросить адреса, hex-данные, sym-данные.
//
function VRLE8ResetHex()
{
	// Сбросить адреса.
	document.getElementById('id_vrle8hex_1').innerHTML = "";

	var temp = "Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>";
			temp += "Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!<br>Пусто (Empty)!";

	// Сбросить hex-данные.
	document.getElementById('id_vrle8hex_2').innerHTML = temp;

	// Сбросить sym-данные.
	document.getElementById('id_vrle8hex_3').innerHTML = "";
}

//
// Установить имя файлу пусто и изменить цвет.
//
function VRLE8ResetFileName()
{
	// Вставить в страницу Пусто.
	document.getElementById('id_vrle8_filename').innerHTML = "Пусто";

	// Изменить цвет.
	document.getElementById('id_vrle8_filename').style.color = "#cccccc";
}

//
// Сделать кнопку Сохранить VRLE8-файл неактивной.
//
function VRLE8ResetFileSave()
{
	// Установить серый цвет.
	document.getElementById('id_vrle8_filesave').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_vrle8_filesave').className = "";
	// Удалить title.
	document.getElementById('id_vrle8_filesave').title = "";

	// Удалить onClick (FireFox, Google Chrome).
	id_vrle8_filesave.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_vrle8_filesave.onclick = function(){};
}

//
// Загрузка файла.
//
function VRLE8LoadFile(id)
{
	file = document.getElementById(id).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{
	var buffer = new Uint8Array(reader.result);

	// Вставить в страницу имя файла (с расширением).
	document.getElementById('id_vrle8_info_filename').innerHTML = "<b>" + file.name + "</b>";

	var bl = buffer.length;

	// вставить в страницу размер файла.
	document.getElementById('id_vrle8_info_filesize').innerHTML = bl + " байт(а)";

	// Сбросить справочную информацию в Оценить.
	VRLE8ResetReferenceEstimate();

	var x, z, temp1, temp2, temp3, hex;

	// Вставить buffer в страницу (hex).

	temp1 = "";

	// Адреса hex.
	for (z = 0; z < bl;)
		{
		temp1 += z.toString(16);
		z = z + 16;

		// На последнем адресе не вставлять <br>.
		if (z < bl)
			{
			temp1 += "<br>";
			}
		}

	x = 15; temp2 = "";

	// Данные hex.
	for (z = 0; z < bl;)
		{
		hex = buffer[z].toString(16);

		// Если нужно, дополнить нулём.
		if (hex.length == 1)
			{
			hex = "0" + hex;
			}

		// Начало строки (подсвечиваем).
		if (x == 15)
			{
			temp2 += "<span class=\"vrlestringbg\">";
			}

		// Делаем title.
		temp2 += "<span title=\"Данные в Dec: " + buffer[z] + ". " + "Адрес в Hex: " + z.toString(16) + ". Адрес в Dec: " + z + ".\">" + hex + "</span>";

		if (x == 0)
			{
			// Конец строки (завершаем подсвечивание при наведении).
			temp2 += "</span>";

			// На последнем байте не вставлять <br>.
			if (z != bl - 1)
				{
				temp2 += "<br>";
				}
			x = 16;
			}
			else
			{
			// На последнем байте не вставлять пробел.
			if (z != bl - 1)
				{
				temp2 += " ";
				}
				else
				{
				// Конец строки (завершаем подсвечивание при наведении).
				temp2 += "</span>";
				}
			}

		x--;
		z++;
		}

	var byte;

	x = 15; temp3 = "";

	// Данные sym.
	for (z = 0; z < bl;)
		{
		byte = buffer[z];

		// Буквы: ABCDEFGHIJKLMNOPQRSTUVWXYZ.
		// Буквы: abcdefghijklmnopqrstuvwxyz.
		if ( (byte >= 0x41 && byte <= 0x5a) || (byte >= 0x61 && byte <= 0x7a) )
			{

			// Получаем символ по коду.
			temp3 += String.fromCharCode(byte);

			if (x == 0)
				{
				// На последнем sym не вставлять <br>.
				if (z != bl - 1)
					{
					temp3 += "<br>";
					}

				x = 16;
				}
			}

		else

		// Цифры: 0123456789.
		if (byte >= 0x30 && byte <= 0x39)
			{
			// Получаем символ по коду.
			temp3 += String.fromCharCode(byte);

			if (x == 0)
				{
				// На последнем sym не вставлять <br>.
				if (z != bl - 1)
					{
					temp3 += "<br>";
					}

				x = 16;
				}
			}

		else

		// Остальное: ~!@#$%^&*()_+=[]{},.?/\"'пробел
		if (
			byte == 0x7e || byte == 0x21 || byte == 0x40 || byte == 0x23 || byte == 0x24 ||
			byte == 0x25 || byte == 0x5e || byte == 0x26 || byte == 0x2a || byte == 0x28 ||
			byte == 0x29 || byte == 0x5f || byte == 0x2b || byte == 0X3d || byte == 0x5b ||
			byte == 0x5d || byte == 0x7b || byte == 0x7d || byte == 0x2c || byte == 0x2e ||
			byte == 0x3f || byte == 0x2f || byte == 0x5c || byte == 0x22 || byte == 0x27)
			{

			// Получаем символ по коду.
			temp3 += String.fromCharCode(byte);

			if (x == 0)
				{
				// На последнем sym не вставлять <br>.
				if (z != bl - 1)
					{
					temp3 += "<br>";
					}

				x = 16;
				}
			}

		else

		// Ещё пробел.
		if (byte == 0x20)
			{
			temp3 += "&nbsp;";

			if (x == 0)
				{
				// На последнем sym не вставлять <br>.
				if (z != bl - 1)
					{
					temp3 += "<br>";
					}

				x = 16;
				}
			}

			else

			{

			// Иначе точка.
			temp3 += ".";

			if (x == 0)
				{
				// На последнем sym не вставлять <br>.
				if (z != bl - 1)
					{
					temp3 += "<br>";
					}

				x = 16;
				}
			}

		x--;
		z++;
		}

	// Вставить в страницу адреса.
	document.getElementById('id_vrle8hex_1').innerHTML = temp1;

	// Вставить в страницу hex-данные.
	document.getElementById('id_vrle8hex_2').innerHTML = temp2;

	// Вставить в страницу sym-данные.
	document.getElementById('id_vrle8hex_3').innerHTML = temp3;

	temp1 = "";
	temp2 = "";
	temp3 = "";

	// Вставить в страницу имя VRLE8-файла.
	document.getElementById('id_vrle8_filename').innerHTML = file.name + '.vrle8';

	// Изменить цвет имени.
	document.getElementById('id_vrle8_filename').style.color = "#333333";

	// Активировать кнопку Оценить.
	id_vrle8_estimate.setAttribute('style', ''); // Удалить серый цвет.
		document.getElementById('id_vrle8_estimate').className = "vrle_estimate2"; // Установить class vrle_estimate2.
		document.getElementById('id_vrle8_estimate').title = "Нажмите"; // Установить title.
			id_vrle8_estimate.setAttribute('onclick', 'VRLE8Estimate();'); // Установить onClick (FireFox, Google Chrome).
			id_vrle8_estimate.onclick = function(){VRLE8Estimate();}; // Установить onClick (Internet Explorer).

	// Активировать кнопку Сохранить VRLE8-файл.
	id_vrle8_filesave.setAttribute('style', ''); // Удалить серый цвет.
		document.getElementById('id_vrle8_filesave').className = "vrle_save"; // Установить class vrle_save.
		document.getElementById('id_vrle8_filesave').title = "Нажмите"; // Установить title.
			id_vrle8_filesave.setAttribute('onclick', 'VRLE8Save();'); // Установить onClick (FireFox, Google Chrome).
			id_vrle8_filesave.onclick = function(){VRLE8Save();}; // Установить onClick (Internet Explorer).
	}
}

//
// Сохраняем VRLE8-файл.
//
function VRLE8Save()
{
	var temp, z;

	var array1 = []; // Массив с hex-данными (символьный массив);
	var array2 = []; // Массив с dec-данными (числовой массив);
	var array3 = []; // Массив с адресами повтор./неповтор (числовой массив).
	var array4 = []; // Массив с закодированными данными.
	var array5 = []; // Здесь заголовок: VRLE8, зарезервированный байт (0), дальше идут закодированные байты.

	// Получить hex-данные.
	temp = document.getElementById('id_vrle8hex_2').innerHTML;

	// Удалить все пробелы.
	temp = temp.replace(/ /g, "");

	// Удалить теги.
	temp = temp.replace(/<[^>]+>/g, '');

	// По два символа в массив.
	array1 = temp.match(/.{1,2}/g);

	// Создаём числовой массив.
	for (z = 0; z < array1.length;)
		{
		array2[z] = Number("0x" + array1[z]);
		z++;
		}

	// Возвращает массив с адресами.
	array3 = BuildArrayAddr8(array2);

// ---

	// Считаем байты, сколько повтор и сколько неповтор.
//	var b = CountingBytes8(array3);

//	var b1, b2, b3;

//	b1 = b[0];
//	b2 = b[1];

	// Всех байт.
//	b3 = b1 + b2;

	// Для проверки.
//	alert("Повтор. (разные) " + b1 + ". " + "Неповтор. " + b2 + ". " + "Всех байт " + b3 + ".");

// ---

	// Закодировать данные.
	array4 = VRLE8Coding(array2, array3);

	// Добавляем заголовок.
	//
	//    0x56 - V
	//    0x52 - R
	//    0x4c - L
	//    0x45 - E
	//    0x38 - 8
	//       0 - Зарезервированный байт.
	//
	array5 = [0x56, 0x52, 0x4c, 0x45, 0x38, 0];

	// Объединяем два массива.
	var array45 = [].concat(array5, array4);

	// Для проверки.
//	alert(array4);

	// Для проверки.
//	alert(array5);

	// Типизированный массив.
	var buf = new Uint8Array(array45);

	// Получаем имя VRLE8-файла.
	var nameVRLE8 = document.getElementById('id_vrle8_filename').innerHTML;

	// Записываем закодированный файл на диск.

	// -
	var txt = navigator.userAgent;

	if (txt.search(/rv:11.0/) > 0)
		{
		// Internet Explorer 11.
		var file = new Blob([buf], {type: "application/octet-stream"});
		window.navigator.msSaveOrOpenBlob (file, nameVRLE8);
		}
		else
		{
		// FireFox, Opera, Google Chrome и др.
		var blob = new Blob([buf], {type: "application/octet-stream"});
		var link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", nameVRLE8);
		link.click();
		}
}

//
// Построить массив с адресами (повтор. и неповтор. байт).
//
//                       -------------------------
//    Возвращает массив: | x | addr1 | addr2 | y | ... ... ... и т.д.
//                       -------------------------
//
//      x = 0 - означает неповтор;
//      x = 1 - означает повтор;
//      addr1 - начальный адрес повтор./неповтор;
//      addr2 - конечный адрес повтор./неповтор;
//          y - сколько повтор./неповтор.
//
function BuildArrayAddr8(buffer)
{

	// Для провкрки.
	// buffer = [0, 0, 0, 0, 0, 1];

//
// Как могут располагаться повтор.
//
//    0, 0, 1, 2, 3, 4 => В начале.
//    1, 2, 3, 4, 0, 0 => В конце.
//    1, 2, 0, 0, 1, 2 => Внутри.
//    0, 0, 0, 0, 0, 0 => Только одни повтор.
//    0, 0, 1, 1, 2, 3 => Стоящие рядом.
//
// Как могут располагаться неповтор.
//
//    1, 2, 0, 0, 0, 0 => В начале.
//    0, 0, 0, 0, 1, 2 => В конце.
//    0, 0, 1, 2, 0, 0 => Внутри.
//    1, 2, 3, 4, 5, 6 => Только одни неповтор.
//
//    С одним байтом.
//
//    1, 0, 0, 0, 0, 0 => В начале.
//    0, 0, 0, 0, 0, 1 => В конце.
//    0, 0, 1, 0, 0, 0 => Внутри.
//

	var array1 = []; // Выходной массив с адресами повтор. и неповтор.

	var x, z, z1, zz, bl, aaddr1;

	bl = buffer.length;

	aaddr1 = 0;

	if (bl == 1)
		{
		// buffer содержит всего 1 байт.

		z = 0; zz = z; x = 1;

		// Для проверки.
//		alert("Адрес первого неповтор. " + zz + ". " + "Адрес последнего неповтор. " + z + ". " + "Сколько неповтор. " + x + ".");

		// В массив указатель на неповтор.
		array1[aaddr1++] = 0;
		// В массив адрес первого неповтор.
		array1[aaddr1++] = zz;
		// В массив адрес последнего неповтор.
		array1[aaddr1++] = z;
		// В массив сколько неповтор.
		array1[aaddr1] = x;
		}
		else
		{
		for (z = 0;;) // Бесконечный цикл.
			{
			// Достигнут конец буфера.
			if (z == bl)
				{
				break;
				}

			// В конце буфера один байт.
			if (z == bl - 1)
				{
				zz = z; x = 1;

				// Для проверки.
//				 alert("Адрес первого неповтор. " + zz + ". " + "Адрес последнего неповтор. " + z + ". " + "Сколько неповтор. " + x + ".");

				// В массив указатель на неповтор.
				array1[aaddr1++] = 0;
				// В массив адрес первого неповтор.
				array1[aaddr1++] = zz;
				// В массив адрес последнего неповтор.
				array1[aaddr1++] = z;
				// В массив сколько неповтор.
				array1[aaddr1] = x;

				break;
				}

			if (buffer[z] == buffer[z + 1])
				{
				// Повторяющиеся.

				// В zz адрес первого повтор.
				zz = z;

				z1 = buffer[z];

				for (x = 1;;) // Бесконечный цикл.
					{
					// Достигнут конец буфера.
					if (z == bl - 1)
						{
						break;
						}

					if (z1 == buffer[z + 1])
						{
						z++;

						// В x сколько повтор.
						x++;
						}
						else
						{
						break;
						}
					}

				// Для проверки.
//				 alert("Адрес первого повтор. " + zz + ". " + "Адрес последнего повтор. " + z + ". " + "Сколько повтор. " + x + ".");

				// В массив указатель на повтор.
				array1[aaddr1++] = 1;
				// В массив адрес первого повтор.
				array1[aaddr1++] = zz;
				// В массив адрес последнего повтор.
				array1[aaddr1++] = z;
				// В массив сколько повтор.
				array1[aaddr1++] = x;
				}
				else
				{
				// Неповторяющиеся.

				// В zz адрес первого неповтор.
				zz = z;

				for (x = 1;;) // Бесконечный цикл.
					{
					// Достигнут конец буфера.
					if (z == bl - 1)
						{
						break;
						}

					// Продолжаем искать повтор.
					if (buffer[z] == buffer[z + 1])
						{
						// Откатится назад (к концу неповтор.).
						x--;
						z--;
						break;
						}
						else
						{
						z++;

						// В x сколько неповтор.
						x++;
						}
					}

				// Для проверки.
//				 alert("Адрес первого неповтор. " + zz + ". " + "Адрес последнего неповтор. " + z + ". " + "Сколько неповтор. " + x + ".");

				// В массив указатель на неповтор.
				array1[aaddr1++] = 0;
				// В массив адрес первого неповтор.
				array1[aaddr1++] = zz;
				// В массив адрес последнего неповтор.
				array1[aaddr1++] = z;
				// В массив сколько неповтор.
				array1[aaddr1++] = x;
				}
			z++;
			}
		}

	return array1;
}

//
// Считаем байты. Считаем сколько повтор. и сколько неповтор.
// Информацию берём из массива с адресами.
//
function CountingBytes8(array)
{
	var b1, b2, z;

	b1 = 0; // Повтор. (разные).
	b2 = 0; // Неповтор.

	// Считаем повтор. и неповтор.

	for (z = 0; z < array.length;)
		{
		if (array[z] == 1)
			{
			// Повтор. (разные).
			z = z + 3;

			b1 = b1 + array[z++];
			}
			else
			{
			// Неповтор.
			z = z +3;

			b2 = b2 + array[z++];
			}
		}

	return [b1, b2];
}

//
// Кодируем данные.
//
function VRLE8Coding(array1, array2)
{

	// array1 - Массив с dec-данными (числовой массив);
	// array2 - Массив с адресами повтор./неповтор (числовой массив).

	var arraycoding8 = [];

	var addr2, addrcoding, z1, z2, z3, b1, a;

	addrcoding = 0;

	for (addr2 = 0; addr2 < array2.length;)
		{

		// Кодирование.
		switch (array2[addr2])
			{

			// -------
			// Повтор.
			// -------

			case 1:

			// Байт, который нужно повторить.
			b1 = array1[array2[addr2 + 1]];

			z1 = array2[addr2 + 1]; // Начальный адрес.
			z2 = array2[addr2 + 2]; // Конечный адрес.

			// Минимальная порция - 2 байта.
			// Максимальная порция - 127 байт.
 
			// В z3 размер порции.
			z3 = 2;

			z1++;
			z1++;

			for (z1 = z1; z1 < z2 + 1;)
				{

				if (z3 == 127)
					{
					// Для проверки.
//					alert(z3);

					//    Логическое ИЛИ (|):
					//       0 0 | 0
					//       0 1 | 1
					//       1 0 | 1
					//       1 1 | 1

					// Записываем информационный байт.
					// Установить 7-й бит в 1, остальные биты оставить без изменений.
					arraycoding8[addrcoding++] = 128 | z3;

					// Записываем байт, который нужно повторить.
					arraycoding8[addrcoding++] = b1;

					z3 = 1;
					z1++;
					}

				z3++;
				z1++;
				}

			// Для проверки.
//			alert("=> " + z3);

			// Записываем информационный байт.
			// Установить 7-й бит в 1, остальные биты оставить без изменений.
			arraycoding8[addrcoding++] = 128 | z3;

			// Записываем байт, который нужно повторить.
			arraycoding8[addrcoding++] = b1;

			// Для проверки.
//			alert(arraycoding8);

			break;

			// ---------
			// Неповтор.
			// ---------

			case 0:

			// Запоминаем адрес.
			a = addrcoding;

			// Пропуск (оставляем место для информационного байта).
			addrcoding++;

			z1 = array2[addr2 + 1]; // Начальный адрес.
			z2 = array2[addr2 + 2]; // Конечный адрес.

			// Минимальная порция - 1 байт.
			// Максимальная порция - 127 байт.
 
			// В z3 размер порции.
			z3 = 0;

			for (z1 = z1; z1 < z2 + 1;)
				{

				if (z3 == 127)
					{
					// Для проверки.
//					alert(z3);

					// Записываем информационный байт.
					// 7-й бит уже в 0!
					arraycoding8[a] = z3;

					// Запоминаем адрес.
					a = addrcoding;

					// Пропуск (оставляем место для информационного байта).
					addrcoding++

					z3 = 0;
					}

				// Переписываем неповтор. байт(ы).
				arraycoding8[addrcoding++] = array1[z1];

				z3++;
				z1++;
				}

			// Для проверки.
//			alert("=> " + z3);

			// Записываем информационный байт.
			// 7-й бит уже в 0!
			arraycoding8[a] = z3;

			// Для проверки.
//			alert(arraycoding8);

			break;

			}

		addr2 = addr2 + 4;
		}

	return arraycoding8;
}

//
// Оценить.
//
function VRLE8Estimate()
{

	var array1 = []; // Массив с hex-данными (символьный массив);
	var array2 = []; // Массив с dec-данными (числовой массив);
	var array3 = []; // Массив с адресами повтор./неповтор (числовой массив).

	var temp, z, tcb;

	// Получить hex-данные.
	temp = document.getElementById('id_vrle8hex_2').innerHTML;

	// Удалить все пробелы.
	temp = temp.replace(/ /g, "");

	// Удалить теги.
	temp = temp.replace(/<[^>]+>/g, '');

	// По два символа в массив.
	array1 = temp.match(/.{1,2}/g);

	// Создаём числовой массив.
	for (z = 0; z < array1.length;)
		{
		array2[z] = Number("0x" + array1[z]);
		z++;
		}

	// Возвращает массив с адресами.
	array3 = BuildArrayAddr8(array2);

	// Считаем байты, сколько повтор и сколько неповтор.
	var b = CountingBytes8(array3);

	var b1, b2, b3;

	b1 = b[0];
	b2 = b[1];

	// Всех байт.
	b3 = b1 + b2;

	// Для проверки.
	// alert("Повтор. (разные) " + b1 + ". " + "Неповтор. " + b2 + ". " + "Всех байт " + b3 + ".");

	// Вставиить в страницу сколько всех повтор.
	document.getElementById('id_vrle8_sum1').innerHTML = "<span title=\"" + b1 +" + " + b2 + " = " + (b1 + b2) + " байт(а)" + "\">" + b1 + " байт(а)</span>";

	// Вставиить в страницу сколько всех неповтор.
	document.getElementById('id_vrle8_sum2').innerHTML = "<span title=\"" + b1 +" + " + b2 + " = " + (b1 + b2) + " байт(а)" + "\">" + b2 + " байт(а)</span>";

	// Считаем сколько будет весить закодированный файл.
	tcb = VRLE8CodingEstimate(array2, array3);

	var x, y, txt;

	// Получить размер файла (незакодированный).
	txt = document.getElementById('id_vrle8_info_filesize').innerHTML;

	// В x размер файла.
	x = Number(txt.substr(0, txt.indexOf(' ')));

	// Учитываем заголовок - 6 байт!

	// Если размер закодированного файла меньше исходного.
	if ((tcb + 6) < x)
		{
		y = x - (tcb + 6);
		txt = "Меньше на " + y + " байт(а)";
		}

	// Если размер закодированного файла больше исходного.
	if ((tcb + 6) > x)
		{
		y = (tcb + 6) - x;
		txt = "Больше на " + y + " байт(а)";
		}

	// Если исходный файл и закодированный - равны.
	if ((tcb + 6) == x)
		{
		txt = "Исходный файл и закодированный - равны";
		}

	// Вставить в страницу размер закодированного файла.
	// Размер файла, включая заголовок 6 байт.
	document.getElementById('id_vrle8_cod_size').innerHTML = "<span title=\"" + txt + "\">" + (tcb + 6) + " байт(а)</span>";
}

//
// Оценка данных.
//
function VRLE8CodingEstimate(array1, array2)
{

	// array1 - Массив с dec-данными (числовой массив);
	// array2 - Массив с адресами повтор./неповтор (числовой массив).

	var addr2, tcb, z1, z2, z3;

	tcb = 0;

	for (addr2 = 0; addr2 < array2.length;)
		{

		// Кодирование.
		switch (array2[addr2])
			{

			// -------
			// Повтор.
			// -------

			case 1:

			z1 = array2[addr2 + 1]; // Начальный адрес.
			z2 = array2[addr2 + 2]; // Конечный адрес.

			// Минимальная порция - 2 байта.
			// Максимальная порция - 127 байт.
 
			// В z3 размер порции.
			z3 = 2;

			z1++;
			z1++;

			for (z1 = z1; z1 < z2 + 1;)
				{

				if (z3 == 127)
					{
					// Для проверки.
//					alert(z3);

					// Считаем информационный байт.
					tcb++;

					// Считаем байт, который нужно повторить.
					tcb++;

					z3 = 1;
					z1++;
					}

				z3++;
				z1++;
				}

			// Для проверки.
//			alert("=> " + z3);

			// Считаем информационный байт.
			tcb++;

			// Считаем байт, который нужно повторить.
			tcb++;

			break;

			// ---------
			// Неповтор.
			// ---------

			case 0:

			// Считаем информационный байт.
			tcb++;

			z1 = array2[addr2 + 1]; // Начальный адрес.
			z2 = array2[addr2 + 2]; // Конечный адрес.

			// Минимальная порция - 1 байт.
			// Максимальная порция - 127 байт.
 
			// В z3 размер порции.
			z3 = 0;

			for (z1 = z1; z1 < z2 + 1;)
				{

				if (z3 == 127)
					{
					// Для проверки.
//					alert(z3);

					// Считаем информационный байт).
					tcb++;

					z3 = 0;
					}

				// Считаем неповтор. байт(ы).
				tcb++;

				z3++;
				z1++;
				}

			// Для проверки.
//			alert("=> " + z3);

			// Для проверки.
//			alert(arraycoding8);

			break;

			}

		addr2 = addr2 + 4;
		}

	return tcb;
}
