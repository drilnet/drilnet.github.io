
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ---
// | Показать модальное окно.
// | РЕПОЗИТОРИИ.
// ---
function OpenShowModalWin(id)
{

	// Перед открытием окна (Игра Пятнашки):
	if (id == "ModalWinPuzzle15_1" ||
		id == "ModalWinPuzzle15_1_2" ||
			id == "ModalWinPuzzle15_2_2" ||
				id == "ModalWinPuzzle15_3_2")
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 100 - 97;
		// h = h - 110 - 107; // Снизу отступ чуть-чуть больше.
		h = h - 110 - 107;

		// Подтянуть окно (подтянуть снизу). Это iframe.
		if (h > 778) { h = 778; } // 778 - максимальная высота окна.
 
		// Растянуть...
		if (id == "ModalWinPuzzle15_1") { document.getElementById("repopuzzle15_1").style.height = h + "px"; }
			if (id == "ModalWinPuzzle15_1_2") { document.getElementById("repopuzzle15_1_2").style.height = h + "px"; }
				if (id == "ModalWinPuzzle15_2_2") { document.getElementById("repopuzzle15_2_2").style.height = h + "px"; }
					if (id == "ModalWinPuzzle15_3_2") { document.getElementById("repopuzzle15_3_2").style.height = h + "px"; }
		}

	// Перед открытием окна (делитель напряжения на двух резисторах):
	if (id == "ModalWinDividerR1R2")
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 49 - 97;
		// h = h - 59 - 107; // Снизу отступ чуть-чуть больше.
		h = h - 59 - 107;

		// Растянуть...
		document.getElementById("repodividerr1r2").style.height = h + "px";
		}

	// Перед окрытием окна (схема Power Supply 512):
	if (id == "ModalWinPS512_1");
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 83 - 94;
		// h = h - 93 - 104; // Снизу отступ чуть-чуть больше.
		h = h - 93 - 104;

		// Подтянуть окно с полосой прокрутки (подтянуть снизу).
		if (h > 481) { h = 481}; // 481 - максимальная высота окна с полосой прокрутки.

		// Растянуть...
		document.getElementById("repops512sceheme").style.height = h + "px";
		}

	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadow";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.
		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.
			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// | РЕПОЗИТОРИЙ.
// ---
function CloseModalWin(id)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadow");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ---
// | Показать модальное окно.
// | SPR to BMP и GRF to BMP.
// ---
function OpenShowModalWinSPRGRFtoBMP(id)
{
	// Перед открытием модального окна конвертер SPR to BMP.
	if (id == 'ModalWinSPRtoBMP' || id == 'ModalWinGRFtoBMP')
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 63 - 56;
		// h = h - 73 - 66; // Снизу отступ чуть-чуть больше.
		h = h - 73 - 66;

		// Растянуть...
		document.getElementById("winsprscroll").style.height = h + "px";
		}

	// Перед открытием модального окна конвертер GRF to BMP.
	if (id == 'ModalWinGRFtoBMP')
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 63 - 56;
		// h = h - 73 - 66; // Снизу отступ чуть-чуть больше.
		h = h - 73 - 66;

		// Растянуть...
		document.getElementById("wingrfscroll").style.height = h + "px";
		}

	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowsprgrf";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.

		if (id == 'ModalWinSPRtoBMP') { VCSPRReset(); }
		if (id == 'ModalWinGRFtoBMP') { VCGRFReset(); }

		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.

			if (id == 'ModalWinSPRtoBMP') { VCSPRReset(); }
			if (id == 'ModalWinGRFtoBMP') { VCGRFReset(); }

			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// | SPR to BMP и GRF to BMP.
// ---
function CloseModalWinSPRGRFtoBMP(id)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowsprgrf");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.

	if (id == 'ModalWinSPRtoBMP') { VCSPRReset(); }
	if (id == 'ModalWinGRFtoBMP') { VCGRFReset(); }
}

// ---
// | Показать модальное окно.
// | BMP to SPR и BMP to GRF.
// ---
function OpenShowModalWinBMPtoSPRGRF(id)
{
	// Перед открытием модального окна конвертер BMP to GRF.
	if (id == 'ModalWinBMPtoGRF')
		{
		var h = document.documentElement.clientHeight;

		// 64 и 64 - отступ сверху и снизу (до модального окна, наружный отступ).
		h = h - 64 - 64;

		// - отступ сверху и снизу (в модальном окне, внутренний отступ, приблизительно).
		// h = h - 63 - 56;
		// h = h - 73 - 66; // Снизу отступ чуть-чуть больше.
		h = h - 73 - 66;

		// Растянуть...
		document.getElementById("winbmpgrfscroll").style.height = h + "px";
		}

	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowbmptosg";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.

		if (id == 'ModalWinBMPtoGRF')
			{
			VCBMPGRFReset();
			// Удалить таблицу из модального окна (24 bits to 8 bits).
			document.getElementById('id_vc_24to8_txt').innerHTML = '';
			}

		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.

			if (id == 'ModalWinBMPtoGRF')
				{
				VCBMPGRFReset();
				// Удалить таблицу из модального окна (24 bits to 8 bits).
				document.getElementById('id_vc_24to8_txt').innerHTML = '';
				}

			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// | BMP to SPR и BMP to GRF.
// ---
function CloseModalWinBMPtoSPRGRF(id)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowbmptosg");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.

	if (id == 'ModalWinBMPtoGRF')
		{
		VCBMPGRFReset();
		// Удалить таблицу из модального окна (24 bits to 8 bits).
		document.getElementById('id_vc_24to8_txt').innerHTML = '';
		}
}

