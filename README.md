# SRE-HT

1. Поскольку у нашего приложения очень простой API с двумя итипами запросов (дать список данных из одной таблицы или из двух) план тестирования: а) определить максимальное количество запросов, о которого приложение завалится, б) на 80% от полученного значения провести тест длительной загрузки, в) Провести тест на внезапные скачки нагрузки.
2. Реализация плана: файлы BreakPiont-Test.js и Soak.js
3. SLO традиционно для BS систем в 99%. а) Время отклика: 95% запросов должны быть выполнены в течение 500 мс. б) Пропускная способность: приложение должно обрабатывать не менее 100 запросов в секунду. в) Частота ошибок: не более 1% запросов должны приводить к ошибкам. г) Доступность: Приложение должно быть доступно в 99% случаев. SLO не выдерживается на заданных ресурсах учебного стенда.
4. Обвал приложения произошёл при пятистах запросах в секунду.
5. Принцип поведения приложения от меня ускользнул, потому в последующих тестах на длительную нагрузку падение пода происходило гораздо раньше. Происходил резкий скачёк потребления CPU и памяти с выходом за лимиты и падение пода (график на картинке HT.jpg)
6. Скрипт для теста на скачки нагрузки не писал, потому как последний длительный тест и так показал разрушительные последствия для приложения скачков с 80 запросов до 200 в течение 20 секунд. (soak тест на 20 виртуальных пользователей).
