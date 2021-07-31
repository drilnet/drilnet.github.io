
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
// | Онлайн калькулятор CALCTK_1 (Calc 1).
// | Считаем!
// ---
function CALCTK_1()
{
	var Ucc = Number(document.getElementById("tk1_input_1").value);
		var Uin = Number(document.getElementById("tk1_input_2").value);
			var Uce = Number(document.getElementById("tk1_input_3").value);
				var Ube = Number(document.getElementById("tk1_input_4").value);

	var hFE = Number(document.getElementById("tk1_input_5").value);
		var R2 = Number(document.getElementById("tk1_input_6").value);

	var Option_Ucc = document.getElementById("tk1_option_Ucc").value;
		var Option_Uin = document.getElementById("tk1_option_Uin").value;
			var Option_Uce = document.getElementById("tk1_option_Uce").value;
				var Option_Ube = document.getElementById("tk1_option_Ube").value;
					var Option_R2 = document.getElementById("tk1_option_R2").value;

	// ---

	if (Option_Ucc == 'мВ')
		{
		Ucc = Ucc / 1000; // мВ в В.
		}

	if (Option_Uin == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	if (Option_Uce == 'мВ')
		{
		Uce = Uce / 1000; // мВ в В.
		}

	if (Option_Ube == 'мВ')
		{
		Ube = Ube / 1000; // мВ в В.
		}

	// ---

	if (Option_Ucc == 'мкВ')
		{
		Ucc = Ucc / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uin == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uce == 'мкВ')
		{
		Uce = Uce / 1000 / 1000; // мкВ в В.
		}

	if (Option_Ube == 'мкВ')
		{
		Ube = Ube / 1000 / 1000; // мкВ в В.
		}

	// ---

	if (Option_R2 == 'кОм')
		{
		R2 = R2 * 1000; // кОм в Ом.
		}

	// ---

	// Вычисления.

	var UR1 = Uin - Ube;
	var UR2 = Ucc - Uce;

	var Ubc_1 = (Uin - UR1) - (Ucc - UR2);
	var Ubc_2 = Ube - Uce;

	var Ic = (Ucc - Uce) / R2;
	var Ib = Ic / hFE;
	var Ie = Ic + Ib;

	var R1 = UR1 / Ib;

	var Rce = Uce / Ic;
	var Rbe = Ube / Ib;

	var P1 = UR1 * Ib;
	var P2 = UR2 * Ic;
	var P3 = Ube * Ib + Uce * Ic;

	// Результат на HTML-страницу.

	document.getElementById('tk1_result_UR1').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk1_result_UR2').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Ubc_1').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Ubc_2').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Ic').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ic * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ic * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ic + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Ib').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ib * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ib * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ib + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Ie').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ie * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ie * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ie + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk1_result_R1').innerHTML =
		'<span class="calctkcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Rce').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rce + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rce / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rce / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk1_result_Rbe').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rbe + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rbe / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rbe / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk1_result_P1').innerHTML =
		'<span class="calctkcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk1_result_P2').innerHTML =
		'<span class="calctkcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk1_result_P3').innerHTML =
		'<span class="calctkcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCTK_1 (Calc 1)
// ---
function SetInputTK_1()
{
	// Поля.

	document.getElementById("tk1_input_1").value = 15;  // Ucc
	document.getElementById("tk1_input_2").value = 12;  // Uin
	document.getElementById("tk1_input_3").value = 0.3; // Uce
	document.getElementById("tk1_input_4").value = 1;   // Ube
	document.getElementById("tk1_input_5").value = 70;  // hFE
	document.getElementById("tk1_input_6").value = 200; // R2

	document.getElementById("tk1_option_Ucc").value = 'В';
	document.getElementById("tk1_option_Uin").value = 'В';
	document.getElementById("tk1_option_Uce").value = 'В';
	document.getElementById("tk1_option_Ube").value = 'В';
	document.getElementById("tk1_option_R2").value = 'Ом';

	// Сбросить вычисления.

	document.getElementById('tk1_result_UR1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_UR2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Ubc_1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Ubc_2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Ic').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Ib').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Ie').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_R1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Rce').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_Rbe').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_P1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_P2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk1_result_P3').innerHTML =
		'<span class="calctkcolorquestions">?<span>';
}

