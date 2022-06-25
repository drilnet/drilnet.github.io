
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

//
// Сброс.
//
function VCSPRReset()
{
	// Сбросить справочную информацию.
	VCSPRResetReference();

	// Сбросить inout file.
	VCSPRResetInputFile();

	// Сбросить экранную область Вектор'а (256px x 256px) в браузере.
	VCSPRReset256x256();

	// Установить имя BMP-файла пусто и изменить цвет.
	VCSPRResetBMPName();

	// Сделать кнопку Сохранить BMP-файл неактивной.
	VCSPRResetBMPFileSave();
}

//
// Сбросить справочную информацию.
//
function VCSPRResetReference()
{
	// Сбросить справочную информацию в нет данных.
	document.getElementById('id_sprfilename').innerHTML = "Нет данных";
		document.getElementById('id_sprsizeall').innerHTML = "Нет данных";
			document.getElementById('id_sprsizedata').innerHTML = "Нет данных";
				document.getElementById('id_sprcolor').innerHTML = "Нет данных";
					document.getElementById('id_errorspr').innerHTML = "Нет данных";
}

//
// Сбросить input file (выбор spr-файла).
//
function VCSPRResetInputFile()
{
	// Сбросить input file.
	document.getElementById('id_filespr').value="";
}

//
// Сбросить экранную область Вектор'а (256px x 256px) в браузере.
//
function VCSPRReset256x256()
{
	var temp = "<a href=\"https://gfto.ru/index/konstruktor_3d_teksta/0-37\" title=\"Надпись сделана: https://gfto.ru (нажмите, откроется в новой вкладке)\" target=\"_blank\">";
		temp += "<img class=\"icon\" src=\"images-sprgrftobmp/imageSPR.png\">";
			temp += "</a>";

	// Установить заставку.
	document.getElementById('region_1_256x256').innerHTML = temp;
}

