#!/bin/sh

set -e

CONFIG_JSON="/etc/v2ray/config.json"
CONFIG_TMPL="/etc/v2ray/config.json.tmpl"

if [ -f "$CONFIG_JSON" ]; then
    echo "[INFO] Найден готовый $CONFIG_JSON."
    echo "[INFO] Запуск без подстановки переменных..."

elif [ -f "$CONFIG_TMPL" ]; then
    echo "[INFO] Готового конфига нет, но найден шаблон $CONFIG_TMPL."
    echo "[INFO] Выполняю подстановку переменных окружения..."
    
    # envsubst заменяет переменные и сохраняет их в config.json
    envsubst < "$CONFIG_TMPL" > "$CONFIG_JSON"
    
    echo "[INFO] Файл $CONFIG_JSON успешно сгенерирован."
else
    echo "[ERROR] Критическая ошибка!"
    echo "[ERROR] Не найден ни $CONFIG_JSON, ни $CONFIG_TMPL."
    echo "[ERROR] Контейнер будет остановлен."
    exit 1
fi

echo "[INFO] Запускаем V2Fly..."
exec ./v2fly run -c "$CONFIG_JSON" -format jsonv5