
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

//
// Ширина модальному окну (плюс другие изменения).
//
function VCBMPGRFSetWidthModWin()
{
	var w = window.screen.width;

	if (w >= 1360)
		{
		// Изменить размер модального окна (ширина).
		document.getElementById('ModalWinBMPtoGRF').style.width = "1200px";
		// Изменить размер окну с прокруткой.
		document.getElementById('winbmpgrfscroll').style.width = "1200px";

		// Ещё некоторые изменения.

		// Растянуть заголовок.
		document.getElementById('bmpsprgrf_wh1').style.width = "1150px";
		// Растянуть заголовок.
		document.getElementById('bmpsprgrf_wh2').style.width = "1125px";
		// Растянуть заголовок.
		document.getElementById('bmpsprgrf_wh2b').style.width = "1132px";
		}
}

//
// Сброс.
//
function VCBMPGRFReset()
{
	// Сбросить справочную информацию.
	VCBMPGRFResetReference();

	// -
	txt = navigator.userAgent;

	// Если не Firefox, то сброс.
	if (txt.search(/Firefox/) < 0)
		{
		// Сбросить inout file.
		VCBMPGRFResetInputFile();
		}

	// Установить Radio Button.
	VCBMPGRFResetRB();

	// Сбросить экранную область Вектор'а (HEX).
	VCBMPGRFResetRegeonHEX();

	// Сделать кнопки неактивными.
	VCBMPGRFResetButtons();
}

//
// Сбросить справочную информацию.
//
function VCBMPGRFResetReference()
{
	// Файл.
	document.getElementById('id_bmpgrf_filename').innerHTML = "Нет данных";
	// Начальный адрес изображения.
	document.getElementById('id_bmpgrf_addr_1').innerHTML = "Нет данных";
	// Конечный адрес изображения.
	document.getElementById('id_bmpgrf_addr_2').innerHTML = "Нет данных";
	// Ширина изображения.
	document.getElementById('id_bmpgrf_width').innerHTML = "Нет данных";
	// Высота изображения.
	document.getElementById('id_bmpgrf_height').innerHTML = "Нет данных";
	// Бит на точку.
	document.getElementById('id_bmpgrf_bitcount').innerHTML = "Нет данных";
	// Тип компрессии.
	document.getElementById('id_bmpgrf_compression').innerHTML = "Нет данных";

	// Некоторая справочная информация 2.

	// всех цветов.
	document.getElementById('id_vccolor256_1').innerHTML = "<span title=\"Нет данных\">Нет данных</span>";
	// Коды цветов Вектор'а.
	document.getElementById('id_vccolor256_2').innerHTML = "<span title=\"Нет данных\">Нет данных</span>";

	// Некоторая справочная информация 3.

	// Имя GRF-файла.
	document.getElementById('id_bmpgrf_grf_filename').innerHTML = "Нет данных";
	// Размер GRF-файла.
	document.getElementById('id_bmpgrf_grf_size').innerHTML = "Нет данных";
	// Количество всех повторяющихся.
	document.getElementById('id_bmpgrf_t1').innerHTML = "<span title=\"Нет данных\">Нет данных</span>";
	// Количество всех неповторяющихся.
	document.getElementById('id_bmpgrf_t2').innerHTML = "<span title=\"Нет данных\">Нет данных</span>";

	// Некоторая справочная информация 4.

	// VSC-файл.
	document.getElementById('id_bmpgrf_vsc_filename').innerHTML = "Нет данных";

	// Некоторая справочная информация 5.

	// TXT-файл.
	document.getElementById('id_bmpgrf_txt_filename').innerHTML = "Нет данных";
	// Цвета.
	document.getElementById('id_bmpgrf_txt_color').innerHTML = "Нет данных";
}

//
// Сбросить input file (выбор bmp-файла).
//
function VCBMPGRFResetInputFile()
{
	// Сбросить input file.
	document.getElementById('id_filebmpgrf').value="";
}

//
// Сбросить экранную область Вектор'а.
// Установить заставку не Canvas.
//
function VCBMPGRFReset256x256()
{
		// Заставка с надписью не Canvas.
		var temp = "<a href=\"https://gfto.ru/index/konstruktor_3d_teksta/0-37\" title=\"Надпись сделана: https://gfto.ru (нажмите, откроется в новой вкладке)\" target=\"_blank\">";
			temp += "<img class=\"icon\" src=\"images-sprgrf/imageGRF.png\">";
				temp += "</a>";

	// Установить заставку.
	document.getElementById('region_3_256x256').innerHTML = temp;
}

//
// Сбросить экранную область Вектор'а.
// Установить заставку Canvas.
//
function VCBMPGRFResetCanvas256x256()
{
		// Заставка с надписью Canvas.
		var temp = "<a href=\"https://gfto.ru/index/konstruktor_3d_teksta/0-37\" title=\"Надпись сделана: https://gfto.ru (нажмите, откроется в новой вкладке)\" target=\"_blank\">";
			temp += "<img class=\"icon\" src=\"images-sprgrf/imageGRFCanvas.png\">";
				temp += "</a>";

	// Установить заставку.
	document.getElementById('region_3_256x256').innerHTML = temp;
}

//
// Установить Radio Button.
//
function VCBMPGRFResetRB()
{
	document.getElementById('rbbmpgrf_1').checked = false; // Да.
	document.getElementById('rbbmpgrf_2').checked = false; // Нет.
	document.getElementById('rbbmpgrf_3').checked = true;  // Canvas.

	// Сбросить экранную область Вектор'а.
	// Установить заставку Canvas.
	VCBMPGRFResetCanvas256x256();
}

//
// Сбросить экранную область Вектор'а (HEX).
//
function VCBMPGRFResetRegeonHEX()
{
	var temp = "Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>Пусто!<br>";
	document.getElementById('id_vcscreen_1').innerHTML = temp;
}

//
// Сделать кнопки неактивными.
//
function VCBMPGRFResetButtons()
{
	// Сохранить GRF-файл.

	// Установить серый цвет.
	document.getElementById('id_bfilegrf_save').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_bfilegrf_save').className = "";
	// Удалить title.
	document.getElementById('id_bfilegrf_save').title = "";
	// Удалить onClick (FireFox, Google Chrome).
	id_filebmp_save_g.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_filebmp_save_g.onclick = function(){};

	// Сохранить экранную область Вектор'а.

	// Установить серый цвет.
	document.getElementById('id_vc_vsc_g').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_vc_vsc_g').className = "";
	// Удалить title.
	document.getElementById('id_vc_vsc_g').title = "";
	// Удалить onClick (FireFox, Google Chrome).
	id_filebmp_save_g.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_filebmp_save_g.onclick = function(){};

	// Сохранить TXT-файл (цвета).

	// Установить серый цвет.
	document.getElementById('id_vc_button_txt_g').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_vc_button_txt_g').className = "";
	// Удалить title.
	document.getElementById('id_vc_button_txt_g').title = "";
	// Удалить onClick (FireFox, Google Chrome).
	id_filebmp_save_g.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_filebmp_save_g.onclick = function(){};
}

//
// Button 1.
// Предварительный просмотр: Да-Нет-Canvas.
// Включить.
//
function VCBMPGRFRadioB_1()
{
	// Сбросить экранную область Вектор'а.
	// Установить заставку не Canvas.
	VCBMPGRFReset256x256();

	// Сбросить input file (выбор bmp-файла).
	VCBMPGRFResetInputFile();
}

//
// Button 2.
// Предварительный просмотр: Да-Нет-Canvas.
// Выключить.
//
function VCBMPGRFRadioB_2()
{
	// Сбросить экранную область Вектор'а.
	// Установить заставку не Canvas.
	VCBMPGRFReset256x256();

	// Сбросить input file (выбор bmp-файла).
	VCBMPGRFResetInputFile();
}

//
// Button 3.
// Предварительный просмотр: Да-Нет-Canvas.
// Canvas.
//
function VCBMPGRFRadioB_3()
{
	// Сбросить экранную область Вектор'а.
	// Установить заставку Canvas.
	VCBMPGRFResetCanvas256x256();

	// Сбросить input file (выбор bmp-файла).
	VCBMPGRFResetInputFile();
}

