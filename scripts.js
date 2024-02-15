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
            "Проверка и ок локаций продюсером + договоренности со спикерами", 19,
            "Написание сценплана", 24,
            "Согласование сценплана режем и шеф-редом", 27,
			"Съемка + заливка файлов", "Без даты"
        ];

        generateText(textArea, new Date(startDateInput), TextArray);
    } else if (selectedOption === 'ТрэвелПост') {
        let TextArray = [
			"Монтаж рыбы", 5,
			"Согласование рыбы режем", 6,
			"Написание сценария", 13,
			"Согласование сценария режем и шеф-редом", 16,
			"Фактчекинг", 17,
			"Корректура", 18,
			"Монтаж первого черновика", 28,
			"Правки по первому черновику", 30,
			"Сбор тегов", 32,
			"Оформление (редактор)", 34,
			"Запись закадра Ильи", "Без даты",
			"Перевод", 37,
			"Озвучка", 40,
			"Графика", 50,
			"Фактчекинг", 51,
			"Анимация", 54,
			"Звук", 61,
			"Финальный монтаж", 63
		];
		generateText(textArea, new Date(startDateInput), TextArray);
    }
	else if (selectedOption === 'Студийка') {
        let TextArray = [
			"Написание сценплана", 5,
			"Согласование сценплана режем и  шеф-редом", 8,
			"Поиск и запись спикеров", 15,
			"Монтаж рыбы", 16,
			"Написание сценария", 21,
			"Согласование сценария режем и  шеф-редом", 24,
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
			"Поиск спикеров", 14,
			"Написание сценплана", 19,
			"Согласование сценплана режем и шеф-редом", 22,
			"Организация поездки корру", 29,
			"Монтаж рыбы", 32,
			"Написание сценария", 39,
			"Согласование сценария режем и шеф-редом", 42,
			"Монтаж первого черновику", 52,
			"Правки по первому черновику", 54,
			"Сбор тегов", 56,
			"Оформление (редактор)", 58,
			"Озвучка", 60,
			"Графика", 67,
			"Фактчекинг", 68,
			"Анимация", 71,
			"Звук", 78,
			"Финальный монтаж", 81
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




