//
// Сброс.
//
function VCGRFReset()
{
	// Сбросить справочную информацию.
	VCGRFResetReference();

	// Сбросить inout file.
	VCGRFResetInputFile();

	// Сбросить экранную область Вектор'а (256px x 256px) в браузере.
	VCGRFReset256x256();

	// Установить имя BMP-файла пусто и изменить цвет.
	VCGRFResetBMPName();

	// Сделать кнопку Сохранить BMP-файл неактивной.
	VCGRFResetBMPFileSave();
}

//
// Сбросить справочную информацию.
//
function VCGRFResetReference()
{
	// Сбросить справочную информацию в нет данных.
	document.getElementById('id_grffilename').innerHTML = "Нет данных";
		document.getElementById('id_grfsizeall').innerHTML = "Нет данных";
			document.getElementById('id_grfsizedata').innerHTML = "Нет данных";
				document.getElementById('id_grfcolor').innerHTML = "Нет данных";
					document.getElementById('id_errorgrf').innerHTML = "Нет данных";
}

//
// Сбросить input file (выбор grf-файла).
//
function VCGRFResetInputFile()
{
	// Сбросить input file.
	document.getElementById('id_filegrf').value="";
}

//
// Сбросить экранную область Вектор'а (256px x 256px) в браузере.
//
function VCGRFReset256x256()
{
	var temp = "<a href=\"https://gfto.ru/index/konstruktor_3d_teksta/0-37\" title=\"Надпись сделана: https://gfto.ru (нажмите, откроется в новой вкладке)\" target=\"_blank\">";
		temp += "<img class=\"icon\" src=\"images-sprgrftobmp/imageGRF.png\">";
			temp += "</a>";

	// Установить заставку.
	document.getElementById('region_2_256x256').innerHTML = temp;
}