//
// SPR (главное).
//
function VCSPR(id)
{

////////
//
// Чтение текстового файла.
// Результат в reader.result
//
// file = document.getElementById(id).files[0];
	// reader = new FileReader();
		// reader.readAsText(file);
			// reader.onload = function() {alert(reader.result);}
			//
			//////// Стас! Полистай книгу по JavaScript! //////

	file = document.getElementById(id).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{

	var bufferspr = new Uint8Array(reader.result);

	// Получить имя файла с расширением.
	temp = file.name;

	var ext = temp.substr(-3, 3);

	// Только с такими расширениями можно:
	if (ext == 'SPR' || ext == 'sPR' || ext == 'SpR' || ext == 'SPr' ||
		ext == 'spr' || ext == 'Spr' || ext == 'sPr' || ext == 'spR')
		{

		// Вставить в страницу имя spr-файла с расширением.
		document.getElementById('id_sprfilename').innerHTML = "<b>" + temp + "</b>";

		//
		// Распаковка SPR-файла.
		//

		var addrspr, sprsizeall, sprsizedata, z, temp, temp2;

		sprsizeall = bufferspr.length;

		// Пропустить нули (нули в конце).
		for (addrspr = sprsizeall - 1; addrspr > 0;)
			{
			if (bufferspr[addrspr] != 0)
				{
				break;
				}
			addrspr--;
			}	

		temp =  sprsizeall + " байт(а), в hex: " + sprsizeall.toString(16) + " байт(а)";

		// вставить в страницу размер spr-файла.
		document.getElementById('id_sprsizeall').innerHTML = temp;

		sprsizedata = addrspr - 16 + 1;

		temp = sprsizedata + " байт(а), в hex: " + sprsizedata.toString(16) + " байт(а)";

		// вставить в страницу размер spr-данных.
		document.getElementById('id_sprsizedata').innerHTML = temp;

		temp = "";

		// Цвета SPR-файла.
		for (z = 0; z < 16;)
			{

			temp2 = bufferspr[z].toString(16); // Возвращает строковое значение.

			if (temp2.length == 1)
				{
				temp += "0" + temp2;
				}
				else
				{
				temp += temp2;
				}

			if (z < 15)
				{
				temp += ", ";
				}

			z++;
			}

		// вставить в страницу цвета spr-файла (одной строкой).
		document.getElementById('id_sprcolor').innerHTML = temp;

		// Теперь сама распаковка SPR-данных.

		var addrvcs, bit, tb, cb, errorspr;
		var screen_vector_8000_FFFF = [];

		addrvcs = 32767;

		// Единица, нет ошибки.
		errorspr = 1;

		// Распаковка (распаковка в  screen_vector_8000_FFFF[addrvcs]).
stop1:		for (addrspr = addrspr; addrspr > 15; addrspr--)
			{

			// Логическое И (&).
			//
			//   -------------
			//   | x | y | f |
			//   -------------
			//   | 0 | 0 | 0 |
			//   | 0 | 1 | 0 |
			//   | 1 | 0 | 0 |
			//   | 1 | 1 | 1 |
			//   -------------

			// 128D = 80H.
			bit = 128 & bufferspr[addrspr]; // 80H и bufferspr[addrspr].

			// Если старший бит 0 (это бит 7) то неповторяющиеся.
			if (bit == 0)
				{
				// Неповторяющиеся байты.
				// ---

				tb = bufferspr[addrspr];

				for (cb = 0; cb < tb; cb++)
					{
					addrspr--;

					// Проверить, если выход за пределы экранной области Вектор'а.
					if (addrvcs == -1)
						{
						// Ошибка SPR-файла!
						errorspr = 0;
						// Завершение циклов.
						break stop1;
						}

					screen_vector_8000_FFFF[addrvcs] = bufferspr[addrspr];

					addrvcs--;
					}
				}
				else
				{
				// Повторяющиеся байты.
				// ---

				// Старший бит 1 (это бит 7) то повторяющиеся.

				// Установить старший бит в ноль.
				tb = 127 & bufferspr[addrspr]; // 7FH и tb.

				addrspr--;

				for (cb = 0; cb < tb; cb++)
					{

					// Проверить, если выход за пределы экранной области Вектор'а.
					if (addrvcs == -1)
						{
						// Ошибка SPR-файла!
						errorspr = 0;
						// Завершение циклов.
						break stop1;
						}

					screen_vector_8000_FFFF[addrvcs] = bufferspr[addrspr];

					addrvcs--;
					}
				}

			}

		if (errorspr == 1)
			{
			temp = "Нет (экранная область Вектор\'а - " + screen_vector_8000_FFFF.length + " байт, ";
			temp += "в hex - " + screen_vector_8000_FFFF.length.toString(16) + " байт)";

			// вставить в страницу нет ошибки при распаковке.
			document.getElementById('id_errorspr').innerHTML = temp;
			}
			else
			{
			// вставить в страницу есть ошибка при распаковке.
			document.getElementById('id_errorspr').innerHTML = "Да";
			}

			// Построить экранную область Вектор'а (256px x 256px) в браузере.
			// Ресурсоёмкая операция!
			VCSPRBuildRegeon256x256px();

			// Цвета SPR-файла в отдельный массив.
			var SPRColor = [];

			for (z = 0; z < 16;)
				{
				SPRColor[z] = bufferspr[z];
				z++;
				}

		// Наполнить экранную область Вектор'а построенную в браузере (с перекодировкой цвета).
		VCSPRPush(screen_vector_8000_FFFF, SPRColor);

		// Имя BMP-файлу.
		temp = file.name;
		temp = temp.substr(0, temp.length - 3);
		temp = temp + 'bmp';

		// Вставить в страницу имя BMP-файла.
		document.getElementById('id_filenamebmp_s').innerHTML = temp;

		// Изменить цвет имени (BMP-файл).
		document.getElementById('id_filenamebmp_s').style.color = "#333333";

		// Активировать кнопку Сохранить BMP-файл.
		id_filebmp_save_s.setAttribute('style', ''); // Удалить серый цвет.
			document.getElementById('id_filebmp_save_s').className = "sprgrf_bmpsave_s"; // Установить class sprgrf_bmpsave_s.
			document.getElementById('id_filebmp_save_s').title = "Нажмите"; // Установить title.
				id_filebmp_save_s.setAttribute('onclick', 'VCBMP();'); // Установить onClick (FireFox, Google Chrome).
				id_filebmp_save_s.onclick = function(){VCBMP();}; // Установить onClick (Internet Explorer).
		}
		else
		{
		// alert("Расширение не SPR");

		// Вставить в страницу не spr-файл.
		document.getElementById('id_sprfilename').innerHTML = "<b>" + file.name + "</b> (не SPR-файл)";
		}

	// Всё!
	}
}