// ---
// | Показать модальное окно.
// | [ Английский Алфавит ]  [ Русский Алфавит ]  [ Украинский Алфавит ]
// ---
function OpenShowModalWin_ABC_ENG_RUS_UKR(id)
{
	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowabc";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.
		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.
			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// | [ Английский Алфавит ]  [ Русский Алфавит ]  [ Украинский Алфавит ]
// ---
function CloseModalWinABC(id)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowabc");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ---
// | Показать модальное окно.
// | СПРАВОЧНАЯ ИНФОРМАЦИЯ ПО ПОЧТОВОМУ АДРЕСУ.
// ---
function OpenShowModalWinInfMailingAddres(id)
{
	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowma";
			// Включаем затемнение.
			document.body.appendChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "block"; // "Включаем" его.

	darkLayer.onclick = function ()
		{
		// При клике на слой затемнения, всё исчезает.
		darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
		modalWin.style.display = "none"; // "Выключаем" окно.
		return false;
		}

	document.addEventListener("keydown", function(e){
		if (e.which == 27)
			{
			// Код, который должен быть выполнен после нажатия на кнопку ESC.
			darkLayer.parentNode.removeChild(darkLayer); // Удаляем затемнение.
			modalWin.style.display = "none"; // "Выключаем" окно.
			return false;
			}
	});
}

// ---
// | Закрыть модальное окно.
// | СПРАВОЧНАЯ ИНФОРМАЦИЯ ПО ПОЧТОВОМУ АДРЕСУ.
// ---
function CloseModalWinInfMailingAddres(id)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowma");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(id); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}

// ----------
// ---------------
// --------------------

	// ---
	// | Спойлер.
	// | Может быть так: Развернуть/Свернуть.
	// | И может быть вот так: Свернуть/Развернуть.
	// ---
	function Spoiler(id_1, id_2)
	{
		var ele = document.getElementById(id_1);
		var text = document.getElementById(id_2);

		if(ele.style.display == "block")
			{
			ele.style.display = "none";
//			text.innerHTML = "Показать";
			}
			else
			{
			ele.style.display = "block";
//			text.innerHTML = "Скрыть";
			}
}

// --------------------
// ---------------
// ----------

// ----------
// ---------------
// --------------------

	// ---
	// | Спойлер с изменяющийся иконкой.
	// --

	function SpoilerICOSmall(id_1, id_2)
	{

	if (document.getElementById(id_1).style.display == 'none')
		{
		// Сменить иконку на sp2.png (минус).
		document.getElementById(id_2).src = "icons/sp2.png";

		// Открыть спойлер.
		document.getElementById(id_1).style.display = 'inline';
		}
		else
		{
		// Сменить иконку на sp1.png (плюс).
		document.getElementById(id_2).src = "icons/sp1.png";

		// Закрыть спойлер.
		document.getElementById(id_1).style.display = 'none';
		}
	}

// --------------------
// ---------------
// ----------

// ---
// | Для Game-15.
// | Убрать clock.gif (заменить заголовок)
// | Т.е. изображения загружены, clock.gif не нужен.
// --
function G15_RemoveClock()
{
	// Убрать иконку clock.gif (загрузка изображений завершена).
	document.getElementById('g15_loader').innerHTML =

	"<table class=\"g15_title\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"
	+
	"<tr><td align=\"center\">"
	+
	"Игра Пятнашки (версия 3.0.a, вариант 2)"
	+
	"</td></tr>"
	+
	"</table>";
}

// ---
// | Передёрнуть ползунок (Scroll).
// ---
function DistortScroll()
{
	// pageYOffset или scrollY
	// Возвращает число пикселей (насколько пролистали документ).
//	alert(pageYOffset);

	// innerHeight.
	// Высота (в пикселях) области просмотра окна браузера
	// (плюс горизонтальная полоса прокрутеки).
//	alert(innerHeight);

	// document.body.scrollHeight
	// Измерение высоты контента в элементе, включая содержимое,
	// невидимое из-за прокрутки.
//	alert(document.body.scrollHeight);

	// scrollBy - Прокручивает страницу относительно её текущего положения.

	// Если pageYOffset = 0, то ползунок вверху.
	if (pageYOffset == 0)
		{
		// Ползунок вверху.
		// Передёрнуть Scroll.
		window.scrollBy(0, 1); // Страницу Вверх. Ползунок Вниз.
		window.scrollBy(0, -1); // Страницу Назад. Ползунок назад.
		}
		else
		{
		// Передёрнуть Scroll.
		window.scrollBy(0, -1); // Страницу Вниз. Ползунок вверх.
		window.scrollBy(0, 1); // Страницу Назад. Ползунок назад.
		}
}

// ---
// | Страница (index.html) загружена полностью, убрать анимированную иконку.
// ---
function RemoveIndexLoader()
{
	// Убрать иконку clock2_white.gif (загрузка завершена).
	document.getElementById('indexloader').innerHTML = "";
}
