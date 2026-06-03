/* KARDIOSPEC DOCS HUB · i18n dictionary · RU master + EN
   ZH / AR — следующая итерация (машинерия app.js уже поддерживает RTL для AR). */

window.THEME_LIST = [
  { code: "dark",  name: "Dark"  },
  { code: "light", name: "Light" },
  { code: "sepia", name: "Sepia" },
];

window.LANG_LIST = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
];

window.I18N = {
  ru: {
    "meta.title": "Документарный хаб — ECG Reader",
    "meta.desc": "Документарный хаб ECG Reader: публичная библиотека, многоуровневый доступ для инвесторов, клиник, разработчиков и регуляторов. CDS / SaMD. 152-ФЗ.",

    "nav.docs": "Документация",
    "nav.public": "Публичная библиотека",
    "nav.tiers": "Уровни доступа",
    "nav.site": "Основной сайт",
    "tier.public.open": "Открыть раздел →",

    "hero.kicker": "Документарный хаб · docs.ecg-reader.com",
    "hero.title": "Единая точка доступа ко всей документации ECG Reader",
    "hero.sub": "Публичные материалы открыты для всех. Финансовая модель, интеграционные руководства, регуляторное досье и клинические отчёты — по уровням доступа под соответствующим NDA.",
    "hero.cta_public": "Открыть публичную библиотеку",
    "hero.cta_request": "Запросить доступ к закрытым разделам",

    "tiers.title": "Пять уровней доступа",
    "tiers.sub": "Каждому типу контрагента — свой объём документации. Закрытые уровни открываются после подписания соответствующего соглашения о конфиденциальности.",

    "tier.public.name": "Публичный",
    "tier.public.status": "Открыт",
    "tier.public.desc": "Миссия, обзор продукта, опубликованные клинические данные, регуляторный статус, пресс-материалы, Политика конфиденциальности и Условия.",

    "tier.investor.name": "Инвесторский",
    "tier.investor.status": "По NDA",
    "tier.investor.desc": "Детальная финансовая модель, GTM-стратегия, воронка клиентов, cap table, метрики traction, стратегические партнёрства.",

    "tier.customer.name": "Клиентский",
    "tier.customer.status": "По договору",
    "tier.customer.desc": "API-документация, руководства по интеграции (HL7 / FHIR / DICOM / ЕГИСЗ), материалы обучения, release notes, страница статуса.",

    "tier.developer.name": "Разработчик",
    "tier.developer.status": "Регистрация",
    "tier.developer.desc": "SDK, API Reference, примеры кода, Postman-коллекции, changelog, sandbox-окружение.",

    "tier.regulator.name": "Регулятор / Партнёр",
    "tier.regulator.status": "По NDA",
    "tier.regulator.desc": "Полное регуляторное досье, технические спецификации, отчёты клинической валидации, файл управления рисками.",

    "lib.title": "Публичная библиотека",
    "lib.sub": "Открытые материалы — без регистрации и форм. Документы открываются в новой вкладке.",

    "lib.pitch.t": "Pitch Deck",
    "lib.pitch.d": "Инвестиционная презентация: проблема, решение, рынок, продукт, бизнес-модель, команда, ask.",
    "lib.onepager.t": "One-Pager",
    "lib.onepager.d": "Сводка проекта на одну страницу для холодных контактов.",
    "lib.whitepaper.t": "White Paper",
    "lib.whitepaper.d": "Архитектура двойного AI-консенсуса и rule-engine безопасности.",
    "lib.evidence.t": "Клиническая доказательная база",
    "lib.evidence.d": "Целевые метрики DECIDE-AI, корпуса данных, публикации о врачебных ошибках.",
    "lib.privacy.t": "Политика конфиденциальности",
    "lib.privacy.d": "Обработка ПДн: 152-ФЗ + 242-ФЗ + 323-ФЗ + GDPR + HIPAA.",
    "lib.terms.t": "Условия использования",
    "lib.terms.d": "Условия для CDS / SaMD Class 2б.",
    "lib.disclosure.t": "Раскрытие информации",
    "lib.disclosure.d": "Назначение сервиса, ограничения, статус как ПО клинической поддержки.",
    "lib.open": "Открыть →",

    "access.title": "Доступ к закрытым разделам",
    "access.sub": "Закрытые уровни предоставляются индивидуально после подписания соглашения о конфиденциальности. Напишите нам, указав тип доступа (инвестор / клиника / разработчик / регулятор).",
    "access.email": "Запросить по email",
    "access.note": "Сервис не предназначен для постановки диагноза без участия врача. Это программное средство клинической поддержки принятия решений (CDS / SaMD), а не автономный диагност.",

    "foot.tagline": "Клинический сервис AI-ассистированной интерпретации ЭКГ",
    "foot.legal": "323-ФЗ ст. 36.2 · Приказ 965н · 152-ФЗ резидентность данных в РФ",
    "foot.owner": "Center Group Company · Кагиров Абдул-Хаким Ахмадович",

    "legal.text": "Информационный ресурс. ECG Reader — программное средство клинической поддержки принятия решений (CDS / SaMD), не заменяет очную консультацию врача. На сайте нет форм сбора персональных данных, cookie и аналитики (152-ФЗ).",
    "legal.ok": "Понятно",
  },

  en: {
    "meta.title": "Documentation Hub — ECG Reader",
    "meta.desc": "ECG Reader Documentation Hub: public library plus tiered access for investors, clinics, developers and regulators. CDS / SaMD. Russian data residency (152-FZ).",

    "nav.docs": "Documentation",
    "nav.public": "Public Library",
    "nav.tiers": "Access Tiers",
    "nav.site": "Main site",
    "tier.public.open": "Open section →",

    "hero.kicker": "Documentation Hub · docs.ecg-reader.com",
    "hero.title": "A single point of access to all ECG Reader documentation",
    "hero.sub": "Public materials are open to everyone. Financial model, integration guides, regulatory dossier and clinical reports are available by access tier under the relevant NDA.",
    "hero.cta_public": "Open the public library",
    "hero.cta_request": "Request access to gated sections",

    "tiers.title": "Five access tiers",
    "tiers.sub": "Each counterparty type gets its own documentation scope. Gated tiers unlock after signing the relevant confidentiality agreement.",

    "tier.public.name": "Public",
    "tier.public.status": "Open",
    "tier.public.desc": "Mission, product overview, published clinical data, regulatory status, press materials, Privacy Policy and Terms.",

    "tier.investor.name": "Investor",
    "tier.investor.status": "Under NDA",
    "tier.investor.desc": "Detailed financial model, GTM strategy, customer pipeline, cap table, traction metrics, strategic partnerships.",

    "tier.customer.name": "Customer",
    "tier.customer.status": "Under contract",
    "tier.customer.desc": "API documentation, integration guides (HL7 / FHIR / DICOM / EGISZ), training materials, release notes, status page.",

    "tier.developer.name": "Developer",
    "tier.developer.status": "Registration",
    "tier.developer.desc": "SDK, API reference, code examples, Postman collections, changelog, sandbox environment.",

    "tier.regulator.name": "Regulator / Partner",
    "tier.regulator.status": "Under NDA",
    "tier.regulator.desc": "Full regulatory dossier, technical specifications, clinical validation reports, risk management file.",

    "lib.title": "Public library",
    "lib.sub": "Open materials — no registration, no forms. Documents open in a new tab.",

    "lib.pitch.t": "Pitch Deck",
    "lib.pitch.d": "Investment deck: problem, solution, market, product, business model, team, ask.",
    "lib.onepager.t": "One-Pager",
    "lib.onepager.d": "One-page project summary for cold outreach.",
    "lib.whitepaper.t": "White Paper",
    "lib.whitepaper.d": "Dual-AI consensus architecture and the safety rule-engine.",
    "lib.evidence.t": "Clinical evidence base",
    "lib.evidence.d": "DECIDE-AI target metrics, data corpora, publications on diagnostic error.",
    "lib.privacy.t": "Privacy Policy",
    "lib.privacy.d": "Personal data processing: 152-FZ + 242-FZ + 323-FZ + GDPR + HIPAA.",
    "lib.terms.t": "Terms of Service",
    "lib.terms.d": "Terms for CDS / SaMD Class IIb.",
    "lib.disclosure.t": "Disclosure",
    "lib.disclosure.d": "Service purpose, limitations, status as clinical decision support software.",
    "lib.open": "Open →",

    "access.title": "Access to gated sections",
    "access.sub": "Gated tiers are granted individually after signing a confidentiality agreement. Email us indicating the access type (investor / clinic / developer / regulator).",
    "access.email": "Request by email",
    "access.note": "The service is not intended to make a diagnosis without a physician. It is clinical decision support software (CDS / SaMD), not an autonomous diagnostician.",

    "foot.tagline": "Clinical AI-assisted ECG interpretation service",
    "foot.legal": "323-FZ art. 36.2 · Order 965n · 152-FZ Russian data residency",
    "foot.owner": "Center Group Company · Abdul-Hakim A. Kagirov",

    "legal.text": "Informational resource. ECG Reader is clinical decision support software (CDS / SaMD); it does not replace an in-person physician consultation. This site has no personal-data forms, cookies or analytics (152-FZ).",
    "legal.ok": "Got it",
  },
};