//
// GRF (главное).
//
function VCGRF(id)
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

	var buffergrf = new Uint8Array(reader.result);

	// Получить имя файла с расширением.
	temp = file.name;

	var ext = temp.substr(-3, 3);

	// Только с такими расширениями можно:
	if (ext == 'GRF' || ext == 'gRF' || ext == 'GrF' || ext == 'GRf' ||
		ext == 'grf' || ext == 'Grf' || ext == 'gRf' || ext == 'grF')
		{

		// Вставить в страницу имя grf-файла с расширением.
		document.getElementById('id_grffilename').innerHTML = "<b>" + temp + "</b>";

		//
		// Распаковка GRF-файла.
		//

		var addrgrf, grfsizeall, grfsizedata, temp, temp2;

		grfsizeall = buffergrf.length;

		addrgrf = 0;

		temp =  grfsizeall + " байт(а), в hex: " + grfsizeall.toString(16) + " байт(а)";

		// вставить в страницу размер grf-файла.
		document.getElementById('id_grfsizeall').innerHTML = temp;

		// Минус цвета, но плюс нулевой байт и плюс мусор.
		grfsizedata = grfsizeall - 16;

		temp = "<span title=\"минус цвета, но плюс нулевой байт и плюс мусор\">" + grfsizedata + " байт(а), в hex: ";
		temp += grfsizedata.toString(16) + " байт(а)" + "</span>";

		// вставить в страницу размер grf-данных.
		document.getElementById('id_grfsizedata').innerHTML = temp;

		temp = "";

		// Цвета GRF-файла.
		for (addrgrf = 0; addrgrf < 16;)
			{
			temp2 = buffergrf[addrgrf].toString(16); // Возвращает строковое значение.

			if (temp2.length == 1)
				{
				temp += "0" + temp2;
				}
				else
				{
				temp += temp2;
				}

			if (addrgrf < 15)
				{
				temp += ", ";
				}

			addrgrf++;
			}

		// вставить в страницу цвета grf-файла (одной строкой).
		document.getElementById('id_grfcolor').innerHTML = temp;

		// Теперь сама распаковка GRF-данных.

		var addrvcs, bit, tb, cb, errorgrf1, errorgrf2;
		var screen_vector_8000_FFFF = [];

		addrvcs = 0;

		// Единица, нет ошибки.
		errorgrf1 = 1;

		// Установить на ошибку.
		errorgrf2 = 0;

		// Распаковка (распаковка в screen_vector_8000_FFFF[addrvcs]).
stop1:		for (addrgrf = addrgrf; addrgrf < grfsizeall;)
			{

			// Конец распаковки.
			if (buffergrf[addrgrf] == 0)
				{
				// Нет ошибки.
				errorgrf2 = 1;
				break;
				}

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
			bit = 128 & buffergrf[addrgrf]; // 80H и buffergrf[addrgrf].

			// Если старший бит 0 (это бит 7) то повторяющиеся.
			if (bit == 0)
				{
				// Повторяющиеся байты.
				// ---

				// Сколько повторяющихся.
				tb = buffergrf[addrgrf];

				addrgrf++;

				for (cb = 0; cb < tb; cb++)
					{

					// Проверить, если выход за пределы экранной области Вектор'а.
					if (addrvcs == 32768)
						{
						// Ошибка GRF-файла!
						errorgrf1 = 0;
						// Завершение циклов.
						break stop1;
						}

					screen_vector_8000_FFFF[addrvcs] = buffergrf[addrgrf];

					addrvcs++;
					}
				}
				else
				{
				// Неповторяющиеся байты.
				// ---

				// Установить старший бит в ноль.
				tb = 127 & buffergrf[addrgrf]; // 7FH и tb.

				for (cb = 0; cb < tb; cb++)
					{
					addrgrf++;

					// Проверить, если выход за пределы экранной области Вектор'а.
					if (addrvcs == 32768)
						{
						// Ошибка GRF-файла!
						errorgrf1 = 0;
						// Завершение циклов.
						break stop1;
						}

					screen_vector_8000_FFFF[addrvcs] = buffergrf[addrgrf];

					addrvcs++;
					}
				}

			addrgrf++;
			} // Конец for..

		// Ошибка Да - Если есть переполнение экранной области Вектор'а!
		// Ошибка Да - Если экранная область Вектор'а не полностью заполнена!
		// Ошибка Да - Если распаковка закончилась не по НОЛЬ!
		if (errorgrf1 != 1 || addrvcs != 32768 || errorgrf2 != 1)
			{
			// вставить в страницу ошибка Да.
			document.getElementById('id_errorgrf').innerHTML = "Да";
			}
			else
			{
			// Вставить в страницу ошибка Нет.
			document.getElementById('id_errorgrf').innerHTML = "Нет (экранная область Вектор'а - 32768 байт, в hex - 8000 байт)";

			// Построить экранную область Вектор'а (256px x 256px) в браузере.
			// Ресурсоёмкая операция!
			VCBuildRegeon256x256px('region_2_256x256', 'g');

			// Цвета GRF-файла в отдельный массив.
			var GRFColor = [];

			for (z = 0; z < 16;)
				{
				GRFColor[z] = buffergrf[z];
				z++;
				}

		// Наполнить экранную область Вектор'а построенную в браузере (с перекодировкой цвета).
		VCSPRGRFPush(screen_vector_8000_FFFF, GRFColor, 'g');

		// Имя BMP-файлу.
		temp = file.name;
		temp = temp.substr(0, temp.length - 3);
		temp = temp + 'bmp';

		// Вставить в страницу имя BMP-файла.
		document.getElementById('id_filenamebmp_g').innerHTML = temp;

		// Изменить цвет имени (BMP-файл).
		document.getElementById('id_filenamebmp_g').style.color = "#333333";

		// Активировать кнопку Сохранить BMP-файл.
		id_filebmp_save_g.setAttribute('style', ''); // Удалить серый цвет.
			document.getElementById('id_filebmp_save_g').className = "sprgrf_bmpsave"; // Установить class sprgrf_bmpsave.
			document.getElementById('id_filebmp_save_g').title = "Нажмите"; // Установить title.
				id_filebmp_save_g.setAttribute('onclick', 'VCBMP(\'id_filenamebmp_g\', \'g\');'); // Установить onClick (FireFox, Google Chrome).
				id_filebmp_save_g.onclick = function(){VCBMP('id_filenamebmp_g', 'g');}; // Установить onClick (Internet Explorer).
			}

		}
	}
}

//
// Установить имя BMP-файлу пусто и изменить цвет.
//
function VCGRFResetBMPName()
{
	// Вставить в страницу Пусто.
	document.getElementById('id_filenamebmp_g').innerHTML = "Пусто";

	// Изменить цвет.
	document.getElementById('id_filenamebmp_g').style.color = "#cccccc";
}

//
// Сделать кнопку Сохранить BMP-файл неактивной.
//
function VCGRFResetBMPFileSave()
{
	// Установить серый цвет.
	document.getElementById('id_filebmp_save_g').style.color = "#cccccc";
	// Удалить class sprgrf_inputfile.
	document.getElementById('id_filebmp_save_g').className = "";
	// Удалить title.
	document.getElementById('id_filebmp_save_g').title = "";
	// Удалить onClick (FireFox, Google Chrome).
	id_filebmp_save_g.setAttribute('onclick', '');
	// Удалить onClick (Internet Explorer).
	id_filebmp_save_g.onclick = function(){};
}
