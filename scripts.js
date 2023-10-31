function generate() {
    var textArea = document.getElementById('text');
    textArea.value = '';

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

        textArea.value += task + ' - ' + formattedEndDate + "\n";
    }
}

// Функция для копирования текста из <textarea id="text"></textarea>
function copyText() {
    var textArea = document.getElementById('text');
    var copyButton = document.querySelector('.copy-button');

    // Выделяем весь текст в <textarea>
    textArea.select();

    // Копируем текст в буфер обмена
    document.execCommand('copy');

    // Оповещаем пользователя о копировании
    copyButton.textContent = 'Скопировано!';
    copyButton.classList.add('copied');

    // Убираем анимацию и возвращаем исходное состояние через 2 секунды
    setTimeout(function() {
        copyButton.textContent = 'Скопировать';
        copyButton.classList.remove('copied');
    }, 2000);
}