//
// BMP to GRF (главное).
//
function VCBMPtoGRF(id)
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

	var bufferbmp = new Uint8Array(reader.result);

	// Получить имя файла с расширением.
	var temp = file.name;

	var ext = temp.substr(-3, 3);

	var x1, x2, x3, x4, addrimgstart, w;

	// Только с такими расширениями можно:
	if (ext == 'BMP' || ext == 'bMP' || ext == 'BmP' || ext == 'BMp' ||
		ext == 'bmp' || ext == 'Bmp' || ext == 'bMp' || ext == 'bmP')
		{
		// Вставить в страницу имя bmp-файла.
		document.getElementById('id_bmpgrf_filename').innerHTML = "<b>" + file.name + "</b>";

		// вставить в страницу Начальный адрес изображения.
		x1 = bufferbmp[10].toString(16); if (x1.length == 1) { x1 = "0" + x1; }
		x2 = bufferbmp[12].toString(16); if (x2.length == 1) { x2 = "0" + x2; }
		x3 = bufferbmp[12].toString(16); if (x3.length == 1) { x3 = "0" + x3; }
		x4 = bufferbmp[13].toString(16); if (x4.length == 1) { x4 = "0" + x4; }
		temp = parseInt(x4 + x3 + x2 + x1, 16); addrimgstart = temp;
		document.getElementById('id_bmpgrf_addr_1').innerHTML = temp + ", в hex: " + temp.toString(16);

		// вставить в страницу Конечный адрес изображения.
		temp = (file.size - 1) + ", в hex: " + (file.size - 1).toString(16);
		document.getElementById('id_bmpgrf_addr_2').innerHTML = temp;

		// Вставить в страницу Ширина изображения.
		x1 = bufferbmp[18].toString(16); if (x1.length == 1) { x1 = "0" + x1; }
		x2 = bufferbmp[19].toString(16); if (x2.length == 1) { x2 = "0" + x2; }
		x3 = bufferbmp[20].toString(16); if (x3.length == 1) { x3 = "0" + x3; }
		x4 = bufferbmp[21].toString(16); if (x4.length == 1) { x4 = "0" + x4; }
		temp = parseInt(x4 + x3 + x2 + x1, 16); w = temp;
		if (temp > 256) { alert("Ширина изображения больше 256px."); return; }

		// Проверим кратно ли 8 ширина.
		if (temp != 8 && temp != 16 && temp != 24 && temp != 32 && temp != 40 && temp != 48 && temp != 56 && temp != 64 && temp != 72 && temp != 80 &&
			temp != 88 && temp != 96 && temp != 104 && temp != 112 && temp != 120 && temp != 128 && temp != 136 && temp != 144 && temp != 152 && temp != 160 &&
				temp != 168 && temp != 176 && temp != 184 && temp != 192 && temp != 200 && temp != 208 && temp != 216 && temp != 224 && temp != 232 && temp != 240 &&
					temp != 248 && temp != 256)
						{
						alert("Ширина не кратна 8!");
						return;
						}

		document.getElementById('id_bmpgrf_width').innerHTML = temp + " px.";

		// Вставить в страницу Высота изображения.
		x1 = bufferbmp[22].toString(16); if (x1.length == 1) { x1 = "0" + x1; }
		x2 = bufferbmp[23].toString(16); if (x2.length == 1) { x2 = "0" + x2; }
		x3 = bufferbmp[24].toString(16); if (x3.length == 1) { x3 = "0" + x3; }
		x4 = bufferbmp[25].toString(16); if (x4.length == 1) { x4 = "0" + x4; }
		temp = parseInt(x4 + x3 + x2 + x1, 16);
		if (temp > 256) { alert("Высота изображения больше 256px."); return; }
		document.getElementById('id_bmpgrf_height').innerHTML = temp + " px.";

		// Вставить в страницу Бит на точку.
		x1 = bufferbmp[28].toString(16); if (x1.length == 1) { x1 = "0" + x1; }
		x2 = bufferbmp[29].toString(16); if (x2.length == 1) { x2 = "0" + x2; }
		temp = parseInt(x2 + x1, 16);
		temp += " (<span style=\"color: #e00000\">R</span> = 8, <span style=\"color: #00b000\">G</span> = 8, <span style=\"color: #0000ff\">B</span> = 8 => 8 + 8 + 8 = 24)";
		document.getElementById('id_bmpgrf_bitcount').innerHTML = temp;

		// Вставить в страницу Тип компрессии.
		x1 = bufferbmp[30].toString(16); if (x1.length == 1) { x1 = "0" + x1; }
		x2 = bufferbmp[31].toString(16); if (x2.length == 1) { x2 = "0" + x2; }
		x3 = bufferbmp[32].toString(16); if (x3.length == 1) { x3 = "0" + x3; }
		x4 = bufferbmp[33].toString(16); if (x4.length == 1) { x4 = "0" + x4; }
		temp = parseInt(x4 + x3 + x2 + x1, 16);
		document.getElementById('id_bmpgrf_compression').innerHTML = temp + " (0 - несжатый)";

		var arrayBMP = []; // Без заголовка (одно изображение).
		var hex, blfs, z1, z2;

		// Данные hex.
		blfs = file.size; hex = ""; z2 = 0;
		for (z1 = addrimgstart; z1 < blfs;)
			{
			arrayBMP[z2++] = bufferbmp[z1];
//			hex += bufferbmp[z1].toString(16);
//			if (z1 != blfs - 1) { hex += ","; }
			z1++;
			}

		// Вставить в страницу hex-данные (одно bmp-изображение).
//		document.getElementById('id_bmptogrf_bmphex').innerHTML = hex;

		// Два массива в одном (цвета).
		var array_color = [];
		// Массив цветов, максимально 256 элементов (числовой, dec).
		var array_colorvc256 = [];
		// Массив цветов, максимально 256 элементов (символьный, hex).
		var array_colorvc256hex = [];

		var bl, bl2, z;

		// Получаем цвета.
		// Два массива в одном массиве.
		array_color = VCGetRGBvector256(arrayBMP);

		bl = array_color[0].length;

		// Цвета по разным массивам.
		for (z = 0; z < bl;)
			{
			// 256 цветов максимально (числовой, dec)
			array_colorvc256[z] = array_color[0][z];
			// 256 цветов максимально (символьный, hex).
			array_colorvc256hex[z] = array_color[1][z].toUpperCase();
			z++;
			}

		// Вставить в страницу всех цветов (количество цветов).
		document.getElementById('id_vccolor256_1').innerHTML = "<span title=\"Количество цветов\">" + array_colorvc256hex.length + "</span>";

		bl2 = array_colorvc256.length;

		temp = "";

		// title - десятичный код цветов (для удобства).
		for (z = 0; z < bl2;)
			{
			temp += "<span title=\"Десятичное: " + array_colorvc256[z] + "\">" + array_colorvc256hex[z] + "</span>";

			// Не выводить последнюю запятую.
			if (z != bl2 - 1)
				{
				temp += ",";
				}

			z++;
			}

		// Вставить в страницу коды всех используемых цветов (максимально 256 цветов).
		document.getElementById('id_vccolor256_2').innerHTML = temp;

		// ---

		var temp2, temp3;

		// Отрезать расширение.
		temp = file.name.substr(0,(file.name.length - 3));

		// В верхний регистр.
		temp = temp.toUpperCase();

		// Добавить расширение VSC.
		temp2 = temp + "VSC";

		// Добавить расширение TXT.
		temp3 = temp + "TXT";

		// Добавить расширение GRF.
		temp += "GRF";

		// Вставить в страницу имя GRF-файла.
		document.getElementById('id_bmpgrf_grf_filename').innerHTML = temp;

		// Вставить в страницу имя VSC-файла.
		document.getElementById('id_bmpgrf_vsc_filename').innerHTML = temp2;

		// Вставить в страницу имя TXT-файл (цвета).
		document.getElementById('id_bmpgrf_txt_filename').innerHTML = temp3;

		// ---

		// Наполнить экранную область Вектор'а.
		// screen_vector_8000_FFFF[0][x] - Массив зкранная область Вектор'а.
		// screen_vector_8000_FFFF[1][x] - Массив 16 цветов Вектор'а.
		var screen_vector_8000_FFFF = VCBMPtoScreenVC(arrayBMP, bl2, w); // w - ширина (должно быть кратно 8).

		// Предварительный просмотр Да.
		if (document.getElementById('rbbmpgrf_1').checked === true)
			{

			// ----------
			// Это для предварительного просмотра.

			// Построить экранную область Вектор'а (256px x 256px) в браузере.
			// Ресурсоёмкая операция!
			VCBuildRegeon256x256px('region_3_256x256', 'g');

			// Наполнить экранную область Вектор'а построенную в браузере (с перекодировкой цвета).
			VCSPRGRFPush(screen_vector_8000_FFFF[0], screen_vector_8000_FFFF[1], 'g');

			// ----------

			}

		// Предварительный просмотр Canvas.
		if (document.getElementById('rbbmpgrf_3').checked === true)
			{

			// ----------
			// Это для предварительного просмотра.

			// Экранная область Вектор'а.
			document.getElementById('region_3_256x256').innerHTML = "<canvas id=\"id_canvas\" width=\"256\" height=\"256\" style=\"opacity: 1;\">"
			+ "Браузер не поддерживает Canvas!</canvas>";

			// Наполнить экранную область Вектор'а построенную в браузере (с перекодировкой цвета).
			VCSPRGRFPushCanvas(screen_vector_8000_FFFF[0], screen_vector_8000_FFFF[1], 'id_canvas');

			// ----------

			}

		// ----------
		// Это экранная область Вектора (HEX-данные).

		var addrhex;

		// Вставить в страницу экранную область Вектор'а.
		temp = ""; z1 = 0; z2 = 0; addrhex = 0x8000;

		for (z = 0; z < 32768; z++)
			{

			// Адрес.
			if (z1 == 0)
				{
				if (addrhex == 0x8000 || addrhex == 0xa000 || addrhex == 0xc000 || addrhex == 0xe000)
					{
					temp += "<b>" + addrhex.toString(16).toUpperCase() + "</b>";
					}
					else
					{
					temp += addrhex.toString(16).toUpperCase();
					}

				temp += "&nbsp;&nbsp;";
				addrhex = addrhex + 0x20;
				}

			// Данные.
			hex = screen_vector_8000_FFFF[0][z].toString(16);
			if (hex.length == 1) { hex = "0" + hex }

			// Не выводить последний пробел.
			if (z1 == 31)
				{
				temp += hex.toUpperCase();
				// В конце каждой строки <br>
				temp += "<br>"; z1 = -1;
				}
				else
				{
				temp += hex.toUpperCase() + " ";
				}

			z1++;
			}

		// Вставить в страницу экранную область Вектор'а.
		document.getElementById('id_vcscreen_1').innerHTML = temp;

		// ----------

		// Активировать кнопку Сохранить экранную область Вектор'а.

		// Удалить серый цвет.
		id_vc_vsc_g.setAttribute('style', '');
			// Установить class bmpsprgrf_savefile.
			document.getElementById('id_vc_vsc_g').className = "bmpsprgrf_savefile";
			 // Установить title.
			document.getElementById('id_vc_vsc_g').title = "Нажмите";
				 // Установить onClick (FireFox, Google Chrome).
				id_vc_vsc_g.setAttribute('onclick', 'VCSaveVSC(screen_vector_8000_FFFF[0]);');
				 // Установить onClick (Internet Explorer).
				id_vc_vsc_g.onclick = function(){VCSaveVSC(screen_vector_8000_FFFF[0]);};

		temp = ""

		// Цвета в hex. Это для TXT.
		for (z = 0; z < 16; z++)
			{
			hex = screen_vector_8000_FFFF[1][z].toString(16).toUpperCase();
			if (hex.length == 1) { hex = "0" + hex; }
			if (z != 15)
				{
				temp += hex + ",";
				}
				else
				{
				temp += hex;
				}
			}

		// Вставить в страницу цвета (в hex). Это для TXT.
		document.getElementById('id_bmpgrf_txt_color').innerHTML = temp;

		// Активировать кнопку Сохранить цвета для VSC-файла.

		// Удалить серый цвет.
		id_vc_button_txt_g.setAttribute('style', '');
			// Установить class bmpsprgrf_savefile.
			document.getElementById('id_vc_button_txt_g').className = "bmpsprgrf_savefile";
			 // Установить title.
			document.getElementById('id_vc_button_txt_g').title = "Нажмите";
				// Установить onClick (FireFox, Google Chrome).
				id_vc_button_txt_g.setAttribute('onclick', 'VCSaveColorTXT(temp);');
				// Установить onClick (Internet Explorer).
				id_vc_button_txt_g.onclick = function(){VCSaveColorTXT(temp);};

		// Кодирование.
		// ---

		// Массив с адресами (повтор. и неповтор.).
		var array_bmpgrf_addr = [];

		// Массив с закодированными данными.
		var array_grf = [];

		// GRF-массив для выгрузки на диск.
		var array_grf_c = [];

		// Массив сколько повтор. и сколько неповтор.
		var array_bmpgrf_count = [];

		// Построить массив с адресами (повтор. и неповтор.).
		array_bmpgrf_addr = VCGRFBuildArrayAddr8(screen_vector_8000_FFFF[0])

		// Считаем байты. Считаем сколько повтор. и сколько неповтор.
		// Информацию берём из массива с адресами.
		array_bmpgrf_count = VCGRFCountingBytes8(array_bmpgrf_addr);

		// Вставить в страницу Количество всех повторяющихся
		document.getElementById('id_bmpgrf_t1').innerHTML = array_bmpgrf_count[0];
		// Вставить в страницу Количество всех неповторяющихся
		document.getElementById('id_bmpgrf_t2').innerHTML = array_bmpgrf_count[1];

		 // Установить title 1.
		document.getElementById('id_bmpgrf_t1').title = array_bmpgrf_count[0] + " + " + array_bmpgrf_count[1] + " = " + (array_bmpgrf_count[0] + array_bmpgrf_count[1]) + " байт (размер экранной области Вектор'а)";
		 // Установить title 2.
		document.getElementById('id_bmpgrf_t2').title = array_bmpgrf_count[0] + " + " + array_bmpgrf_count[1] + " = " + (array_bmpgrf_count[0] + array_bmpgrf_count[1]) + " байт (размер экранной области Вектор'а)";

		// Кодируем.
		array_grf = VCGRFCoding(screen_vector_8000_FFFF[0], array_bmpgrf_addr);

		// Объединяем 16 байт цветов и grf-данные.
		array_grf_c = screen_vector_8000_FFFF[1].concat(array_grf);

		// Дописать 0 в конец массива.
		array_grf_c[16 + array_grf.length] = 0;

		// Вставить в страницу размер GRF-файла.
		document.getElementById('id_bmpgrf_grf_size').innerHTML = array_grf_c.length + " байт(а)";

		// Активировать кнопку Сохранить GRF-файл.

		// Удалить серый цвет.
		id_bfilegrf_save.setAttribute('style', '');
			// Установить class bmpsprgrf_savefile.
			document.getElementById('id_bfilegrf_save').className = "bmpsprgrf_savefile";
			 // Установить title.
			document.getElementById('id_bfilegrf_save').title = "Нажмите";
				// Установить onClick (FireFox, Google Chrome).
				id_bfilegrf_save.setAttribute('onclick', 'VCSaveGRF(array_grf_c);');
				// Установить onClick (Internet Explorer).
				id_bfilegrf_save.onclick = function(){VCSaveGRF(array_grf_c);};

		// Посчитать сколько повтор. и сколько неповтор. в GRF-файле.
//		VCGRFCountingInformativeBytes8(array_grf_c);

		}
		else
		{
		// Неправильное расширение (не bmp)!
		alert ("Неправильное расширение!");
		}

	}
}

