
// Написано в FreeBSD, Midnight Commander.
// Ukraine. (C) Demidov S.V.

// ----------
// ---------------
// --------------------

	// ---
	// | Очистить input (только один input).
	// ---
	function ClearInput(idElement)
	{
		document.getElementById(idElement).value = "";
	}

	// ---
	// | Очистить input (несколько input'ов).
	// ---
	function ClearInputArray(idElementArray)
	{
		var index;

		for(index = 0; index < idElementArray.length; ++index)
			{
			document.getElementById(idElementArray[index]).value = "";
			}
	}

	// ---
	// | Спойлер.
	// | Может быть так: Развернуть/Свернуть.
	// | И может быть вот так: Свернуть/Развернуть.
	// ---
	function ZDSpoiler(id_1)
	{
		var ele = document.getElementById(id_1);

		if(ele.style.display == "block")
			{
			// Закрыт.
			ele.style.display = "none";
			}
			else
			{
			// Открыт.
			ele.style.display = "block";
			}
	}

	// ---
	// | Показать модальное окно.
	// ---
	function OpenShowModalWin(x)
	{
		// Слой затемнения.
		var darkLayer = document.createElement("div");
			// id чтобы подхватить стиль.
			darkLayer.id = "shadowzd";
				// Включаем затемнение.
				document.body.appendChild(darkLayer);

		var modalWin = document.getElementById(x); // Находим наше "окно".
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
	// ---
	function CloseModalWin(x)
	{
		// Удаляем затемнение.
		var darkLayer = document.getElementById("shadowzd");
		darkLayer.parentNode.removeChild(darkLayer);

		var modalWin = document.getElementById(x); // Находим наше "окно".
		modalWin.style.display = "none"; // "Выключаем" окно.
	}

// --------------------
// ---------------
// ----------

// ---
// | После загрузки страницы установить Radio Buttons.
// ---
function SETRadioButtons()
{
	// Калькулятор N1.
	// Набор резисторов (E24, E48, E96).
	document.getElementById('rbcn1_E_1').checked = true;  // E24.
	document.getElementById('rbcn1_E_2').checked = false; // E48.
	document.getElementById('rbcn1_E_3').checked = false; // E96.

	// Калькулятор N2.
	// Набор резисторов (E24, E48, E96).
	document.getElementById('rbcn2_E_1').checked = true;  // E24.
	document.getElementById('rbcn2_E_2').checked = false; // E48.
	document.getElementById('rbcn2_E_3').checked = false; // E96.

	// Таблицы с готовыми расчётами, таблицы n1 
	// Набор резисторов (E24, E48, E96).
	document.getElementById('rb_Etable_1_1').checked = true;  // E24.
	document.getElementById('rb_Etable_1_2').checked = false; // E48.
	document.getElementById('rb_Etable_1_3').checked = false; // E96.

	// Таблицы с готовыми расчётами, таблицы n2 
	// Набор резисторов (E24, E48, E96).
	document.getElementById('rb_Etable_2_1').checked = true;  // E24.
	document.getElementById('rb_Etable_2_2').checked = false; // E48.
	document.getElementById('rb_Etable_2_3').checked = false; // E96.
}

// ---
// | После загрузки страницы установить нужную ширину.
// | Приложение. Алгоритм ближайшего стандартного.
// ---
function SetScreenWidth()
{
	// Получаем разрешение монитора.
	var w = screen.width;

	if (w >= 1366)
		{
		// Заголовок 2.
		var ele = document.getElementById('nabroski1');
		ele.style.width = "1024px";
		// Дополнительное окно "Наброски".
		var ele = document.getElementById('nabroski2');
		ele.style.width = "1024px";
		}
}

// ---
// | Онлайн калькулятор CALCZD_1 (Calc 1).
// | Считаем!
// ---
function CALCZD_1()
{
	var Uin = Number(document.getElementById("zd1_input_1").value);
		var Uout = Number(document.getElementById("zd1_input_2").value);
			var I = Number(document.getElementById("zd1_input_3").value);

	// Вычисления.

	var UR1 = Uin - Uout;
		var R1 = UR1 / (I / 1000); // I / 1000 - это мА в А.
			var P1 = UR1 * I / 1000;
				var P2 = Uout * I / 1000;

	// Результат на HTML-страницу.

	document.getElementById('zd1_result_R1').innerHTML =
		'<span class="calczdcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('zd1_result_P1').innerHTML =
		'<span class="calczdcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd1_result_P2').innerHTML =
	'<span class="calczdcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd1_result_UR1').innerHTML =
		'<span class="calczdcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	R1 = Number(R1.toFixed(3));

	// Ближайшее стандартное.
	var rstring = CALCZDBS_1(R1, Uin, Uout, 0);

	document.getElementById('CALCZDBS_1b').innerHTML = rstring;
}

