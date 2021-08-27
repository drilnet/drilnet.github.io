
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

// --------------------
// ---------------
// ----------

// ---
// | После загрузки страницы сделать это:
// |   1. Установить поля ввода.
// |   2. Установить Option.
// |   3. Установить набор резисторов E24.
// ---
function SETDefaultLED()
{
	// Поля ввода.

	document.getElementById("led1_input_1").value = 5;
	document.getElementById("led1_input_2").value = 2;
	document.getElementById("led1_input_3").value = 10;

	// Option.

	document.getElementById("led1_option_Uin").value = 'В';
	document.getElementById("led1_option_UHL1").value = 'В';
	document.getElementById("led1_option_I").value = 'мА';

	// Набор резисторов (E24, E48, E96).

	document.getElementById('rbled_1').checked = true;  // E24.
	document.getElementById('rbled_2').checked = false; // E48.
	document.getElementById('rbled_3').checked = false; // E96.
}

// ---
// | Онлайн калькулятор CALCLED_1 (Calc 1).
// | Считаем!
// ---
function CALCLED_1()
{
	var Uin = Number(document.getElementById("led1_input_1").value);
		var UHL1 = Number(document.getElementById("led1_input_2").value);
			var I = Number(document.getElementById("led1_input_3").value);

	var Option_Uin = document.getElementById("led1_option_Uin").value;
		var Option_UHL1 = document.getElementById("led1_option_UHL1").value;
			var Option_I = document.getElementById("led1_option_I").value;

	// ---

	if (Option_Uin == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	if (Option_UHL1 == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	// ---

	if (Option_Uin == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	if (Option_UHL1 == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	// ---

	if (Option_I == "мА")
		{
		I = I / 1000; // мА в А.
		}

	if (Option_I == "мкА")
		{
		I = I / 1000 / 1000; // мкА в A.
		}

	// ---

	// Вычисления.

	var UR1 = Uin - UHL1;
		var R1 = UR1 / I;
			var RHL1 = Uin / I - R1;
				var P1 = UR1 * I;
					var P2 = UHL1 * I;

	// Результат на HTML-страницу.

	document.getElementById('led1_result_UR1').innerHTML =
		'<span class="calcledcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('led1_result_R1').innerHTML =
		'<span class="calcledcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('led1_result_RHL1').innerHTML =
		'<span class="calcledcolorresult">'
		+ RHL1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ RHL1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + RHL1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('led1_result_P1').innerHTML =
		'<span class="calcledcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('led1_result_P2').innerHTML =
	'<span class="calcledcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	R1 = Number(R1.toFixed(3));

	// Ближайшее стандартное.
	var rstring = CALCLEDBS_1(R1, Uin, UHL1);

	document.getElementById('CALCLEDBS_1b').innerHTML = rstring;
}

// ---
// | Получаем ближайшее стандартное сопротивление.
// | Плюс к этому ближайшему делаем дополнительные расчёты.
// | Для калькулятора 1.
// ---
function CALCLEDBS_1(R1, Uin, UHL1)
{

	var I, Il, Ir, P1, P2;
	var E, El, Er;
	var rstring;

	var ArrayResistor = [];

	// Если набор резисторов E24.
	if (document.getElementById('rbled_1').checked)
		{
		// Установить на странице E24.
		document.getElementById('CALCLEDBS_1a').innerHTML =
		"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

		ArrayResistor = SearchE24(R1); // SearchE24(R1) - Находится в файле: javascript-bs.js
		}

	// Если набор резисторов E48.
	if (document.getElementById('rbled_2').checked)
		{
		// Установить на странице E48.
		document.getElementById('CALCLEDBS_1a').innerHTML =
		"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E48</b>):</span>";

		ArrayResistor = SearchE48(R1); // SearchE48(R1) - Находится в файле: javascript-bs.js
		}

	// Если набор резисторов E96.
	if (document.getElementById('rbled_3').checked)
		{
		// Установить на странице E96.
		document.getElementById('CALCLEDBS_1a').innerHTML =
		"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E96</b>):</span>";

		ArrayResistor = SearchE96(R1); // SearchE96(R1) - Находится в файле: javascript-bs.js
		}

	// - [!] -
	E = ArrayResistor[0]; El =  ArrayResistor[1]; Er =  ArrayResistor[2];

		// Самое первое сопротивление.
		// E = 0, El = Значение, Er = 0.
		if (E == 0 && El != 0 && Er == 0)
			{
			I = (Uin - UHL1) / El * 1000; // В мА.
			P1 = (Uin - UHL1) * I; // В мВт.
			P2 = UHL1 * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + El + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток светодиода (ток цепи)\">I</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на светодиоде HL1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Самое последнее сопротивление.
		// E = 0, El = 0, Er = Значение.
		if (E == 0 && El == 0 && Er != 0)
			{
			I = (Uin - UHL1) / Er * 1000; // В мА.
			P1 = (Uin - UHL1) * I; // В мВт.
			P2 = UHL1 * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + Er + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток светодиода (ток цепи)\">I</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на светодиоде HL1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Сопротивление есть в массиве.
		// E = Значение, El = 0, Er = 0.
		if (E != 0 && El == 0 && Er == 0)
			{
			I = (Uin - UHL1) / E * 1000; // В мА.
			P1 = (Uin - UHL1) * I; // В мВт.
			P2 = UHL1 * I; // В мВт.

			I = Number(I.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + E + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток светодиода (ток цепи)\">I</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + I + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на светодиоде HL1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

		// Ближайшее значение слева и справа.
		// E = 0, El = Значение слева, Er = Значение справа
		if (E == 0 && El != 0 && Er != 0)
			{
			Il = (Uin - UHL1) / El * 1000; // В мА.
			P1 = (Uin - UHL1) * Il; // В мВт.
			P2 = UHL1 * Il; // В мВт.

			Il = Number(Il.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring = "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + El + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток светодиода (ток цепи)\">I</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + Il + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на светодиоде HL1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";

			rstring += "<br><b>или</b><br>";

			Ir = (Uin - UHL1) / Er * 1000; // В мА.
			P1 = (Uin - UHL1) * Ir; // В мВт.
			P2 = UHL1 * Ir; // В мВт.

			Ir = Number(Ir.toFixed(2));
			P1 = Number(P1.toFixed(2));
			P2 = Number(P2.toFixed(2));

			rstring += "<i><b title=\"Сопротивление резистора R1\">R1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + Er + " <b>Ом</b> </span>";
			rstring += "(<i><b title=\"Ток светодидода (ток цепи)\">I</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + Ir + " <b>мА</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на резисторе R1 (P1)\">P1</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P1 + " <b>мВт</b></span>, ";
			rstring += "<i><b title=\"Рассеиваемая мощность на светодиоде HL1 (P2)\">P2</b></i> = ";
			rstring += "<span class=\"calcledcolorresult\">" + P2 + " <b>мВт</b></span>" + ")";
			}

	return rstring;
}

// ---
// | Установить поля ввода по умолчанию для CALCLED_1 (калькулятор 1).
// | Установить Option.
// | Сбросить вычисления.
// | Установить Radio Buttons на E24.
// ---
function SetInputLED_1()
{

	// Поля ввода.

	document.getElementById("led1_input_1").value = 5;
	document.getElementById("led1_input_2").value = 2;
	document.getElementById("led1_input_3").value = 10;

	// Option.

	document.getElementById("led1_option_Uin").value = 'В';
	document.getElementById("led1_option_UHL1").value = 'В';
	document.getElementById("led1_option_I").value = 'мА';

	// Сбросить вычисления.

	document.getElementById('led1_result_UR1').innerHTML =
		'<span class="calcledcolorquestions">?</span>';

	document.getElementById('led1_result_R1').innerHTML =
		'<span class="calcledcolorquestions">?</span>';

	document.getElementById('led1_result_RHL1').innerHTML =
		'<span class="calcledcolorquestions">?</span>';

	document.getElementById('led1_result_P1').innerHTML =
		'<span class="calcledcolorquestions">?</span>';

	document.getElementById('led1_result_P2').innerHTML =
		'<span class="calcledcolorquestions">?</span>';

	// Radio Buttons.
	// Набор резисторов (E24, E48, E96).

	document.getElementById('rbled_1').checked = true;  // E24.
	document.getElementById('rbled_2').checked = false; // E48.
	document.getElementById('rbled_3').checked = false; // E96.

	// Установить на странице E24.

	document.getElementById('CALCLEDBS_1a').innerHTML =
	"<span title=\"Ближайшее стандартное сопротивление\">Ближайшее стандартное (<b>E24</b>):</span>";

	// Ближайшее стандартное.

	document.getElementById('CALCLEDBS_1b').innerHTML = "<span class=\"calczdcolorquestions\">?</span>";
}