//
// Экранную область Вектор'а на страницу браузера.
//
function VCSPRGRFPushCanvas(screen_vector_8000_FFFF, Color, id_canvas)
{
	var c = document.getElementById(id_canvas);
	var ctx = c.getContext("2d");

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
	var addrarraybit8, ColorHEX, p1, p2, p3, p4, p5, x, y, xx, yy;

	// Canvas.
	xx = 0;
	yy = 0.5; // Почему 0.5 ??? Стас! Стас! Стас! :)

	for (y = 0; y < 256;)
		{

		// Запомнить!
		p1 = addr_screen_8000_9FFF;
		p2 = addr_screen_A000_BFFF;
		p3 = addr_screen_C000_DFFF;
		p4 = addr_screen_E000_FFFF;

		// Запомнить!
		p5 = yy;

	for (x = 0; x < 32;)
		{

		////////////
		// Байт 1 //
		////////////

		// Байт с 8000_FFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_8000_9FFF];

		// Десятичное в двоичное.
		bit8 = VCSGDecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_8000_9FFF = bit8.split('');

		////////////
		// Байт 2 //
		////////////

		// Байт с A000_BFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_A000_BFFF];

		// Десятичное в двоичное.
		bit8 = VCSGDecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_A000_BFFF = bit8.split('');

		////////////
		// Байт 3 //
		////////////

		// Байт с C000_DFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_C000_DFFF];

		// Десятичное в двоичное.
		bit8 = VCSGDecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_C000_DFFF = bit8.split('');

		////////////
		// Байт 4 //
		////////////

		// Байт с E000_FFFF.

		// Получаем байт.
		byte = screen_vector_8000_FFFF[addr_screen_E000_FFFF];

		// Десятичное в двоичное.
		bit8 = VCSGDecToBin(byte);

		// Теперь двоичное число (каждый символ) в массив.
		array_bit8_E000_FFFF = bit8.split('');

		// Перекодируем цвета.
		for (addrarraybit8 = 0; addrarraybit8 < 8;) // Перебор с 0 ... 7.
			{

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 0.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[0]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 1.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[1]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 2.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[2]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 3.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[3]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 4.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[4]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 5.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[5]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 6.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[6]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 7.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 0)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[7]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 8.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[8]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 9.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[9]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 10.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[10]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 11.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 0 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[11]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 12.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[12]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 13.
			    array_bit8_C000_DFFF[addrarraybit8] == 0 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[13]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 0 && // 14.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[14]);
				}

			else

			if (array_bit8_E000_FFFF[addrarraybit8] == 1 && // 15.
			    array_bit8_C000_DFFF[addrarraybit8] == 1 &&
			    array_bit8_A000_BFFF[addrarraybit8] == 1 &&
			    array_bit8_8000_9FFF[addrarraybit8] == 1)
				{
				// Получаем RGB.
				RGB = VCGetRGB(Color[15]);
				}

			//                R        G        B
			ColorHEX = "#" + RGB[3] + RGB[4] + RGB[5];

			// Каждая линия/точка отдельно.
			ctx.beginPath();
			// Цвет линии/точки.
			ctx.strokeStyle = ColorHEX;
			// Установить курсор (xx - width, yy - height).
			ctx.moveTo(xx,yy);
			// Линия/точка из xx,yy в xx+1,yy.
			ctx.lineTo(xx+1,yy);
			// Закрыть Path.
			ctx.closePath();
			// Завершить.
			ctx.stroke();

			xx++;
			addrarraybit8++;
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

		// -
		yy = p5; yy++; xx = 0;

		y++;
		}
}