// ---
// | Онлайн калькулятор CALCTK_2 (Calc 2).
// | Считаем!
// ---
function CALCTK_2()
{
	var Ucc = Number(document.getElementById("tk2_input_1").value);
		var Uin = Number(document.getElementById("tk2_input_2").value);
			var Uce = Number(document.getElementById("tk2_input_3").value);
				var Ube = Number(document.getElementById("tk2_input_4").value);

	var hFE = Number(document.getElementById("tk2_input_5").value);
		var Ic = Number(document.getElementById("tk2_input_6").value);

	var Option_Ucc = document.getElementById("tk2_option_Ucc").value;
		var Option_Uin = document.getElementById("tk2_option_Uin").value;
			var Option_Uce = document.getElementById("tk2_option_Uce").value;
				var Option_Ube = document.getElementById("tk2_option_Ube").value;
					var Option_Ic = document.getElementById("tk2_option_Ic").value;

	// ---

	if (Option_Ucc == 'мВ')
		{
		Ucc = Ucc / 1000; // мВ в В.
		}

	if (Option_Uin == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	if (Option_Uce == 'мВ')
		{
		Uce = Uce / 1000; // мВ в В.
		}

	if (Option_Ube == 'мВ')
		{
		Ube = Ube / 1000; // мВ в В.
		}

	// ---

	if (Option_Ucc == 'мкВ')
		{
		Ucc = Ucc / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uin == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uce == 'мкВ')
		{
		Uce = Uce / 1000 / 1000; // мкВ в В.
		}

	if (Option_Ube == 'мкВ')
		{
		Ube = Ube / 1000 / 1000; // мкВ в В.
		}

	// ---

	if (Option_Ic == 'мА')
		{
		Ic = Ic / 1000; // мА в А.
		}

	if (Option_Ic == 'мкА')
		{
		Ic = Ic / 1000 / 1000; // мкА в А.
		}

	// ---

	// Вычисления.

	var UR1 = Uin - Ube;
	var UR2 = Ucc - Uce;

	var Ubc_1 = (Uin - UR1) - (Ucc - UR2);
	var Ubc_2 = Ube - Uce;

	var Ib = Ic / hFE;
	var Ie = Ic + Ib;

	var R1 = UR1 / Ib;
	var R2 = UR2 / Ic;

	var Rce = Uce / Ic;
	var Rbe = Ube / Ib;

	var P1 = UR1 * Ib;
	var P2 = UR2 * Ic;
	var P3 = Ube * Ib + Uce * Ic;

	// Результат на HTML-страницу.

	document.getElementById('tk2_result_UR1').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk2_result_UR2').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Ubc_1').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Ubc_2').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Ib').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ib * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ib * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ib + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Ie').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ie * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ie * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ie + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk2_result_R1').innerHTML =
		'<span class="calctkcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk2_result_R2').innerHTML =
		'<span class="calctkcolorresult">'
		+ R2 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R2 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R2 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Rce').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rce + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rce / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rce / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk2_result_Rbe').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rbe + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rbe / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rbe / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk2_result_P1').innerHTML =
		'<span class="calctkcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk2_result_P2').innerHTML =
		'<span class="calctkcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk2_result_P3').innerHTML =
		'<span class="calctkcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCTK_2 (Calc 2)
// ---
function SetInputTK_2()
{
	// Поля.

	document.getElementById("tk2_input_1").value = 15;   // Ucc
	document.getElementById("tk2_input_2").value = 12;   // Uin
	document.getElementById("tk2_input_3").value = 0.3;  // Uce
	document.getElementById("tk2_input_4").value = 1;    // Ube
	document.getElementById("tk2_input_5").value = 70;   // hFE
	document.getElementById("tk2_input_6").value = 73.5; // Ic

	document.getElementById("tk2_option_Ucc").value = 'В';
	document.getElementById("tk2_option_Uin").value = 'В';
	document.getElementById("tk2_option_Uce").value = 'В';
	document.getElementById("tk2_option_Ube").value = 'В';
	document.getElementById("tk2_option_Ic").value = 'мА';

	// Сбросить вычисления.

	document.getElementById('tk2_result_UR1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_UR2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Ubc_1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Ubc_2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Ib').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Ie').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_R1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_R2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Rce').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_Rbe').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_P1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_P2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk2_result_P3').innerHTML =
		'<span class="calctkcolorquestions">?<span>';
}

