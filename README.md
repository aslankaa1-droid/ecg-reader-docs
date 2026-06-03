# ECG Reader — Документарный хаб (docs.ecg-reader.com)

**Путь:** `E:\Проекты Аслана\ИС КС-экг\_docs_hub_kardiospec\`
**Дата сборки:** 2026-06-03
**Назначение:** ЭТАП A.5 BUILD PLAN — документарный хаб `docs.ecg-reader.com`

---

## Архитектурное решение

Хаб собран **не на MkDocs/Docusaurus**, а как премиум-статический сайт на той же
дизайн-системе, что и лендинг `ecg-reader.com`. Причина — стандарт премиум-стиля
(зафиксирован Асланом 2026-06-03): generic-шаблоны документ-генераторов выглядят
дёшево и противоречат позиционированию premium medical AI brand. Хаб наследует
3 темы (Dark/Light/Sepia), мультиязычность и анимации через общий `app.js`.

## Что внутри

```
_docs_hub_kardiospec/
├─ index.html              · Портал: hero + 5 уровней доступа + публичная библиотека + access-band
├─ assets/
│  ├─ styles.css           · Дизайн-система (копия лендинга — 3 темы, токены)
│  ├─ hub.css              · Хаб-специфика: tier-grid, doc-card, access-band, footer
│  ├─ app.js               · Общий движок (тема / язык / reveal / меню) — копия лендинга
│  ├─ i18n.js              · Словарь хаба: RU (master) + EN
│  └─ legal.css            · Стили legal-страниц (на будущее)
├─ svg/favicon.svg
├─ og-image.png            · OG-карточка 1200×630 (общая с лендингом)
├─ public/                 · Каркас для расширенных публичных doc-страниц (следующая итерация)
└─ .nojekyll
```

## Модель доступа (5 уровней)

| Уровень | Статус | Содержимое |
|---|---|---|
| **Публичный** | Открыт | миссия, продукт, опубликованные клин. данные, регстатус, пресса, Privacy/Terms |
| **Инвесторский** | По NDA | финмодель, GTM, воронка, cap table, traction, партнёрства |
| **Клиентский** | По договору | API-доки, интеграции HL7/FHIR/DICOM/ЕГИСЗ, обучение, release notes, статус |
| **Разработчик** | Регистрация | SDK, API Reference, примеры, Postman, changelog, sandbox |
| **Регулятор/Партнёр** | По NDA | регдосье, тех.спеки, отчёты валидации, risk management file |

Сейчас открыт **публичный** уровень (ссылки на реальные артефакты `ecg-reader.com/docs/*`).
Закрытые уровни — через mailto-запрос (152-ФЗ: без форм). Реальный auth (Auth0/Keycloak
или PIN-gate) подключается на ЭТАПЕ D, когда появится backend.

## 152-ФЗ режим

Без форм, cookie и аналитики. Sticky legal-бар. Запрос доступа — только `mailto:aslankaa@yandex.ru`.

## Тестирование локально

```powershell
python -m http.server 8081 --directory "E:\Проекты Аслана\ИС КС-экг\_docs_hub_kardiospec"
# http://localhost:8081/
```

## Деплой на GitHub Pages (после регистрации ecg-reader.com)

```bash
# В корне _docs_hub_kardiospec/
git init && git add . && git commit -m "ECG Reader docs hub — premium static"
gh repo create aslankaa1-droid/ecg-reader-docs --public --source=. --remote=origin --push
gh api repos/aslankaa1-droid/ecg-reader-docs/pages -F "source[branch]=main" -F "source[path]=/"
gh api -X PUT repos/aslankaa1-droid/ecg-reader-docs/pages -F "cname=docs.ecg-reader.com"
gh api -X PUT repos/aslankaa1-droid/ecg-reader-docs/pages -F "https_enforced=true"
```

DNS на reg.ru: `docs.ecg-reader.com` → CNAME → `aslankaa1-droid.github.io`
(CNAME через `zone/add_cname`, см. `reference_regru_api_quirks.md`).

## Открытые TODO (следующая итерация)

- [ ] Расширенные публичные doc-страницы в `public/` (About / Product / Technology /
      Regulatory / Publications) с doc-layout (sidebar + TOC) — контент из 67 docs
- [ ] Языки ZH + AR (RTL) — машинерия `app.js` уже поддерживает; добавить в `i18n.js` + `LANG_LIST`
- [ ] Реальный multi-tier auth (после backend, ЭТАП D)
- [ ] Отдельная OG-карточка для хаба (сейчас общая с лендингом)

---

**Reference:** `_00_Master_Index/BUILD_PLAN_Real_Working_Project.md` · ЭТАП A.5