//
// Наполнить и вернуть экранную область Вектор'а.
// BMP-данные в экранную область Вектор'а в массив.
//
function VCBMPtoScreenVC(arrayBMP, bl2, w)
{
	//
	// Поехали.
	//

	// Создать дополнительный массив из arrayBMP.
	// Где каждая точка будет закодирована 8-ю битами.
	// Каждая точка будет закодирована цветами Вектор'а.
	var array_color8bits = VCBuildArray8bits(arrayBMP);

	// Массив. Экранная область Вектор'а. Заполнить нулями.
	// screen_vector_8000_FFFF = Array(32768).fill(0); - Не работает в IE.
	// Поэтому делаем так:
	var screen_vector_8000_FFFF = new Array(32768 + 1).join('0').split('').map(parseFloat);

	// Массив с цветами Вектор'а (16 цветов).
	var array_color16 = [];

	// -
	var array_bit1 = [];
		var array_bit2 = [];
			var array_bit3 = [];
				var array_bit4 = [];

	var bl3, index256, index16, index16_2, zz, colorbyte8, tb8;
	var addrbit1, addrbit2, addrbit3, addrbit4;
	var byte1, byte2, byte3, byte4;
	var addrscreenvc, p1, p2, x;

	addrscreenvc = 0;

	var w = w / 8;

	index16 = 0;
	bl3 = array_color8bits.length;

	// Если меньше или равно 16 цветам, то вариант 1, иначе вариант 2.
	if (bl2 <= 16)
		{
		// Кодируем. Вариант 1.

		for (index256 = 0; index256 < bl3;)
			{

			p1 = addrscreenvc;

			// Строка.
			for (x = 0; x < w; x++)
				{

				addrbit1 = 0; addrbit2 = 0;
				addrbit3 = 0; addrbit4 = 0;

			// По восемь точек (по восемь байт, каждая точка - 1 байт).
			for (tb8 = 0; tb8 < 8; tb8++)
				{

				colorbyte8 = array_color8bits[index256++];

				// ---

				if (index16 == 0)
					{
					// Нет такого цвета, запишем цвет в массив.
					array_color16[index16++] = colorbyte8;

					index16_2 = 0;
					}
					else
					{

					for (zz = 0; zz < index16;)
						{
						if (array_color16[zz] == colorbyte8)
							{
							index16_2 = zz;

							// Выход, есть такой цвет.
							break;
							}
						zz++;
						}

					if (zz == index16)
						{
						index16_2 = index16;

						// Нет такого цвета, запишем цвет в массив.
						array_color16[index16++] = colorbyte8;
						}

					}

				// ---

				switch (index16_2)

				{
					case 0:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 0
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "0";
					break;

					case 1:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 1
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "1";
					break;

					case 2:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 2
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "0";
					break;

					case 3:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 3
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "1";
					break;

					case 4:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 4
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "0";
					break;

					case 5:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 5
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "1";
					break;

					case 6:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 6
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "0";
					break;

					case 7:
					// Установить биты.
					array_bit1[addrbit1++] = "0"; // 7
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "1";
					break;

					case 8:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 8
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "0";
					break;

					case 9:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 9
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "1";
					break;

					case 10:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 10
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "0";
					break;

					case 11:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 11
					array_bit2[addrbit2++] = "0";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "1";
					break;

					case 12:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 12
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "0";
					break;

					case 13:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 13
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "0";
					array_bit4[addrbit4++] = "1";
					break;

					case 14:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 14
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "0";
					break;

					case 15:
					// Установить биты.
					array_bit1[addrbit1++] = "1"; // 15
					array_bit2[addrbit2++] = "1";
					array_bit3[addrbit3++] = "1";
					array_bit4[addrbit4++] = "1";
					break;
				}

				} // Конец по восемь точек (конец for).

			byte1 = array_bit1[0] + array_bit1[1] + array_bit1[2] + array_bit1[3] + array_bit1[4] +
				array_bit1[5] + array_bit1[6] + array_bit1[7];

			byte2 = array_bit2[0] + array_bit2[1] + array_bit2[2] + array_bit2[3] + array_bit2[4] +
				array_bit2[5] + array_bit2[6] + array_bit2[7];

			byte3 = array_bit3[0] + array_bit3[1] + array_bit3[2] + array_bit3[3] + array_bit3[4] +
				array_bit3[5] + array_bit3[6] + array_bit3[7];

			byte4 = array_bit4[0] + array_bit4[1] + array_bit4[2] + array_bit4[3] + array_bit4[4] +
				array_bit4[5] + array_bit4[6] + array_bit4[7];

			byte1 = parseInt(byte1, 2);
			byte2 = parseInt(byte2, 2);
			byte3 = parseInt(byte3, 2);
			byte4 = parseInt(byte4, 2);

			p2 = addrscreenvc;

			screen_vector_8000_FFFF[addrscreenvc] = byte1; // В плоскость 0000-1FFF (8000-9FFF).
			addrscreenvc = addrscreenvc + 8192;
			screen_vector_8000_FFFF[addrscreenvc] = byte2; // В плоскость 2000-3FFF (A000-BFFF).
			addrscreenvc = addrscreenvc + 8192;
			screen_vector_8000_FFFF[addrscreenvc] = byte3; // В плоскость 4000-5FFF (C000-DFFF).
			addrscreenvc = addrscreenvc + 8192;
			screen_vector_8000_FFFF[addrscreenvc] = byte4; // В плоскость 6000-7FFF (E000-FFFF).

			addrscreenvc = p2;

			addrscreenvc = addrscreenvc + 256;

			} // Конец 32 (конец for) 

			addrscreenvc = p1;
			addrscreenvc++;

			} // Конец index256 (конец for).

		// Дополнить array_color16 нулями, если нужно.
		for (zz = array_color16.length; zz < 16; zz++)
			{
			array_color16[zz] = 0;
			}

		// Вернуть наполненную экранную область Вектор'а и массив цветов (16 цветов).
		return [screen_vector_8000_FFFF, array_color16];
		}
		else
		{
		// Кодируем. Вариант 2.
		alert("Кодирование (Вариант 2) с количеством цветов больше 16 - пока недоступно!");
		}
}

//
// Создать дополнительный массив из arrayBMP.
//
function VCBuildArray8bits(arrayBMP)
{
	// Массив (изображение), где каждая точка закодирована 8-ю битами.
	// Точки закодированые цветами Вектор'а.
	var array_color8bits = [];

	var bl, addrbmp, B, G, R, z;

	z = 0;
	bl = arrayBMP.length;

	// Создаём массив, где каждая точка будет закодирована 8-ю битами (цветами Вектор'а).
	for (addrbmp = 0; addrbmp < bl;)
		{

		B = arrayBMP[addrbmp++];
		G = arrayBMP[addrbmp++];
		R = arrayBMP[addrbmp++];

		byte = VCGetRGBvector(B, G, R);

		array_color8bits[z++] = byte;
		}

	// Вернуть массив.
	return array_color8bits;
}

//
// Получаем коды всех используемых цветов (максимально 256 цветов).
// Размер массива - это количество используемых цветов.
//
function VCGetRGBvector256(arrayBMP)
{
	var array_colorvc256 = [];
	var array_colorvc256hex = [];

	var addrbmp, B, G, R, colorvc256, i, bl, z, hex;

	addrbmp = 0;
	i = 0;

	bl = arrayBMP.length;

	for (addrbmp = 0; addrbmp < bl;)
		{
		B = arrayBMP[addrbmp++];
		G = arrayBMP[addrbmp++];
		R = arrayBMP[addrbmp++];

		colorvc256 = VCGetRGBvector(B, G, R);

		// Собираем цвета.

		if (i == 0)
			{
			// Нет такого цвета, запишем цвет в массив.
			array_colorvc256[i] = colorvc256;

			hex = colorvc256.toString(16); if (hex.length == 1) { hex = "0" + hex; }
			array_colorvc256hex[i] = hex; // Здесь hex.

			i++;
			}
			else
			{

			for (z = 0; z < i;)
				{
				if (array_colorvc256[z] == colorvc256)
					{
					// Выход, есть такой цвет.
					break;
					}
				z++;
				}

			if (z == i)
				{
				// Нет такого цвета, запишем цвет в массив.
				array_colorvc256[i] = colorvc256;

				hex = colorvc256.toString(16); if (hex.length == 1) { hex = "0" + hex; }
				array_colorvc256hex[i] = hex; // Здесь hex.

				i++;
				}

			}
		}

	//  Возвращает массив с цветами. Возвращает массив с dec и массив с hex.
	return [array_colorvc256, array_colorvc256hex];
}