// ---
// | Онлайн калькулятор CALCTK_3 (Calc 3).
// | Считаем!
// ---
function CALCTK_3()
{
	var Ucc = Number(document.getElementById("tk3_input_1").value);
		var Uin = Number(document.getElementById("tk3_input_2").value);
			var Uce = Number(document.getElementById("tk3_input_3").value);
				var Ube = Number(document.getElementById("tk3_input_4").value);

	var hFE = Number(document.getElementById("tk3_input_5").value);
		var UHL1 = Number(document.getElementById("tk3_input_6").value);
			var Ic = Number(document.getElementById("tk3_input_7").value);

	var Option_Ucc = document.getElementById("tk3_option_Ucc").value;
		var Option_Uin = document.getElementById("tk3_option_Uin").value;
			var Option_Uce = document.getElementById("tk3_option_Uce").value;
				var Option_Ube = document.getElementById("tk3_option_Ube").value;
					var Option_UHL1 = document.getElementById("tk3_option_UHL1").value;
						var Option_Ic = document.getElementById("tk3_option_Ic").value;

	// ---

	if (Option_Ucc == 'мВ')
		{
		Ucc = Ucc / 1000; // мВ в В.
		}

	if (Option_Uin == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	if (Option_Uce == 'мВ')
		{
		Uce = Uce / 1000; // мВ в В.
		}

	if (Option_Ube == 'мВ')
		{
		Ube = Ube / 1000; // мВ в В.
		}

	if (Option_UHL1 == 'мВ')
		{
		UHL1 = UHL1 / 1000; // мВ в В.
		}

	// ---

	if (Option_Ucc == 'мкВ')
		{
		Ucc = Ucc / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uin == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uce == 'мкВ')
		{
		Uce = Uce / 1000 / 1000; // мкВ в В.
		}

	if (Option_Ube == 'мкВ')
		{
		Ube = Ube / 1000 / 1000; // мкВ в В.
		}

	if (Option_UHL1 == 'мкВ')
		{
		UHL1 = UHL1 / 1000 / 1000; // мкВ в В.
		}

	// ---

	if (Option_Ic == 'мА')
		{
		Ic = Ic / 1000; // мА в А.
		}

	if (Option_Ic == 'мкА')
		{
		Ic = Ic / 1000 / 1000; // мкА в А.
		}

	// ---

	// Вычисления.

	var UR1 = Uin - Ube;
	var UR2 = Ucc - Uce - UHL1;

	var Ubc_1 = (Uin - UR1) - (Ucc - UR2 - UHL1);
	var Ubc_2 = Ube - Uce;

	var Ib = Ic / hFE;
	var Ie = Ic + Ib;

	var R1 = UR1 / Ib;
	var R2 = UR2 / Ic;

	var RHL1 = UHL1 / Ic;

	var Rce = Uce / Ic;
	var Rbe = Ube / Ib;

	var P1 = UR1 * Ib;
	var P2 = UR2 * Ic;
	var P3 = Ube * Ib + Uce * Ic;
	var P4 = UHL1 * Ic;

	// Результат на HTML-страницу.

	document.getElementById('tk3_result_UR1').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk3_result_UR2').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Ubc_1').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Ubc_2').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Ib').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ib * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ib * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ib + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Ie').innerHTML =
	'<span class="calctkcolorresult">'
		+ Ie * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ie * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ie + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk3_result_R1').innerHTML =
		'<span class="calctkcolorresult">'
		+ R1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk3_result_R2').innerHTML =
		'<span class="calctkcolorresult">'
		+ R2 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ R2 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + R2 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk3_result_RHL1').innerHTML =
		'<span class="calctkcolorresult">'
		+ RHL1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ RHL1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + RHL1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Rce').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rce + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rce / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rce / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk3_result_Rbe').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rbe + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rbe / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rbe / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk3_result_P1').innerHTML =
		'<span class="calctkcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk3_result_P2').innerHTML =
		'<span class="calctkcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk3_result_P3').innerHTML =
		'<span class="calctkcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk3_result_P4').innerHTML =
		'<span class="calctkcolorresult">'
		+ P4 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P4 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCTK_3 (Calc 3)
