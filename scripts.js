function generate() {
    var textArea = document.getElementById('text');
    textArea.value = '';

    // Получаем значение начальной даты из элемента <input>
    var startDateInput = document.getElementById('startDate').value;

    // Получаем значение выбранной опции в селекторе
    var projectTypeSelect = document.getElementById('projectType');
    var selectedOption = projectTypeSelect.options[projectTypeSelect.selectedIndex].value;

    if (selectedOption === 'ТрэвелПре') {
        let TextArray = [
            "Подготовка локаций редактором", 5,
            "Проверка и ок локаций продюсером", 6,
            "Написание сценплана и согласование шеф-редом", 13,
            "Согласование сценплана режем", 14,
            "Поиск спикеров и организация поездки Илье", 15,
			"Съемка + заливка файлов", "Без даты"
        ];

        generateText(textArea, new Date(startDateInput), TextArray);
    } else if (selectedOption === 'ТрэвелПост') {
        let TextArray = [
			"Монтаж рыбы", 5,
			"Написание сценария и согласование шеф-редом", 14,
			"Согласование сценария режем", 16,
			"Внесение правок редактором", 17,
			"Монтаж первого черновика", 27,
			"Правки по первому черновику", 29,
			"Сбор тегов", 30,
			"Оформление (редактор)", 32,
			"Запись закадра Ильи", "Без даты",
			"Перевод", 35,
			"Озвучка", 38,
			"Графика", 45,
			"Фактчекинг", 46,
			"Анимация", 49,
			"Звук", 56,
			"Финальный монтаж", 58
		];
		generateText(textArea, new Date(startDateInput), TextArray);
    }
	else if (selectedOption === 'Студийка') {
        let TextArray = [
			"Написание сценплана и согласование шеф-редом", 7,
			"Согласование сценплана режем", 8,
			"Поиск и запись спикеров", 15,
			"Монтаж рыбы", 16,
			"Написание сценария и согласование шеф-редом", 23,
			"Согласование сценария режем", 25,
			"Сбор тегов", 26,
			"Оформление (редактор)", 28,
			"Монтаж первого черновика", 33,
			"Правки по первому черновику", 34,
			"Озвучка", 36,
			"Графика", 43,
			"Фактчекинг", 44,
			"Анимация", 46,
			"Звук", "Без даты",
			"Финальный монтаж", 48
		];
		generateText(textArea, new Date(startDateInput), TextArray);
    } else if (selectedOption === 'Фильмы с корром') {
        let TextArray = [
			"Поиск спикеров", 1,
			"Написание сценплана и согласование шеф-редом", 8,
			"Согласование сценплана режем", 9,
			"Организация поездки корру", 16,
			"Монтаж рыбы", 19,
			"Написание сценария и согласование шеф-редом", 28,
			"Согласование сценария режем", 30,
			"Монтаж первого черновику", 41,
			"Правки по первому черновику", 43,
			"Сбор тегов", 44,
			"Оформление (редактор)", 46,
			"Озвучка", 48,
			"Графика", 55,
			"Фактчекинг", 56,
			"Анимация", 59,
			"Звук", 66,
			"Финальный монтаж", 69
		];
		generateText(textArea, new Date(startDateInput), TextArray);
    } else {
        // Handle any other options or display a message
        textArea.value = 'Выберите опцию для генерации.';
    }
}

function generateText(textArea, startDate, textArray) {
    var innerHTML = '';
    for (var i = 0; i < textArray.length; i += 2) {
        var task = textArray[i];
        var daysToAdd = textArray[i + 1];

        if (typeof daysToAdd === 'number') {
            var endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + daysToAdd);

            var formattedEndDate = endDate.toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            innerHTML += `${task} - ${formattedEndDate}<br>`;
        } else {
            // Highlight "Без даты" with red color
            innerHTML += `<span style="color: red;">${task} - ${daysToAdd}</span><br>`;
        }
    }
    textArea.innerHTML = innerHTML; // Use innerHTML instead of value
}

// Функция для копирования текста из <textarea id="text"></textarea>
function copyText() {
  var textDiv = document.getElementById('text');
  var copyButton = document.querySelector('.copy-button');

  // Create a temporary textarea element
  var tempTextArea = document.createElement('textarea');
  
  // Use innerText instead of textContent to preserve line breaks
  tempTextArea.value = textDiv.innerText;
  document.body.appendChild(tempTextArea);
  
  // Select and copy the text
  tempTextArea.select();
  document.execCommand('copy');
  
  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
  
  // Notify user of copy
  copyButton.textContent = 'Скопировано!';
  copyButton.classList.add('copied');
  
  // Reset button after delay
  setTimeout(function() {
      copyButton.textContent = 'Скопировать';
      copyButton.classList.remove('copied');
  }, 2000);
}




