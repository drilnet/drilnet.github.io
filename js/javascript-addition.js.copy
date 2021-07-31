
function AdditionCharCodeAt()
{
	var z, z2, lg, string;
	var temp;

	lg = document.getElementById('add_textarea').value.length;

	string = "";

	string = "var Array_1 = ";
		string += "<br>";
			string += "[";
				string += "<br>";
					string += "<br>";

	// Сколько кодов в одной строке.
//	z2 = 16;
//
//	// 10.
//	for(z = 0; z < lg; z++)
//		{
//		temp = document.getElementById('add_textarea').value[z];
//		temp = temp.charCodeAt().toString(10);
//
//		string += temp;
//
//		if (z < lg - 1)
//			{
//			string += ",";
//			}
//
//		z2--;
//
//		if (z2 == 0) // 16 - Сколько кодов в одной строке.
//			{
//			string += "<br>";
//			z2 = 16;
//			}
//
//		}

	// Сколько кодов в одной строке.
	z2 = 16;
	z3 = z2;

	// 16.
	for(z = 0; z < lg; z++)
		{
		temp = document.getElementById('add_textarea').value[z];
		temp = temp.charCodeAt().toString(16);

		// Дополнить нулями.
		switch (temp.length)
			{
			case 1:
			temp = "000" + temp;
			break;

			case 2:
			temp = "00" + temp;
			break;

			case 3:
			temp = "0" + temp;
			break;

			default:
			break;
			}

		// Добавить пробелы в начали строки 
//		if (z2 == z3)
//			{
//			string += "&nbsp;&nbsp;&nbsp;&nbsp;";
//			}

		string += "\"" + temp + "\"";

		if (z < lg - 1)
			{
			string += ",";
			}

		z2--;

		// Сколько кодов в одной строке.
		// Переход на новую строку!
		if (z2 == 0)
			{
			string += "<br>";
			z2 = z3;
			}
		}

	// Добавить <br>.
	if (z2 != z3)
		{
		string += "<br>";
		}

	string += "<br>";
		string += "];";
			string += "<br>";

	// вставить в страницу.
	document.getElementById('AdditionCharCodeAt').innerHTML = string;

}