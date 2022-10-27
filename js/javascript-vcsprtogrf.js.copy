
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

//
// Сбросить input file (выбор grf-файла).
//
function VCSPRtoGRFResetInputFile()
{
	// Сбросить input file.
	document.getElementById('id_filesprtogrf').value="";
}

//
// SPR to GRF.
//
function VCSPRtoGRF(id)
{

	file = document.getElementById(id).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{

	var bufferspr = new Uint8Array(reader.result);

	// Получить имя файла с расширением.
	var temp = file.name;

	var ext = temp.substr(-3, 3);

	// Только с такими расширениями можно:
	if (ext == 'SPR' || ext == 'sPR' || ext == 'SpR' || ext == 'SPr' ||
		ext == 'spr' || ext == 'Spr' || ext == 'sPr' || ext == 'spR')
		{

		//
		// Распаковка SPR-файла.
		//

		var addrspr, sprsizeall;

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

		var screen_vector_8000_FFFF = [];

		var errorspr, addrvcs;

		// Теперь сама распаковка SPR-данных.
		screen_vector_8000_FFFF = DepackingSPR(bufferspr, addrspr, sprsizeall);

		errorspr = screen_vector_8000_FFFF[1];
			addrvcs = screen_vector_8000_FFFF[2];

		// "Ошибка при распаковке: Да" - Если есть переполнение экранной области Вектор'а!
		// "Ошибка при распаковке: Да" - Если экранная область Вектор'а не полностью заполнена!
		if (errorspr != 1 && addrvcs != -1)
			{
			alert("Ошибка при распаковке!");
			}

			// Кодируем в GRF!

			// Массив с адресами повтор./неповтор (числовой массив).
			var array1 = [];
			// Массив с закодированными данными (spr-данные).
			var array_grf_data = [];
			// Цвета grf.
			var array_grf_color = [];
			// Здесь grf-файл.
			var array_grf_file = [];

			// Возвращает массив с адресами.
			array1 = VCGRFBuildArrayAddr8(screen_vector_8000_FFFF[0]);
			// Закодировать данные.
			array_grf_data = VCGRFCoding(screen_vector_8000_FFFF[0], array1);

			var z1;

			// Получаем цвета (16 байт).
			for (z1 = 0; z1 < 16;)
				{
				array_grf_color[z1] = bufferspr[z1];
				z1++;
				}

			// Объединяем массив с цветами + массив с spr-данными.
			array_grf_file = [].concat(array_grf_color, array_grf_data);
			// Добавить 0 в конец файла (0 будет пропущен при распаковке).
			array_grf_file[array_grf_file.length] = 0;

			// Типизированный массив.
			var buf = new Uint8Array(array_grf_file);

			// Имя GRF-файлу.
			var nameGRF = file.name.substr(0, file.name.length - 3);
			nameGRF = nameGRF + "GRF";

			// Записываем файл на диск.

			var txt = navigator.userAgent;

			if (txt.search(/rv:11.0/) > 0)
				{
				// Internet Explorer 11.
				var file2 = new Blob([buf], {type: "application/octet-stream"});
				window.navigator.msSaveOrOpenBlob(file2, nameGRF);
				}
				else
				{
				// FireFox, Opera, Google Chrome и др.
				var blob = new Blob([buf], {type: "application/octet-stream"});
				var link = document.createElement("a");
				link.setAttribute("href", URL.createObjectURL(blob));
				link.setAttribute("download", nameGRF);
				link.click();
				}

		}
	}
}
