
// ---
// Вставить список литературы с ссылками.
// ---
function LoadBook()
{
	// Название литературы и ссылки на google-диск.
	var ArrayBook = [

		// -0-
		[
		"Начинающему радиолюбителю. В.И. Галкин. 2-е издание. 1989г.djvu",
		"https://drive.google.com/file/d/1wN_sa4P7x8sdZjONRlFUA_hgmfZ9l0qh/view?usp=sharing",
		"6.632.477 байт",
		"ModalWinBook_0",

		"Галкин В.И. Г16 Начинающему радиолюбителю.–2-е изд., "
		+ "<br>"
		+ "перераб. и доп.–Мн.: Полымя, 1989.–304 с.: ил."
		+ "<br>"
		+ "ISBN 5-345-00029-8"
		+ "<br>"
		+ "<br>"
		+ "Излагаются сведения о развитии радио, электротехники, радиотехники, о радиоприёме, усилителях, генераторах,"
		+ "<br>"
		+ "измерительных приборах и источниках питания радиоэлектронной аппаратуры. Приводится описание практических"
		+ "<br>"
		+ "конструкций приборов. Даются справочные материалы и советы по пайке, монтажу, проверке,"
		+ "<br>"
		+ "настройке электронных конструкций."
		+ "<br>"
		+ "<br>"
		+ "Для широкого круга радиолюбителей.",

		// Обложка (имя image).
		"Nachinayushemu radiolyubitelyu. V.I. Galkin. 2-e izdanie. 1989g.png",
		// Скачать с google-диска.
		"google"
		],

		// -1-
		[
		"Начинающему радиолюбителю. В.И. Галкин. 2-е издание. 1989г.pdf",
		"https://drive.google.com/file/d/1uYHb9UG6mFYeKxunu6GLIV5Qbwrd82X0/view?usp=sharing",
		"14.065.775 байт",
		"ModalWinBook_1",

		"Галкин В.И. Г16 Начинающему радиолюбителю.–2-е изд., "
		+ "<br>"
		+ "перераб. и доп.–Мн.: Полымя, 1989.–304 с.: ил."
		+ "<br>"
		+ "ISBN 5-345-00029-8"
		+ "<br>"
		+ "<br>"
		+ "Излагаются сведения о развитии радио, электротехники, радиотехники, о радиоприёме, усилителях, генераторах,"
		+ "<br>"
		+ "измерительных приборах и источниках питания радиоэлектронной аппаратуры. Приводится описание практических"
		+ "<br>"
		+ "конструкций приборов. Даются справочные материалы и советы по пайке, монтажу, проверке,"
		+ "<br>"
		+ "настройке электронных конструкций."
		+ "<br>"
		+ "<br>"
		+ "Для широкого круга радиолюбителей.",

		// Обложка (имя image).
		"Nachinayushemu radiolyubitelyu. V.I. Galkin. 2-e izdanie. 1989g.png",
		// Скачать с google-диска.
		"google"
		],

		// -2-
		[
		"Начинающему радиолюбителю. В.И. Галкин. 3-е издание. 1995г.djvu",
		"https://drive.google.com/file/d/1ff5K-XQ9U6giC5j_cMF6xTLXyDMYUMxk/view?usp=sharing",
		"19.605.087 байт",
		"ModalWinBook_2",

		"Начинающему РАДИОЛЮБИТЕЛЮ"
		+ "<br>"
		+ "Издание третье, переработанное и дополненное"
		+ "<br>"
		+ "ISBN 985-07-0004-1"
		+ "<br>"
		+ "<br>"
		+ "(C) В.И. Галкин, 1995г.",

		// Обложка (имя image).
		"Nachinayushemu radiolyubitelyu. V.I. Galkin. 3-e izdanie. 1995g.png",
		// Скачать с google-диска.
		"google"
		],

		// -3-
		[
		"Первые шаги в радиоэлектронике. Атанас Шишков. 2-е издание. 1986г.djvu",
		"https://drive.google.com/file/d/1ueGQWWv_DlO3aokRDlz3tdKCYwT7M-D8/view?usp=sharing",
		"3.100.430 байт",
		"ModalWinBook_3",

		"Перевод с болгарского инж. Ларисы И. Коновой"
		+ "<br>"
		+ "ГОСУДАРСТВЕННОЕ ИЗДАТЕЛЬСТВО \"ТЕХНИКА\""
		+ "<br>"
		+ "София, 1986г."
		+ "<br>"
		+ "<br>"
		+ "Книга представляет собой систематическое изложение основ радиоэлектроники, предназначенное для юных читателей."
		+ "<br>"
		+ "Ею могут, однако, пользоваться все те, кто делает \"первые шаги\" в этой интересной области. В книге на"
		+ "<br>"
		+ "доступном языке с помощью оригинальных рисунков рассматриваются основные вопросы радиоэлектроники"
		+ "<br>"
		+ "и даются указания, как самому сделать некоторые радиолюбительские приборы. Книгу можно"
		+ "<br>"
		+ "использовать в качестве пособия в кружках по радиоэлектронике,"
		+ "<br>"
		+ "а также для саммообразования.",

		// Обложка, (имя image).
		"Pervye shagi v radioelektronike. Atanas Shishkov. 2-e izdanie. 1986g.png",
		// Скачать с google-диска.
		"google"
		],

		// -4-
		[
		"Сборник формул для Радиолюбителя. О. Кронегер. 1964г.djvu",
		"https://drive.google.com/file/d/1Pmnv0hEszDeaxFa0J0eZJAQ5M6SIg4AB/view?usp=sharing",
		"997.104 байт",
		"ModalWinBook_4",

		"МАССОВАЯ РАДИОБИБЛИОТЕКА"
		+ "<br>"
		+ "Выпуск 506. О. КРОНЕГЕР"
		+ "<br>"
		+ "<br>"
		+ "Сокращённый перевод с немецкого А.С. Панафидина"
		+ "<br>"
		+ "Издательство \"ЭНЕРГИЯ\" 1964г."
		+ "<br>"
		+ "<br>"
		+ "В брошюре приведены формулы, номограммы и примеры расчётов, наиболее часто"
		+ "<br>"
		+ "встречающиеся в практике радиолюбителя. Специальная глава посвящена"
		+ "<br>"
		+ "недавно введёной международной системе единиц."
		+ "<br>"
		+ "<br>"
		+ "Предназначена брошюра для широкого круга радиолюбителей.",

		// Обложка (имя image).
		"Sbornik formul dlya Radiolyubitelya. O. Kroneger. 1964g.png",
		// Скачать с google-диска.
		"google"
		],

		// -5-
		[
		"44 источника электропитания. Трейстер Р. Мейо Дж. 1990г.djvu",
		"https://drive.google.com/file/d/1RXh7Rb-8vWIgq-vGxbCfqCciAo7-6npu/view?usp=sharing",
		"3.140.500 байт",
		"ModalWinBook_5",

		"ТРЕЙСТЕР РОБЕРТ, МЕЙО ДЖОНАТАН"
		+ "<br>"
		+ "<br>"
		+ "44 POWER SUPPLIES FOR YOUR ELECTRONIC PROJECTS"
		+ "<br>"
		+ "ROBERT J. TRAISTER, JONATHAN L. MAYO"
		+ "<br>"
		+ "New York, TAB Books Inc, 1987г."
		+ "<br>"
		+ "<br>"
		+ "44 источника электропитания для любительских электронных устройств"
		+ "<br>"
		+ "Энергоатомиздат, 1990г., 288 стр. с ил."
		+ "<br>"
		+ "ISBN 5-283-02500-4 (рус.), ISBN 0-8306-2922-X (англ.)"
		+ "<br>"
		+ "<br>"
		+ "Для любителей-конструкторов, занимающихся бытовой электроникой и электротехникой.",

		// Обложка (имя image).
		"44 istochnika elektropitaniya. Trejster R. Mejo Dzh. 1990g.png",
		// Скачать с google-диска.
		"google"
		],

		// -6-
		[
		"Аналоговые интегральные схемы. А.Л.Булычев и др. 2-е издание 1994г.djvu",
		"https://drive.google.com/file/d/1Va_UHvo89WnU-XKN2Wfr7WvFe8QOn0YI/view?usp=sharing",
		"9.356.112 байт",
		"ModalWinBook_6",

		"А.Л. Булычев, В.И. Галкин, В.А. Прохоренко, 1993г."
		+ "<br>"
		+ "<br>"
		+ "АНАЛОГОВЫЕ ИНТЕГРАЛЬНЫЕ СХЕМЫ"
		+ "<br>"
		+ "СПРАВОЧНИК"
		+ "<br>"
		+ "2-е издание, переработанное и дополненное, 382 стр."
		+ "<br>"
		+ "<br>"
		+ "МИНСК \"БЕЛАРУСЬ\" 1994г."
		+ "<br>"
		+ "ISBN 985-01-0073-7"
		+ "<br>"
		+ "<br>"
		+ "Для специалистов, занимающихя разработкой,"
		+ "<br>"
		+ "эксплуатацией и обслуживанием РЭА.",

		// Обложка (имя image).
		"Analogovye integralnye shemy. A.L.Bulychev i dr. 2-e izdanie 1994g.png",
		// Скачать с google-диска.
		"google"
		],

		// -7-
		[
		"Интегральные схемы для бытовой радиоаппаратуры. Справочник. И.В. Новаченко и др. 1995г.djvu",
		"https://drive.google.com/file/d/1qyo-JXrvn4Aha0lFTcreYus0GyfS_scl/view?usp=sharing",
		"4.270.063 байт",
		"ModalWinBook_7",

		"ИНТЕГРАЛЬНЫЕ СХЕМЫ ДЛЯ БЫТОВОЙ РАДИОАППАРАТУРЫ"
		+ "<br>"
		+ "<br>"
		+ "Дополнение четвертое. Справочник."
		+ "<br>"
		+ "И.В. Новаченко, В.А. Телец, Ю.А. Краснодубец"
		+ "<br>"
		+ "Радио и связь, 1995г., 320 стр. с ил."
		+ "<br>"
		+ "ISBN 5-256-01190-1"
		+ "<br>"
		+ "<br>"
		+ "Для радиолюбителей и инженерно-технических работников,"
		+ "<br>"
		+ "специализирующихся в области электроники, радиотехники, радиовещания и телевидения,"
		+ "<br>"
		+ "занимающихся разработкой, эксплуатацией и ремонтом радиоэлектронной аппаратуры.",

		// Обложка (имя image).
		"Integralnye shemy dlya bytovoj radioapparatury. Spravochnik. Novachenko i dr. 1995g.png",
		// Скачать с google-диска.
		"google"
		],

		// -8-
		[
		"Микросхемы для бытовой радиоаппаратуры. Справочник. Новаченко И.В. и др. 1996г.djvu",
		"https://drive.google.com/file/d/1hoywK1VMLOVVE4kB_4vNpb08knB_LLJr/view?usp=sharing",
		"8.288.554 байт",
		"ModalWinBook_8",

		"МИКРОСХЕМЫ ДЛЯ БЫТОВОЙ РАДИОАППАРАТУРЫ"
		+ "<br>"
		+ "Издание второе, стереотипное"
		+ "<br>"
		+ "И.В. Новаченко, В.М. Петухов, И.П. Блудов, А.В. Юровский"
		+ "<br>"
		+ "\"КУ6К-а\" Москва 1996г., 384 стр."
		+ "<br>"
		+ "<br>"
		+ "Приведены электрические параметры, предельные эксплуатационные данные,"
		+ "<br>"
		+ "габаритные размеры и другие характеристики отечественных серийно"
		+ "<br>"
		+ "выпускаемых интегральных микросхем широкого применения."
		+ "<br>"
		+ "Для каждой микросхемы даны типовые схемы включения."
		+ "<br>"
		+ "<br>"
		+ "Для инженерно-технических работников, специализирующихся в области электроники,"
		+ "<br>"
		+ "автоматики, радиотехники, измерительной техники и занимающихся разработкой,"
		+ "<br>"
		+ "эксплуатацией и ремонтом радиоэлектронной аппаратуры,"
		+ "<br>"
		+ "а также подготовленных радиолюбителей.",

		// Обложка (имя image).
		"",
		// Скачать с google-диска.
		"google"
		],

		// -9-
		[
		"Микросхемы памяти и их применение. О.Н. Лебедев. 1990г.djvu",
		"https://drive.google.com/file/d/1hyGHF4if6XwpmevTlAH_LgZbbecbccGj/view?usp=sharing",
		"9.644.878 байт",
		"ModalWinBook_9",

		"МИКРОСХЕМЫ ПАМЯТИ И ИХ ПРИМЕНЕНИЕ"
		+ "<br>"
		+ "Массовая радиобиблиотека. Выпуск 1152, 160 стр. с ил. Лебедев О.Н."
		+ "<br>"
		+ "ISBN 5-256-00656-8"
		+ "<br>"
		+ "<br>"
		+ "Рассмотрены устройства, режимы работы, функциональные возможности и электрические характеристики"
		+ "<br>"
		+ "микросхем оперативных и постоянных запоминающих устройств. Приведены рекомендации по выбору"
		+ "<br>"
		+ "микросхем памяти для практических разработок, по реализации режимов управления микросхемами"
		+ "<br>"
		+ "всех видов при записи, хранении и считывании информации. Данны развернутые примеры"
		+ "<br>"
		+ "применения микросхем памяти в устройствах различного назначения."
		+ "<br>"
		+ "Для подготовленных радиолюбителей.",

		// Обложка (имя image).
		"Mikroshemy pamyati i ih primenenie. O.N. Lebedev. 1990g.png",
		// Скачать с google-диска.
		"google"
		],

		// -10-
		[
		"Микросхемы памяти. Микросхемы ЦАП и АЦП. О.Н. Лебедев и др. 2-е издание. 1996г.pdf",
		"https://cloud.mail.ru/public/PetS/QDvdALjBa",
		"88.261.861 байт",
		"ModalWinBook_10",

		"МИКРОСХЕМЫ ПАМЯТИ. МИКРОСХЕМЫ ЦАП и АЦП"
		+ "<br>"
		+ "Издание 2-е, стереотипное"
		+ "<br>"
		+ "<br>"
		+ "Москва \"Кубк-а\" 1996г."
		+ "<br>"
		+ "ISBN 5-855554-102-9"
		+ "<br>"
		+ "<br>"
		+ "В первой части данного издания рассмотрены устройство, режим работы, функциональные возможности"
		+ "<br>"
		+ "и электрические характеристики микросхем оперативных и постоянных запоминающих устройств."
		+ "<br>"
		+ "<br>"
		+ "Во второй части рассматриваются особенности схем построения, параметры и электрические характеристики"
		+ "<br>"
		+ "быстродействующих интегральных цифро-аналоговых и аналого-цифровых преобразователей.",

		// Обложка (имя image).
		"Mikroshemy pamyati. Mikroshemy CAP i ACP. O.N. Lebedev i dr. 2-e izdanie. 1996g.png",
		// Скачать с mail-диска.
		"mail"
		],

		// -11-
		[
		"Популярные цифровые микросхемы. В.Л. Шило. 1987г.djvu",
		"https://cloud.mail.ru/public/WiAX/pNdKQLHhx",
		"4.569.407 байт",
		"ModalWinBook_11",

		"ПОПУЛЯРНЫЕ ЦИФРОВЫЕ МИКРОСХЕМЫ"
		+ "<br>"
		+ "Справочник"
		+ "<br>"
		+ "Москва \"Радио и Связь\" 1987г."
		+ "<br>"
		+ "<br>"
		+ "Приведены сведения о трёх самых распространённых в радиолюбительской практике видах цифровых"
		+ "<br>"
		+ "микросхем: ТТЛ, КМОП и ЭСЛ. Кратко рассмотрены основы их схемотехники, показаны структуры,"
		+ "<br>"
		+ "цоколёвки и дано описание работы более 300 типов массовых цифровых микросхем:"
		+ "<br>"
		+ "логических элементов, триггеров, регистров, счётчиков, мультиплексоров,"
		+ "<br>"
		+ "арифметических и др. Даны рекомендации по их применению."
		+ "<br>"
		+ "<br>"
		+ "Для подготовленных радиолюбителей и специалистов народного хозяйства, разрабатывающих"
		+ "<br>"
		+ "и применяющих импульсно-цифровую аппаратуру.",

		// Обложка (имя image).
		"",
		// Скачать с mail-диска.
		"mail"
		],

		// -12-
		[
		"Популярные микросхемы ТТЛ (1533, 1531, 531, 555, 155). МОСКВА, АРГУС. 1993г.pdf",
		"https://cloud.mail.ru/public/JRt2/5TYFTA7xH",
		"19.369.320 байт",
		"ModalWinBook_12",

		"ПОПУЛЯРНЫЕ МИКРОСХЕМЫ ТТЛ"
		+ "<br>"
		+ "Серии: КР1533, КР1531, К531, К555, К155"
		+ "<br>"
		+ "МОСКВА \"АРГУС\" 1993г.",

		// Обложка (имя image).
		"Populyarnye mikroskhemy TTL (1533, 1531, 531, 555, 155). MOSKVA, ARGUS. 1993g.png",
		// Скачать с mail-диска.
		"mail"
		],

		// -13-
		[
		"Справочник радиолюбителя. Терещук Р. М., Терещук К. М., Седов С. А.  3-е издание. 1987г.djvu",
		"https://cloud.mail.ru/public/iuVZ/Zz2f8B9iN",
		"16.148.022 байт",
		"ModalWinBook_13",

		"Р.М. ТЕРЕЩУК, К.М. ТЕРЕЩУК, С.А. СЕДОВ"
		+ "<br>"
		+ "ПОЛУПРОВОДНИКОВЫЕ ПРИЁМНО-УСИЛИТЕЛЬНЫЕ УСТРОЙСТВА"
		+ "<br>"
		+ "СПРАВОЧНИК РАДИОЛЮБИТЕЛЯ"
		+ "<br>"
		+ "<br>"
		+ "Издание третье, переработанное и дополненное"
		+ "<br>"
		+ "<br>"
		+ "КИЕВ, НАУКОВА ДУМКА, 1987г.",

		// Обложка (имя image).
		"Spravochnik radiolyubitelya. Tereshchuk R. M., Tereshchuk K. M., Sedov S. A.  3-e izdanie. 1987g.png",
		// Скачать с mail-диска.
		"mail"
		],

		// -14-
		[
		"Усилители мощности низкой частоты - интегральные микросхемы. Справочник. 1997г. Турута Е.Ф.djvu",
		"https://cloud.mail.ru/public/wJ9Y/YuXqK8jZk",
		"1.995.549 байт",
		"ModalWinBook_14",

		"TURUTA"
		+ "<br>"
		+ "УСИЛИТЕЛИ МОЩНОСТИ НИЗКОЙ ЧАСТАТЫ - ИНТЕГРАЛЬНЫЕ МИКРОСХЕМЫ"
		+ "<br>"
		+ "СПРАВОЧНИК. МОСКВА, ИЗДАТЕЛЬСТВО \"ПАТРИОТ\", 1997г."
		+ "<br>"
		+ "ISBN 5-7030-0846-8"
		+ "<br>"
		+ "<br>"
		+ "Настоящий справочник является вторым изданием выпуска \"Усилители мощности низкой частоты -"
		+ "<br>"
		+ "интегральные микросхемы\". В справочнике приведены основные электрические параметры,"
		+ "<br>"
		+ "базовые и модифицированные схемы подключения интегральных микросхем - усилителей"
		+ "<br>"
		+ " мощности НЧ. По сравнению с первым изданием, значительно расширена номенклатура"
		+ "<br>"
		+ " описываемых микросхем, в частности УНЧ последнего поколения серии TDA фирм"
		+ "<br>"
		+ " Philips и SGS-Thomson. Даны более подробные описания модификаций"
		+ "<br>"
		+ "и функциональных возможностей подключения описываемых микросхем.",

		// Обложка (имя image).
		"Usiliteli moshchnosti nizkoj chastoty - integral'nye mikroskhemy. Spravochnik. 1997g. Turuta E.F.png",
		// Скачать с mail-диска.
		"mail"
		]
		];

	// Сортировка.
	ArrayBook.sort();

	// Подготовка к вставке.
	var temp = "<br>";

	temp += "<hr style=\"width: 296px;\">"
	temp += "Небольшая коллекция литературы!"
	temp += "<br>"
	temp += "Вся литература до 2000 года!"
	temp += "<hr style=\"width: 296px;\">"

	temp += "<span class=\"smalltxt\">";

	temp += "<br>"
	temp += "Если я, нарушаю чьи-либо права, напишите мне, и я удалю нужную Вам литературу.";
	temp += "<br>";
	temp += "<b>bbarsinov[ухо]gmail.com</b>";
	temp += "<br><br>";

	temp += "</span>";

	temp += "<table align=\"center\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

	var z2 = 0;

	for(var z = 0; z < ArrayBook.length; z++)
		{

		// Вставка линии.
		if (z == z2)
			{
			if (z == 0)
				{
				// Линия перед первой строкой, "padding-top: 4px" - не нужен.
				temp += "<tr><td colspan=\"2\" style=\"padding-bottom: 4px;\">";
				temp += "<hr>";
				temp += "</td></tr>";
				}
				else
				{
				temp += "<tr><td colspan=\"2\" style=\"padding-top: 4px; padding-bottom: 4px;\">";
				temp += "<hr>";
				temp += "</td></tr>";
				}

			// Вставка через 5-ть строк
			z2 = z2 + 5;
			}

		temp += "<tr>";

		temp += "<td>";

		if (z < 9)
			{
			// Вставить пробел перед цифрой.
			temp += "&nbsp;";
			}

		temp += z + 1 + ". " + "<a href=\"" + ArrayBook[z][1] + "\" target=\"_blank\" ";

		if (ArrayBook[z][6] == 'google')
			{
			temp += "title=\"Скачать с google-диска (откроется в новой вкладке). Объём: " + ArrayBook[z][2] + "\">";
			}

		if (ArrayBook[z][6] == 'mail')
			{
			temp += "title=\"Скачать с mail-диска (откроется в новой вкладке). Объём: " + ArrayBook[z][2] + "\">";
			}

		temp += ArrayBook[z][0] + "</a><br>";
		temp += "</td>";

		temp += "<td style=\"padding-left: 16px;\">";
		temp += "<a href=\"javascript:OpenShowModalWinBook('" + ArrayBook[z][3] + "')\" title=\"Просмотр обложки и просмотр информации о литературе\">";
		temp += "<img src=\"images/numeric_1.png\">";
		temp += "</a>";
		temp += "</td>";

		temp += "</tr>";

		}

	// Вставка последней линии.
	temp += "<tr><td colspan=\"2\" style=\"padding-top: 4px;\">";
	temp += "<hr>";
	temp += "</td></tr>";

	temp += "</table>";

	// Две ссылки.
	temp += "<br>";
	temp += "<a href=\"https://drilnet.github.io/lit.html\" title=\"Откроется в новой вкладке\" target=\"_blank\">Просмотр подробной информации о литературе</a>";
	temp += "<br>";
	temp += "<a href=\"https://cloud.mail.ru/public/77Eo/ksvpFYS9j\" title=\"Скачать c mail-диска (откроется в новой вкладке). Объём: 201.827.997 байт.\" target=\"_blank\">Скачать всю литературу одним файлом</a>";
	temp += "<br>";

	temp += "<span class=\"smalltxt\">";

		// Спасибо за литературу.

		temp += "<br>";

		temp += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

			temp += "<tr>";
			temp += "<td align=\"center\">";
			temp += "<b>Уважаемые создатели литературы!</b>";
			temp += "</td>";
			temp += "</tr>";

			temp += "<tr>";
			temp += "<td align=\"center\">";
			temp += "Спасибо Вам!";
			temp += "</td>";
			temp += "</tr>";

			temp += "<tr>";
			temp += "<td align=\"center\">";
			temp += "Низкий поклон Вам!";
			temp += "</td>";
			temp += "</tr>";

		temp += "</table>";

	temp += "</span>";

	// Вставка.
	document.getElementById('book_lit').innerHTML = temp;

	// Наполняем модальные окна.
	for(var z = 0; z < ArrayBook.length; z++)
		{
		temp = "<table align=\"center\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";

		if (ArrayBook[z][5] != "")
			{
			// Обложка (Cover).
			temp += "<tr>";
			temp += "<td align=\"center\">";
			temp += "<img src=\"images-cover/" + ArrayBook[z][5] + "\">";
			temp += "<br>";
			temp += "<br>";
			temp += "</td>";
			temp += "</tr>";
			}

		// Информация.
		temp += "<tr>";
		temp += "<td align=\"center\">";
		temp += ArrayBook[z][4];
		temp += "</td>";
		temp += "</tr>";

		// Кнопка закрыть.
		temp += "<tr>";
		temp += "<td align=\"center\">";

			temp += "<br>";

			temp += "<table class=\"txtbutton\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">";
			temp += "<tr>";
			temp += "<td>";

			temp += "<a href=\"javascript:CloseModalWinBook('" + ArrayBook[z][3] + "')\">закрыть</a>";

			temp += "</td>";
			temp += "</tr>";
			temp += "</table>";

		temp += "</td>";
		temp += "</tr>";

		temp += "</table>";

		// Вставка.
		document.getElementById(ArrayBook[z][3]).innerHTML = temp;
		}
}

// ---
// | Показать модальное окно (ЛИТЕРАТУРА).
// ---
function OpenShowModalWinBook(x)
{
	// Слой затемнения.
	var darkLayer = document.createElement("div");
		// id чтобы подхватить стиль.
		darkLayer.id = "shadowbook";
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
// | Закрыть модальное окно (ЛИТЕРАТУРА).
// ---
function CloseModalWinBook(x)
{
	// Удаляем затемнение.
	var darkLayer = document.getElementById("shadowbook");
	darkLayer.parentNode.removeChild(darkLayer);

	var modalWin = document.getElementById(x); // Находим наше "окно".
	modalWin.style.display = "none"; // "Выключаем" окно.
}