//
// Построить экранную область Вектор'а (256px x 256px) в браузере.
// Ресурсоёмкая операция!
//
function VCSPRBuildRegeon256x256px()
{

	var x, y, z, id, temp;

	id = 7; z = 0;

	temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	for (y = 0; y < 256;)
		{

		temp += "<tr>";

		for (x = 0; x < 256;)
			{
			// Как располагаются id.
			// s7 s6 s5 s4 s3 s2 s1 s0   s15 s14 s13 s12 s11 s10 s9 s8   s23 s22 s21 s20 s19 s18 s17 s16 и т.д...
			temp += "<td id=\"s" + id + "\" width=\"1\" height=\"1\" style=\"background: #ffffff;\">" + "</td>";

			id--; z++;

			if (z == 8)
				{
				z = 0; id = id + 16;
				}

			x++;
			}

		temp += "</tr>";

		y++;
		}

	temp += "</table>";

	// Вставить в страницу.
	document.getElementById('region_1_256x256').innerHTML = temp;
}

//
// Наполнить экранную область Вектор'а построенную в браузере (с перекодировкой цвета).
//
function VCSPRPush(screen_vector_8000_FFFF, SPRColor)
{
	var addr_screen_8000_9FFF = 255; // FFH
		var addr_screen_A000_BFFF = 8447; // 20FFH
			var addr_screen_C000_DFFF = 16639; // 40FFH
				var addr_screen_E000_FFFF = 24831; // 60FFH

	// Массивы с битами.
	var array_bit8_8000_9FFF = [];
	var array_bit8_A000_BFFF = [];
	var array_bit8_C000_DFFF = [];
	var array_bit8_E000_FFFF = [];

	// Массив с цветами:
	//
	//    RGB[0] - десятичное R;
	//    RGB[1] - десятичное G;
	//    RGB[2] - десятичное B;
	//
	//    RGB[3] - шестнадцитеричное R (строковое);
	//    RGB[4] - шестнадцитеричное G (строковое);
	//    RGB[5] - шестнадцитеричное B (строковое).
	var RGB = [];

	var byte, bit8;
	var addrarraybit8, id, sid, ColorHEX, p1, p2, p3, p4, x, y;

	id = 0;

	for (y = 0; y < 256;)
		{

		// Запомнить!
		p1 = addr_screen_8000_9FFF;
		p2 = addr_screen_A000_BFFF;
		p3 = addr_screen_C000_DFFF;
		p4 = addr_screen_E000_FFFF;

	for (x = 0; x < 32;)
		{

		////////////
		// Байт 1 //
		////////////

		// Байт с 8000_FFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_8000_9FFF];

		// Десятичное в двоичное.
		bit8 = DecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_8000_9FFF = bit8.split('');

		////////////
		// Байт 2 //
		////////////

		// Байт с A000_BFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_A000_BFFF];

		// Десятичное в двоичное.
		bit8 = DecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_A000_BFFF = bit8.split('');

		////////////
		// Байт 3 //
		////////////

		// Байт с C000_DFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_C000_DFFF];

		// Десятичное в двоичное.
		bit8 = DecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_C000_DFFF = bit8.split('');

		////////////
		// Байт 4 //
		////////////

		// Байт с E000_FFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_E000_FFFF];

		// Десятичное в двоичное.
		bit8 = DecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_E000_FFFF = bit8.split('');

		// Перекодируем цвета.
		for (addrarraybit8 = 7; addrarraybit8 > -1;) // Перебор с 7 ... 0.
			{

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 0.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[0]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 1.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[1]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 2.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[2]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 3.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[3]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 4.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[4]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 5.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[5]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 6.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[6]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 7.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[7]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 8.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[8]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 9.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[9]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 10.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[10]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 11.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[11]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 12.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[12]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 13.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[13]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 14.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[14]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 15.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = GetRGB(SPRColor[15]);
				}

			sid = "s" + id;

			//                R        G        B
			ColorHEX = "#" + RGB[3] + RGB[4] + RGB[5];

			document.getElementById(sid).style.background = ColorHEX;

			id++;
			addrarraybit8--;
			}

		addr_screen_8000_9FFF = addr_screen_8000_9FFF + 256;
		addr_screen_A000_BFFF = addr_screen_A000_BFFF + 256;
		addr_screen_C000_DFFF = addr_screen_C000_DFFF + 256;
		addr_screen_E000_FFFF = addr_screen_E000_FFFF + 256;

		x++;
		}

		// Восстановить.
		addr_screen_8000_9FFF = p1;
		addr_screen_A000_BFFF = p2;
		addr_screen_C000_DFFF = p3;
		addr_screen_E000_FFFF = p4;

		// -
		addr_screen_8000_9FFF--;
		addr_screen_A000_BFFF--;
		addr_screen_C000_DFFF--;
		addr_screen_E000_FFFF--;

		y++;
		}
}

