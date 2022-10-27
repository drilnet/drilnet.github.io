
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

//
// Сбросить input file (выбор grf-файла).
//
function VCGRFtoSPRResetInputFile()
{
	// Сбросить input file.
	document.getElementById('id_filegrftospr').value="";
}

//
// GRF to SPR.
//
function VCGRFtoSPR(id)
{

	file = document.getElementById(id).files[0];
		reader = new FileReader();
			reader.readAsArrayBuffer(file);
				reader.onload = function()
					{

	var buffergrf = new Uint8Array(reader.result);

	// Получить имя файла с расширением.
	var temp = file.name;

	var ext = temp.substr(-3, 3);

	// Только с такими расширениями можно:
	if (ext == 'GRF' || ext == 'gRF' || ext == 'GrF' || ext == 'GRf' ||
		ext == 'grf' || ext == 'Grf' || ext == 'gRf' || ext == 'grF')
		{

		//
		// Распаковка GRF-файла.
		//

		var addrgrf, grfsizeall;

		grfsizeall = buffergrf.length;
		addrgrf = 16; // Пропуск цветов.

		var screen_vector_8000_FFFF = [];

		var errorgrf1, addrvcs, errorgrf2;

		// Теперь сама распаковка GRF-данных.
		screen_vector_8000_FFFF = DepackingGRF(buffergrf, addrgrf, grfsizeall);

		errorgrf1 = screen_vector_8000_FFFF[1];
			addrvcs = screen_vector_8000_FFFF[2];
				errorgrf2 = screen_vector_8000_FFFF[3];

		// alert(errorgrf1 + " " + addrvcs + " " + errorgrf2);

		if (errorgrf1 != 1) { alert("Переполнение экранной области! " + addrvcs); }
			if (addrvcs != 32768) { alert("Экранная область Вектор'а не полностью заполнена! " + addrvcs); }
				if (errorgrf2 != 1) { alert("Распаковка закончилась не по НОЛЬ!" + addrvcs); }

		// Ошибка Да - Если есть переполнение экранной области Вектор'а!
		// Ошибка Да - Если экранная область Вектор'а не полностью заполнена!
		// Ошибка Да - Если распаковка закончилась не по НОЛЬ!
		if (errorgrf1 != 1 || addrvcs != 32768 || errorgrf2 != 1)
			{
			// Ошибка!!!
			alert("Ошибка!!!");
			}
			else
			{

			// Кодируем в SPR!
			// Используем VRLE8 (они похожи)!

			// Массив с адресами повтор./неповтор (числовой массив).
			var array1 = [];
			// Массив с закодированными данными.
			var array2 = [];
			// Массив с закодированными данными (spr-данные).
			var array_spr_data = [];
			// Цвета spr.
			var array_spr_color = [];
			// Здесь spr-файл.
			var array_spr_file = [];

			// Возвращает массив с адресами.
			array1 = VRLE8BuildArrayAddr8(screen_vector_8000_FFFF[0]);
			// Закодировать данные.
			array2 = VRLE8Coding(screen_vector_8000_FFFF[0], array1);

		// ---

		var addr_vrle8, addr_spr, cb, tb, bits;

		// VRLE8-данные в SPR-данные.
		// Переместить информационный байт!

		//    VRLE8-данные:
		// ┌─────────────────────┬────────┬─────────────────────┬────────┬─
		// │ Информационный байт │ Данные │ Информационный байт │ Данные │ ... ... ...
		// └─────────────────────┴────────┴─────────────────────┴────────┴─

		//                                                               SPR-данные:
		//             ─┬────────┬─────────────────────┬────────┬─────────────────────┐
		// ... ... ...  │ Данные │ Информационный байт │ Данные │ Информационный байт │
		//             ─┴────────┴─────────────────────┴────────┴─────────────────────┘

		// Всё что нужно сделать - это переместить информационный байт!

		addr_vrle8 = 0;
		addr_spr = 0;

		for (addr_vrle8 = addr_vrle8; addr_vrle8 < array2.length;)
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

			// Установить биты 6, 5, 4, 3, 2, 1, 0 в ноль, 7 бит оставить без изменений.
			bits = 128 & array2[addr_vrle8]; // 80H и array2[addr_vrle8]. 128D = 80H.

			// Если 7-й бит 0 - неповторяющиеся.
			if (bits == 0)
				{
				// Неповторяющиеся байты.
				// ---

				tb = array2[addr_vrle8];

				for (cb = 0; cb < tb; cb++)
					{
					array_spr_data[addr_spr++] = array2[++addr_vrle8];
					}

				// Теперь информационный байт.
				array_spr_data[addr_spr++] = tb;

				addr_vrle8++;
				}
				else
				{
				// Повторяющиеся байты.
				// ---

				tb = array2[addr_vrle8++];

				array_spr_data[addr_spr++] = array2[addr_vrle8++];

				// Теперь информационный байт.
				array_spr_data[addr_spr++] = tb;
				}

			} // Конец for.

		// alert(addr_vrle8 + " " + array2.length);

		// ---

			var z1;

			// Получаем цвета (16 байт).
			for (z1 = 0; z1 < 16;)
				{
				array_spr_color[z1] = buffergrf[z1];
				z1++;
				}

			// Объединяем массив с цветами + массив с spr-данными.
			array_spr_file = [].concat(array_spr_color, array_spr_data);
			// Добавить 0 в конец файла (0 будет пропущен при распаковке).
			array_spr_file[array_spr_file.length] = 0;

			// Типизированный массив.
			var buf = new Uint8Array(array_spr_file);

			// Имя SPR-файлу.
			var nameSPR = file.name.substr(0, file.name.length - 3);
			nameSPR = nameSPR + "SPR";

			// Записываем файл на диск.

			var txt = navigator.userAgent;

			if (txt.search(/rv:11.0/) > 0)
				{
				// Internet Explorer 11.
				var file2 = new Blob([buf], {type: "application/octet-stream"});
				window.navigator.msSaveOrOpenBlob(file2, nameSPR);
				}
				else
				{
				// FireFox, Opera, Google Chrome и др.
				var blob = new Blob([buf], {type: "application/octet-stream"});
				var link = document.createElement("a");
				link.setAttribute("href", URL.createObjectURL(blob));
				link.setAttribute("download", nameSPR);
				link.click();
				}
			}
		}
	}
}