// ---
// | Получаем ближайшее стандартное сопротивление.
// | Плюс к этому ближайшему делаем дополнительные расчёты.
// | Для калькулятора 1.
// ---
function CALCZDBS_1(R1, Uin, Uout, Switch)
{
	var I, Il, Ir, P1, P2;
	var E, El, Er;
	var rstring;

	var ArrayResistor = [];

	if (Switch == 0)
		{
		// Если 0, обращение из калькулятора 1.
		// ---

		// Если набор резисторов E24.
		if (document.getElementById('rbcn1_E_1').checked)
			{
			// Установить на странице E24.
			document.getElementById('CALCZDBS_1a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

			ArrayResistor = SearchE24(R1);
			}

		// Если набор резисторов E48.
		if (document.getElementById('rbcn1_E_2').checked)
			{
			// Установить на странице E48.
			document.getElementById('CALCZDBS_1a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E48</b>):</span>";

			ArrayResistor = SearchE48(R1);
			}

		// Если набор резисторов E96.
		if (document.getElementById('rbcn1_E_3').checked)
			{
			// Установить на странице E96.
			document.getElementById('CALCZDBS_1a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E96</b>):</span>";

			ArrayResistor = SearchE96(R1);
			}
		}

	if (Switch == 1)
		{
		// Если 1, обращение из Таблиц n1!
		// Вставка в модальное окно!
		// ---

		// Если набор резисторов E24.
		if (document.getElementById('rb_Etable_1_1').checked)
			{
			ArrayResistor = SearchE24(R1);
			}

		// Если набор резисторов E48.
		if (document.getElementById('rb_Etable_1_2').checked)
			{
			ArrayResistor = SearchE48(R1);
			}

		// Если набор резисторов E96.
		if (document.getElementById('rb_Etable_1_3').checked)
			{
			ArrayResistor = SearchE96(R1);
			}
		}

	// - [!] -
	E = ArrayResistor[0]; El =  ArrayResistor[1]; Er =  ArrayResistor[2];

		// Самое первое сопротивление.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			I = (Uin - Uout) / El * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + El + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток стабилизации (ток I)\">I</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Самое последнее сопротивление.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			I = (Uin - Uout) / Er * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + Er + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток стабилизации (ток I)\">I</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Сопротивление есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			I = (Uin - Uout) / E * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + E + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток стабилизации (ток I)\">I</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			Il = (Uin - Uout) / El * 1000; // В мА.
			P1 = (Uin - Uout) * Il; // В мВт.
			P2 = Uout * Il; // В мВт.

			Il = Number(Il.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + El + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток стабилизации (ток I)\">I</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + Il + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";

			rstring += "<br><b>или</b><br>";

			Ir = (Uin - Uout) / Er * 1000; // В мА.
			P1 = (Uin - Uout) * Ir; // В мВт.
			P2 = Uout * Ir; // В мВт.

			Ir = Number(Ir.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + Er + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток стабилизации (ток I)\">I</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + Ir + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

	return rstring;
}

// ---
// | Установить поля по умолчанию для CALCZD_1 (калькулятор 1).
// ---
function SetInputZD_1()
{
	// Поля.

	document.getElementById("zd1_input_1").value = 15;
	document.getElementById("zd1_input_2").value = 12;
	document.getElementById("zd1_input_3").value = 10;

	// Сбросить вычисления.

	document.getElementById('zd1_result_R1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

				document.getElementById('zd1_result_P1').innerHTML =
					'<span class="calczdcolorquestions">?</span>';

		document.getElementById('zd1_result_P2').innerHTML =
			'<span class="calczdcolorquestions">?</span>';

		document.getElementById('zd1_result_UR1').innerHTML =
			'<span class="calczdcolorquestions">?</span>';

	// Radio Buttons.
	// Набор резисторов (E24, E48, E96).

	document.getElementById('rbcn1_E_1').checked = true;  // E24.
	document.getElementById('rbcn1_E_2').checked = false; // E48.
	document.getElementById('rbcn1_E_3').checked = false; // E96.

	// Установить на странице E24.

	document.getElementById('CALCZDBS_1a').innerHTML =
	"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

	// Ближайшее стандартное.

	document.getElementById('CALCZDBS_1b').innerHTML = "<span class=\"calczdcolorquestions\">?</span>";
}

// ---
// | Онлайн калькулятор CALCZD_2 (Calc 2).
// | Считаем!
// ---
function CALCZD_2()
{
	var Uin = Number(document.getElementById("zd2_input_1").value);
		var Uout = Number(document.getElementById("zd2_input_2").value);
			var I2 = Number(document.getElementById("zd2_input_3").value);
				var Rn = Number(document.getElementById("zd2_input_4").value);

	I2 = I2 / 1000; // мА в А.

	// Вычисления.

	var I3 = Uout / Rn
	var I1 = I2 + I3;

	var UR1 = Uin - Uout;

	var R1 = UR1 / I1;

	var P1 = UR1 * I1;
	var P2 = Uout * I2;
	var P3 = Uout * I3;

	// Результат на HTML-страницу.

	document.getElementById('zd2_result_R1').innerHTML =
		'<span class="calczdcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('zd2_result_I1').innerHTML =
	'<span class="calczdcolorresult">'
		+ I1 * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I1 * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I1 + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd2_result_I3').innerHTML =
	'<span class="calczdcolorresult">'
		+ I3 * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I3 * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I3 + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd2_result_P1').innerHTML =
		'<span class="calczdcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd2_result_P2').innerHTML =
	'<span class="calczdcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd2_result_P3').innerHTML =
	'<span class="calczdcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd2_result_UR1').innerHTML =
		'<span class="calczdcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	R1 = Number(R1.toFixed(3));

	// Ближайшее стандартное.
	var rstring = CALCZDBS_2(R1, Uin, Uout, Rn, 0);

	document.getElementById('CALCZDBS_2b').innerHTML = rstring;
}

// ---
// | Получаем ближайшее стандартное сопротивление.
// | Плюс к этому ближайшему делаем дополнительные расчёты.
// | Для калькулятора 2 (и для таблиц n2, модальное окно).
// ---
function CALCZDBS_2(R1, Uin, Uout, Rn, Switch)
{
	var UR1, I1, I2, I3, Il_I1, Il_I2, Il_I3, Ir_I1, Ir_I2, Ir_I3, P1, P2, P3;
	var E, El, Er;
	var rstring;

	var ArrayResistor = [];

	// ----- 1 -----

	if (Switch == 0)
		{
		// Если 0, обращение из калькулятора 2.
		// ---

		// Если набор резисторов E24.
		if (document.getElementById('rbcn2_E_1').checked)
			{
			// Установить на странице E24.
			document.getElementById('CALCZDBS_2a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

			ArrayResistor = SearchE24(R1);
			}

		// Если набор резисторов E48.
		if (document.getElementById('rbcn2_E_2').checked)
			{
			// Установить на странице E48.
			document.getElementById('CALCZDBS_2a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E48</b>):</span>";

			ArrayResistor = SearchE48(R1);
			}

		// Если набор резисторов E96.
		if (document.getElementById('rbcn2_E_3').checked)
			{
			// Установить на странице E96.
			document.getElementById('CALCZDBS_2a').innerHTML =
			"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E96</b>):</span>";

			ArrayResistor = SearchE96(R1);
			}
		}

	// ----- 2 -----

	if (Switch == 2)
		{
		// Если 2, обращение из Таблиц n2!
		// Вставка в модальное окно!
		// ---

		// Если набор резисторов E24.
		if (document.getElementById('rb_Etable_2_1').checked)
			{
			ArrayResistor = SearchE24(R1);
			}

		// Если набор резисторов E48.
		if (document.getElementById('rb_Etable_2_2').checked)
			{
			ArrayResistor = SearchE48(R1);
			}

		// Если набор резисторов E96.
		if (document.getElementById('rb_Etable_2_3').checked)
			{
			ArrayResistor = SearchE96(R1);
			}
		}

	// - [!] -
	E = ArrayResistor[0]; El =  ArrayResistor[1]; Er =  ArrayResistor[2];

		// Самое первое сопротивление.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			UR1 = Uin - Uout;

			// В мА.
			I1 = UR1 / El * 1000;
			I3 = Uout / Rn * 1000;
			I2 = I1 - I3;
			// В мВт.
			P1 = UR1 * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I3 = Number(I3.toFixed(2));
			I2 = Number(I2.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rstring = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			rstring += "<tr>";
			rstring += "<td align=\"left\">";

			rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + El + " <b>Ом</b> </span>";
			rstring += "<br>";
			rstring += "<i><b title=\"Ток протекающий через резистор R1 (ток I1)\">I1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I1 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток стабилизации (ток I2)\">I2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I2 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток протекающий через нагрузку (ток I3)\">I3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I3 + " <b>мА</b></span>, ";
			rstring += "<br>";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">P3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P3 + " <b>мВт</b></span>";

			rstring += "</td>";
			rstring += "</tr>";
			rstring += "</table>";
			}

		// Самое последнее сопротивление.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			UR1 = Uin - Uout;

			// В мА.
			I1 = UR1 / Er * 1000;
			I3 = Uout / Rn * 1000;
			I2 = I1 - I3;
			// В мВт.
			P1 = UR1 * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I3 = Number(I3.toFixed(2));
			I2 = Number(I2.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rstring = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			rstring += "<tr>";
			rstring += "<td align=\"left\">";

			rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + Er + " <b>Ом</b> </span>";
			rstring += "<br>";
			rstring += "<i><b title=\"Ток протекающий через резистор R1 (ток I1)\">I1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I1 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток стабилизации (ток I2)\">I2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I2 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток протекающий через нагрузку (ток I3)\">I3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I3 + " <b>мА</b></span>, ";
			rstring += "<br>";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">P3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P3 + " <b>мВт</b></span>";

			rstring += "</td>";
			rstring += "</tr>";
			rstring += "</table>";
			}

		// Сопротивление есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			UR1 = Uin - Uout;

			// В мА.
			I1 = UR1 / E * 1000;
			I3 = Uout / Rn * 1000;
			I2 = I1 - I3;
			// В мВт.
			P1 = UR1 * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I3 = Number(I3.toFixed(2));
			I2 = Number(I2.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rstring = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			rstring += "<tr>";
			rstring += "<td align=\"left\">";

			rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + E + " <b>Ом</b> </span>";
			rstring += "<br>";
			rstring += "<i><b title=\"Ток протекающий через резистор R1 (ток I1)\">I1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I1 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток стабилизации (ток I2)\">I2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I2 + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Ток протекающи1 через нагрузку (ток I3)\">I3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + I3 + " <b>мА</b></span>, ";
			rstring += "<br>";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">P3</b></i> = ";
			rstring += "<span class=\"calczdcolorresult\">" + P3 + " <b>мВт</b></span>";

			rstring += "</td>";
			rstring += "</tr>";
			rstring += "</table>";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			UR1 = Uin - Uout;

			// В мА.
			Il_I1 = UR1 / El * 1000;
			Il_I3 = Uout / Rn * 1000;
			Il_I2 = Il_I1 - Il_I3;
			// В мВт.
			P1 = UR1 * Il_I1;
			P2 = Uout * Il_I2;
			P3 = Uout * Il_I3;

			Il_I1 = Number(Il_I1.toFixed(2));
			Il_I3 = Number(Il_I3.toFixed(2));
			Il_I2 = Number(Il_I2.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rstring = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			rstring += "<tr>";
			rstring += "<td align=\"left\">";

				rstring += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
				rstring += "<tr>";
				rstring += "<td align=\"left\">";

				rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + El + " <b>Ом</b> </span>";
				rstring += "<br>";
				rstring += "<i><b title=\"Ток протекающий через резистор R1 (ток I1)\">I1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Il_I1 + " <b>мА</b></span>, ";
				rstring += "<i><b title=\"Ток стабилизации (ток I2)\">I2</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Il_I2 + " <b>мА</b></span>, ";
				rstring += "<i><b title=\"Ток протекающий через нагрузку (ток I3)\">I3</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Il_I3 + " <b>мА</b></span>";
				rstring += "<br>";
				rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
				rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>, ";
				rstring += "<i><b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">P3</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P3 + " <b>мВт</b></span>";

				rstring += "</td>";
				rstring += "</tr>";
				rstring += "</table>";

				rstring += "<div style=\"padding-top: 3px; padding-bottom: 3px;\"><b>или</b></div>";

			// В мА.
			Ir_I1 = UR1 / Er * 1000;
			Ir_I3 = Uout / Rn * 1000;
			Ir_I2 = Ir_I1 - Ir_I3;
			// В мВт.
			P1 = UR1 * Ir_I1;
			P2 = Uout * Ir_I2;
			P3 = Uout * Ir_I3;

			Ir_I1 = Number(Ir_I1.toFixed(2));
			Ir_I3 = Number(Ir_I3.toFixed(2));
			Ir_I2 = Number(Ir_I2.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

				rstring += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
				rstring += "<tr>";
				rstring += "<td align=\"left\">";

				rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Er + " <b>Ом</b> </span>";
				rstring += "<br>";
				rstring += "<i><b title=\"Ток протекающий через резистор R1 (ток I1)\">I1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Ir_I1 + " <b>мА</b></span>, ";
				rstring += "<i><b title=\"Ток стабилизации (ток I2)\">I2</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Ir_I2 + " <b>мА</b></span>, ";
				rstring += "<i><b title=\"Ток протекающий через нагрузку (ток I3)\">I3</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + Ir_I3 + " <b>мА</b></span>";
				rstring += "<br>";
				rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P1 + " <b>мВт</b></span>, ";
				rstring += "<i><b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">P2</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P2 + " <b>мВт</b></span>, ";
				rstring += "<i><b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">P3</b></i> = ";
				rstring += "<span class=\"calczdcolorresult\">" + P3 + " <b>мВт</b></span>";

				rstring += "</td>";
				rstring += "</tr>";
				rstring += "</table>";

			rstring += "</td>";
			rstring += "</tr>";
			rstring += "</table>";
			}

	return rstring;
}

// ---
// | Установить поля по умолчанию для CALCZD_2 (калькулятор 2).
// ---
function SetInputZD_2()
{
	// Поля.

	document.getElementById("zd2_input_1").value = 15;
	document.getElementById("zd2_input_2").value = 12;
	document.getElementById("zd2_input_3").value = 10;
	document.getElementById("zd2_input_4").value = 5000;

	// Сбросить вычисления.

	document.getElementById('zd2_result_R1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_I1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_I3').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_P1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_P2').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_P3').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd2_result_UR1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	// Radio Buttons.
	// Набор резисторов (E24, E48, E96).

	document.getElementById('rbcn2_E_1').checked = true;  // E24.
	document.getElementById('rbcn2_E_2').checked = false; // E48.
	document.getElementById('rbcn2_E_3').checked = false; // E96.

	// Установить на странице E24.

	document.getElementById('CALCZDBS_2a').innerHTML =
	"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

	// Ближайшее стандартное.

	document.getElementById('CALCZDBS_2b').innerHTML = "<span class=\"calczdcolorquestions\">?</span>";
}

// ---
// | Онлайн калькулятор CALCZD_3 (Calc 3).
// | Считаем!
// ---
function CALCZD_3()
{
	var Uin = Number(document.getElementById("zd3_input_1").value);
		var Uout = Number(document.getElementById("zd3_input_2").value);
			var R1 = Number(document.getElementById("zd3_input_3").value);

	// Вычисления.

	var I = (Uin - Uout) / R1;
		var P1 = (Uin - Uout) * I;
			var P2 = Uout * I;

	// Результат на HTML-страницу.

	document.getElementById('zd3_result_I').innerHTML =
	'<span class="calczdcolorresult">'
		+ I * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd3_result_P1').innerHTML =
		'<span class="calczdcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd3_result_P2').innerHTML =
	'<span class="calczdcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCZD_3 (калькулятор 3).
// ---
function SetInputZD_3()
{
	// Поля.

	document.getElementById("zd3_input_1").value = 15;
	document.getElementById("zd3_input_2").value = 12;
	document.getElementById("zd3_input_3").value = 300;

	// Сбросить вычисления.

	document.getElementById('zd3_result_I').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd3_result_P1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd3_result_P2').innerHTML =
		'<span class="calczdcolorquestions">?</span>';
}

// ---
// | Онлайн калькулятор CALCZD_4 (Calc 4).
// | Считаем!
// ---
function CALCZD_4()
{
	var Uin = Number(document.getElementById("zd4_input_1").value);
		var Uout = Number(document.getElementById("zd4_input_2").value);
			var R1 = Number(document.getElementById("zd4_input_3").value);
				var Rn = Number(document.getElementById("zd4_input_4").value);

	// Вычисления.

	var UR1 = Uin - Uout;

	var I1 = UR1 / R1;
		var I3 = Uout / Rn;
			var I2 = I1 - I3;

	var P1 = UR1 * I1;
		var P2 = Uout * I2;
			var P3 = Uout * I3;

	// Результат на HTML-страницу.

	document.getElementById('zd4_result_I1').innerHTML =
	'<span class="calczdcolorresult">'
		+ I1 * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I1 * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I1 + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd4_result_I2').innerHTML =
	'<span class="calczdcolorresult">'
		+ I2 * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I2 * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I2 + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd4_result_I3').innerHTML =
	'<span class="calczdcolorresult">'
		+ I3 * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ I3 * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ I3 + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('zd4_result_P1').innerHTML =
		'<span class="calczdcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd4_result_P2').innerHTML =
	'<span class="calczdcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('zd4_result_P3').innerHTML =
	'<span class="calczdcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCZD_4 (калькулятор 4).
// ---
function SetInputZD_4()
{
	// Поля.

	document.getElementById("zd4_input_1").value = 15;
	document.getElementById("zd4_input_2").value = 12;
	document.getElementById("zd4_input_3").value = 240;
	document.getElementById("zd4_input_4").value = 5000;

	// Сбросить вычисления.

	document.getElementById('zd4_result_I1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd4_result_I2').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd4_result_I3').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd4_result_P1').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd4_result_P2').innerHTML =
		'<span class="calczdcolorquestions">?</span>';

	document.getElementById('zd4_result_P3').innerHTML =
		'<span class="calczdcolorquestions">?</span>';
}

// ---
// | Вывод таблиц n1.
// ---
function PrintZDCalculationTable_1()
{
	// Массив с входными данными.
	// Uin, Uout, мА, Uin, Uout, мА и так далее...
	// var Array_Data = [
	//		14, 12, 5, 14, 12, 10, 14, 12, 15,
	//		11, 9.1, 5, 11, 9.1, 10, 11, 9.1, 15,
	//		7, 5.1, 5, 7, 5.1, 10, 7, 5.1, 15
	//	];

	var Array_Data = [];

	var IStep;

// ---

	// Для таблице n1.1.
	// ---
	Array_Data[0] = Number(document.getElementById("zdtable1_1_input_1").value); // Uin начальное.
	Array_Data[1] = Number(document.getElementById("zdtable1_1_input_4").value); // Uout.
	Array_Data[2] = Number(document.getElementById("zdtable1_1_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable1_1_input_6").value); // Шаг для I.

	Array_Data[3] = Array_Data[0];
	Array_Data[4] = Array_Data[1];
	Array_Data[5] = Array_Data[2] + IStep;

	Array_Data[6] = Array_Data[0];
	Array_Data[7] = Array_Data[1];
	Array_Data[8] = Array_Data[5] + IStep;

	// Для таблице n1.2.
	// ---
	Array_Data[9] = Number(document.getElementById("zdtable1_2_input_1").value);  // Uin начальное.
	Array_Data[10] = Number(document.getElementById("zdtable1_2_input_4").value); // Uout.
	Array_Data[11] = Number(document.getElementById("zdtable1_2_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable1_2_input_6").value); // Шаг для I.

	Array_Data[12] = Array_Data[9];
	Array_Data[13] = Array_Data[10];
	Array_Data[14] = Array_Data[11] + IStep;

	Array_Data[15] = Array_Data[9];
	Array_Data[16] = Array_Data[10];
	Array_Data[17] = Array_Data[14] + IStep;

	// Для таблице n1.3.
	// ---
	Array_Data[18] = Number(document.getElementById("zdtable1_3_input_1").value); // Uin начальное.
	Array_Data[19] = Number(document.getElementById("zdtable1_3_input_4").value); // Uout.
	Array_Data[20] = Number(document.getElementById("zdtable1_3_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable1_3_input_6").value); // Шаг для I.

	Array_Data[21] = Array_Data[18];
	Array_Data[22] = Array_Data[19];
	Array_Data[23] = Array_Data[20] + IStep;

	Array_Data[24] = Array_Data[18];
	Array_Data[25] = Array_Data[19];
	Array_Data[26] = Array_Data[23] + IStep;

// ---

	var x, Uin, UinStep, UinStepTotal, Uout, I, R1, UR1, P1, P2, TableNumber, rtitle;
	var temp = "";

	TableNumber = 0;

	for(var z1 = 0; z1 < Array_Data.length; z1++)
		{
		temp += "<br>";

		// Вставка написи: "Таблица". Вставка номера таблицы.
		// Вставка горизонтальной линии.
		if (z1 == 0 || z1 == 9 || z1 == 18)
			{
			TableNumber++;

			temp += "<table class=\"calczdcalculation_hr\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			temp += "<tr>";

				temp += "<td width=\"1%\" nowrap class=\"calczdcolortabletxt\">";
				temp += "Таблица&nbsp;n1." + TableNumber;
				temp += "</td>";

				temp += "<td width=\"1%\">&nbsp;</td>";

				temp += "<td width=\"98%\">";
					temp += "<hr>";
						temp += "</td>";

				// -
				temp += "<td width=\"\" nowrap>";
					temp += "&nbsp;";

		// Спойлер для таблиц n1.1, n1.2, n1.3.
		// Изначально Открыт!

		temp += "<span class=\"calczdspoiler2\" onclick=\"javascript:ZDSpoiler('zd_tn1sp_" + z1 + "');\"";
		temp += "title=\"Нажмите\">";
		temp += "[ _ ]";
		temp += "</span>";

				temp += "</td>";

			temp += "</tr>";
			temp += "</table>";

			temp += "<br>";

			// То, что под спойлером.
			temp += "<div id=\"zd_tn1sp_" + z1 + "\" style=\"display: block;\">";
			}

		var z1_2 = z1;

		Uin = Array_Data[z1++]; Uout = Array_Data[z1++]; I = Array_Data[z1];

//		alert("Uin = " + Uin + " Uout = " + Uout + " I = " + I);

		Uin = Number(Uin.toFixed(3));
			Uout = Number(Uout.toFixed(3));
				I = Number(I.toFixed(3));

//		alert("Uin = " + Uin + " Uout = " + Uout + " I = " + I);

		if (z1_2 == 0)
			{
			// Шаг для таблице n1.1.
			UinStep = Number(document.getElementById("zdtable1_1_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable1_1_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		if (z1_2 == 9)
			{
			// Шаг для таблице n1.2.
			UinStep = Number(document.getElementById("zdtable1_2_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable1_2_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		if (z1_2 == 18)
			{
			// Шаг для таблице n1.3.
			UinStep = Number(document.getElementById("zdtable1_3_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable1_3_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		temp += "<table class=\"calczdcalculation_zebra\" cellspacing=\"0\" cellpadding=\"0\">";

		// Шапка для расчётов (для таблиц: n1.1, n1.2, n1.3).
		temp += "<tr>";

			// Шаг.
			temp += "<td class=\"wtn1_1 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Шаг\">Шаг</span>";
			temp += "</td>";

			// Uin.
			temp += "<td class=\"wtn1_2 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Входное напряжение\"><i>Uin</i>, В</span>";
			temp += "</td>";

			// Uout.
			temp += "<td class=\"wtn1_3 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\"><i>Uout</i>, В</span>";
			temp += "</td>";

			// I.
			temp += "<td class=\"wtn1_4 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Ток стабилизации (ток I)\"><i>I</i>, мА</span>";
			temp += "</td>";

			// R1.
			temp += "<td class=\"wtn1_5 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Сопротивление резистора R1\"><i>R1</i>, Ом</b>";
			temp += "</td>";

			// P1.
			temp += "<td class=\"wtn1_6 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Рассеиваемая мощность на резисторе R1 (P1)\"><i>P1</i>, мВт</b>";
			temp += "</td>";

			// P2.
			temp += "<td class=\"wtn1_7 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\"><i>P2</i>, мВт</b>";
			temp += "</td>";

			// UR1.
			temp += "<td class=\"wtn1_8 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Напряжение на резисторе R1\"><i>UR1</i>, В</b>";
			temp += "</td>";

		temp += "</tr>";

		x = 1;

		// Создаём одну таблицу.
		for(var z2 = 0; z2 < UinStepTotal; z2++)
			{
			temp += "<tr class=\"calczdcalculation_z_bg_c\">";

			if (x == 1)
				{
				// Формируем строку B.
				// ---

				// Шаг.
				temp += "<td class=\"wtn1_1 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Шаг\">" + (z2 + 1) + "</span>";
				temp += "</td>";

				// Uin.
				temp += "<td class=\"wtn1_2 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
				temp += "</td>";

				// Uout.
				temp += "<td class=\"wtn1_3 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
				temp += "</td>";

				// I.
				temp += "<td class=\"wtn1_4 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Ток стабилизации (ток I)\">" + I + "</span>";
				temp += "</td>";

				// Находим UR1.
				UR1 = Uin - Uout;

				// Находим R1.
				R1 = UR1 / (I / 1000);
				R1 = Number(R1.toFixed(3));

				// Находим P1.
				P1 = UR1 * I;
				// Находим P2.
				P2 = Uout * I;

				UR1 = Number(UR1.toFixed(3));
					P1 = Number(P1.toFixed(3));
						P2 = Number(P2.toFixed(3));

				// Получаем ближайшее стандартное сопротивление.
				// Плюс к этому ближайшему делаем дополнительные расчёты.
				rtitle = ReturnTitleForTable1(R1, Uin, Uout);

				// R1.
				temp += "<td class=\"wtn1_5 calczdcalculation_z_bg_b\">";

					temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
					temp += "<tr>"

					temp += "<td>";

						temp += "<span title=\"" + rtitle + "\">";
						temp += R1;
						temp += "</span>";

					temp += "</td>";

					// Ссылка на модальное окно.
					temp += "<td class=\"calczdtdmwin\">";

						// Сначало вставить в модальное окно, а потом его открыть.
						temp += "<a href=\"javascript:InsertToModalWin1(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I + "," + R1 + "," +  P1 + "," + P2 + "," + UR1 + "," + "'" + "Выборка из Таблице n1." + TableNumber + "'" + "); ";
						temp += "javascript:OpenShowModalWin('TableModalWinBS1');\" title=\"\">";

					temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
					temp += "</a>";
					temp += "</td>";

					temp += "</tr>";
					temp += "</table>";

				temp += "</td>";

				// P1.
				temp += "<td class=\"wtn1_6 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
				temp += P1;
				temp += "</span>";

				temp += "</td>";

				// P2,
				temp += "<td class=\"wtn1_7 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
				temp += P2;
				temp += "</span>";
				temp += "</td>";

				// UR1.
				temp += "<td class=\"wtn1_8 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
				temp += "</td>";

				x = 0;
				}
				else
				{
				// Формируем строку А.
				// ---

				// Шаг.
				temp += "<td class=\"wtn1_1 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Шаг\">" + (z2 + 1) + "</span>";
				temp += "</td>";

				// Uin.
				temp += "<td class=\"wtn1_2 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
				temp += "</td>";

				// Uout.
				temp += "<td class=\"wtn1_3 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
				temp += "</td>";

				// I.
				temp += "<td class=\"wtn1_4 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Ток стабилизации (ток I)\">" + I + "</span>";
				temp += "</td>";

				// Находим UR1.
				UR1 = Uin - Uout;

				// Находим R1.
				R1 = UR1 / (I / 1000);
				R1 = Number(R1.toFixed(3));

				// Находим P1.
				P1 = UR1 * I;
				// Находим P2.
				P2 = Uout * I;

				UR1 = Number(UR1.toFixed(3));
					P1 = Number(P1.toFixed(3));
						P2 = Number(P2.toFixed(3));

				// Получаем ближайшее стандартное сопротивление.
				// Плюс к этому ближайшему делаем дополнительные расчёты.
				rtitle = ReturnTitleForTable1(R1, Uin, Uout);

				// R1.
				temp += "<td class=\"wtn1_5 calczdcalculation_z_bg_a\">";

					temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
					temp += "<tr>"

					temp += "<td>";

						temp += "<span title=\"" + rtitle + "\">";
						temp += R1;
						temp += "</span>";

					temp += "</td>";

					// Ссылка на модальное окно.
					temp += "<td class=\"calczdtdmwin\">";

						// Сначало вставить в модальное окно, а потом его открыть.
						temp += "<a href=\"javascript:InsertToModalWin1(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I + "," + R1 + "," +  P1 + "," + P2 + "," + UR1 + "," + "'" + "Выборка из Таблице n1." + TableNumber + "'" + "); ";
						temp += "javascript:OpenShowModalWin('TableModalWinBS1');\" title=\"\">";

					temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
					temp += "</a>";
					temp += "</td>";

					temp += "</tr>";
					temp += "</table>";

				temp += "</td>";

				// P1.
				temp += "<td class=\"wtn1_6 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
				temp += P1;
				temp += "</span>";
				temp += "</td>";

				// P2.
				temp += "<td class=\"wtn1_7 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
				temp += P2;
				temp += "</span>";
				temp += "</td>";

				// UR1.
				temp += "<td class=\"wtn1_8 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
				temp += "</td>";

				x = 1;
				}

			temp += "</tr>";

			Uin = Uin + UinStep;
			Uin = Number(Uin.toFixed(3));
			}

		temp += "</table>";

		if (z1_2 == 6 || z1_2 == 15 || z1_2 == 24)
			{
			//  6 - Конец таблице n1.1.
			// 15 - Конец таблице n1.2.
			// 24 - Конец таблице n1.3.
			temp += "</div>" // Конец спойлера.
			}
		}

	// Вставка в страницу.
	document.getElementById("ZenerDiodes_Calculation_1").innerHTML = temp;
}

// ---
// | Установить весь input по умолчанию (для таблиц n1).
// ---
function ZDCalculationTableInputDefault_1()
{
	// Поля. Для таблице n1.1.
	document.getElementById("zdtable1_1_input_1").value = 14; // Uin.
	document.getElementById("zdtable1_1_input_2").value = 1;  // UinStep.
	document.getElementById("zdtable1_1_input_3").value = 5;  // UinStepTotal.
	document.getElementById("zdtable1_1_input_4").value = 12; // Uout.
	document.getElementById("zdtable1_1_input_5").value = 5;  // I.
	document.getElementById("zdtable1_1_input_6").value = 5;  // IStep.

	// Поля. Для таблице n1.2.
	document.getElementById("zdtable1_2_input_1").value = 11;  // Uin.
	document.getElementById("zdtable1_2_input_2").value = 1;   // UinStep.
	document.getElementById("zdtable1_2_input_3").value = 5;   // UinStepTotal.
	document.getElementById("zdtable1_2_input_4").value = 9.1; // Uout.
	document.getElementById("zdtable1_2_input_5").value = 5;   // I.
	document.getElementById("zdtable1_2_input_6").value = 5;   // IStep.

	// Поля. Для таблице n1.3.
	document.getElementById("zdtable1_3_input_1").value = 7;   // Uin.
	document.getElementById("zdtable1_3_input_2").value = 1;   // UinStep.
	document.getElementById("zdtable1_3_input_3").value = 5;   // UinStepTotal.
	document.getElementById("zdtable1_3_input_4").value = 5.1; // Uout.
	document.getElementById("zdtable1_3_input_5").value = 5;   // I.
	document.getElementById("zdtable1_3_input_6").value = 5;   // IStep.

	// Списки устанавливать не будем!
	// Они неизменны!

	// Вывод заново таблиц n1.
	PrintZDCalculationTable_1();
}

// Вставить результаты расчётов в модальное окно.
// Таблицы n1.

function InsertToModalWin1(Step, Uin, Uout, I, R1, P1, P2, UR1, TableNumber)
{
	var temp, Eline, rstring;

	// Вставка номера таблицы и Вставка горизонтальной линии.

		temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		temp += "<tr>";

			temp += "<td width=\"1%\" nowrap class=\"calczdcolortabletxt\">";
			temp += TableNumber;
			temp += "</td>";

			temp += "<td width=\"1%\">&nbsp;</td>";

			// Верхняя линия.
			temp += "<td width=\"98%\">";
				temp += "<hr>";
					temp += "</td>";

		temp += "</tr>";
		temp += "</table>";

		temp += "<br>";

	temp += "<table class=\"calczdcalculation_zebra\" cellspacing=\"0\" cellpadding=\"0\">";

	// Шапка для расчётов.

	temp += "<tr>";

		// Шаг.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Шаг\">Шаг</span>";
		temp += "</td>";

		// Uin.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Входное напряжение\"><i>Uin</i>, В</span>";
		temp += "</td>";

		// Uout.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\"><i>Uout</i>, В</span>";
		temp += "</td>";

		// I (ток стабилизации).
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Ток стабилизации (ток I)\"><i>I</i>, мА</b>";
		temp += "</td>";

		// R1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Сопротивление резистора R1\"><i>R1</i>, Ом</b>";
		temp += "</td>";

		// P1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Рассеиваемая мощность на резисторе R1 (P1)\"><i>P1</i>, мВт</b>";
		temp += "</td>";

		// P2.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\"><i>P2</i>, мВт</b>";
		temp += "</td>";

		// UR1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Напряжение на резисторе R1\"><i>UR1</i>, В</b>";
		temp += "</td>";

	temp += "</tr>";

	// Наполняем таблицу (всего одна строка).

	temp += "<tr class=\"calczdcalculation_z_bg_c\">";

		// Шаг.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Шаг\">" + Step + "</span>";
		temp += "</td>";

		// Uin.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
		temp += "</td>";

		// Uout.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
		temp += "</td>";

		// I (ток стабилизации).
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Ток стабилизации (ток I)\">" + I + "</span>";
		temp += "</td>";

		// R1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Сопротивление резистора R1\">" + R1 + "</span>";
		temp += "</td>";

		// P1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
		temp += P1;
		temp += "</span>";
		temp += "</td>";

		// P2,
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
		temp += P2;
		temp += "</span>";
		temp += "</td>";

		// UR1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
		temp += "</td>";

	temp += "</tr>";

	temp += "</table>";

	temp += "<br>";

		temp += "<table class=\"calczdcalculation_hr\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		temp += "<tr>";

			// Нижняя линия.
			temp += "<td width=\"100%\">";
				temp += "<hr>";
					temp += "</td>";

		temp += "</tr>";
		temp += "</table>";

	temp += "<br>";

	// Если набор резисторов E24.
	if (document.getElementById('rb_Etable_1_1').checked)
		{
		ArrayResistor = SearchE24(R1)
		Eline = "(E24)";
		}

	// Если набор резисторов E48.
	if (document.getElementById('rb_Etable_1_2').checked)
		{
		ArrayResistor = SearchE48(R1)
		Eline = "(E48)";
		}

	// Если набор резисторов E96.
	if (document.getElementById('rb_Etable_1_3').checked)
		{
		ArrayResistor = SearchE96(R1)
		Eline = "(E96)";
		}

	temp += "Ближайшее стандартное " + Eline + ":";
	temp += "<br>";
	temp += "<br>";

	var rstring = CALCZDBS_1(R1, Uin, Uout, 1);

	temp += rstring;
		temp += "<br>";
			temp += "<br>";
				temp += "Округленно до двух знаков после точки!";
			temp += "<br>";
		temp += "Всё!";

	// Вставка в модальное окно.
	document.getElementById("MWT2BS1").innerHTML = temp;
}

// ---
// | Вывод таблиц n2.
// ---
function PrintZDCalculationTable_2()
{
	// Массив с входными данными.
	// Uin, Uout, мА, Rн, Uin, Uout, мА, Rн и так далее...
	// var Array_Data = [
	//		14, 12, 5, 5000, 14, 12, 10, 5000, 14, 12, 15, 5000,
	//		11, 9.1, 5, 5000, 11, 9.1, 10, 5000, 11, 9.1, 15, 5000
	//		7, 5.1, 5, 5000, 7, 5.1, 10, 5000, 7, 5.1, 15, 5000
	//	];

	var Array_Data = [];

	var IStep;

// ---

	// Для таблице n2.1.
	// ---
	Array_Data[0] = Number(document.getElementById("zdtable2_1_input_1").value); // Uin начальное.
	Array_Data[1] = Number(document.getElementById("zdtable2_1_input_4").value); // Uout.
	Array_Data[2] = Number(document.getElementById("zdtable2_1_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable2_1_input_6").value); // Шаг для I.
	Array_Data[3] = Number(document.getElementById("zdtable2_1_input_7").value); // Rн.

	Array_Data[4] = Array_Data[0];
	Array_Data[5] = Array_Data[1];
	Array_Data[6] = Array_Data[2] + IStep;
	Array_Data[7] = Array_Data[3];

	Array_Data[8] = Array_Data[0];
	Array_Data[9] = Array_Data[1];
	Array_Data[10] = Array_Data[6] + IStep;
	Array_Data[11] = Array_Data[3];

	// Для таблице n2.2.
	// ---
	Array_Data[12] = Number(document.getElementById("zdtable2_2_input_1").value);  // Uin начальное.
	Array_Data[13] = Number(document.getElementById("zdtable2_2_input_4").value); // Uout.
	Array_Data[14] = Number(document.getElementById("zdtable2_2_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable2_2_input_6").value); // Шаг для I.
	Array_Data[15] = Number(document.getElementById("zdtable2_2_input_7").value); // Rн.

	Array_Data[16] = Array_Data[12];
	Array_Data[17] = Array_Data[13];
	Array_Data[18] = Array_Data[14] + IStep;
	Array_Data[19] = Array_Data[15];

	Array_Data[20] = Array_Data[12];
	Array_Data[21] = Array_Data[13];
	Array_Data[22] = Array_Data[18] + IStep;
	Array_Data[23] = Array_Data[15];

	// Для таблице n2.3.
	// ---
	Array_Data[24] = Number(document.getElementById("zdtable2_3_input_1").value); // Uin начальное.
	Array_Data[25] = Number(document.getElementById("zdtable2_3_input_4").value); // Uout.
	Array_Data[26] = Number(document.getElementById("zdtable2_3_input_5").value); // I.
	IStep = Number(document.getElementById("zdtable2_3_input_6").value); // Шаг для I.
	Array_Data[27] = Number(document.getElementById("zdtable2_3_input_7").value); // Rн.

	Array_Data[28] = Array_Data[24];
	Array_Data[29] = Array_Data[25];
	Array_Data[30] = Array_Data[26] + IStep;
	Array_Data[31] = Array_Data[27];

	Array_Data[32] = Array_Data[24];
	Array_Data[33] = Array_Data[25];
	Array_Data[34] = Array_Data[30] + IStep;
	Array_Data[35] = Array_Data[27];

// ---

	var array_rtitle = [];

	var x, Uin, UinStep, UinStepTotal, Uout, I1, I2, I3, R1, Rn, P1, P2, P3, UR1, TableNumber;
	var temp = "";

	TableNumber = 0;

	for(var z1 = 0; z1 < Array_Data.length; z1++)
		{
		temp += "<br>";

		// Вставка написи: "Таблица". Вставка номера таблицы.
		// Вставка горизонтальной линии.
		if (z1 == 0 || z1 == 12 || z1 == 24)
			{
			TableNumber++;

			temp += "<table class=\"calczdcalculation_hr2\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			temp += "<tr>";

				temp += "<td width=\"1%\" nowrap class=\"calczdcolortabletxt\">";
				temp += "Таблица&nbsp;n2." + TableNumber;
				temp += "</td>";

				temp += "<td width=\"1%\">&nbsp;</td>";

				temp += "<td width=\"98%\">";
					temp += "<hr>";
						temp += "</td>";

				// -
				temp += "<td width=\"\" nowrap>";
					temp += "&nbsp;";

		// Спойлер для таблиц n1.1, n1.2, n1.3.
		// Изначально Открыт!

		temp += "<span class=\"calczdspoiler2\" onclick=\"javascript:ZDSpoiler('zd_tn2sp_" + z1 + "');\"";
		temp += "title=\"Нажмите\">";
		temp += "[ _ ]";
		temp += "</span>";

				temp += "</td>";

			temp += "</tr>";
			temp += "</table>";

			temp += "<br>";

			// То, что под спойлером.
			temp += "<div id=\"zd_tn2sp_" + z1 + "\" style=\"display: block;\">";
			}

		var z1_2 = z1;

		Uin = Array_Data[z1++];
			Uout = Array_Data[z1++];
				I2 = Array_Data[z1++];
					 Rn = Array_Data[z1];

		Uin = Number(Uin.toFixed(3));
			Uout = Number(Uout.toFixed(3));
				I2 = Number(I2.toFixed(3));
					Rn = Number(Rn.toFixed(3));

		if (z1_2 == 0)
			{
			// Шаг для таблице n2.1.
			UinStep = Number(document.getElementById("zdtable2_1_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable2_1_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		if (z1_2 == 12)
			{
			// Шаг для таблице n2.2.
			UinStep = Number(document.getElementById("zdtable2_2_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable2_2_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		if (z1_2 == 24)
			{
			// Шаг для таблице n2.3.
			UinStep = Number(document.getElementById("zdtable2_3_input_2").value);
			UinStep = Number(UinStep.toFixed(3));

			// Количество шагов.
			UinStepTotal = Number(document.getElementById("zdtable2_3_input_3").value);
			UinStepTotal = Number(UinStepTotal.toFixed(0));
			}

		temp += "<table class=\"calczdcalculation_zebra2\" cellspacing=\"0\" cellpadding=\"0\">";

		// Шапка для расчётов (для таблиц: n2.1, n2.2, n2.3).
		temp += "<tr>";

			// Шаг.
			temp += "<td class=\"wtn2_1 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Шаг\">Шаг</span>";
			temp += "</td>";

			// Uin.
			temp += "<td class=\"wtn2_2 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Входное напряжение\"><i>Uin</i>, В</span>";
			temp += "</td>";

			// Uout.
			temp += "<td class=\"wtn2_3 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\"><i>Uout</i>, В</span>";
			temp += "</td>";

			// I1.
			temp += "<td class=\"wtn2_4 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Ток протекающий через резистор R1 (ток I1)\"><i>I1</i>, мА</b>";
			temp += "</td>";

			// I2 (ток стабилизации).
			temp += "<td class=\"wtn2_5 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Ток стабилизации (ток I2)\"><i>I2</i>, мА</span>";
			temp += "</td>";

			// I3.
			temp += "<td class=\"wtn2_6 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Ток протекающий через нагрузку (ток I3)\"><i>I3</i>, мА</b>";
			temp += "</td>";

			// R1.
			temp += "<td class=\"wtn2_7 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Сопротивление резистора R1\"><i>R1</i>, Ом</b>";
			temp += "</td>";

			// Rн.
			temp += "<td class=\"wtn2_8 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Сопротивление Нагрузки Rн\"><i>Rн</i>, Ом</span>";
			temp += "</td>";

			// P1.
			temp += "<td class=\"wtn2_9 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Рассеиваемая мощность на резисторе R1 (P1)\"><i>P1</i>, мВт</b>";
			temp += "</td>";

			// P2.
			temp += "<td class=\"wtn2_10 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\"><i>P2</i>, мВт</b>";
			temp += "</td>";

			// P3.
			temp += "<td class=\"wtn2_11 calczdcalculation_z_bg_a\">";
			temp += "<b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\"><i>P3</i>, мВт</b>";
			temp += "</td>";

			// UR1.
			temp += "<td class=\"wtn2_12 calczdcalculation_z_bg_a\">";
			temp += "<span title=\"Напряжение на резисторе R1\"><b><i>UR1</i>, В</b>";
			temp += "</td>";

		temp += "</tr>";

		x = 1;

		// Создаём одну таблицу.
		for(var z2 = 0; z2 < UinStepTotal; z2++)
			{
			temp += "<tr class=\"calczdcalculation_z_bg_c\">";

			if (x == 1)
				{
				// Формируем строку B.
				// ---

				// Находим I3.
				I3 = Uout / Rn * 1000; // В мА.
				// Находим ток I1.
				I1 = I2 + I3;
				// Находим UR1.
				UR1 = Uin - Uout;
				// Находим R1.
				R1 = UR1 / I1 * 1000; // В Ом.
				// Находим P1.
				P1 = UR1 * I1;
				// Находим P2.
				P2 = Uout * I2;
				// Находим P3.
				P3 = Uout * I3;

				I3 = Number(I3.toFixed(3));
					I1 = Number(I1.toFixed(3));
						UR1 = Number(UR1.toFixed(3));
							R1 = Number(R1.toFixed(3));

				P1 = Number(P1.toFixed(3));
					P2 = Number(P2.toFixed(3));
						P3 = Number(P3.toFixed(3));

				// Получаем ближайшее стандартное сопротивление.
				// Плюс к этому ближайшему делаем дополнительные расчёты.
				array_rtitle = ReturnTitleForTable2(Uin, Uout, R1, Rn);

				// Шаг.
				temp += "<td class=\"wtn2_1 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Шаг\">" + (z2 + 1) + "</span>";
				temp += "</td>";

				// Uin.
				temp += "<td class=\"wtn2_2 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
				temp += "</td>";

				// Uout.
				temp += "<td class=\"wtn2_3 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
				temp += "</td>";

				// I1.
				temp += "<td class=\"wtn2_4 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Ток протекающий через резистор R1 (ток I1)\">" + I1 + "</span>";
				temp += "</td>";

				// I2 (ток стабилизации).
				temp += "<td class=\"wtn2_5 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Ток стабилизации (ток I2)\">" + I2 + "</span>";
				temp += "</td>";

				// I3.
				temp += "<td class=\"wtn2_6 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Ток протекающий через нагрузку (ток I3)\">" + I3 + "</span>";
				temp += "</td>";

				if (array_rtitle[1] == '0' && array_rtitle[2] == '0')
					{
					// R1. Один резистор с ближайшем стандартным.
					temp += "<td class=\"wtn2_7 calczdcalculation_z_bg_b\">";

						temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
						temp += "<tr>"

						temp += "<td class=\"calczdcalculation_z_bg_ab\">";

							temp += "<span title=\"" + array_rtitle[0] + "\">";
							temp += R1;
							temp += "</span>";

						temp += "</td>";

						temp += "<td class=\"calczdtd12\">";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[0] + "\">";
							temp += "<b>1</b>";
							temp += "</span>";

						temp += "</td>";

						// Ссылка на модальное окно.
						temp += "<td class=\"calczdtdmwin\">";

							// Сначало вставить в модальное окно, а потом его открыть.
							temp += "<a href=\"javascript:InsertToModalWin2(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I1 + "," + I2 + "," + I3 + "," + R1 + "," + Rn + "," +  P1 + "," + P2 + "," + P3 + "," + UR1 + "," + "'" + "Выборка из Таблице n2." + TableNumber + "'" + "); ";
							temp += "javascript:OpenShowModalWin('TableModalWinBS2');\" title=\"\">";

						temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
						temp += "</a>";
						temp += "</td>";

						temp += "</tr>";
						temp += "</table>";

					temp += "</td>";
					}
					else
					{
					// R1. Два резистора с ближайшем стандартным.
					temp += "<td class=\"wtn2_7 calczdcalculation_z_bg_b\">";

						temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
						temp += "<tr>"

						temp += "<td class=\"calczdcalculation_z_bg_ab\">";

							temp += "<span title=\"" + array_rtitle[0] + "\">";
							temp += R1;
							temp += "</span>";

						temp += "</td>";

						temp += "<td class=\"calczdtd12\">";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[1] + "\">";
							temp += "<b>1</b>";
							temp += "</span>";

							temp += ",";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[2] + "\">";
							temp += "<b>2</b>";
							temp += "</span>";

						temp += "</td>";

						// Ссылка на модальное окно.
						temp += "<td class=\"calczdtdmwin\">";

							// Сначало вставить в модальное окно, а потом его открыть.
							temp += "<a href=\"javascript:InsertToModalWin2(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I1 + "," + I2 + "," + I3 + "," + R1 + "," + Rn + "," +  P1 + "," + P2 + "," + P3 + "," + UR1 + "," + "'" + "Выборка из Таблице n2." + TableNumber + "'" + "); ";
							temp += "javascript:OpenShowModalWin('TableModalWinBS2');\" title=\"\">";

						temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
						temp += "</a>";
						temp += "</td>";

						temp += "</tr>";
						temp += "</table>";

					temp += "</td>";
					}

				// Rn.
				temp += "<td class=\"wtn2_8 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Сопротивление нагрузки Rн\">";
				temp += Rn;
				temp += "</span>";
				temp += "</td>";

				// P1.
				temp += "<td class=\"wtn2_9 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
				temp += P1;
				temp += "</span>";
				temp += "</td>";

				// P2,
				temp += "<td class=\"wtn2_10 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
				temp += P2;
				temp += "</span>";
				temp += "</td>";

				// P3,
				temp += "<td class=\"wtn2_11 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">";
				temp += P3;
				temp += "</span>";
				temp += "</td>";

				// UR1.
				temp += "<td class=\"wtn2_12 calczdcalculation_z_bg_b\">";
				temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
				temp += "</td>";

				x = 0;
				}
				else
				{
				// Формируем строку А.
				// ---

				// Находим I3.
				I3 = Uout / Rn * 1000; // В мА.
				// Находим ток I1.
				I1 = I2 + I3;
				// Находим UR1.
				UR1 = Uin - Uout;
				// Находим R1.
				R1 = UR1 / I1 * 1000; // В Ом.
				// Находим P1.
				P1 = UR1 * I1;
				// Находим P2.
				P2 = Uout * I2;
				// Находим P3.
				P3 = Uout * I3;

				I3 = Number(I3.toFixed(3));
					I1 = Number(I1.toFixed(3));
						UR1 = Number(UR1.toFixed(3));
							R1 = Number(R1.toFixed(3));

				P1 = Number(P1.toFixed(3));
					P2 = Number(P2.toFixed(3));
						P3 = Number(P3.toFixed(3));

				// Получаем ближайшее стандартное сопротивление.
				// Плюс к этому ближайшему делаем дополнительные расчёты.
				array_rtitle = ReturnTitleForTable2(Uin, Uout, R1, Rn);

				// Шаг.
				temp += "<td class=\"wtn2_1 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Шаг\">" + (z2 + 1) + "</span>";
				temp += "</td>";

				// Uin.
				temp += "<td class=\"wtn2_2 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
				temp += "</td>";

				// Uout.
				temp += "<td class=\"wtn2_3 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
				temp += "</td>";

				// I1.
				temp += "<td class=\"wtn2_4 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Ток протекающий через резистор R1 (ток I1)\">" + I1 + "</span>";
				temp += "</td>";

				// I2 (ток стабилизации).
				temp += "<td class=\"wtn2_5 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Ток стабилизации (ток I2)\">" + I2 + "</span>";
				temp += "</td>";

				// I3.
				temp += "<td class=\"wtn2_6 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Ток протекающий через нагрузку (ток I3)\">" + I3 + "</span>";
				temp += "</td>";

				if (array_rtitle[1] == '0' && array_rtitle[2] == '0')
					{
					// R1. Один резистор с ближайшем стандартным.
					temp += "<td class=\"wtn2_7 calczdcalculation_z_bg_a\">";

						temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
						temp += "<tr>"

						temp += "<td class=\"calczdcalculation_z_bg_ab\">";

							temp += "<span title=\"" + array_rtitle[0] + "\">";
							temp += R1;
							temp += "</span>";

						temp += "</td>";

						temp += "<td class=\"calczdtd12\">";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[0] + "\">";
							temp += "<b>1</b>";
							temp += "</span>";

						temp += "</td>";

						// Ссылка на модальное окно.
						temp += "<td class=\"calczdtdmwin\">";

							// Сначало вставить в модальное окно, а потом его открыть.
							temp += "<a href=\"javascript:InsertToModalWin2(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I1 + "," + I2 + "," + I3 + "," + R1 + "," + Rn + "," +  P1 + "," + P2 + "," + P3 + "," + UR1 + "," + "'" + "Выборка из Таблице n2." + TableNumber + "'" + "); ";
							temp += "javascript:OpenShowModalWin('TableModalWinBS2');\" title=\"\">";

						temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
						temp += "</a>";
						temp += "</td>";

						temp += "</tr>";
						temp += "</table>";

					temp += "</td>";
					}
					else
					{
					// R1 Два резистора с ближайшем стандартным.
					temp += "<td class=\"wtn2_7 calczdcalculation_z_bg_a\">";

						temp += "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
						temp += "<tr>"

						temp += "<td class=\"calczdcalculation_z_bg_ab\">";

							temp += "<span title=\"" + array_rtitle[0] + "\">";
							temp += R1;
							temp += "</span>";

						temp += "</td>";

						temp += "<td class=\"calczdtd12\">";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[1] + "\">";
							temp += "<b>1</b>";
							temp += "</span>";

							temp += ",";

							temp += "<span class=\"color12 calczdsmalltxt12t\" title=\"" + array_rtitle[2] + "\">";
							temp += "<b>2</b>";
							temp += "</span>";

						temp += "</td>";

						// Ссылка на модальное окно.
						temp += "<td class=\"calczdtdmwin\">";

							// Сначало вставить в модальное окно, а потом его открыть.
							temp += "<a href=\"javascript:InsertToModalWin2(" + (z2 + 1) + "," + Uin + "," + Uout + "," + I1 + "," + I2 + "," + I3 + "," + R1 + "," + Rn + "," +  P1 + "," + P2 + "," + P3 + "," + UR1 + "," + "'" + "Выборка из Таблице n2." + TableNumber + "'" + "); ";
							temp += "javascript:OpenShowModalWin('TableModalWinBS2');\" title=\"\">";

						temp += "<img src=\"images-calczd/numeric_1.png\" title=\"Открыть модальное окно с ближайшем стандартным сопротивлением\">";
						temp += "</a>";
						temp += "</td>";

						temp += "</tr>";
						temp += "</table>";

					temp += "</td>";
					}

				// Rn.
				temp += "<td class=\"wtn2_8 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Сопротивление нагрузки Rн\">";
				temp += Rn;
				temp += "</span>";
				temp += "</td>";

				// P1.
				temp += "<td class=\"wtn2_9 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
				temp += P1;
				temp += "</span>";
				temp += "</td>";

				// P2,
				temp += "<td class=\"wtn2_10 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
				temp += P2;
				temp += "</span>";
				temp += "</td>";

				// P3,
				temp += "<td class=\"wtn2_11 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">";
				temp += P3;
				temp += "</span>";
				temp += "</td>";

				// UR1.
				temp += "<td class=\"wtn2_12 calczdcalculation_z_bg_a\">";
				temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
				temp += "</td>";

				x = 1;
				}

			temp += "</tr>";

			Uin = Uin + UinStep;
			Uin = Number(Uin.toFixed(3));
			}

		temp += "</table>";

		if (z1_2 == 8 || z1_2 == 20 || z1_2 == 32)
			{
			//  8 - Конец таблице n1.1.
			// 20 - Конец таблице n1.2.
			// 32 - Конец таблице n1.3.
			temp += "</div>" // Конец спойлера.
			}
		}

	// Вставка в страницу.
	document.getElementById("ZenerDiodes_Calculation_2").innerHTML = temp;
}

// ---
// | Установить весь input по умолчанию (для таблиц n2).
// ---
function ZDCalculationTableInputDefault_2()
{
	// Поля. Для таблице n2.1.
	document.getElementById("zdtable2_1_input_1").value = 14;   // Uin.
	document.getElementById("zdtable2_1_input_2").value = 1;    // UinStep.
	document.getElementById("zdtable2_1_input_3").value = 5;    // UinStepTotal.
	document.getElementById("zdtable2_1_input_4").value = 12;   // Uout.
	document.getElementById("zdtable2_1_input_5").value = 5;    // I.
	document.getElementById("zdtable2_1_input_6").value = 5;    // IStep.
	document.getElementById("zdtable2_1_input_7").value = 5000; // Rn.

	// Поля. Для таблице n2.2.
	document.getElementById("zdtable2_2_input_1").value = 11;   // Uin.
	document.getElementById("zdtable2_2_input_2").value = 1;    // UinStep.
	document.getElementById("zdtable2_2_input_3").value = 5;    // UinStepTotal.
	document.getElementById("zdtable2_2_input_4").value = 9.1;  // Uout.
	document.getElementById("zdtable2_2_input_5").value = 5;    // I.
	document.getElementById("zdtable2_2_input_6").value = 5;    // IStep.
	document.getElementById("zdtable2_2_input_7").value = 5000; // IStep.

	// Поля. Для таблице n2.3.
	document.getElementById("zdtable2_3_input_1").value = 7;    // Uin.
	document.getElementById("zdtable2_3_input_2").value = 1;    // UinStep.
	document.getElementById("zdtable2_3_input_3").value = 5;    // UinStepTotal.
	document.getElementById("zdtable2_3_input_4").value = 5.1;  // Uout.
	document.getElementById("zdtable2_3_input_5").value = 5;    // I.
	document.getElementById("zdtable2_3_input_6").value = 5;    // IStep.
	document.getElementById("zdtable2_3_input_7").value = 5000; // IStep.

	// Списки устанавливать не будем!
	// Они неизменны!

	// Вывод заново таблиц n2.
	PrintZDCalculationTable_2();
}

// ---
// | Вставить результаты расчётов в модальное окно.
// | Таблицы n2.
// ---
function InsertToModalWin2(Step, Uin, Uout, I1, I2, I3, R1, Rn, P1, P2, P3, UR1, TableNumber)
{
	var temp, Eline, rstring;

	// Вставка номера таблицы и Вставка горизонтальной линии.

		temp = "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		temp += "<tr>";

			temp += "<td width=\"1%\" nowrap class=\"calczdcolortabletxt\">";
			temp += TableNumber;
			temp += "</td>";

			temp += "<td width=\"1%\">&nbsp;</td>";

			// Верхняя линия.
			temp += "<td width=\"98%\">";
				temp += "<hr>";
					temp += "</td>";

		temp += "</tr>";
		temp += "</table>";

		temp += "<br>";

	temp += "<table class=\"calczdcalculation_zebra2\" cellspacing=\"0\" cellpadding=\"0\">";

	// Шапка для расчётов.

	temp += "<tr>";

		// Шаг.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Шаг\">Шаг</span>";
		temp += "</td>";

		// Uin.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Входное напряжение\"><i>Uin</i>, В</span>";
		temp += "</td>";

		// Uout.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\"><i>Uout</i>, В</span>";
		temp += "</td>";

		// I1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Ток протекающий через резистор R1 (ток I1)\"><i>I1</i>, мА</b>";
		temp += "</td>";

		// I2 (ток стабилизации).
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Ток стабилизации (ток I2)\"><i>I2</i>, мА</span>";
		temp += "</td>";

		// I3.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Ток протекающий через нагрузку (ток I3)\"><i>I3</i>, мА</b>";
		temp += "</td>";

		// R1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Сопротивление резистора R1\"><i>R1</i>, Ом</b>";
		temp += "</td>";

		// Rн.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<span title=\"Сопротивление Нагрузки Rн\"><i>Rн</i>, Ом</span>";
		temp += "</td>";

		// P1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Рассеиваемая мощность на резисторе R1 (P1)\"><i>P1</i>, мВт</b>";
		temp += "</td>";

		// P2.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\"><i>P2</i>, мВт</b>";
		temp += "</td>";

		// P3.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Рассеиваемая мощность на нагрузке Rн (P3)\"><i>P3</i>, мВт</b>";
		temp += "</td>";

		// UR1.
		temp += "<td class=\"calczdcalculation_z_bg_a\">";
		temp += "<b title=\"Напряжение на резисторе R1\"><i>UR1</i>, В</b>";
		temp += "</td>";

	temp += "</tr>";

	// Наполняем таблицу (всего одна строка).

	temp += "<tr class=\"calczdcalculation_z_bg_c\">";

		// Шаг.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Шаг\">" + Step + "</span>";
		temp += "</td>";

		// Uin.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Входное напряжение\">" + Uin + "</span>";
		temp += "</td>";

		// Uout.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Выходное напряжение (напряжение стабилизации)\">" + Uout + "</span>";
		temp += "</td>";

		// I1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Ток протекающий через резистор R1 (ток I1)\">" + I1 + "</span>";
		temp += "</td>";

		// I2 (ток стабилизации).
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Ток стабилизации (ток I2)\">" + I2 + "</span>";
		temp += "</td>";

		// I3.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Ток протекающий через нагрузку (ток I3)\">" + I3 + "</span>";
		temp += "</td>";

		// R1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Сопротивление резистора R1\">" + R1 + "</span>";
		temp += "</td>";

		// Rn.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Сопротивление нагрузки\">";
		temp += Rn;
		temp += "</span>";
		temp += "</td>";

		// P1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Рассеиваемая мощность на резисторе R1 (P1)\">";
		temp += P1;
		temp += "</span>";
		temp += "</td>";

		// P2,
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Рассеиваемая мощность на стабилитроне VD1 (P2)\">";
		temp += P2;
		temp += "</span>";
		temp += "</td>";

		// P3,
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Рассеиваемая мощность на нагрузке Rн (P3)\">";
		temp += P3;
		temp += "</span>";
		temp += "</td>";

		// UR1.
		temp += "<td class=\"calczdcalculation_z_bg_b\">";
		temp += "<span title=\"Напряжение на резисторе R1\">" + UR1 + "</span>";
		temp += "</td>";

	temp += "</tr>";

	temp += "</table>";

	temp += "<br>";

		temp += "<table class=\"calczdcalculation_hr2\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
		temp += "<tr>";

			// Нижняя линия.
			temp += "<td width=\"100%\">";
				temp += "<hr>";
					temp += "</td>";

		temp += "</tr>";
		temp += "</table>";

	temp += "<br>";

	// Если набор резисторов E24.
	if (document.getElementById('rb_Etable_2_1').checked)
		{
		ArrayResistor = SearchE24(R1)
		Eline = "(E24)";
		}

	// Если набор резисторов E48.
	if (document.getElementById('rb_Etable_2_2').checked)
		{
		ArrayResistor = SearchE48(R1)
		Eline = "(E48)";
		}

	// Если набор резисторов E96.
	if (document.getElementById('rb_Etable_2_3').checked)
		{
		ArrayResistor = SearchE96(R1)
		Eline = "(E96)";
		}

	temp += "Ближайшее стандартное " + Eline + ":";
	temp += "<br>";
	temp += "<br>";

	var rstring = CALCZDBS_2(R1, Uin, Uout, Rn, 2);

	temp += rstring;
	temp += "<br>";
	temp += "Округленно до двух знаков после точки!";
	temp += "<br>";
	temp += "Всё!";

	// Вставка в модальное окно.
	document.getElementById("MWT2BS2").innerHTML = temp;
}

// ---
// | Получаем ближайшее стандартное сопротивление.
// | Плюс к этому ближайшему делаем дополнительные расчёты.
// | Всё это для title в таблицах n1.
// ---
function ReturnTitleForTable1(R1, Uin, Uout)
{
	var I, Il, Ir, P1, P2;
	var E, El, Er;
	var Eline;
	var rtitle;

	var ArrayResistor = [];

	// Если набор резисторов E24.
	if (document.getElementById('rb_Etable_1_1').checked)
		{
		ArrayResistor = SearchE24(R1)
		Eline = "(E24)";
		}

	// Если набор резисторов E48.
	if (document.getElementById('rb_Etable_1_2').checked)
		{
		ArrayResistor = SearchE48(R1)
		Eline = "(E48)";
		}

	// Если набор резисторов E96.
	if (document.getElementById('rb_Etable_1_3').checked)
		{
		ArrayResistor = SearchE96(R1)
		Eline = "(E96)";
		}

	// - [!] -
	E = ArrayResistor[0]; El =  ArrayResistor[1]; Er =  ArrayResistor[2];

		// Самое первое сопротивление.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			I = (Uin - Uout) / El * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + El + " (I = " + I + "мА, P1 = " + P1 + "мВт, P2 = " + P2 + "мВт" + ")";
			}

		// Самое последнее сопротивление.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			I = (Uin - Uout) / Er * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + Er + " (I = " + I + "мА, P1 = " + P1 + "мВт, P2 = " + P2 + "мВт" + ")";
			}

		// Сопротивление есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			I = (Uin - Uout) / E * 1000; // В мА.
			P1 = (Uin - Uout) * I; // В мВт.
			P2 = Uout * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + E + " (I = " + I + "мА, P1 = " + P1 + "мВт, P2 = " + P2 + "мВт" + ")";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			Il = (Uin - Uout) / El * 1000; // В мА.
			P1 = (Uin - Uout) * Il; // В мВт.
			P2 = Uout * Il; // В мВт.

			Il = Number(Il.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + El + " (I = " + Il + "мА, P1 = " + P1 + "мВт, P2 = " + P2 + "мВт" + ")";

			rtitle += " или ";

			Ir = (Uin - Uout) / Er * 1000; // В мА.
			P1 = (Uin - Uout) * Ir; // В мВт.
			P2 = Uout * Ir; // В мВт.

			Ir = Number(Ir.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rtitle += "R1 = " + Er + " (I = " + Ir + "мА, P1 = " + P1 + "мВт, P2 = " + P2 + "мВт" + ")";
			}

	return rtitle;
}

// ---
// | Получаем ближайшее стандартное сопротивление.
// | Плюс к этому ближайшему делаем дополнительные расчёты.
// | Всё это для title в таблицах n2.
// ---
function ReturnTitleForTable2(Uin, Uout, R1, Rn)
{
	var I1, I2, I3, P1, P2, P3;
	var Il_I1, Il_I2, Il_I3, Ir_I1, Ir_I2, Ir_I3;
	var E, El, Er;
	var Eline;
	var rtitle, rtitlel, rtitler;

	var ArrayResistor = [];

	// Если набор резисторов E24.
	if (document.getElementById('rb_Etable_2_1').checked)
		{
		ArrayResistor = SearchE24(R1)
		Eline = "(E24)";
		}

	// Если набор резисторов E48.
	if (document.getElementById('rb_Etable_2_2').checked)
		{
		ArrayResistor = SearchE48(R1)
		Eline = "(E48)";
		}

	// Если набор резисторов E96.
	if (document.getElementById('rb_Etable_2_3').checked)
		{
		ArrayResistor = SearchE96(R1)
		Eline = "(E96)";
		}

	// - [!] -
	E = ArrayResistor[0]; El =  ArrayResistor[1]; Er =  ArrayResistor[2];

		// Самое первое сопротивление.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			I1 = (Uin - Uout) / El * 1000; // В мА.
			I3 = Uout / Rn * 1000; // В мА.
			I2 = I1 - I3;
			P1 = (Uin - Uout) * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I2 = Number(I2.toFixed(2));
			I3 = Number(I3.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + El + " ";
			rtitle += "(I1 = " + I1 + "мА, I2 = " + I2 + "мА, I3 = " + I3 + "мА, ";
			rtitle += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";

			rtitlel = "0";
			rtitler = "0";
			}

		// Самое последнее сопротивление.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			I1 = (Uin - Uout) / Er * 1000; // В мА.
			I3 = Uout / Rn * 1000; // В мА.
			I2 = I1 - I3;
			P1 = (Uin - Uout) * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I2 = Number(I2.toFixed(2));
			I3 = Number(I3.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + Er + " ";
			rtitle += "(I1 = " + I1 + "мА, I2 = " + I2 + "мА, I3 = " + I3 + "мА, ";
			rtitle += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";

			rtitlel = "0";
			rtitler = "0";
			}

		// Сопротивление есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			I1 = (Uin - Uout) / E * 1000; // В мА.
			I3 = Uout / Rn * 1000; // В мА.
			I2 = I1 - I3;
			P1 = (Uin - Uout) * I1;
			P2 = Uout * I2;
			P3 = Uout * I3;

			I1 = Number(I1.toFixed(2));
			I2 = Number(I2.toFixed(2));
			I3 = Number(I3.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + E + " ";
			rtitle += "(I1 = " + I1 + "мА, I2 = " + I2 + "мА, I3 = " + I3 + "мА, ";
			rtitle += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";

			rtitlel = "0";
			rtitler = "0";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			Il_I1 = (Uin - Uout) / El * 1000; // В мА.
			Il_I3 = Uout / Rn * 1000; // В мА.
			Il_I2 = Il_I1 - Il_I3;
			P1 = (Uin - Uout) * Il_I1;
			P2 = Uout * Il_I2;
			P3 = Uout * Il_I3;

			Il_I1 = Number(Il_I1.toFixed(2));
			Il_I2 = Number(Il_I2.toFixed(2));
			Il_I3 = Number(Il_I3.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rtitle = "Ближайшее стандартное " + Eline + ": R1 = " + El + " ";
			rtitle += "(I1 = " + Il_I1 + "мА, I2 = " + Il_I2 + "мА, I3 = " + Il_I3 + "мА, ";
			rtitle += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";

			rtitlel = rtitle;

			rtitle += " или ";

			Ir_I1 = (Uin - Uout) / Er * 1000; // В мА.
			Ir_I3 = Uout / Rn * 1000; // В мА.
			Ir_I2 = Ir_I1 - Ir_I3;
			P1 = (Uin - Uout) * Ir_I1;
			P2 = Uout * Ir_I2;
			P3 = Uout * Ir_I3;

			Ir_I1 = Number(Ir_I1.toFixed(2));
			Ir_I2 = Number(Ir_I2.toFixed(2));
			Ir_I3 = Number(Ir_I3.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));
			P3 = Number(P3.toFixed(2));

			rtitle += "R1 = " + Er + " ";
			rtitle += "(I1 = " + Ir_I1 + "мА, I2 = " + Ir_I2 + "мА, I3 = " + Ir_I3 + "мА, ";
			rtitle += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";

			rtitler = "Ближайшее стандартное " + Eline + ": R1 = " + Er + " ";
			rtitler += "(I1 = " + Ir_I1 + "мА, I2 = " + Ir_I2 + "мА, I3 = " + Ir_I3 + "мА, ";
			rtitler += "P1 = " + P1 + "мВт, P2 = " + P2 + "мВт, P3 = " + P3 + "мВт)";
			}

	return [rtitle, rtitlel, rtitler];
}

// ---
// | Приложение.
// | Вывод даташита 1.
// ---
function PrintZDDatasheet_1()
{
	// Стабилитроны BZX55_
	var Array_BZX55_Datasheet = [   // Одна строка, 11 позиций!

		"BZX55C2V4", "2.28", "2.56",   "5", "85", "600",   "1",  "50",   "1", "-0.085", "155", // 1.
		"BZX55C2V7",  "2.5",  "2.9",   "5", "85", "600",   "1",  "10",   "1", "-0.080", "135", // 2.
		"BZV55C3V0",  "2.8",  "3.2",   "5", "85", "600",   "1",   "4",   "1", "-0.075", "125", // 3.
		"BZX55C3V3",  "3.1",  "3.5",   "5", "85", "600",   "1",   "2",   "1", "-0.070", "115", // 4.
		"BZX55C3V6",  "3.4",  "3.8",   "5", "85", "600",   "1",   "2",   "1", "-0.065", "105", // 5.
		"BZX55C3V9",  "3.7",  "4.1",   "5", "85", "600",   "1",   "2",   "1", "-0.060",  "95", // 6.
		"BZX55C4V3",  "4.0",  "4.6",   "5", "75", "600",   "1",   "1",   "1", "±0.055",  "90", // 7.
		"BZX55C4V7",  "4.4",  "5.0",   "5", "60", "600",   "1", "0.5",   "1", "±0.030",  "85", // 8.
		"BZX55C5V1",  "4.8",  "5.4",   "5", "35", "550",   "1", "0.1",   "1", "±0.030",  "80", // 9.
		"BZX55C5V6",  "5.2",  "6.0",   "5", "25", "450",   "1", "0.1",   "1", "+0.038",  "70", // 10.
		"BZX55C6V2",  "5.8",  "6.6",   "5", "10", "200",   "1", "0.1",   "2", "+0.045",  "64", // 11.
		"BZX55C6V8",  "6.4",  "7.2",   "5",  "8", "150",   "1", "0.1",   "3", "+0.050",  "58", // 12.
		"BZX55C7V5",  "7.0",  "7.9",   "5",  "7",  "50",   "1", "0.1",   "5", "+0.058",  "53", // 13.
		"BZX55C8V2",  "7.7",  "8.7",   "5",  "7",  "50",   "1", "0.1", "6.2", "+0.062",  "74", // 14.
		"BZX55C9V1",  "8.5",  "9.6",   "5", "10",  "50",   "1", "0.1", "6.8", "+0.068",  "43", // 15.
		 "BZX55C10",  "9.4", "10.6",   "5", "15",  "70",   "1", "0.1", "7.5", "+0.075",  "40", // 16.
		 "BZX55C11", "10.4", "11.6",   "5", "20",  "70",   "1", "0.1", "8.2", "+0.076",  "36", // 17.
		 "BZX55C12", "11.4", "12.7",   "5", "20",  "90",   "1", "0.1", "9.1", "+0.077",  "32", // 18.
		 "BZX55C13", "12.4", "14.1",   "5", "26", "110",   "1", "0.1",  "10", "+0.079",  "29", // 19.
		 "BZX55C15", "13.8", "15.6",   "5", "30", "110",   "1", "0.1",  "11", "+0.082",  "27", // 20.
		 "BZX55C16", "15.3", "17.1",   "5", "40", "170",   "1", "0.1",  "12", "+0.083",  "24", // 21.
		 "BZX55C18", "16.8", "19.1",   "5", "50", "170",   "1", "0.1",  "12", "+0.085",  "21", // 22.
		 "BZX55C20", "18.8", "21.2",   "5", "55", "220",   "1", "0.1",  "15", "+0.086",  "20", // 23.
		 "BZX55C22", "20.8", "23.3",   "5", "55", "220",   "1", "0.1",  "16", "*0.087",  "18", // 24.
		 "BZX55C24", "22.8", "25.6",   "5", "80", "220",   "1", "0.1",  "18", "+0.088",  "16", // 25.
		 "BZX55C27", "25.1", "28.9",   "5", "80", "220",   "1", "0.1",  "20", "+0.090",  "14", // 26.
		 "BZX55C30",   "28",   "32",   "5", "80", "220",   "1", "0.1",  "22", "+0.091",  "13", // 27.
		 "BZX55C33",   "31",   "35",   "5", "80", "220",   "1", "0.1",  "24", "+0.092",  "12", // 28.
		 "BZX55C36",   "34",   "38",   "5", "80", "220",   "1", "0.1",  "27", "+0.093",  "11", // 29.
		 "BZX55C39",   "37",   "41", "2.5", "90", "500", "0.5", "0.1",  "30", "+0.094",  "10"  // 30.

		];

	var Array_BZX55_Title_1 = [
				"Стабилитрон: BZX55C2V4 (2.4В)", // 1.
				"Стабилитрон: BZX55C2V7 (2.7В)", // 2.
				"Стабилитрон: BZV55C3V0 (3В)",   // 3.
				"Стабилитрон: BZX55C3V3 (3.3В)", // 4.
				"Стабилитрон: BZX55C3V6 (3.6В)", // 5.
				"Стабилитрон: BZX55C3V9 (3.9В)", // 6.
				"Стабилитрон: BZX55C4V3 (4.3В)", // 7.
				"Стабилитрон: BZX55C4V7 (4.7В)", // 8.
				"Стабилитрон: BZX55C5V1 (5.1В)", // 9.
				"Стабилитрон: BZX55C5V6 (5.6В)", // 10.
				"Стабилитрон: BZX55C6V2 (6.2В)", // 11.
				"Стабилитрон: BZX55C6V8 (6.8В)", // 12.
				"Стабилитрон: BZX55C7V5 (7.5В)", // 13.
				"Стабилитрон: BZX55C8V2 (8.2В)", // 14.
				"Стабилитрон: BZX55C9V1 (9.1В)", // 15.
				"Стабилитрон: BZX55C10 (10В)",   // 16.
				"Стабилитрон: BZX55C11 (11В)",   // 17.
				"Стабилитрон: BZX55C12 (12В)",   // 18.
				"Стабилитрон: BZX55C13 (13В)",   // 19.
				"Стабилитрон: BZX55C15 (15В)",   // 20.
				"Стабилитрон: BZX55C16 (16В)",   // 21.
				"Стабилитрон: BZX55C18 (18В)",   // 22.
				"Стабилитрон: BZX55C20 (20В)",   // 23.
				"Стабилитрон: BZX55C22 (22В)",   // 24.
				"Стабилитрон: BZX55C24 (24В)",   // 25.
				"Стабилитрон: BZX55C27 (27В)",   // 26.
				"Стабилитрон: BZX55C30 (30В)",   // 27.
				"Стабилитрон: BZX55C33 (33В)",   // 28.
				"Стабилитрон: BZX55C36 (36В)",   // 29.
				"Стабилитрон: BZX55C39 (39В)"    // 30.
			]

	var Array_BZX55_Title_2 = [
				"",
				"Минимальное напряжение стабилизации",
				"Максимальное напряжение стабилизации",
				"мА",
				"Ом",
				"Ом",
				"мА",
				"мкА",
				"Вольт",
				"",
				"мА"
			]

	var temp;

	temp = "<table class=\"calczddatasheet_zebra\" cellspacing=\"0\" cellpadding=\"0\">";

	// Шапка.

	temp += "<tr>";

		// 1.
		temp += "<td class=\"calczddatasheet_z_bg_a\" rowspan=\"2\">";
		temp += "<span title=\"Тип стабилитрона\">TYPE</span>";
		temp += "</td>";

		// 2, 3.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Напряжение стабилизации\">Nominal Zener";
			temp += "<br>";
			temp += "Voltage";
			temp += "<br>";
			temp += "VZ @ IZT";
		temp += "</span>";
		temp += "</td>";

		// 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "<span title=\"Испытательный ток стабилитрона, ток 1\">";
			temp += "Zener";
			temp += "<br>";
			temp += "Test";
			temp += "<br>";
			temp += "Current";
			temp += "<br>";
			temp += "IZT";
		temp += "</span>";
		temp += "</td>";

		// 5, 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Максимальное сопротивление стабилитрона\">";
			temp += "Maximum Zener";
			temp += "<br>";
			temp += "Impedance";
		temp += "</span>";
		temp += "</td>";

		// 7.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "<span title=\"Испытательный ток стабилитрона, ток 2\">IZK</span>";
		temp += "</td>";

		// 8, 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Максимальный обратный ток утечки\">";
			temp += "Maximum Reverse";
			temp += "<br>";
			temp += "Leakage Current";
		temp += "</span>";
		temp += "</td>";

		// 10.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "<span title=\"Температурный коэффициент\">";
			temp += "Typical";
			temp += "<br>";
			temp += "Temperature";
			temp += "<br>";
			temp += "Coefficient";
		temp += "</span>";
		temp += "</td>";

		// 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "<span title=\"Испытательный (максимальный) ток стабилитрона\">";
			temp += "Maximum";
			temp += "<br>";
			temp += "Regulator";
			temp += "<br>";
			temp += "Current";
			temp += "<br>";
			temp += "IZM";
		temp += "</span>";
		temp += "</td>";

	temp += "</tr>";

	temp += "<tr>";

		// 1.
		// ... (пропуск).

		// 2.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "Min";
		temp += "</td>";

		// 3.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "Max";
		temp += "</td>";

		// 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "mA";
		temp += "</td>";

		// 5.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "ZZT @ IZT";
		temp += "<br>";
		temp += "Ohms";
		temp += "</td>";

		// 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "ZZT @ IZK";
		temp += "<br>";
		temp += "Ohms";
		temp += "</td>";

		// 7.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "mA";
		temp += "</td>";

		// 8.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "IR";
		temp += "<br>";
		temp += "µA";
		temp += "</td>";

		// 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "VR";
		temp += "<br>";
		temp += "Volts";
		temp += "</td>";

		// 10.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "% / °C";
		temp += "</td>";

		// 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "mA";
		temp += "</td>";

	temp += "</tr>";

		var x = 1;
		var zz;

		zz = 0;

		for(var z = 0; z < Array_BZX55_Datasheet.length; z++)
			{
			temp += "<tr class=\"calczddatasheet_z_bg_c\">";

			if (x == 1)
				{
				// Формируем строку B.
				for(var y = 0; y < 11; y++)
					{
					temp += "<td class=\"calczddatasheet_z_bg_b\">";
					if (y == 0)
						{
						temp += "<span title=\"" + Array_BZX55_Title_1[zz] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
						else
						{
						temp += "<span title=\"" + Array_BZX55_Title_2[y] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
					z++;
					}
				x = 0;
				}
				else
				{
				// Формируем строку A.
				for(var y = 0; y < 11; y++)
					{
					temp += "<td class=\"calczddatasheet_z_bg_a\">";
					if (y == 0)
						{
						temp += "<span title=\"" + Array_BZX55_Title_1[zz] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
						else
						{
						temp += "<span title=\"" + Array_BZX55_Title_2[y] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
					z++;
					}
				x = 1;
				}

			temp += "</tr>";
			z--; zz++;
			}

	temp += "</table>";

	// Вставка в страницу.
	document.getElementById("ZenerDiodes_BZX55_1").innerHTML = temp;
}

// ---
// | Приложение.
// | Вывод даташита 2.
// ---
function PrintZDDatasheet_2()
{
	// Стабилитроны BZX55_
	var Array_BZX55_Datasheet = [   // Одна строка, 13 позиций!

	"BZX55C2V4", "2.28", "2.4", "2.56",   "5",   "1",  "<50", "<100",   "1",  "<85",  "<600", "-0.09", "-0.06", // 1.
	"BZX55C2V7",  "2.5", "2.7",  "2.9",   "5",   "1",  "<10",  "<50",   "1",  "<85",  "<600", "-0.09", "-0.06", // 2.
	"BZX55C3V0",  "2.8", "3.0",  "3.2",   "5",   "1",   "<4",  "<40",   "1",  "<85",  "<600", "-0.08", "-0.05", // 3.
	"BZX55C3V3",  "3.1", "3.3",  "3.5",   "5",   "1",   "<2",  "<40",   "1",  "<85",  "<600", "-0.08", "-0.05", // 4.
	"BZX55C3V6",  "3.4", "3.6",  "3.8",   "5",   "1",   "<2",  "<40",   "1",  "<85",  "<600", "-0.08", "-0.05", // 5.
	"BZX55C3V9",  "3.7", "3.9",  "4.1",   "5",   "1",   "<2",  "<40",   "1",  "<85",  "<600", "-0.08", "-0.05", // 6.
	"BZX55C4V3",    "4", "4.3",  "4.6",   "5",   "1",   "<1",  "<20",   "1",  "<75",  "<600", "-0.06", "-0.03", // 7.
	"BZX55C4V7",  "4.4", "4.7",    "5",   "5",   "1", "<0.5",  "<10",   "1",  "<60",  "<600", "-0.05",  "0.02", // 8.
	"BZX55C5V1",  "4.8", "5.1",  "5.4",   "5",   "1", "<0.1",   "<2",   "1",  "<35",  "<550", "-0.02",  "0.02", // 9.
	"BZX55C5V6",  "5.2", "5.6",    "6",   "5",   "1", "<0.1",   "<2",   "1",  "<25",  "<450", "-0.05",  "0.05", // 10.
	"BZX55C6V2",  "5.8", "6.2",  "6.6",   "5",   "1", "<0.1",   "<2",   "2",  "<10",  "<200",  "0.03",  "0.06", // 11.
	"BZX55C6V8",  "6.4", "6.8",  "7.2",   "5",   "1", "<0.1",   "<2",   "3",   "<8",  "<150",  "0.03",  "0.07", // 12.
	"BZX55C7V5",    "7", "7.5",  "7.9",   "5",   "1", "<0.1",   "<2",   "5",   "<7",   "<50",  "0.03",  "0.07", // 13.
	"BZX55C8V2",  "7.7", "8.2",  "8.7",   "5",   "1", "<0.1",   "<2", "6.2",   "<7",   "<50",  "0.03",  "0.08", // 14.
	"BZX55C9V1",  "8.5", "9.1",  "9.6",   "5",   "1", "<0.1",   "<2", "6.8",  "<10",   "<50",  "0.03",  "0.09", // 15.
	 "BZX55C10",  "9.4",  "10", "10.6",   "5",   "1", "<0.1",   "<2", "7.5",  "<15",   "<70",  "0.03",   "0.1", // 16.
	 "BZX55C11", "10.4",  "11", "11.6",   "5",   "1", "<0.1",   "<2", "8.2",  "<20",   "<70",  "0.03",  "0.11", // 17.
	 "BZX55C12", "11.4",  "12", "12.7",   "5",   "1", "<0.1",   "<2", "9.1",  "<20",   "<90",  "0.03",  "0.11", // 18.
	 "BZX55C13", "12.4",  "13", "14.1",   "5",   "1", "<0.1",   "<2",  "10",  "<26",  "<110",  "0.03",  "0.11", // 19.
	 "BZX55C15", "13.8",  "15", "15.6",   "5",   "1", "<0.1",   "<2",  "11",  "<30",  "<110",  "0.03",  "0.11", // 20.
	 "BZX55C16", "15.3",  "16", "17.1",   "5",   "1", "<0.1",   "<2",  "12",  "<40",  "<170",  "0.03",  "0.11", // 21.
	 "BZX55C18", "16.8",  "18", "19.1",   "5",   "1", "<0.1",   "<2",  "13",  "<50",  "<170",  "0.03",  "0.11", // 22.
	 "BZX55C20", "18.8",  "20", "21.2",   "5",   "1", "<0.1",   "<2",  "15",  "<55",  "<220",  "0.03",  "0.11", // 23.
	 "BZX55C22", "20.8",  "22", "23.3",   "5",   "1", "<0.1",   "<2",  "16",  "<55",  "<220",  "0.04",  "0.12", // 24.
	 "BZX55C24", "22.8",  "24", "25.6",   "5",   "1", "<0.1",   "<2",  "18",  "<80",  "<220",  "0.04",  "0.12", // 25.
	 "BZX55C27", "25.1",  "27", "28.9",   "5",   "1", "<0.1",   "<2",  "20",  "<80",  "<220",  "0.04",  "0.12", // 26.
	 "BZX55C30",   "28",  "30",   "32",   "5",   "1", "<0.1",   "<2",  "22",  "<80",  "<220",  "0.04",  "0.12", // 27.
	 "BZX55C33",   "31",  "33",   "35",   "5",   "1", "<0.1",   "<2",  "24",  "<80",  "<220",  "0.04",  "0.12", // 28.
	 "BZX55C36",   "34",  "36",   "38",   "5",   "1", "<0.1",   "<2",  "27",  "<80",  "<220",  "0.04",  "0.12", // 29.
	 "BZX55C39",   "37",  "39",   "41", "2.5", "0.5", "<0.1",   "<5",  "30",  "<90",  "<500",  "0.04",  "0.12", // 30.
	 "BZX55C43",   "40",  "43",   "46", "2.5", "0.5", "<0.1",   "<5",  "33",  "<90",  "<600",  "0.04",  "0.12", // 31.
	 "BZX55C47",   "44",  "47",   "50", "2.5", "0.5", "<0.1",   "<5",  "36", "<110",  "<700",  "0.04",  "0.12", // 32.
	 "BZX55C51",   "48",  "51",   "54", "2.5", "0.5", "<0.1",  "<10",  "39", "<125",  "<700",  "0.04",  "0.12", // 33.
	 "BZX55C56",   "52",  "56",   "60", "2.5", "0.5", "<0.1",  "<10",  "43", "<135", "<1000",  "0.04",  "0.12", // 34.
	 "BZX55C62",   "58",  "62",   "66", "2.5", "0.5", "<0.1",  "<10",  "47", "<150", "<1000",  "0.04",  "0.12", // 35.
	 "BZX55C68",   "64",  "68",   "72", "2.5", "0.5", "<0.1",  "<10",  "51", "<200", "<1000",  "0.04",  "0.12", // 36.
	 "BZX55C75",   "70",  "75",   "79", "2.5", "0.5", "<0.1",  "<10",  "56", "<250", "<1500",  "0.04",  "0.12"  // 37.

	];

	var Array_BZX55_Title_1 = [
				"Стабилитрон: BZX55C2V4 (2.4В)", // 1.
				"Стабилитрон: BZX55C2V7 (2.7В)", // 2.
				"Стабилитрон: BZV55C3V0 (3В)",   // 3.
				"Стабилитрон: BZX55C3V3 (3.3В)", // 4.
				"Стабилитрон: BZX55C3V6 (3.6В)", // 5.
				"Стабилитрон: BZX55C3V9 (3.9В)", // 6.
				"Стабилитрон: BZX55C4V3 (4.3В)", // 7.
				"Стабилитрон: BZX55C4V7 (4.7В)", // 8.
				"Стабилитрон: BZX55C5V1 (5.1В)", // 9.
				"Стабилитрон: BZX55C5V6 (5.6В)", // 10.
				"Стабилитрон: BZX55C6V2 (6.2В)", // 11.
				"Стабилитрон: BZX55C6V8 (6.8В)", // 12.
				"Стабилитрон: BZX55C7V5 (7.5В)", // 13.
				"Стабилитрон: BZX55C8V2 (8.2В)", // 14.
				"Стабилитрон: BZX55C9V1 (9.1В)", // 15.
				"Стабилитрон: BZX55C10 (10В)",   // 16.
				"Стабилитрон: BZX55C11 (11В)",   // 17.
				"Стабилитрон: BZX55C12 (12В)",   // 18.
				"Стабилитрон: BZX55C13 (13В)",   // 19.
				"Стабилитрон: BZX55C15 (15В)",   // 20.
				"Стабилитрон: BZX55C16 (16В)",   // 21.
				"Стабилитрон: BZX55C18 (18В)",   // 22.
				"Стабилитрон: BZX55C20 (20В)",   // 23.
				"Стабилитрон: BZX55C22 (22В)",   // 24.
				"Стабилитрон: BZX55C24 (24В)",   // 25.
				"Стабилитрон: BZX55C27 (27В)",   // 26.
				"Стабилитрон: BZX55C30 (30В)",   // 27.
				"Стабилитрон: BZX55C33 (33В)",   // 28.
				"Стабилитрон: BZX55C36 (36В)",   // 29.
				"Стабилитрон: BZX55C39 (39В)",   // 30.
				"Стабилитрон: BZX55C43 (43В)",   // 31.
				"Стабилитрон: BZX55C47 (47В)",   // 32.
				"Стабилитрон: BZX55C51 (51В)",   // 33.
				"Стабилитрон: BZX55C56 (56В)",   // 34.
				"Стабилитрон: BZX55C62 (62В)",   // 35.
				"Стабилитрон: BZX55C68 (68В)",   // 36.
				"Стабилитрон: BZX55C75 (75В)",   // 37.
			]

	var Array_BZX55_Title_2 = [
				"",
				"Минимальное напряжение стабилизации",
				"Номинальное напряжение стабилизации",
				"Максимальное напряжение стабилизации",
				"мА",
				"мА",
				"мкА",
				"мкА",
				"Вольт",
				"Ом",
				"Ом",
				"",
				""
			]

	var temp;

	temp = "<table class=\"calczddatasheet_zebra\" cellspacing=\"0\" cellpadding=\"0\">";

	// Шапка.

	temp += "<tr>";

		// 1.
		temp += "<td class=\"calczddatasheet_z_bg_a\" rowspan=\"5\">";
		temp += "<span title=\"Тип стабилитрона\">PART NUMBER</span>";
		temp += "</td>";

		// 2, 3, 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"3\">";
		temp += "<span title=\"Напряжение стабилизации и его разброс\">";
			temp += "ZENER VOLTAGE";
			temp += "<br>";
			temp += "RANGE";
		temp += "</span>";
		temp += "</td>";

		// 5, 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Испытательный ток стабилитрона\">TEST CURRENT</span>";
		temp += "</td>";

		// 7, 8, 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"3\">";
		temp += "<span title=\"Обратный ток утечки\">";
			temp += "REVERSE LEAKAGE";
			temp += "<br>";
			temp += "CURRENT";
		temp += "</span>";
		temp += "</td>";

		// 10, 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Динамическое сопротивление (дифференциальное сопротивление)\">";
			temp += "DYNAMIC";
			temp += "<br>";
			temp += "RESISTANGE";
		temp += "</span>";
		temp += "</td>";

		// 12, 13.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "<span title=\"Температурный коэффициент\">";
			temp += "TEMPERATURE";
			temp += "<br>";
			temp += "COEFFICIENT";
		temp += "</span>";
		temp += "</td>";

	temp += "</tr>";

	temp += "<tr>";

		// 1.
		// ... (пропуск).

		// 2, 3, 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"3\" rowspan=\"2\">";
		temp += "V<sub>Z</sub> at I<sub>ZT1";
		temp += "</td>";

		// 5.
		temp += "<td class=\"calczddatasheet_z_bg_a\" rowspan=\"2\">";
		temp += "I<sub>ZT1</sub>";
		temp += "</td>";

		// 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\" rowspan=\"2\">";
		temp += "I<sub>ZT2</sub>";
		temp += "</td>";

		// 7, 8, 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"3\">";
		temp += "I<sub>R</sub> at V<sub>R</sub>";
		temp += "</td>";

		// 10.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "Z<sub>ZT</sub> at I<sub>ZT1</sub>";
		temp += "</td>";

		// 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "Z<sub>ZK</sub> at I<sub>ZT2</sub>";
		temp += "</td>";

		// 12, 13.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\" rowspan=\"2\">";
		temp += "TK<sub>VZ</sub>";
		temp += "</td>";

	temp += "</tr>";

	temp += "<tr>";

		// 1.
		// ... (пропуск).

		// 2, 3, 4.
		// ... (пропуск).

		// 5, 6.
		// ... (пропуск).

		// 7.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "T<sub>amb</sub>=";
		temp += "<br>";
		temp += "25°C";
		temp += "</td>";

		// 8.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "T<sub>amb</sub>=";
		temp += "<br>";
		temp += "150°C";
		temp += "</td>";

		// 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 10, 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "f = 1 kHz";
		temp += "</td>";

		// 12, 13.
		// ... (пропуск).

	temp += "</tr>";

	temp += "<tr>";

		// 1.
		// ... (пропуск).

		// 2, 3, 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"3\">";
		temp += "V";
		temp += "</td>";

		// 5, 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "mA";
		temp += "</td>";

		// 7, 8.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "µA";
		temp += "</td>";

		// 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "V";
		temp += "</td>";

		// 10, 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "&#937;";
		temp += "</td>";

		// 12, 13.
		temp += "<td class=\"calczddatasheet_z_bg_a\" colspan=\"2\">";
		temp += "% / K";
		temp += "</td>";

	temp += "</tr>";

	temp += "<tr>";

		// 1.
		// ... (пропуск).

		// 2.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MIN.";
		temp += "</td>";

		// 3.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "NOM.";
		temp += "</td>";

		// 4.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MAX.";
		temp += "</td>";

		// 5.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 6.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 7.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 8.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 9.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "</td>";

		// 10.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MAX.";
		temp += "</td>";

		// 11.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MAX.";
		temp += "</td>";

		// 12.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MIN.";
		temp += "</td>";

		// 13.
		temp += "<td class=\"calczddatasheet_z_bg_a\">";
		temp += "MAX.";
		temp += "</td>";

	temp += "</tr>";

		var x = 1;
		var zz;

		zz = 0;

		for(var z = 0; z < Array_BZX55_Datasheet.length; z++)
			{
			temp += "<tr class=\"calczddatasheet_z_bg_c\">";

			if (x == 1)
				{
				// Формируем строку B.
				for(var y = 0; y < 13; y++)
					{
					temp += "<td class=\"calczddatasheet_z_bg_b\">";
					if (y == 0)
						{
						temp += "<span title=\"" + Array_BZX55_Title_1[zz] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
						else
						{
						temp += "<span title=\"" + Array_BZX55_Title_2[y] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
					z++;
					}
				x = 0;
				}
				else
				{
				// Формируем строку A.
				for(var y = 0; y < 13; y++)
					{
					temp += "<td class=\"calczddatasheet_z_bg_a\">";
					if (y == 0)
						{
						temp += "<span title=\"" + Array_BZX55_Title_1[zz] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
						else
						{
						temp += "<span title=\"" + Array_BZX55_Title_2[y] + "\">" + Array_BZX55_Datasheet[z] + "</span></td>";
						}
					z++;
					}
				x = 1;
				}

			temp += "</tr>";
			z--; zz++;
			}

	temp += "</table>";

	// Вставка в страницу.
	document.getElementById("ZenerDiodes_BZX55_2").innerHTML = temp;
}

//
// Приложение.
// Алгоритм ближайшего стандартного.
//
function AlgorithmRBS()
{
	var Array_1 =

		[

		// Наброски.

"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"2502","0020","0020","0020","0020","0020","0020","0020","0020","0031","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","2502","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0032","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0033","0020","0020","0020","0020","0020","0020","0020","0020",
"2502","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","2502","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","2502","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","250c","2500","2500","2500","2500","2500","2510","0020","0020","0020","0020","0020","250c","2500","2500",
"2500","2500","2500","2510","250c","2500","2500","2500","2500","2500","2510","250c","2500","2500","2500","2500",
"2500","2510","0020","0020","0020","0020","0020","250c","2500","2500","2500","2500","2500","2510","250c","2500",
"2500","2500","2500","2500","2510","250c","2500","2500","2500","2500","2500","2510","0020","0020","0020","0020",
"0020","250c","2500","2500","2500","2500","2500","2510","000a","0420","044f","0434","0020","0440","0435","0437",
"0438","0441","0442","043e","0440","043e","0432","0020","0045","0032","0034","0020","0028","043c","0430","0441",
"0441","0438","0432","0029","003a","0020","2502","0020","0020","0030","0020","0020","2502","0020","002e","002e",
"002e","0020","2502","0020","0020","0037","0030","0020","2502","2502","0020","0020","0037","0031","0020","2502",
"2502","0020","0020","0037","0032","0020","2502","0020","002e","002e","002e","0020","2502","0020","0031","0034",
"0032","0020","2502","2502","0020","0031","0034","0033","0020","2502","2502","0020","0031","0034","0034","0020",
"2502","0020","002e","002e","002e","0020","2502","0020","0032","0031","0035","0020","2502","0020","002d","003e",
"0020","0412","0441","0435","0433","043e","003a","0020","0032","0031","0036","0020","0440","0435","0437","0438",
"0441","0442","043e","0440","043e","0432","002e","000a","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","2514","2500","2500","2500","2500","2500","2518","0020","0020","0020","0020",
"0020","2514","2500","2500","2500","2500","2500","2518","2514","2500","2500","2500","2500","2500","2518","2514",
"2500","2500","2500","2500","2500","2518","0020","0020","0020","0020","0020","2514","2500","2500","2500","2500",
"2500","2518","2514","2500","2500","2500","2500","2500","2518","2514","2500","2500","2500","2500","2500","2518",
"0020","0020","0020","0020","0020","2514","2500","2500","2500","2500","2500","2518","000a","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020","0020",
"2502","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","2502","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020",
"0020","2502","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","000a","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502",
"000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","2502","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020",
"0020","0020","0039","0031","0020","041e","043c","0020","0020","0020","0020","2502","0020","0020","0020","0020",
"0020","0020","0020","0020","0038","0032","0030","0030","0030","0020","041e","043c","0020","0020","2502","0020",
"0020","0020","0031","0030","0030","0030","0030","0030","0020","041e","043c","0020","0020","0020","0020","0020",
"0020","2502","000a","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0030","002e","0031","0020","041e","043c","0020","0020","0020","0020","0020","0020","0038","0032",
"0020","041e","043c","0020","0020","0020","0020","0020","0020","0020","0020","0020","0031","0030","0030","0020",
"041e","043c","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0039","0031",
"0030","0030","0030","0020","041e","043c","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0039","0031","0030","0030","0030","0030","0030","0030","0020","041e","043c","000a","000a","0020","0020","0020",
"0421","043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","044f","0020","0440","0435",
"0437","0438","0441","0442","043e","0440","043e","0432","0020","0432","0020","043c","0430","0441","0441","0438",
"0432","0435","0020","0440","0430","0441","043f","043e","043b","043e","0436","0435","043d","044b","0020","043f",
"043e","0020","0432","043e","0437","0440","0430","0441","0442","0430","043d","0438","044e","0021","000a","000a",
"0020","0020","0020","0076","0061","0072","0020","0058","0020","003d","0020","041a","0430","043a","043e","0435",
"002d","0442","043e","0020","0441","043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438",
"0435","003b","000a","0020","0020","0020","0076","0061","0072","0020","0059","002c","0020","0059","006c","002c",
"0020","0059","0072","003b","000a","000a","0020","0020","0020","0428","0430","0433","0020","0031","003a","0020",
"0415","0441","043b","0438","0020","0058","0020","043c","0435","043d","044c","0448","0435","0020","0030","002e",
"0031","0020","041e","043c","0020","0028","0030","002e","0031","0020","041e","043c","0020","0431","0435","0440",
"0451","043c","0020","0438","0437","0020","043c","0430","0441","0441","0438","0432","0430","0029","002c","0020",
"0442","043e","0020","0059","0020","003d","0020","0030","002e","0031","0020","041e","043c","002e","0020","041a",
"043e","043d","0435","0446","002e","0020","0421","043e","043f","0440","043e","0442","0438","0432","043b","0435",
"043d","0438","0435","0020","043d","0430","0439","0434","0435","043d","043e","002e","0020","0418","043d","0430",
"0447","0435","0020","0428","0430","0433","0020","0032","002e","000a","0020","0020","0020","0428","0430","0433",
"0020","0032","003a","0020","0415","0441","043b","0438","0020","0058","0020","0431","043e","043b","044c","0448",
"0435","0020","0039","0031","0030","0030","0030","0030","0030","0030","0020","041e","043c","0020","0028","0039",
"0031","0030","0030","0030","0030","0030","0030","0020","041e","043c","0020","0431","0435","0440","0451","043c",
"0020","0438","0437","0020","043c","0430","0441","0441","0438","0432","0430","0029","002c","0020","0442","043e",
"0020","0059","0020","003d","0020","0039","0031","0030","0030","0030","0030","0030","0030","0020","041e","043c",
"002e","0020","041a","043e","043d","0435","0446","002e","0020","0421","043e","043f","0440","043e","0442","0438",
"0432","043b","0435","043d","0438","0435","0020","043d","0430","0439","0434","0435","043d","043e","002e","0020",
"0418","043d","0430","0447","0435","0020","0428","0430","0433","0020","0033","002e","000a","0020","0020","0020",
"0428","0430","0433","0020","0033","003a","0020","0426","0438","043a","043b","002e","0020","041f","0435","0440",
"0435","0431","0438","0440","0430","0435","043c","0020","0432","0435","0441","044c","0020","043c","0430","0441",
"0441","0438","0432","0021","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0415","0441","043b","0438","0020","0058","0020","043d","0430","0439","0434",
"0435","043d","0020","0432","0020","043c","0430","0441","0441","0438","0432","0435","002c","0020","0442","043e",
"0020","0059","0020","003d","0020","0058","002e","0020","041a","043e","043d","0435","0446","002e","0020","0421",
"043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","0435","0020","043d","0430","0439",
"0434","0435","043d","043e","002e","0020","0418","043d","0430","0447","0435","0020","0428","0430","0433","0020",
"0034","0020","0028","043f","043e","0441","043b","0435","0434","043d","0438","0439","0029","002e","000a","0020",
"0020","0020","0428","0430","0433","0020","0034","003a","0020","0426","0438","043a","043b","002e","0020","041f",
"0435","0440","0435","0431","0438","0440","0430","0435","043c","0020","0432","0435","0441","044c","0020","043c",
"0430","0441","0441","0438","0432","0021","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0415","0441","043b","0438","0020","0441","043e","043f","0440",
"043e","0442","0438","0432","043b","0435","043d","0438","0435","0020","0438","0437","0020","043c","0430","0441",
"0441","0438","0432","0430","0020","0431","043e","043b","044c","0448","0435","0020","0058","002c","0020","0442",
"043e","0020","0432","0020","0059","0072","0020","003d","0020","0441","043e","043f","0440","043e","0442","0438",
"0432","043b","0435","043d","0438","0435","0020","043a","043e","0442","043e","0440","043e","0435","0020","0431",
"043e","043b","044c","0448","0435","0020","0058","002e","000a","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0414","0430","043b","044c","0448","0435","0020",
"0443","043a","0430","0437","0430","0442","0435","043b","044c","0020","043c","0430","0441","0441","0438","0432",
"0430","0020","043c","0438","043d","0443","0441","0020","0031","002c","0020","0438","0020","0432","0020","0059",
"006c","0020","003d","0020","0434","0440","0443","0433","043e","0435","0020","0441","043e","043f","0440","043e",
"0442","0438","0432","043b","0435","043d","0438","0435","0020","0438","0437","0020","043c","0430","0441","0441",
"0438","0432","0430","002e","000a","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","250c","2500","2500","2500","2500","2510","0020","250c","2500","2500","2500",
"2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2510","0020",
"250c","2500","2500","2500","2500","2510","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","2502","0020","0059","006c","0020","2502","0020","2502","0020","0421",
"043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","0435","0020","0058","0020","2502",
"0020","2502","0020","0059","0072","0020","2502","000a","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","2514","2500","2500","2500","2500","2518","0020","2514","2500",
"2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500","2500",
"2518","0020","2514","2500","2500","2500","2500","2518","000a","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","2502","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","2502","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","2514","2500","2500","2500","2500","0020","041f","0440","0430","0432","043e","0435","0020",
"0441","0442","0430","043d","0434","0430","0440","0442","043d","043e","0435","0020","0441","043e","043f","0440",
"043e","0442","0438","0432","043b","0435","043d","0438","0435","002c","0020","0431","043e","043b","044c","0448",
"0435","0020","0058","002e","000a","000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","041b","0435","0432","043e","0435","0020","0441","0442","0430","043d","0434",
"0430","0440","0442","043d","043e","0435","0020","0441","043e","043f","0440","043e","0442","0438","0432","043b",
"0435","043d","0438","0435","002c","0020","043c","0435","043d","044c","0448","0435","0020","0058","002e","000a",
"000a","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020",
"041f","0440","0438","043c","0435","0447","0430","043d","0438","0435","002e","000a","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0020","0414","043b","044f","0020","0428",
"0430","0433","0027","0430","0020","0034","002c","0020","0446","0438","043a","043b","0020","043d","0430","0447",
"0438","043d","0430","0435","0442","0441","044f","0020","043d","0435","0020","0441","0020","0030","002c","0020",
"0430","0020","0441","0020","0031","002e","000a","000a","0020","0020","0020","0020","0020","0020","0020","0020",
"0020","0020","0020","0020","0020","0020","0020","041a","043e","043d","0435","0446","002e","000a","000a","041f",
"0440","0438","043c","0435","0447","0430","043d","0438","0435","002e","000a","0032","0031","0036","0020","002f",
"0020","0033","0020","003d","0020","0037","0032","002e","0020","0037","0032","0020","002d","0020","0031","0020",
"003d","0020","0037","0031","002e","0020","0037","0031","0020","002b","0020","0037","0032","0020","003d","0020",
"0031","0034","0033","002e","0020","0031","0034","0033","0020","002b","0020","0037","0032","0020","003d","0020",
"0032","0031","0035","002e","000a","000a","0020","0020","0020","0055","006b","0072","0061","0069","006e","0065",
"002e","0020","0028","0043","0029","0020","0414","0435","043c","0438","0434","043e","0432","0020","0421","002e",
"0412","002e"

		];

	var string_1, z, temp1, temp2;

	string_1 = "";

	// Раскодировать текст.
	for(z = 0; z < Array_1.length; z++)
		{
		temp1 = Number("0x" + Array_1[z]);
		temp2 = String.fromCharCode(temp1); // Возвращает символ из кода.

		if (temp2 == '\n')
			{
			temp2 = "<br>";
			}

		string_1 += temp2;
		}

		// Заменить обычный пробел на неразрывный.
		string_1 = string_1.replace(/ /g, "&nbsp;");

		// Жирным шрифтом.
		string_1 = string_1.replace(/E24/g, "<b>E24</b>");
		string_1 = string_1.replace(/&nbsp;216&nbsp;/g, "<b>&nbsp;216&nbsp;</b>");
		string_1 = string_1.replace(/(Шаг&nbsp;1|Шаг&nbsp;2|Шаг&nbsp;3|Шаг&nbsp;4)/g, "<b>$1</b>");
		string_1 = string_1.replace(/Конец/g, "<b>Конец</b>");

		// Вместо жирного, темнее сделаем.
		string_1 = string_1.replace(/Примечание./g, "<span style=\"color: #101010;\">Примечание.</span>");

	// вставить в страницу.
	document.getElementById('rBS_1').innerHTML = string_1;

// ---

	// Программа на JavaScript.

	var Array_2 =

		[

"002f","002f","000a","002f","002f","0020","0055","006b","0072","0061","0069","006e","0065","002e","0020","0028",
"0043","0029","0020","0414","0435","043c","0438","0434","043e","0432","0020","0421","002e","0412","002e","000a",
"002f","002f","000a","002f","002f","0020","002d","002d","002d","000a","002f","002f","0020","007c","0020","041d",
"0430","0445","043e","0434","0438","043c","0020","0431","043b","0438","0436","0430","0439","0448","0435","0435",
"0020","0441","0442","0430","043d","0434","0430","0440","0442","043d","043e","0435","0020","0441","043e","043f",
"0440","043e","0442","0438","0432","043b","0435","043d","0438","0435","002e","000a","002f","002f","0020","007c",
"0020","0045","0032","0034","002e","000a","002f","002f","0020","002d","002d","002d","000a","0066","0075","006e",
"0063","0074","0069","006f","006e","0020","0053","0065","0061","0072","0063","0068","0045","0032","0034","0028",
"0052","0031","0029","000a","007b","000a","0009","002f","002f","0020","0422","0430","0431","043b","0438","0446",
"0430","0020","0440","0435","0437","0438","0441","0442","043e","0440","043e","0432","0020","0415","0032","0034",
"0020","0028","0432","0020","041e","043c","0430","0445","0029","002e","0020","0412","0441","0435","0433","043e",
"0020","0032","0031","0036","002e","000a","0009","002f","002f","0020","002b","002d","0020","0035","0025","002e",
"000a","0009","0076","0061","0072","0020","0041","0072","0072","0061","0079","0045","0032","0034","0020","003d",
"0020","005b","000a","0009","0009","0009","0030","002e","0031","002c","0020","0030","002e","0031","0031","002c",
"0020","0030","002e","0031","0032","002c","0020","0030","002e","0031","0033","002c","0020","0030","002e","0031",
"0035","002c","0020","0030","002e","0031","0036","002c","0020","0030","002e","0031","0038","002c","0020","0030",
"002e","0032","002c","000a","0009","0009","0009","0030","002e","0032","0032","002c","0020","0030","002e","0032",
"0034","002c","0020","0030","002e","0032","0037","002c","0020","0030","002e","0033","002c","0020","0030","002e",
"0033","0033","002c","0020","0030","002e","0033","0036","002c","0020","0030","002e","0033","0039","002c","0020",
"0030","002e","0034","0033","002c","000a","0009","0009","0009","0030","002e","0034","0037","002c","0020","0030",
"002e","0035","0031","002c","0020","0030","002e","0035","0036","002c","0020","0030","002e","0036","0032","002c",
"0020","0030","002e","0036","0038","002c","0020","0030","002e","0037","0035","002c","0020","0030","002e","0038",
"0032","002c","0020","0030","002e","0039","0031","002c","000a","0009","0009","0009","0031","002c","0020","0031",
"002e","0031","002c","0020","0031","002e","0032","002c","0020","0031","002e","0033","002c","0020","0031","002e",
"0035","002c","0020","0031","002e","0036","002c","0020","0031","002e","0038","002c","0020","0032","002c","000a",
"0009","0009","0009","0032","002e","0032","002c","0020","0032","002e","0034","002c","0020","0032","002e","0037",
"002c","0020","0033","002c","0020","0033","002e","0033","002c","0020","0033","002e","0036","002c","0020","0033",
"002e","0039","002c","0020","0034","002e","0033","002c","000a","0009","0009","0009","0034","002e","0037","002c",
"0020","0035","002e","0031","002c","0020","0035","002e","0036","002c","0020","0036","002e","0032","002c","0020",
"0036","002e","0038","002c","0020","0037","002e","0035","002c","0020","0038","002e","0032","002c","0020","0039",
"002e","0031","002c","0020","0031","0030","002c","0020","0031","0031","002c","000a","0009","0009","0009","0031",
"0032","002c","0020","0031","0033","002c","0020","0031","0035","002c","0020","0031","0036","002c","0020","0031",
"0038","002c","0020","0032","0030","002c","0020","0032","0032","002c","0020","0032","0034","002c","000a","0009",
"0009","0009","0032","0037","002c","0020","0033","0030","002c","0020","0033","0033","002c","0020","0033","0036",
"002c","0020","0033","0039","002c","0020","0034","0033","002c","0020","0034","0037","002c","0020","0035","0031",
"002c","000a","0009","0009","0009","0035","0036","002c","0020","0036","0032","002c","0020","0036","0038","002c",
"0020","0037","0035","002c","0020","0038","0032","002c","0020","0039","0031","002c","0020","0031","0030","0030",
"002c","0020","0031","0031","0030","002c","000a","0009","0009","0009","0031","0032","0030","002c","0020","0031",
"0033","0030","002c","0020","0031","0035","0030","002c","0020","0031","0036","0030","002c","0020","0031","0038",
"0030","002c","0020","0032","0030","0030","002c","0020","0032","0032","0030","002c","0020","0032","0034","0030",
"002c","000a","0009","0009","0009","0032","0037","0030","002c","0020","0033","0030","0030","002c","0020","0033",
"0033","0030","002c","0020","0033","0036","0030","002c","0020","0033","0039","0030","002c","0020","0034","0033",
"0030","002c","0020","0034","0037","0030","002c","0020","0035","0031","0030","002c","000a","0009","0009","0009",
"0035","0036","0030","002c","0020","0036","0032","0030","002c","0020","0036","0038","0030","002c","0020","0037",
"0035","0030","002c","0020","0038","0032","0030","002c","0020","0039","0031","0030","002c","0020","0031","0030",
"0030","0030","002c","0020","0031","0031","0030","0030","002c","0020","0031","0032","0030","0030","002c","000a",
"0009","0009","0009","0031","0033","0030","0030","002c","0020","0031","0035","0030","0030","002c","0020","0031",
"0036","0030","0030","002c","0020","0031","0038","0030","0030","002c","0020","0032","0030","0030","0030","002c",
"0020","0032","0032","0030","0030","002c","0020","0032","0034","0030","0030","002c","0020","0032","0037","0030",
"0030","002c","000a","0009","0009","0009","0033","0030","0030","0030","002c","0020","0033","0033","0030","0030",
"002c","0020","0033","0036","0030","0030","002c","0020","0033","0039","0030","0030","002c","0020","0034","0033",
"0030","0030","002c","0020","0034","0037","0030","0030","002c","0020","0035","0031","0030","0030","002c","0020",
"0035","0036","0030","0030","002c","000a","0009","0009","0009","0036","0032","0030","0030","002c","0020","0036",
"0038","0030","0030","002c","0020","0037","0035","0030","0030","002c","0020","0038","0032","0030","0030","002c",
"0020","0039","0031","0030","0030","002c","0020","0031","0030","0030","0030","0030","002c","0020","0031","0031",
"0030","0030","0030","002c","0020","0031","0032","0030","0030","0030","002c","000a","0009","0009","0009","0031",
"0033","0030","0030","0030","002c","0020","0031","0035","0030","0030","0030","002c","0020","0031","0036","0030",
"0030","0030","002c","0020","0031","0038","0030","0030","0030","002c","0020","0032","0030","0030","0030","0030",
"002c","0020","0032","0032","0030","0030","0030","002c","0020","0032","0034","0030","0030","0030","002c","0020",
"0032","0037","0030","0030","0030","002c","000a","0009","0009","0009","0033","0030","0030","0030","0030","002c",
"0020","0033","0033","0030","0030","0030","002c","0020","0033","0036","0030","0030","0030","002c","0020","0033",
"0039","0030","0030","0030","002c","0020","0034","0033","0030","0030","0030","002c","0020","0034","0037","0030",
"0030","0030","002c","0020","0035","0031","0030","0030","0030","002c","0020","0035","0036","0030","0030","0030",
"002c","000a","0009","0009","0009","0036","0032","0030","0030","0030","002c","0020","0036","0038","0030","0030",
"0030","002c","0020","0037","0035","0030","0030","0030","002c","0020","0038","0032","0030","0030","0030","002c",
"0020","0039","0031","0030","0030","0030","002c","0020","0031","0030","0030","0030","0030","0030","002c","0020",
"0031","0031","0030","0030","0030","0030","002c","0020","0031","0032","0030","0030","0030","0030","002c","000a",
"0009","0009","0009","0031","0033","0030","0030","0030","0030","002c","0020","0031","0035","0030","0030","0030",
"0030","002c","0020","0031","0036","0030","0030","0030","0030","002c","0020","0031","0038","0030","0030","0030",
"0030","002c","0020","0032","0030","0030","0030","0030","0030","002c","0020","0032","0032","0030","0030","0030",
"0030","002c","0020","0032","0034","0030","0030","0030","0030","002c","0020","0032","0037","0030","0030","0030",
"0030","002c","000a","0009","0009","0009","0033","0030","0030","0030","0030","0030","002c","0020","0033","0033",
"0030","0030","0030","0030","002c","0020","0033","0036","0030","0030","0030","0030","002c","0020","0033","0039",
"0030","0030","0030","0030","002c","0020","0034","0033","0030","0030","0030","0030","002c","0020","0034","0037",
"0030","0030","0030","0030","002c","0020","0035","0031","0030","0030","0030","0030","002c","0020","0035","0036",
"0030","0030","0030","0030","002c","000a","0009","0009","0009","0036","0032","0030","0030","0030","0030","002c",
"0020","0036","0038","0030","0030","0030","0030","002c","0020","0037","0035","0030","0030","0030","0030","002c",
"0020","0038","0032","0030","0030","0030","0030","002c","0020","0039","0031","0030","0030","0030","0030","002c",
"0020","0031","0030","0030","0030","0030","0030","0030","002c","0020","0031","0031","0030","0030","0030","0030",
"0030","002c","0020","0031","0032","0030","0030","0030","0030","0030","002c","000a","0009","0009","0009","0031",
"0033","0030","0030","0030","0030","0030","002c","0020","0031","0035","0030","0030","0030","0030","0030","002c",
"0020","0031","0036","0030","0030","0030","0030","0030","002c","0020","0031","0038","0030","0030","0030","0030",
"0030","002c","0020","0032","0030","0030","0030","0030","0030","0030","002c","0020","0032","0032","0030","0030",
"0030","0030","0030","002c","0020","0032","0034","0030","0030","0030","0030","0030","002c","0020","0032","0037",
"0030","0030","0030","0030","0030","002c","000a","0009","0009","0009","0033","0030","0030","0030","0030","0030",
"0030","002c","0020","0033","0033","0030","0030","0030","0030","0030","002c","0020","0033","0036","0030","0030",
"0030","0030","0030","002c","0020","0033","0039","0030","0030","0030","0030","0030","002c","0020","0034","0033",
"0030","0030","0030","0030","0030","002c","0020","0034","0037","0030","0030","0030","0030","0030","002c","0020",
"0035","0031","0030","0030","0030","0030","0030","002c","0020","0035","0036","0030","0030","0030","0030","0030",
"002c","000a","0009","0009","0009","0036","0032","0030","0030","0030","0030","0030","002c","0020","0036","0038",
"0030","0030","0030","0030","0030","002c","0020","0037","0035","0030","0030","0030","0030","0030","002c","0020",
"0038","0032","0030","0030","0030","0030","0030","002c","0020","0039","0031","0030","0030","0030","0030","0030",
"002c","0020","0031","0030","0030","0030","0030","0030","0030","0030","002c","0020","0031","0031","0030","0030",
"0030","0030","0030","0030","002c","0020","0031","0032","0030","0030","0030","0030","0030","0030","002c","000a",
"0009","0009","0009","0031","0033","0030","0030","0030","0030","0030","0030","002c","0020","0031","0035","0030",
"0030","0030","0030","0030","0030","002c","0020","0031","0036","0030","0030","0030","0030","0030","0030","002c",
"0020","0031","0038","0030","0030","0030","0030","0030","0030","002c","0020","0032","0030","0030","0030","0030",
"0030","0030","0030","002c","0020","0032","0032","0030","0030","0030","0030","0030","0030","002c","0020","0032",
"0034","0030","0030","0030","0030","0030","0030","002c","0020","0032","0037","0030","0030","0030","0030","0030",
"0030","002c","000a","0009","0009","0009","0033","0030","0030","0030","0030","0030","0030","0030","002c","0020",
"0033","0033","0030","0030","0030","0030","0030","0030","002c","0020","0033","0036","0030","0030","0030","0030",
"0030","0030","002c","0020","0033","0039","0030","0030","0030","0030","0030","0030","002c","0020","0034","0033",
"0030","0030","0030","0030","0030","0030","002c","0020","0034","0037","0030","0030","0030","0030","0030","0030",
"002c","0020","0035","0031","0030","0030","0030","0030","0030","0030","002c","0020","0035","0036","0030","0030",
"0030","0030","0030","0030","002c","000a","0009","0009","0009","0036","0032","0030","0030","0030","0030","0030",
"0030","002c","0020","0036","0038","0030","0030","0030","0030","0030","0030","002c","0020","0037","0035","0030",
"0030","0030","0030","0030","0030","002c","0020","0038","0032","0030","0030","0030","0030","0030","0030","002c",
"0020","0039","0031","0030","0030","0030","0030","0030","0030","000a","0009","0009","005d","003b","000a","000a",
"0009","0076","0061","0072","0020","007a","002c","0020","0045","0032","0034","002c","0020","0045","0032","0034",
"006c","002c","0020","0045","0032","0034","0072","003b","000a","000a","0009","0045","0032","0034","0020","003d",
"0020","0030","003b","0020","0045","0032","0034","006c","0020","003d","0020","0030","003b","0020","0045","0032",
"0034","0072","0020","003d","0020","0030","003b","000a","000a","0009","002f","002f","0020","005b","0020","0428",
"0430","0433","0020","0031","0020","005d","000a","0009","002f","002f","0020","0418","0449","0435","043c","0020",
"0431","043b","0438","0436","0430","0439","0448","0435","0435","0020","0441","0442","0430","043d","0434","0430",
"0440","0442","043d","043e","0435","002e","000a","0009","002f","002f","0020","0421","0430","043c","043e","0435",
"0020","043f","0435","0440","0432","043e","0435","0020","0441","043e","043f","0440","043e","0442","0438","0432",
"043b","0435","043d","0438","0435","0021","000a","0009","0069","0066","0020","0028","0052","0031","0020","003c",
"0020","0041","0072","0072","0061","0079","0045","0032","0034","005b","0030","005d","0029","000a","0009","0009",
"007b","000a","0009","0009","0045","0032","0034","006c","0020","003d","0020","0041","0072","0072","0061","0079",
"0045","0032","0034","005b","0030","005d","003b","000a","0009","0009","007d","000a","0009","0009","0065","006c",
"0073","0065","000a","0009","0009","007b","000a","0009","0009","002f","002f","0020","005b","0020","0428","0430",
"0433","0020","0032","0020","005d","000a","0009","0009","002f","002f","0020","0418","0449","0435","043c","0020",
"0431","043b","0438","0436","0430","0439","0448","0435","0435","0020","0441","0442","0430","043d","0434","0430",
"0440","0442","043d","043e","0435","002e","000a","0009","0009","002f","002f","0020","0421","0430","043c","043e",
"0435","0020","043f","043e","0441","043b","0435","0434","043d","0435","0435","0020","0441","043e","043f","0440",
"043e","0442","0438","0432","043b","0435","043d","0438","0435","0021","000a","0009","0009","0069","0066","0020",
"0028","0052","0031","0020","003e","0020","0041","0072","0072","0061","0079","0045","0032","0034","005b","0032",
"0031","0035","005d","0029","000a","0009","0009","0009","007b","000a","0009","0009","0009","0045","0032","0034",
"0072","0020","003d","0020","0041","0072","0072","0061","0079","0045","0032","0034","005b","0032","0031","0035",
"005d","003b","000a","0009","0009","0009","007d","000a","0009","0009","0009","0065","006c","0073","0065","000a",
"0009","0009","0009","007b","000a","0009","0009","0009","002f","002f","0020","005b","0020","0428","0430","0433",
"0020","0033","0020","005d","000a","0009","0009","0009","002f","002f","0020","0418","0449","0435","043c","0020",
"0431","043b","0438","0436","0430","0439","0448","0435","0435","0020","0441","0442","0430","043d","0434","0430",
"0440","0442","043d","043e","0435","002e","000a","0009","0009","0009","002f","002f","0020","041f","0440","043e",
"0432","0435","0440","0438","043c","002c","0020","043c","043e","0436","0435","0442","0020","0442","0430","043a",
"043e","0435","0020","0441","043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","0435",
"0020","0435","0441","0442","044c","0020","0432","0020","043c","0430","0441","0441","0438","0432","0435","0021",
"000a","0009","0009","0009","0066","006f","0072","0028","007a","0020","003d","0020","0030","003b","0020","007a",
"0020","003c","0020","0041","0072","0072","0061","0079","0045","0032","0034","002e","006c","0065","006e","0067",
"0074","0068","003b","0020","007a","002b","002b","0029","000a","0009","0009","0009","0009","007b","000a","0009",
"0009","0009","0009","0069","0066","0020","0028","0052","0031","0020","003d","003d","0020","0041","0072","0072",
"0061","0079","0045","0032","0034","005b","007a","005d","0029","000a","0009","0009","0009","0009","0009","007b",
"000a","0009","0009","0009","0009","0009","0045","0032","0034","0020","003d","0020","0052","0031","003b","000a",
"0009","0009","0009","0009","0009","0062","0072","0065","0061","006b","003b","000a","0009","0009","0009","0009",
"0009","007d","000a","0009","0009","0009","0009","007d","000a","000a","0009","0009","0009","0069","0066","0020",
"0028","0045","0032","0034","0020","003d","003d","0020","0030","0029","000a","0009","0009","0009","0009","007b",
"000a","0009","0009","0009","0009","002f","002f","0020","005b","0020","0428","0430","0433","0020","0034","0020",
"005d","000a","0009","0009","0009","0009","002f","002f","0020","0418","0449","0435","043c","0020","0431","043b",
"0438","0436","0430","0439","0448","0435","0435","0020","0441","0442","0430","043d","0434","0430","0440","0442",
"043d","043e","0435","002e","000a","0009","0009","0009","0009","002f","002f","0020","041f","043e","043b","0443",
"0447","0430","0435","043c","0020","0437","043d","0430","0447","0435","043d","0438","0435","0020","0441","043b",
"0435","0432","0430","0020","0438","0020","0441","043f","0440","0430","0432","0430","0021","000a","0009","0009",
"0009","0009","0066","006f","0072","0028","007a","0020","003d","0020","0031","003b","0020","007a","0020","003c",
"0020","0041","0072","0072","0061","0079","0045","0032","0034","002e","006c","0065","006e","0067","0074","0068",
"003b","0020","007a","002b","002b","0029","000a","0009","0009","0009","0009","0009","007b","000a","0009","0009",
"0009","0009","0009","0069","0066","0020","0028","0041","0072","0072","0061","0079","0045","0032","0034","005b",
"007a","005d","0020","003e","0020","0052","0031","0029","000a","0009","0009","0009","0009","0009","0009","007b",
"000a","0009","0009","0009","0009","0009","0009","002f","002f","0020","0421","043b","0435","0432","0430","002e",
"000a","0009","0009","0009","0009","0009","0009","0045","0032","0034","006c","0020","003d","0020","0041","0072",
"0072","0061","0079","0045","0032","0034","005b","007a","0020","002d","0020","0031","005d","003b","000a","0009",
"0009","0009","0009","0009","0009","002f","002f","0020","0421","043f","0440","0430","0432","0430","002e","000a",
"0009","0009","0009","0009","0009","0009","0045","0032","0034","0072","0020","003d","0020","0041","0072","0072",
"0061","0079","0045","0032","0034","005b","007a","005d","003b","000a","0009","0009","0009","0009","0009","0009",
"0062","0072","0065","0061","006b","003b","000a","0009","0009","0009","0009","0009","0009","007d","000a","0009",
"0009","0009","0009","0009","007d","000a","0009","0009","0009","0009","007d","000a","0009","0009","0009","007d",
"000a","0009","0009","007d","000a","000a","0009","002f","002f","0020","0421","0430","043c","043e","0435","0020",
"043f","0435","0440","0432","043e","0435","0020","0441","043e","043f","0440","043e","0442","0438","0432","043b",
"0435","043d","0438","0435","0021","000a","0009","002f","002f","0020","0045","0032","0034","0020","003d","0020",
"0030","002c","0020","0045","0032","0034","006c","0020","003d","0020","0417","043d","0430","0447","0435","043d",
"0438","0435","002c","0020","0045","0032","0034","0072","0020","003d","0020","0030","002e","000a","000a","0009",
"002f","002f","0020","0421","0430","043c","043e","0435","0020","043f","043e","0441","043b","0435","0434","043d",
"0435","0435","0020","0441","043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","0435",
"0021","000a","0009","002f","002f","0020","0045","0032","0034","0020","003d","0020","0030","002c","0020","0045",
"0032","0034","006c","0020","003d","0020","0030","002c","0020","0045","0032","0034","0072","0020","003d","0020",
"0417","043d","0430","0447","0435","043d","0438","0435","002e","000a","000a","0009","002f","002f","0020","0421",
"043e","043f","0440","043e","0442","0438","0432","043b","0435","043d","0438","0435","0020","0435","0441","0442",
"044c","0020","0432","0020","043c","0430","0441","0441","0438","0432","0435","0021","000a","0009","002f","002f",
"0020","0045","0032","0034","0020","003d","0020","0417","043d","0430","0447","0435","043d","0438","0435","002c",
"0020","0045","0032","0034","006c","0020","003d","0020","0030","002c","0020","0045","0032","0034","0072","0020",
"003d","0020","0030","002e","000a","000a","0009","002f","002f","0020","0411","043b","0438","0436","0430","0439",
"0448","0435","0435","0020","0437","043d","0430","0447","0435","043d","0438","0435","0020","0441","043b","0435",
"0432","0430","0020","0438","0020","0441","043f","0440","0430","0432","0430","0021","000a","0009","002f","002f",
"0020","0045","0032","0034","0020","003d","0020","0030","002c","0020","0045","0032","0034","006c","0020","003d",
"0020","0417","043d","0430","0447","0435","043d","0438","0435","0020","0441","043b","0435","0432","0430","002c",
"0020","0045","0032","0034","0072","0020","003d","0020","0417","043d","0430","0447","0435","043d","0438","0435",
"0020","0441","043f","0440","0430","0432","0430","002e","000a","000a","0009","002f","002f","0020","0412","043e",
"0437","0432","0440","0430","0449","0430","0435","043c","0020","043c","0430","0441","0441","0438","0432","0021",
"000a","0009","0072","0065","0074","0075","0072","006e","0020","005b","0045","0032","0034","002c","0020","0045",
"0032","0034","006c","002c","0020","0045","0032","0034","0072","005d","003b","000a","007d"

		];

	var Array_3 = [];

	var string_2, z2, x;

	string_1 = "";
	string_2 = "";

	z2 = 0;

	// Раскодировать текст.
	for(z = 0; z < Array_2.length; z++)
		{
		temp1 = Number("0x" + Array_2[z]);
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

	string_2 = "<table class=\"calczdprg_zebra\" cellspacing=\"0\" cellpadding=\"0\">";

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
			string_2 += "<td class=\"calczdprg_bg_b\">";

			x = 0;
			}
			else
			{
			// Формируем строку A.
			// ---
			string_2 += "<td class=\"calczdprg_bg_a\">";

			x = 1;
			}

			// ---

			// Заменить обычный пробел на неразрывный.
			temp1 = Array_3[z].replace(/ /g, "&nbsp;");

			// Заменить табуляцию на неразрывные пробелы.
			temp1 = temp1.replace(/\t/g, "&nbsp;&nbsp;&nbsp;");

			// ---

			// Раскрасить все комментарии.
			temp1 = temp1.replace(/(\/\/[^]+)/g,'<span class="calczdjsrem">$1</span>');

			// Раскрасить все операторы.
			temp1 = temp1.replace(/(if|else|for|break|return)/g, "<span class=\"calczdjsoper\">$1</span>");

			// Раскрасить все function и var.
			string_2 += temp1.replace(/(function|var)/g, "<span class=\"calczdjsfv\">$1</span>");

			// ---

			string_2 += "</td>";

		string_2 += "</tr>";
		}

	string_2 += "</table>";

	// вставить в страницу.
	document.getElementById('rBS_2').innerHTML = string_2;
}

// ---
// | Построить таблицу сопротивлений E24.
// | Таблица в Омах (таблица в одну строку).
// ---
function BuildTableE24()
{
	// Ряд E24.
	var ArrayLine24 = [

			1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0,
			2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3,
			4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1

			];

	// Массив сопротивлений.
	var ArrayTemp = [];

	var x, y, z;

	z = 0;

	// 1.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] / 10;
		ArrayTemp[z] = Number(x.toFixed(2));
		z++;
		}

	// 2.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		ArrayTemp[z] = ArrayLine24[y];
		z++;
		}

	// 3.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 10;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 4.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 100;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 5.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 1000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 6.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 10000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 7.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 100000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 8.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 1000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 9.
	for(y = 0; y < ArrayLine24.length; y++)
		{
		x = ArrayLine24[y] * 10000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// вставить в модальное окно.
	document.getElementById('ModalWinE24_a').innerHTML = ArrayTemp;
	document.getElementById('ModalWinE24_b').innerHTML = ArrayTemp.length;
}

// ---
// | Построить таблицу сопротивлений E48.
// | Таблица в Омах (таблица в одну строку).
// ---
function BuildTableE48()
{
	// Ряд E48.
	var ArrayLine48 = [

			   1, 1.05,  1.1, 1.15, 1.21, 1.27, 1.33,  1.4,
			1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05,
			2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01,
			3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42,
			4.64, 4.87, 5.11, 5.36, 5.62,  5.9, 6.19, 6.49,
			6.81, 7.15,  7.5, 7.87, 8.25, 8.66, 9.09, 9.53

			];

	// Массив сопротивлений.
	var ArrayTemp = [];

	var x, y, z;

	z = 0;

	// 1.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		ArrayTemp[z] = ArrayLine48[y];
		z++;
		}

	// 2.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 10;
		ArrayTemp[z] = Number(x.toFixed(1));
		z++;
		}

	// 3.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 100;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 4.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 1000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 5.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 10000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 6.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 100000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 7.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 1000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 8.
	for(y = 0; y < ArrayLine48.length; y++)
		{
		x = ArrayLine48[y] * 10000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// вставить в модальное окно.
	document.getElementById('ModalWinE48_a').innerHTML = ArrayTemp;
	document.getElementById('ModalWinE48_b').innerHTML = ArrayTemp.length;
}

// ---
// | Построить таблицу сопротивлений E96.
// | Таблица в Омах (таблица в одну строку).
// ---
function BuildTableE96()
{
	// Ряд E96.
	var ArrayLine96 = [

			   1, 1.02, 1.05, 1.07,  1.1, 1.13, 1.15, 1.18,
			1.21, 1.24, 1.27,  1.3, 1.33, 1.37,  1.4, 1.43,
			1.47,  1.5, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74,
			1.78, 1.82, 1.87, 1.91, 1.96,    2, 2.05,  2.1,
			2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55,
			2.61, 2.67, 2.74,  2.8, 2.87, 2.94, 3.01, 3.09,
			3.16, 3.24, 3.32,  3.4, 3.48, 3.57, 3.65, 3.74,
			3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53,
			4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49,
			5.62, 5.76,  5.9, 6.04, 6.19, 6.34, 6.49, 6.65,
			6.81, 6.98, 7.15, 7.32,  7.5, 7.68, 7.87, 8.06,
			8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76

			];

	// Массив сопротивлений.
	var ArrayTemp = [];

	var x, y, z;

	z = 0;

	// 1.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		ArrayTemp[z] = ArrayLine96[y];
		z++;
		}

	// 2.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 10;
		ArrayTemp[z] = Number(x.toFixed(1));
		z++;
		}

	// 3.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 100;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 4.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 1000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 5.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 10000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 6.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 100000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 7.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 1000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// 8.
	for(y = 0; y < ArrayLine96.length; y++)
		{
		x = ArrayLine96[y] * 10000000;
		ArrayTemp[z] = Number(x.toFixed(0));
		z++;
		}

	// вставить в модальное окно.
	document.getElementById('ModalWinE96_a').innerHTML = ArrayTemp;
	document.getElementById('ModalWinE96_b').innerHTML = ArrayTemp.length;
}
