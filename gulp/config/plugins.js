import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Условное ветвление

// Экспортируем объект
export const plugins = {
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}