// ---
function SetInputTK_3()
{
	// Поля.

	document.getElementById("tk3_input_1").value = 5;   // Ucc
	document.getElementById("tk3_input_2").value = 2.5; // Uin
	document.getElementById("tk3_input_3").value = 0.1; // Uce
	document.getElementById("tk3_input_4").value = 0.7  // Ube
	document.getElementById("tk3_input_5").value = 12;  // hFE
	document.getElementById("tk3_input_6").value = 2;   // UHL1
	document.getElementById("tk3_input_7").value = 10;  // Ic

	document.getElementById("tk3_option_Ucc").value = 'В';
	document.getElementById("tk3_option_Uin").value = 'В';
	document.getElementById("tk3_option_Uce").value = 'В';
	document.getElementById("tk3_option_Ube").value = 'В';
	document.getElementById("tk3_option_UHL1").value = 'В';
	document.getElementById("tk3_option_Ic").value = 'мА';

	// Сбросить вычисления.

	document.getElementById('tk3_result_UR1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_UR2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Ubc_1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Ubc_2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Ib').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Ie').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_R1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_R2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_RHL1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Rce').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_Rbe').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_P1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_P2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_P3').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk3_result_P4').innerHTML =
		'<span class="calctkcolorquestions">?<span>';
}

// ---
// | Онлайн калькулятор CALCTK_4 (Calc 4).
// | Считаем!
// ---
function CALCTK_4()
{

	var Ucc = Number(document.getElementById("tk4_input_1").value);
		var Uin = Number(document.getElementById("tk4_input_2").value);
			var Uce = Number(document.getElementById("tk4_input_3").value);
				var Ube = Number(document.getElementById("tk4_input_4").value);
					var UHL1 = Number(document.getElementById("tk4_input_5").value);

	var R1 = Number(document.getElementById("tk4_input_6").value);
		var R2 = Number(document.getElementById("tk4_input_7").value);

	var Option_Ucc = document.getElementById("tk4_option_Ucc").value;
		var Option_Uin = document.getElementById("tk4_option_Uin").value;
			var Option_Uce = document.getElementById("tk4_option_Uce").value;
				var Option_Ube = document.getElementById("tk4_option_Ube").value;
					var Option_UHL1 = document.getElementById("tk4_option_UHL1").value;
						var Option_R1 = document.getElementById("tk4_option_R1").value;
							var Option_R2 = document.getElementById("tk4_option_R2").value;

	// ---

	if (Option_Ucc == 'мВ')
		{
		Ucc = Ucc / 1000; // мВ в В.
		}

	if (Option_Uin == 'мВ')
		{
		Uin = Uin / 1000; // мВ в В.
		}

	if (Option_Uce == 'мВ')
		{
		Uce = Uce / 1000; // мВ в В.
		}

	if (Option_Ube == 'мВ')
		{
		Ube = Ube / 1000; // мВ в В.
		}

	if (Option_UHL1 == 'мВ')
		{
		UHL1 = UHL1 / 1000; // мВ в В.
		}

	// ---

	if (Option_Ucc == 'мкВ')
		{
		Ucc = Ucc / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uin == 'мкВ')
		{
		Uin = Uin / 1000 / 1000; // мкВ в В.
		}

	if (Option_Uce == 'мкВ')
		{
		Uce = Uce / 1000 / 1000; // мкВ в В.
		}

	if (Option_Ube == 'мкВ')
		{
		Ube = Ube / 1000 / 1000; // мкВ в В.
		}

	if (Option_UHL1 == 'мкВ')
		{
		UHL1 = UHL1 / 1000 / 1000; // мкВ в В.
		}

	// ---

	if (Option_R1 == 'кОм')
		{
		R1 = R1 * 1000; // кОм в Ом.
		}

	if (Option_R2 == 'кОм')
		{
		R2 = R2 * 1000; // кОм в Ом.
		}

	// ---

	// Вычисления.

	var UR1 = Uin - Ube;
	var UR2 = Ucc - Uce - UHL1;

	var Ubc_1 = (Uin - UR1) - (Ucc - UR2 - UHL1);
	var Ubc_2 = Ube - Uce;

	var Rt1 = Uin * R1 / UR1;
	var Rt2 = Ucc * R2 / UR2;

	var Ic = Ucc / Rt2;
	var Ib = Uin / Rt1;
	var Ie = Ic + Ib;

	var hFE = Ic / Ib;

	var RHL1 = UHL1 / Ic;

	var Rce = Uce / Ic;
	var Rbe = Ube / Ib;

	var P1 = UR1 * Ib;
	var P2 = UR2 * Ic;
	var P3 = Ube * Ib + Uce * Ic;
	var P4 = UHL1 * Ic;

	// Результат на HTML-страницу.

	document.getElementById('tk4_result_UR1').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk4_result_UR2').innerHTML =
		'<span class="calctkcolorresult">'
		+ UR2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ UR2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ UR2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Ubc_1').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_1 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_1 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_1 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Ubc_2').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ubc_2 * 1000 * 1000 + '&nbsp;<b>мкВ</b>,&nbsp;'
			+ Ubc_2 * 1000 + '&nbsp;<b>мВ</b>,&nbsp;'
				+ Ubc_2 + '&nbsp;<b>В</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Rt1').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rt1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rt1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rt1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Rt2').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rt2 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rt2 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rt2 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Ic').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ic * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ic * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ic + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Ib').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ib * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ib * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ib + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Ie').innerHTML =
		'<span class="calctkcolorresult">'
		+ Ie * 1000 * 1000 + '&nbsp;<b>мкА</b>,&nbsp;'
			+ Ie * 1000 + '&nbsp;<b>мА</b>,&nbsp;'
				+ Ie + '&nbsp;<b>А</b>.'
					+ '</span>';

	document.getElementById('tk4_result_hFE').innerHTML =
		'<span class="calctkcolorresult">' + hFE + '</span>';

	document.getElementById('tk4_result_hFE_2').innerHTML =
		'<span class="calctkcolorresult">' + hFE + '</span>';

	document.getElementById('tk4_result_RHL1').innerHTML =
		'<span class="calctkcolorresult">'
		+ RHL1 + '&nbsp;<b>Ом</b>,&nbsp;'
			+ RHL1 / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + RHL1 / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Rce').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rce + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rce / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rce / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk4_result_Rbe').innerHTML =
		'<span class="calctkcolorresult">'
		+ Rbe + '&nbsp;<b>Ом</b>,&nbsp;'
			+ Rbe / 1000 + '&nbsp;<b>кОм</b>,&nbsp;'
				 + Rbe / 1000 / 1000 + '&nbsp;<b>мОм</b>.'
					+ '</span>';

	document.getElementById('tk4_result_P1').innerHTML =
		'<span class="calctkcolorresult">'
		+ P1 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P1 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk4_result_P2').innerHTML =
		'<span class="calctkcolorresult">'
		+ P2 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P2 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk4_result_P3').innerHTML =
		'<span class="calctkcolorresult">'
		+ P3 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P3 + '&nbsp;<b>Вт</b>.'
				 + '</span>';

	document.getElementById('tk4_result_P4').innerHTML =
		'<span class="calctkcolorresult">'
		+ P4 * 1000 + '&nbsp;<b>мВт</b>,&nbsp;'
			+ P4 + '&nbsp;<b>Вт</b>.'
				 + '</span>';
}