//
// Получаем RGB. Перекодировка, цвет PC-компьютер'а в цвет Вектор'а.
// 24 бита в 8 бит, Точка кодируется восемью битами, это 256 цветов максимально).
// 8 бит => R - три бита, G - три бита, B - 2 бита (все 256 цветов Вектор'а.
//
function VCGetRGBvector(B, G, R)
{
	var B, G, R, RGB, colorvc256;

	// B - Blue.
	if (B >= 0 && B <= 42) { B = '00' } // 0
		if (B >= 43 && B <= 127) { B = '01' } // 1
			if (B >= 128 && B <= 212) { B = '10' } // 2
				if (B >= 213 && B <= 255) { B = '11' } // 3

	// G - Green.
	if (G >= 0 && G <= 17) { G = '000' } // 0
		if (G >= 18 && G <= 53) { G = '001' } // 1
			if (G >= 54 && G <= 89) { G = '010' } // 2
				if (G >= 90 && G <= 125) { G = '011' } // 3
					if (G >= 126 && G <= 161) { G = '100' } // 4
				if (G >= 162 && G <= 197) { G = '101' } // 5
			if (G >= 198 && G <= 233) { G = '110' } // 6
		if (G >= 234 && G <= 255) { G = '111' } // 7

	// R - Red.
	if (R >= 0 && R <= 17) { R = '000' } // 0
		if (R >= 18 && R <= 53) { R = '001' } // 1
			if (R >= 54 && R <= 89) { R = '010' } // 2
				if (R >= 90 && R <= 125) { R = '011' } // 3
					if (R >= 126 && R <= 161) { R = '100' } // 4
				if (R >= 162 && R <= 197) { R = '101' } // 5
			if (R >= 198 && R <= 233) { R = '110' } // 6
		if (R >= 234 && R <= 255) { R = '111' } // 7

	// В RGB - цвет Вектор'а.
	RGB = B + G + R;
	colorvc256 = parseInt(RGB, 2);

	// Возврат цвета (десятичное).
	return colorvc256;
}

//
// Записываем GRF-файл на диск.
//
function VCSaveGRF(array)
{
	// Типизированный массив из массива array.
	var arraygrf = new Uint8Array(array); // По одному байту (байт - числа от 0 до 255).

	var GRF, nameGRF, txt;

	// Получаем имя GRF-файла.
	nameGRF = document.getElementById('id_bmpgrf_grf_filename').innerHTML;

	// Записываем GRF-файл на диск.

	// -
	txt = navigator.userAgent;

	if (txt.search(/rv:11.0/) > 0)
		{
		// Internet Explorer 11.
		var file = new Blob([arraygrf], {type: "application/octet-stream"});
		window.navigator.msSaveOrOpenBlob (file, nameGRF);
		}
		else
		{
		// FireFox, Opera, Google Chrome и др.
		var blob = new Blob([arraygrf], {type: "application/octet-stream"});
		var link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", nameGRF);
		link.click();
		}
}

//
// Записываем экранную область Вектор'а на диск.
// Это файл с расширением VSC.
//
function VCSaveVSC(screen_vector_8000_FFFF)
{
	// Типизированный массив из массива screen_vector_8000_FFFF.
	var arrayscreen = new Uint8Array(screen_vector_8000_FFFF); // По одному байту (байт - числа от 0 до 255).

	var GRF, nameVSC, txt;

	// Получаем имя VSC-файла.
	nameVSC = document.getElementById('id_bmpgrf_vsc_filename').innerHTML;

	// Записываем VSC-файл на диск.

	// -
	txt = navigator.userAgent;

	if (txt.search(/rv:11.0/) > 0)
		{
		// Internet Explorer 11.
		var file = new Blob([arrayscreen], {type: "application/octet-stream"});
		window.navigator.msSaveOrOpenBlob (file, nameVSC);
		}
		else
		{
		// FireFox, Opera, Google Chrome и др.
		var blob = new Blob([arrayscreen], {type: "application/octet-stream"});
		var link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", nameVSC);
		link.click();
		}
}

//
// Записываем TXT-файл (цвета для VSC-файла).
//
function VCSaveColorTXT(colortxt)
{
	// Получаем имя TXT-файла.
	var nameTXT = document.getElementById('id_bmpgrf_txt_filename').innerHTML;

	// Записываем TXT-файл на диск.

	// -
	var txt = navigator.userAgent;

	if (txt.search(/rv:11.0/) > 0)
		{
		// Internet Explorer 11.
		var file = new Blob([colortxt], {type: "text/plain"});
		window.navigator.msSaveOrOpenBlob (file, nameTXT);
		}
		else
		{
		// FireFox, Opera, Google Chrome и др.
		var blob = new Blob([colortxt], {type: "text/plain"});
		var link = document.createElement("a");
		link.setAttribute("href", URL.createObjectURL(blob));
		link.setAttribute("download", nameTXT);
		link.click();
		}
}

