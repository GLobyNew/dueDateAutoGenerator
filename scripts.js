 function generate() {
  var divElement = document.getElementById('text');
  divElement.innerHTML = '';

    // Получаем значение начальной даты из элемента <input>
  var startDateInput = document.getElementById('startDate').value;

  // Парсим значение в объект Date
  var startDate = new Date(startDateInput);
  let textArray = [
    "Написание сценплана", 6,
    "Согласование сценплана режиссером", 7,
    "Запись спикеров", 14,
    "Монтаж рыбы", 15,
    "Написание сценария", 22,
    "Согласование сценария", 24,
    "Графика", 26,
    "Анимация", 27,
    "Монтаж", 31
  ];

  for (var i = 0; i < textArray.length; i += 2) {
    var task = textArray[i];
    var daysToAdd = textArray[i + 1];
    var endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + daysToAdd);

    var formattedEndDate = endDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    divElement.innerHTML += task + ' - ' + formattedEndDate + "<br>";
  }
}

// Функция для копирования текста из <div id="text"></div>
function copyText() {
    var textElement = document.getElementById('text');
    var copyButton = document.querySelector('.copy-button');
    
    // Создаем временный элемент для копирования текста
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textElement.textContent;
    
    // Добавляем временный элемент в документ и выделяем его содержимое
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    
    // Копируем текст в буфер обмена
    document.execCommand('copy');
    
    // Удаляем временный элемент
    document.body.removeChild(tempTextArea);
    
    // Оповещаем пользователя о копировании
    copyButton.textContent = 'Скопировано!';
    copyButton.classList.add('copied');
    
    // Убираем анимацию и возвращаем исходное состояние через 2 секунды
    setTimeout(function() {
        copyButton.textContent = 'Скопировать';
        copyButton.classList.remove('copied');
    }, 2000);
}