// ---
// | Установить поля по умолчанию для CALCTK_4 (Calc 4)
// ---
function SetInputTK_4()
{
	// Поля.

	document.getElementById("tk4_input_1").value = 5;    // Ucc
	document.getElementById("tk4_input_2").value = 2.5;  // Uin
	document.getElementById("tk4_input_3").value = 0.1;  // Uce
	document.getElementById("tk4_input_4").value = 0.7;  // Ube
	document.getElementById("tk4_input_5").value = 2;    // UHL1
	document.getElementById("tk4_input_6").value = 2000; // R1
	document.getElementById("tk4_input_7").value = 270;  // R2

	document.getElementById("tk4_option_Ucc").value = 'В';
	document.getElementById("tk4_option_Uin").value = 'В';
	document.getElementById("tk4_option_Uce").value = 'В';
	document.getElementById("tk4_option_Ube").value = 'В';
	document.getElementById("tk4_option_UHL1").value = 'В';
	document.getElementById("tk4_option_R1").value = 'Ом';
	document.getElementById("tk4_option_R2").value = 'Ом';

	// Сбросить вычисления.

	document.getElementById('tk4_result_UR1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_UR2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Ubc_1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Ubc_2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Rt1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Rt2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Ic').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Ib').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Ie').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_hFE').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_hFE_2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_RHL1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Rce').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_Rbe').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_P1').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_P2').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_P3').innerHTML =
		'<span class="calctkcolorquestions">?<span>';

	document.getElementById('tk4_result_P4').innerHTML =
		'<span class="calctkcolorquestions">?<span>';
}