//
// Десятичное в двоичное (возвращает строку - восемь бит).
//
function DecToBin(byte)
{
	// Возвращает строковое значение.
	var bit8 = byte.toString(2);

	// Дополнить двоичное число нулями слева.
	switch (bit8.length)
		{
		// Если 1 бит.
		case 1:
		bit8 = '0000000' + bit8;
		break;

		// Если 2 бита.
		case 2:
		bit8 = '000000' + bit8;
		break;

		// Если 3 бита.
		case 3:
		bit8 = '00000' + bit8;
		break;

		// Если 4 бита.
		case 4:
		bit8 = '0000' + bit8;
		break;

		// Если 5 бит.
		case 5:
		bit8 = '000' + bit8;
		break;

		// Если 6 бит.
		case 6:
		bit8 = '00' + bit8;
		break;

		// Если 7 бит.
		case 7:
		bit8 = '0' + bit8;
		break;
		}

	return bit8;
}

//
// Получаем RGB.
// Перекодировка, цвет Вектор'а в цвет PC-компьютера.
//
function GetRGB(sprcolor)
{
	var R, G, B;

	var RGB = []; // Массив с цветами.

	// Цвета Вектор-06Ц через цвета PC компьютера.
	// Массивы цветов PC-компьютера.
	var array_PC_R = [ 0, 36, 72, 108, 144, 180, 216, 255 ]; // 3 бита красный. В hex: 00h, 24h, 48h, 6Ch, 90h, B4h, D8h, FFh.
	var array_PC_G = [ 0, 36, 72, 108, 144, 180, 216, 255 ]; // 3 бита зелёный. В hex: 00h, 24h, 48h, 6Ch, 90h, B4h, D8h, FFh.
	var array_PC_B = [ 0, 85, 170, 255 ]; // 2 бита синий. В hex: 00h, 55h, AAh, FFh.

	var bit8 = DecToBin(sprcolor);

	// 2 бита синий.
	var B_bit = bit8.substr(0, 2);

	// 3 бита зелёный.
	var G_bit = bit8.substr(2, 3);

	// 3 бита красный.
	var R_bit = bit8.substr(5, 3);

	// Blue.
	if (B_bit == '00') { B = array_PC_B[0]; }
	else
	if (B_bit == '01') { B = array_PC_B[1]; }
	else
	if (B_bit == '10') { B = array_PC_B[2]; }
	else
	if (B_bit == '11') { B = array_PC_B[3]; }

	// Green.
	if (G_bit == '000') { G = array_PC_G[0]; }
	else
	if (G_bit == '001') { G = array_PC_G[1]; }
	else
	if (G_bit == '010') { G = array_PC_G[2]; }
	else
	if (G_bit == '011') { G = array_PC_G[3]; }
	else
	if (G_bit == '100') { G = array_PC_G[4]; }
	else
	if (G_bit == '101') { G = array_PC_G[5]; }
	else
	if (G_bit == '110') { G = array_PC_G[6]; }
	else
	if (G_bit == '111') { G = array_PC_G[7]; }

	// Red.
	if (R_bit == '000') { R = array_PC_R[0]; }
	else
	if (R_bit == '001') { R = array_PC_R[1]; }
	else
	if (R_bit == '010') { R = array_PC_R[2]; }
	else
	if (R_bit == '011') { R = array_PC_R[3]; }
	else
	if (R_bit == '100') { R = array_PC_R[4]; }
	else
	if (R_bit == '101') { R = array_PC_R[5]; }
	else
	if (R_bit == '110') { R = array_PC_R[6]; }
	else
	if (R_bit == '111') { R = array_PC_R[7]; }

	// Три цвета (десятичные).
	RGB[0] = R;
	RGB[1] = G;
	RGB[2] = B;

	// Десятичное в hex.
	B = B.toString(16); // Возвращает строковое значение.
	G = G.toString(16); // -/-
	R = R.toString(16); // -/-

	// Если нужно, дополнить нулём.
	if (B.length == 1)
		{
		B = "0" + B;
		}

	// Если нужно, дополнить нулём.
	if (G.length == 1)
		{
		G = "0" + G;
		}

	// Если нужно, дополнить нулём.
	if (R.length == 1)
		{
		R = "0" + R;
		}

	// Три цвета (шестнадцитеричное, строковое).
	RGB[3] = R;
	RGB[4] = G;
	RGB[5] = B;

	return RGB;
}