//
// Построить массив с адресами (повтор. и неповтор.).
//
//                       -------------------------
//    Возвращает массив: | x | addr1 | addr2 | y | ... ... ... и т.д.
//                       -------------------------
//
//      x = 0 - означает повтор;
//      x = 1 - означает неповтор;
//      addr1 - начальный адрес повтор./неповтор;
//      addr2 - конечный адрес повтор./неповтор;
//          y - сколько повтор./неповтор.
//
function VCGRFBuildArrayAddr8(buffer)
{

// buffer - это массив с числами (каждая ячейка от 0 и до 255, байты)!
// buffer - это тот массив, который нужно будет "подсунуть" кодировщику!

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

	// Размер buffer'а.
	bl = buffer.length;

	aaddr1 = 0;

	if (bl == 1)
		{
		// buffer содержит всего 1 байт.

		z = 0; zz = z; x = 1;

		// Для проверки.
//		alert("Адрес первого неповтор. " + zz + ". " + "Адрес последнего неповтор. " + z + ". " + "Сколько неповтор. " + x + ".");

		// В массив указатель на неповтор.
		array1[aaddr1++] = 1;
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
			// Достигнут конец buffer'а.
			if (z == bl)
				{
				// Прервать цикл.
				break;
				}

			// В конце buffer'а один байт.
			if (z == bl - 1)
				{
				zz = z; x = 1;

				// Для проверки.
//				 alert("Адрес первого неповтор. " + zz + ". " + "Адрес последнего неповтор. " + z + ". " + "Сколько неповтор. " + x + ".");

				// В массив указатель на неповтор.
				array1[aaddr1++] = 1;
				// В массив адрес первого неповтор.
				array1[aaddr1++] = zz;
				// В массив адрес последнего неповтор.
				array1[aaddr1++] = z;
				// В массив сколько неповтор.
				array1[aaddr1] = x;

				// Прервать цикл.
				break;
				}

			// Один раз можно выполнить if, а потом сделать через switch.
			// Надо подумать!
			if (buffer[z] == buffer[z + 1])
				{
				// Повторяющиеся.

				// В zz адрес первого повтор.
				zz = z;

				// Запомнить в z1.
				z1 = buffer[z];

				for (x = 1;;) // Бесконечный цикл.
					{
					// Достигнут конец buffer'а.
					if (z == bl - 1)
						{
						// Прервать цикл.
						break;
						}

					// Если идут повтор., то считаем их.
					if (z1 == buffer[z + 1])
						{
						z++;

						// В x сколько повтор.
						x++;
						}
						else
						{
						// Прервать цикл.
						break;
						}
					}

				// Для проверки.
//				 alert("Адрес первого повтор. " + zz + ". " + "Адрес последнего повтор. " + z + ". " + "Сколько повтор. " + x + ".");

				// В массив указатель на повтор.
				array1[aaddr1++] = 0;
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
					// Достигнут конец buffer'а.
					if (z == bl - 1)
						{
						// Прервать цикл.
						break;
						}

					// Продолжаем искать повтор.
					if (buffer[z] == buffer[z + 1])
						{
						// Откатится назад (к концу неповтор.).
						x--;
						z--;

						// Прервать цикл.
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
				array1[aaddr1++] = 1;
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
function VCGRFCountingBytes8(array)
{
	var b1, b2, z;

	b1 = 0; // Повтор. (разные).
	b2 = 0; // Неповтор.

	// Считаем повтор. и неповтор.

	for (z = 0; z < array.length;)
		{
		if (array[z] == 0)
			{
			// Повтор. (разные).
			z = z + 3;

			b1 = b1 + array[z++];
			}
			else
			{
			// Неповтор.
			z = z + 3;

			b2 = b2 + array[z++];
			}
		}

	return [b1, b2];
}

//
// Кодируем данные в GRF-формат.
//
function VCGRFCoding(array1, array2)
{

	// array1 - Массив с данными (числовой массив, каждая ячейка от 0 и до 255, байты).
	//          Это то, что нужно закодировать.

	// array2 - Массив с адресами повтор./неповтор (числовой массив).

	// Кодируем в arraycoding8.
	var arraycoding8 = [];

	var addr2, addrcoding, z1, z2, z3, b1;
	var tpor1, tpor2, swpor, t1, t2, z4;

	addrcoding = 0;

	for (addr2 = 0; addr2 < array2.length;)
		{
		// Кодирование.
		switch (array2[addr2])
			{

			// -------
			// Повтор.
			// -------

			// Минимальная порция - 2 байта.
			// Максимальная порция - 127 байт.

			case 0:

			// Байт, который нужно повторить.
			b1 = array1[array2[addr2 + 1]];

			tpor1 = array2[addr2 + 3]; // Сколько повтор.

			if (tpor1 < 127)
				{
				// Только часть порции.
				// В tpor1 - сколько повтор.
				swpor = 1;
				}
				else
				{
				t1 = 0;

				for(;;)
					{
					tpor1 = tpor1 - 127;
					t1++;

					if (tpor1 == 0)
						{
						// n-полных порций и нет неполной порции.
						// В t1 - сколько полных порций.
						swpor = 2;
						break;
						}

					if (tpor1 < 127)
						{
						// n-полных порций и часть порции.
						// В t1 - сколько полных порций.
						// В tpor1 - часть порции (сколько повтор.).
						swpor = 3;
						break;
						}
					}
				}

			switch (swpor)
				{
				case 1:

				// Только часть порции.

				// Записываем информационный байт.
				// 7-й бит уже в 0!
				arraycoding8[addrcoding++] = tpor1;

				// Записываем байт, который нужно повторить.
				arraycoding8[addrcoding++] = b1;

				break;

				case 2:

				// Только полная порция (полные порции).
				for (z1 = 0; z1 < t1;)
					{
					// Записываем информационный байт.
					// 7-й бит уже в 0!
					arraycoding8[addrcoding++] = 127;

					// Записываем байт, который нужно повторить.
					arraycoding8[addrcoding++] = b1;

					z1++;
					}

				break;

				case 3:

				// Полная порция (полные порции).
				for (z1 = 0; z1 < t1;)
					{
					// Записываем информационный байт.
					// 7-й бит уже в 0!
					arraycoding8[addrcoding++] = 127;

					// Записываем байт, который нужно повторить.
					arraycoding8[addrcoding++] = b1;

					z1++;
					}

				// Часть порции.

				// Записываем информационный байт.
				// 7-й бит уже в 0!
				arraycoding8[addrcoding++] = tpor1;

				// Записываем байт, который нужно повторить.
				arraycoding8[addrcoding++] = b1;

				break;
				}

			// Прервать switch.
			break;

			// ---------
			// Неповтор.
			// ---------

			// Минимальная порция - 1 байт.
			// Максимальная порция - 127 байт.

			case 1:

			// Начальный адрес неповтор.
			z3 = array2[addr2 + 1];

			tpor2 = array2[addr2 + 3]; // Сколько неповтор.

			if (tpor2 < 127)
				{
				// Только часть порции.
				// В tpor2 - сколько неповтор.
				swpor = 1;
				}
				else
				{
				t2 = 0;

				for(;;)
					{
					tpor2 = tpor2 - 127;
					t2++;

					if (tpor2 == 0)
						{
						// n-полных порций и нет неполной порции.
						// В t2 - сколько полных порций.
						swpor = 2;
						break;
						}

					if (tpor1 < 127)
						{
						// n-полных порций и часть порции.
						// В t2 - сколько полных порций.
						// В tpor2 - часть порции (сколько неповтор.).
						swpor = 3;
						break;
						}
					}
				}

			switch (swpor)
				{
				case 1:

				//    Логическое ИЛИ (|):
				//       0 0 | 0
				//       0 1 | 1
				//       1 0 | 1
				//       1 1 | 1

				// Записываем информационный байт.
				// Установить 7-й бит в 1, остальные биты оставить без изменений.
				arraycoding8[addrcoding++] = 128 | tpor2;

				// Только часть порции.
				for (z2 = 0; z2 < tpor2;)
					{
					// Переписываем неповтор. байт(ы).
					arraycoding8[addrcoding++] = array1[z3++];
					z2++;
					}

				break;

				case 2:

				// Только полная порция (только полные порции).
				for (z4 = 0; z4 < t2;)
					{
					// Записываем информационный байт.
					// Максимальный размер порции, плюс 7-й бит в 1.
					arraycoding8[addrcoding++] = 255;

					for (z2 = 0; z2 < 127;)
						{
						// Переписываем неповтор. байт(ы).
						arraycoding8[addrcoding++] = array1[z3++];
						z2++;
						}
					z4++;
					}

				break;

				case 3:

				// Полная порция (полные порции).
				for (z4 = 0; z4 < t2;)
					{
					// Записываем информационный байт.
					// Максимальный размер порции, плюс 7-й бит в 1.
					arraycoding8[addrcoding++] = 255;

					for (z2 = 0; z2 < 127;)
						{
						// Переписываем неповтор. байт(ы).
						arraycoding8[addrcoding++] = array1[z3++];
						z2++;
						}
					z4++;
					}

				// Записываем информационный байт.
				// Установить 7-й бит в 1, остальные биты оставить без изменений.
				arraycoding8[addrcoding++] = 128 | tpor2;

				// Часть порции.
				for (z2 = 0; z2 < tpor2;)
					{
					// Переписываем неповтор. байт(ы).
					arraycoding8[addrcoding++] = array1[z3++];
					z2++;
					}

				break;
				}

			// Прервать switch;
			break;
			}
		addr2 = addr2 + 4;
		}

	// Вернуть закодированный массив.
	return arraycoding8;
}

//
// Посчитать сколько повтор. и сколько неповтор. в GRF-файле.
//
function VCGRFCountingInformativeBytes8(array_grf)
{
	var bits, addrgrf, t1, t2, tt;

	t1 = 0;
	t2 = 0;

	// 16 - Пропуск 16-байт цветов.
	// -1 - Минус нулевой байт в конце.
	for (addrgrf = 16; addrgrf < array_grf.length - 1;)
		{
		bits = 128 & array_grf[addrgrf]; // 80H и array_grf[addrgrf].

		if (bits == 0)
			{
			// Повтор.
			// ---

			tt = array_grf[addrgrf];
			t1 = t1 + tt;
			addrgrf = addrgrf + 2;
			}
			else
			{
			// Неповтор.
			// ---

			// Установить старший бит в ноль.
			tt = 127 & array_grf[addrgrf];
			t2 = t2 + tt;
			addrgrf = addrgrf + tt + 1;
			}
		}

	alert("Повтор: " + t1 + "   " + "Неповтор: " + t2 + "   " + (t1 + t2));
}


//
// Вставить текст в страницу (таблицу 24 bits to 8 bits)
//
function VC24To8TXT()
{

var Array_1 = 
[

"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","96","a2","a5","e2","a0","20","50","43","2d","aa","ae","ac",
"af","ec","ee","e2","a5","e0","27","a0","20","e7","a5","e0","a5","a7","20","e6",
"a2","a5","e2","a0","20","82","a5","aa","e2","ae","e0","27","a0","2d","30","36",
"96","0a","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","32","34","20","62","69","74","73","20","74","6f","20","38",
"20","62","69","74","73","0a","0a","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","92","a0","a1","ab","a8","e6","a0","20","28","68","65","78","29","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","92","a0",
"a1","ab","a8","e6","a0","20","28","64","65","63","29","0a","da","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c2","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c2","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","bf","20","20","20","da","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c2","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c2","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"bf","0a","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"52","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","47","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","20",
"20","20","42","20","20","20","20","20","20","20","b3","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","52","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","20",
"20","20","20","20","20","20","20","20","47","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","20","20","20","42","20",
"20","20","20","20","20","20","b3","0a","c3","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c5","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c5","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"b4","20","20","20","c3","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c5","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c5","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","b4","0a","b3","20",
"20","20","30","30","68","20","c4","c2","c4","20","30","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","30","30",
"68","20","c4","c2","c4","20","30","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","30","30","68","20","c4","c2",
"c4","20","30","20","20","20","b3","20","20","20","b3","20","20","20","20","30",
"64","20","c4","c2","c4","20","30","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","30","64","20","c4","c2",
"c4","20","30","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","20","30","64","20","c4","c2","c4","20","30","20",
"20","20","b3","0a","b3","20","20","20","31","31","68","20","c4","d9","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"b3","20","20","20","31","31","68","20","c4","d9","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","b3","20","20","20",
"32","41","68","20","c4","d9","20","20","20","20","20","20","b3","20","20","20",
"b3","20","20","20","31","37","64","20","c4","d9","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","b3","20","20","20",
"31","37","64","20","c4","d9","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","b3","20","20","20","34","32","64","20",
"c4","d9","20","20","20","20","20","20","b3","0a","b3","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","b3","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","0a",
"b3","20","20","20","31","32","68","20","c4","bf","20","20","20","20","20","20",
"37","45","68","20","c4","bf","20","20","20","20","20","20","b3","20","20","20",
"31","32","68","20","c4","bf","20","20","20","20","20","20","37","45","68","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","32","42","68","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","b3","20","20","20",
"31","38","64","20","c4","bf","20","20","20","20","20","31","32","36","64","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","31","38","64","20",
"c4","bf","20","20","20","20","20","31","32","36","64","20","c4","bf","20","20",
"20","20","20","20","b3","20","20","20","34","33","64","20","c4","bf","20","20",
"20","20","20","20","b3","0a","b3","20","20","20","32","34","68","20","c4","c5",
"c4","20","31","20","20","20","39","30","68","20","c4","c5","c4","20","34","20",
"20","20","b3","20","20","20","32","34","68","20","c4","c5","c4","20","31","20",
"20","20","39","30","68","20","c4","c5","c4","20","34","20","20","20","b3","20",
"20","20","35","35","68","20","c4","c5","c4","20","31","20","20","20","b3","20",
"20","20","b3","20","20","20","33","36","64","20","c4","c5","c4","20","31","20",
"20","31","34","34","64","20","c4","c5","c4","20","34","20","20","20","b3","20",
"20","20","33","36","64","20","c4","c5","c4","20","31","20","20","31","34","34",
"64","20","c4","c5","c4","20","34","20","20","20","b3","20","20","20","38","35",
"64","20","c4","c5","c4","20","31","20","20","20","b3","0a","b3","20","20","20",
"33","35","68","20","c4","d9","20","20","20","20","20","20","41","31","68","20",
"c4","d9","20","20","20","20","20","20","b3","20","20","20","33","35","68","20",
"c4","d9","20","20","20","20","20","20","41","31","68","20","c4","d9","20","20",
"20","20","20","20","b3","20","20","20","37","46","68","20","c4","d9","20","20",
"20","20","20","20","b3","20","20","20","b3","20","20","20","35","33","64","20",
"c4","d9","20","20","20","20","20","31","36","31","64","20","c4","d9","20","20",
"20","20","20","20","b3","20","20","20","35","33","64","20","c4","d9","20","20",
"20","20","20","31","36","31","64","20","c4","d9","20","20","20","20","20","20",
"b3","20","20","31","32","37","64","20","c4","d9","20","20","20","20","20","20",
"b3","0a","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","0a","b3","20","20","20","33","36","68","20",
"c4","bf","20","20","20","20","20","20","41","32","68","20","c4","bf","20","20",
"20","20","20","20","b3","20","20","20","33","36","68","20","c4","bf","20","20",
"20","20","20","20","41","32","68","20","c4","bf","20","20","20","20","20","20",
"b3","20","20","20","38","30","68","20","c4","bf","20","20","20","20","20","20",
"b3","20","20","20","b3","20","20","20","35","34","64","20","c4","bf","20","20",
"20","20","20","31","36","32","64","20","c4","bf","20","20","20","20","20","20",
"b3","20","20","20","35","34","64","20","c4","bf","20","20","20","20","20","31",
"36","32","64","20","c4","bf","20","20","20","20","20","20","b3","20","20","31",
"32","38","64","20","c4","bf","20","20","20","20","20","20","b3","0a","b3","20",
"20","20","34","38","68","20","c4","c5","c4","20","32","20","20","20","42","34",
"68","20","c4","c5","c4","20","35","20","20","20","b3","20","20","20","34","38",
"68","20","c4","c5","c4","20","32","20","20","20","42","34","68","20","c4","c5",
"c4","20","35","20","20","20","b3","20","20","20","41","41","68","20","c4","c5",
"c4","20","32","20","20","20","b3","20","20","20","b3","20","20","20","37","32",
"64","20","c4","c5","c4","20","32","20","20","31","38","30","64","20","c4","c5",
"c4","20","35","20","20","20","b3","20","20","20","37","32","64","20","c4","c5",
"c4","20","32","20","20","31","38","30","64","20","c4","c5","c4","20","35","20",
"20","20","b3","20","20","31","37","30","64","20","c4","c5","c4","20","32","20",
"20","20","b3","0a","b3","20","20","20","35","39","68","20","c4","d9","20","20",
"20","20","20","20","43","35","68","20","c4","d9","20","20","20","20","20","20",
"b3","20","20","20","35","39","68","20","c4","d9","20","20","20","20","20","20",
"43","35","68","20","c4","d9","20","20","20","20","20","20","b3","20","20","20",
"44","34","68","20","c4","d9","20","20","20","20","20","20","b3","20","20","20",
"b3","20","20","20","38","39","64","20","c4","d9","20","20","20","20","20","31",
"39","37","64","20","c4","d9","20","20","20","20","20","20","b3","20","20","20",
"38","39","64","20","c4","d9","20","20","20","20","20","31","39","37","64","20",
"c4","d9","20","20","20","20","20","20","b3","20","20","32","31","32","64","20",
"c4","d9","20","20","20","20","20","20","b3","0a","b3","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","b3","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","0a",
"b3","20","20","20","35","41","68","20","c4","bf","20","20","20","20","20","20",
"43","36","68","20","c4","bf","20","20","20","20","20","20","b3","20","20","20",
"35","41","68","20","c4","bf","20","20","20","20","20","20","43","36","68","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","44","35","68","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","b3","20","20","20",
"39","30","64","20","c4","bf","20","20","20","20","20","31","39","38","64","20",
"c4","bf","20","20","20","20","20","20","b3","20","20","20","39","30","64","20",
"c4","bf","20","20","20","20","20","31","39","38","64","20","c4","bf","20","20",
"20","20","20","20","b3","20","20","32","31","33","64","20","c4","bf","20","20",
"20","20","20","20","b3","0a","b3","20","20","20","36","43","68","20","c4","c5",
"c4","20","33","20","20","20","44","38","68","20","c4","c5","c4","20","36","20",
"20","20","b3","20","20","20","36","43","68","20","c4","c5","c4","20","33","20",
"20","20","44","38","68","20","c4","c5","c4","20","36","20","20","20","b3","20",
"20","20","46","46","68","20","c4","c1","c4","20","33","20","20","20","b3","20",
"20","20","b3","20","20","31","30","38","64","20","c4","c5","c4","20","33","20",
"20","32","31","36","64","20","c4","c5","c4","20","36","20","20","20","b3","20",
"20","31","30","38","64","20","c4","c5","c4","20","33","20","20","32","31","36",
"64","20","c4","c5","c4","20","36","20","20","20","b3","20","20","32","35","35",
"64","20","c4","c1","c4","20","33","20","20","20","b3","0a","b3","20","20","20",
"37","44","68","20","c4","d9","20","20","20","20","20","20","45","39","68","20",
"c4","d9","20","20","20","20","20","20","b3","20","20","20","37","44","68","20",
"c4","d9","20","20","20","20","20","20","45","39","68","20","c4","d9","20","20",
"20","20","20","20","b3","20","20","20","20","b3","20","20","20","20","20","20",
"20","20","20","20","b3","20","20","20","b3","20","20","31","32","35","64","20",
"c4","d9","20","20","20","20","20","32","33","33","64","20","c4","d9","20","20",
"20","20","20","20","b3","20","20","31","32","35","64","20","c4","d9","20","20",
"20","20","20","32","33","33","64","20","c4","d9","20","20","20","20","20","20",
"b3","20","20","20","20","b3","20","20","20","20","20","20","20","20","20","20",
"b3","0a","b3","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20",
"20","20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","b3",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","b3","20",
"20","20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20","b3",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","20","b3","0a","b3","20","20","20","20","b3","20","20",
"20","20","20","20","20","20","20","20","45","41","68","20","c4","bf","20","20",
"20","20","20","20","b3","20","20","20","20","b3","20","20","20","20","20","20",
"20","20","20","20","45","41","68","20","c4","bf","20","20","20","20","20","20",
"b3","20","20","20","20","b3","20","20","20","20","20","20","20","20","20","20",
"b3","20","20","20","b3","20","20","20","20","b3","20","20","20","20","20","20",
"20","20","20","32","33","34","64","20","c4","bf","20","20","20","20","20","20",
"b3","20","20","20","20","b3","20","20","20","20","20","20","20","20","20","32",
"33","34","64","20","c4","bf","20","20","20","20","20","20","b3","20","20","20",
"20","b3","20","20","20","20","20","20","20","20","20","20","b3","0a","b3","20",
"20","20","20","b3","20","20","20","20","20","20","20","20","20","20","46","46",
"68","20","c4","c1","c4","20","37","20","20","20","b3","20","20","20","20","b3",
"20","20","20","20","20","20","20","20","20","20","46","46","68","20","c4","c1",
"c4","20","37","20","20","20","b3","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","20","b3","20","20","20","b3","20","20","20","20","b3",
"20","20","20","20","20","20","20","20","20","32","35","35","64","20","c4","c1",
"c4","20","37","20","20","20","b3","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","32","35","35","64","20","c4","c1","c4","20","37","20",
"20","20","b3","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","b3","0a","c0","c4","c4","c4","20","b3","20","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c1","c4","c4","c4","20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4","c1","c4","c4","c4",
"20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4","d9","20","20","20",
"c0","c4","c4","c4","20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4","c1","c4","c4","c4",
"20","b3","20","c4","c4","c4","c4","c4","c4","c4","c4","c4","20","b3","20","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c1","c4","c4","c4","20","b3","20","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","d9","0a","20","20","20","20","20","b3",
"20","20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","b3","20","20","20","20",
"20","20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","b3","20","20","20","20","20","20","20","20",
"20","20","20","b3","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","b3","0a","20","20","20","20","20","c0","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c1","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c5","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c1","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","d9","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","c0","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c1","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c5","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c1","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","d9","0a",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","b3","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","b3","0a","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","96","a2",
"a5","e2","a0","20","50","43","2d","aa","ae","ac","af","ec","ee","e2","a5","e0",
"27","a0","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","96","a2","a5","e2","a0","20",
"50","43","2d","aa","ae","ac","af","ec","ee","e2","a5","e0","27","a0","0a","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","30","2c",
"20","31","2c","20","32","2c","20","33","2c","20","34","2c","20","35","2c","20",
"36","2c","20","37","20","2d","20","96","a2","a5","e2","a0","20","82","a5","aa",
"e2","ae","e0","27","a0","2d","30","36","96","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","30","2c","20","31","2c","20",
"32","2c","20","33","2c","20","34","2c","20","35","2c","20","36","2c","20","37",
"20","2d","20","96","a2","a5","e2","a0","20","82","a5","aa","e2","ae","e0","27",
"a0","2d","30","36","96","0a","0a","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","b3","20","52","20","2d","20","30","2c","20",
"31","2c","20","32","2c","20","33","2c","20","34","2c","20","35","2c","20","36",
"2c","20","37","20","28","33","20","a1","a8","e2","a0","29","2e","20","b3","20",
"33","20","a1","a8","e2","a0","20","2b","20","33","20","a1","a8","e2","a0","20",
"2b","20","32","20","a1","a8","e2","a0","20","3d","20","38","20","a1","a8","e2",
"20","28","31","20","a1","a0","a9","e2","29","2e","20","b3","0a","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","b3","20","47",
"20","2d","20","30","2c","20","31","2c","20","32","2c","20","33","2c","20","34",
"2c","20","35","2c","20","36","2c","20","37","20","28","33","20","a1","a8","e2",
"a0","29","2e","20","b3","20","92","a5","af","a5","e0","ec","20","e2","ae","e7",
"aa","a0","20","aa","ae","a4","a8","e0","e3","a5","e2","e1","ef","20","ae","a4",
"ad","a8","ac","20","a1","a0","a9","e2","ae","ac","21","20","20","20","20","20",
"20","b3","0a","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","b3","20","42","20","2d","20","30","2c","20","31","2c","20","32",
"2c","20","33","20","28","32","20","a1","a8","e2","a0","29","2e","20","20","20",
"20","20","20","20","20","20","20","20","20","20","b3","20","8e","a4","a8","ad",
"20","a1","a0","a9","e2","20","2d","20","ed","e2","ae","20","32","35","36","20",
"e6","a2","a5","e2","ae","a2","20","82","a5","aa","e2","ae","e0","27","a0","21",
"20","20","20","20","20","20","20","b3","0a","0a","52","20","28","aa","e0","a0",
"e1","ad","eb","a9","29","20","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","0a",
"85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20",
"30","30","68","20","2e","2e","2e","20","31","31","68","20","e2","ae","20","30",
"30","30","62","20","20","20","85","e1","ab","a8","20","a2","20","af","e0","a5",
"a4","a5","ab","a0","e5","20","33","36","68","20","2e","2e","2e","20","35","39",
"68","20","e2","ae","20","30","31","30","62","20","20","20","85","e1","ab","a8",
"20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","37","45","68","20",
"2e","2e","2e","20","41","31","68","20","e2","ae","20","31","30","30","62","20",
"20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0",
"e5","20","43","36","68","20","2e","2e","2e","20","45","39","68","20","e2","ae",
"20","31","31","30","62","0a","85","e1","ab","a8","20","a2","20","af","e0","a5",
"a4","a5","ab","a0","e5","20","31","32","68","20","2e","2e","2e","20","33","35",
"68","20","74","6f","20","30","30","31","62","20","20","20","85","e1","ab","a8",
"20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","35","41","68","20",
"2e","2e","2e","20","37","44","68","20","e2","ae","20","30","31","31","62","20",
"20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0",
"e5","20","41","32","68","20","2e","2e","2e","20","43","35","68","20","e2","ae",
"20","31","30","31","62","20","20","20","85","e1","ab","a8","20","a2","20","af",
"e0","a5","a4","a5","ab","a0","e5","20","45","41","68","20","2e","2e","2e","20",
"46","46","68","20","e2","ae","20","31","31","31","62","0a","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","0a","0a","47","20","28","a7","a5","ab","f1","ad","eb","a9","29","20","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","0a","85","e1","ab","a8","20","a2","20",
"af","e0","a5","a4","a5","ab","a0","e5","20","30","30","68","20","2e","2e","2e",
"20","31","31","68","20","e2","ae","20","30","30","30","62","20","20","20","85",
"e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","33",
"36","68","20","2e","2e","2e","20","35","39","68","20","e2","ae","20","30","31",
"30","62","20","20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4",
"a5","ab","a0","e5","20","37","45","68","20","2e","2e","2e","20","41","31","68",
"20","e2","ae","20","31","30","30","62","20","20","20","85","e1","ab","a8","20",
"a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","43","36","68","20","2e",
"2e","2e","20","45","39","68","20","e2","ae","20","31","31","30","62","0a","85",
"e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","31",
"32","68","20","2e","2e","2e","20","33","35","68","20","74","6f","20","30","30",
"31","62","20","20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4",
"a5","ab","a0","e5","20","35","41","68","20","2e","2e","2e","20","37","44","68",
"20","e2","ae","20","30","31","31","62","20","20","20","85","e1","ab","a8","20",
"a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","41","32","68","20","2e",
"2e","2e","20","43","35","68","20","e2","ae","20","31","30","31","62","20","20",
"20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5",
"20","45","41","68","20","2e","2e","2e","20","46","46","68","20","e2","ae","20",
"31","31","31","62","0a","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","0a","0a","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","42","20","28","e1","a8","ad","a8","a9","29","20","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","0a","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20",
"30","30","68","20","2e","2e","2e","20","32","41","68","20","e2","ae","20","30",
"30","62","20","20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4",
"a5","ab","a0","e5","20","38","30","68","20","2e","2e","2e","20","44","34","68",
"20","e2","ae","20","31","30","62","0a","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","85","e1",
"ab","a8","20","a2","20","af","e0","a5","a4","a5","ab","a0","e5","20","32","42",
"68","20","2e","2e","2e","20","37","46","68","20","e2","ae","20","30","31","62",
"20","20","20","85","e1","ab","a8","20","a2","20","af","e0","a5","a4","a5","ab",
"a0","e5","20","44","35","68","20","2e","2e","2e","20","46","46","68","20","e2",
"ae","20","31","31","62","0a","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4","c4",
"c4","c4","c4","0a","0a","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","68","20","2d","20","98","a5","e1","e2","ad","a0","a4","e6","a0","e2","a5",
"e0","a8","e7","ad","ae","a5","20","e7","a8","e1","ab","ae","2e","0a","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","64","20","2d","20","84","a5",
"e1","ef","e2","a8","e7","ad","ae","a5","20","e7","a8","e1","ab","ae","2e","0a",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","62","20","2d","20",
"84","a2","ae","a8","e7","ad","ae","a5","20","e7","a8","e1","ab","ae","2e","0a",
"0a","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","20","20","20","20","20","20","20","20","20","20","20","20","20","20","20",
"20","93","aa","e0","a0","a8","ad","a0","2e","20","84","a5","ac","a8","a4","ae",
"a2","20","91","2e","82","2e"

];

	var string, z, temp1, temp2;

	string = "";

	// Раскодировать текст.
	for(z = 0; z < Array_1.length; z++)
		{
		temp1 = Number("0x" + Array_1[z]);
		temp1 = CodeCP866toCodeUTF8(temp1); // код CP866 в код UTF-8.
		temp2 = String.fromCharCode(temp1); // Возвращает символ из кода.

		if (temp2 == '\n')
			{
			temp2 = "<br>";
			}

		string += temp2;
		}

	// Заменить обычный пробел на неразрывный.
	string = string.replace(/ /g, "&nbsp;");

	// вставить в страницу текст.
	document.getElementById('id_vc_24to8_txt').innerHTML = string;
}