//
// Установить имя BMP-файлу пусто и изменить цвет.
//
function VCSPRResetBMPName()
{
	// Вставить в страницу Пусто.
	document.getElementById('id_filenamebmp_s').innerHTML = "Пусто";

	// Изменить цвет.
	document.getElementById('id_filenamebmp_s').style.color = "#cccccc";
}

//
// Сделать кнопку Сохранить BMP-файл неактивной.
//
function VCSPRResetBMPFileSave()
{
	// Установить серый цвет.
	document.getElementById('id_filebmp_save_s').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_filebmp_save_s').className = "";
	// Удалить title.
	document.getElementById('id_filebmp_save_s').title = "";
	// Удалить onClick (FireFox, Google Chrome).
	id_filebmp_save_s.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_filebmp_save_s.onclick = function(){};
}

//
// BMP (главное).
//
function VCBMP()
{
	// Создаём буфер для BMP-файла.
	var buffer = new ArrayBuffer(196730); // 196730 байт.
	// Типизированный массив.
	var arraybmp = new Uint8Array(buffer); // По одному байту (байт - числа от 0 до 255).

	// Заголовок BMP-файла.
//                             |                       |                       |
//	0x42, 0x4d, 0x7a, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7a, 0x00, 0x00, 0x00, 0x6c, 0x00, // 0000.
//	0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x18, 0x00, 0x00, 0x00, // 0010.
//	0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x13, 0x0b, 0x00, 0x00, 0x13, 0x0b, 0x00, 0x00, 0x00, 0x00, // 0020.
//	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x42, 0x47, 0x52, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0030.
//	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0040.
//	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0050.
//	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, // 0060.
//	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00                                      // 0070.
//                             |                       |                       |

	// Заголовок BMP-файла.

	arraybmp[0] = 0x42; arraybmp[1] = 0x4d; arraybmp[2] = 0x7a; arraybmp[3] = 0x00;
		arraybmp[4] = 0x03; arraybmp[5] = 0x00; arraybmp[6] = 0x00; arraybmp[7] = 0x00;
			arraybmp[8] = 0x00; arraybmp[9] = 0x00; arraybmp[10] = 0x7a; arraybmp[11] = 0x00;
				arraybmp[12] = 0x00; arraybmp[13] = 0x00; arraybmp[14] = 0x6c; arraybmp[15] = 0x00;

	arraybmp[16] = 0x00; arraybmp[17] = 0x00; arraybmp[18] = 0x00; arraybmp[19] = 0x01;
		arraybmp[20] = 0x00; arraybmp[21] = 0x00; arraybmp[22] = 0x00; arraybmp[23] = 0x01;
			arraybmp[24] = 0x00; arraybmp[25] = 0x00; arraybmp[26] = 0x01; arraybmp[27] = 0x00;
				arraybmp[28] = 0x18; arraybmp[29] = 0x00; arraybmp[30] = 0x00; arraybmp[31] = 0x00;

	arraybmp[32] = 0x00; arraybmp[33] = 0x00; arraybmp[34] = 0x00; arraybmp[35] = 0x00;
		arraybmp[36] = 0x03; arraybmp[37] = 0x00; arraybmp[38] = 0x13; arraybmp[39] = 0x0b;
			arraybmp[40] = 0x00; arraybmp[41] = 0x00; arraybmp[42] = 0x13; arraybmp[43] = 0x0b;
				arraybmp[44] = 0x00; arraybmp[45] = 0x00; arraybmp[46] = 0x00; arraybmp[47] = 0x00;

	arraybmp[48] = 0x00; arraybmp[49] = 0x00; arraybmp[50] = 0x00; arraybmp[51] = 0x00;
		arraybmp[52] = 0x00; arraybmp[53] = 0x00; arraybmp[54] = 0x42; arraybmp[55] = 0x47;
			arraybmp[56] = 0x52; arraybmp[57] = 0x73; arraybmp[58] = 0x00; arraybmp[59] = 0x00;
				arraybmp[60] = 0x00; arraybmp[61] = 0x00; arraybmp[62] = 0x00; arraybmp[63] = 0x00;

	arraybmp[64] = 0x00; arraybmp[65] = 0x00; arraybmp[66] = 0x00; arraybmp[67] = 0x00;
		arraybmp[68] = 0x00; arraybmp[69] = 0x00; arraybmp[70] = 0x00; arraybmp[71] = 0x00;
			arraybmp[72] = 0x00; arraybmp[73] = 0x00; arraybmp[74] = 0x00; arraybmp[75] = 0x00;
				arraybmp[76] = 0x00; arraybmp[77] = 0x00; arraybmp[78] = 0x00; arraybmp[79] = 0x00;

	arraybmp[80] = 0x00; arraybmp[81] = 0x00; arraybmp[82] = 0x00; arraybmp[83] = 0x00;
		arraybmp[84] = 0x00; arraybmp[85] = 0x00; arraybmp[86] = 0x00; arraybmp[87] = 0x00;
			arraybmp[88] = 0x00; arraybmp[89] = 0x00; arraybmp[90] = 0x00; arraybmp[91] = 0x00;
				arraybmp[92] = 0x00; arraybmp[93] = 0x00; arraybmp[94] = 0x00; arraybmp[95] = 0x00;

	arraybmp[96] = 0x00; arraybmp[97] = 0x00; arraybmp[98] = 0x00; arraybmp[99] = 0x00;
		arraybmp[100] = 0x00; arraybmp[101] = 0x00; arraybmp[102] = 0x00; arraybmp[103] = 0x00;
			arraybmp[104] = 0x00; arraybmp[105] = 0x00; arraybmp[106] = 0x02; arraybmp[107] = 0x00;
				arraybmp[108] = 0x00; arraybmp[109] = 0x00; arraybmp[110] = 0x00; arraybmp[111] = 0x00;

	arraybmp[112] = 0x00; arraybmp[113] = 0x00; arraybmp[114] = 0x00; arraybmp[115] = 0x00;
		arraybmp[116] = 0x00; arraybmp[117] = 0x00; arraybmp[118] = 0x00; arraybmp[119] = 0x00;
			arraybmp[120] = 0x00; arraybmp[121] = 0x00;

	var addrbmp, txt, s, x, y, z, p1, i1, i2, i3, R, G, B;

	// Левый нижний угол BMP-файла.
	// addrbmp = 122;

	// Левый верхней угол BMP-файла.
	addrbmp = 122 + 768 * 256 - 768;

	s = 7;

	for (z = 0; z < 256;)
		{
		p1 = addrbmp;

		// Строка.
		for (y = 0; y < 32;)
			{

			// 8 точек.
			for (x = 0; x < 8;) // Перебор с s7 ... s0 ... ... ...
				{

				// Получаем RGB из экранной области Вектор'а (получаем строку: rgb(x,x,x)).
				txt = document.getElementById('s' + s).style.backgroundColor;

				// Для проверки:
				// txt = "rgb(255,255,255)";

				// Парсинг строки: rgb(x,x,x), где x числа от 0 до 255.
				i1 = txt.indexOf(",");
					i2 = txt.lastIndexOf(",");
						i3 = txt.indexOf(")");

				// Продолжение парсинга.
				R = txt.substr(4, i1 - 4);
				G = txt.substr(i1 + 1, i2 - i1 - 1);
				B = txt.substr(i2 + 1, i3 - i2 - 1);

				// Записать цвет (BGR).
				arraybmp[addrbmp++] = Number(B);
				arraybmp[addrbmp++] = Number(G);
				arraybmp[addrbmp++] = Number(R);

				// Для проверки:
				// alert(s + ": " + R + " " + G + " " + B);

				s--;
				x++;
				}

			s = s + 16;
			y++;
			}

		addrbmp = p1;
		addrbmp = addrbmp - 768;
		z++;
		}

	// Получаем имя BMP-файла.
	var nameBMP = document.getElementById('id_filenamebmp_s').innerHTML;

	// Записываем BMP-файл на диск.

	// -
	txt = navigator.userAgent;

	if (txt.search(/rv:11.0/) > 0)
		{
		// Internet Explorer 11.
		var file = new Blob([arraybmp], {type: "application/octet-stream"});
		window.navigator.msSaveOrOpenBlob (file, nameBMP);
		}
		else
		{
		// FireFox, Opera, Google Chrome и др.
		var blob = new Blob([arraybmp], {type: "application/octet-stream"});
		var link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", nameBMP);
		link.click();
		}
}
