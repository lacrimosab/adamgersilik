// Minimal JS only for language switching and simple scroll reveal.

const translations = {
  kz: {
    page_title: "Adamgersilik",
    nav_main: "Басты",
    nav_news: "Жаңалықтар",
    nav_stories: "Оқиғалар",
    nav_law: "Заң",
    nav_team: "Команда",
    nav_contacts: "Байланыс",
    hero_title: "Жануарларға әділет — күштірек заңнан басталады.",
    hero_desc:
      "Біз жануарларға жасалған зорлыққа лайықты жаза болуын және заңның нақты орындалуын қолдаймыз.",
    hero_cta: "Жаңалықтарды оқу",
    problem_title: "Қоғамды алаңдатқан жағдайлар",
    problem_intro:
      "Төмендегі материалдар макет үшін берілген. Кейін тексерілген деректермен толықтырылады.",
    news_1_title: "Жануарға қатыгездік туралы мысал жаңалық",
    news_1_meta: "Ұлттық БАҚ · 00.00.0000",
    news_1_desc: "Қысқа сипаттама орны. Кейін нақты дерек қосылады.",
    news_2_title: "Екінші мысал жаңалық",
    news_2_meta: "Аймақтық басылым · 00.00.0000",
    news_2_desc: "Тағы бір қысқа сипаттама. Кейін шынайы ақпаратпен ауыстырылады.",
    news_3_title: "Үшінші мысал жаңалық",
    news_3_meta: "Онлайн басылым · 00.00.0000",
    news_3_desc: "Бұл бөлім құрылым үшін тұр. Кейін тексерілген мазмұн болады.",
    law_title: "Неге қазіргі жаза жеткіліксіз",
    law_intro:
      "Қазақстандағы жануарларға қатыгездікке қатысты құқықтық жағдайды қысқаша салыстыру кестесі.",
    table_country: "Ел / аймақ",
    table_fine: "Айыппұл",
    table_prison: "Бас бостандығынан айыру",
    table_enforcement: "Қолданылуы",
    country_kz: "Қазақстан",
    country_kz_fine: "Мысал ауқым",
    country_kz_prison: "Мысал мерзім",
    country_kz_enf: "Мысал бағалау",
    country_de: "Германия",
    country_de_fine: "Мысал ауқым",
    country_de_prison: "Мысал мерзім",
    country_de_enf: "Мысал бағалау",
    country_uk: "Ұлыбритания",
    country_uk_fine: "Мысал ауқым",
    country_uk_prison: "Мысал мерзім",
    country_uk_enf: "Мысал бағалау",
    law_note: "Кестедегі көрсеткіштер қазір тек макет үшін берілген. Кейін нақты деректермен жаңартылады.",
    team_title: "Біздің команда",
    team_intro: "Аты-жөндер келісімнен кейін толықтырылады. Қазір бұл блок құрылымды көрсету үшін берілген.",
    team_1_name: "Қатысушы аты",
    team_1_role: "Кампания үйлестіруі",
    team_2_name: "Қатысушы аты",
    team_2_role: "Құқықтық зерттеу",
    team_3_name: "Қатысушы аты",
    team_3_role: "Коммуникация",
    stories_title: "Біздің команданың жеке оқиғалары",
    stories_intro: "Кампанияға не үшін қосылғанымызды қысқа әрі шынайы түрде бөлісеміз.",
    story_1_name: "Айгерім, ерікті",
    story_1_text:
      "Бірнеше жыл бұрын ауламыздағы күшіктің жарақат алғанын көріп, жануарларды қорғау тақырыбына тұрақты араласа бастадым. Бұл кампанияда менің мақсатым - заңның қағазда емес, өмірде жұмыс істеуіне үлес қосу.",
    story_2_name: "Ержан, зерттеу тобы",
    story_2_text:
      "Мен үшін бұл бастама - балаларға мейірім мәдениетін көрсету жолы. Жануарларға қатыгездікке бейжай қарамау қоғамдағы жауапкершілік деңгейін арттырады деп сенемін.",
    footer_closing: "Жануарларды қорғайтын әділ құқықтық жүйені бірге қалыптастыра аламыз.",
    footer_values: "Құрмет · Жауапкершілік · Бірге",
    cta_join: "Кампанияға қосылу",
    cta_feedback: "Пікір қалдыру",
    contact_instagram: "Instagram:",
    contact_email: "Email:",
    contact_phone: "Телефон:",
    contact_city: "Қала:",
    city_value: "Алматы, Қазақстан",
    footer_rights: "Placeholder © кампания атауы. Барлық құқық қорғалған."
  },
  ru: {
    page_title: "Adamgersilik",
    nav_main: "Главная",
    nav_news: "Новости",
    nav_stories: "Истории",
    nav_law: "Закон",
    nav_team: "Команда",
    nav_contacts: "Контакты",
    hero_title: "Справедливость для животных начинается с более сильного закона.",
    hero_desc: "Мы выступаем за соразмерное наказание за жестокое обращение с животными и реальное исполнение закона.",
    hero_cta: "Читать новости",
    problem_title: "Случаи, которые потрясли общество",
    problem_intro: "Материалы ниже даны как макет. Позже блок будет дополнен проверенными фактами.",
    news_1_title: "Пример новости о жестоком обращении",
    news_1_meta: "Национальные СМИ · 00.00.0000",
    news_1_desc: "Краткое описание-заглушка. Позже будет добавлен подтвержденный материал.",
    news_2_title: "Вторая примерная новость",
    news_2_meta: "Региональное издание · 00.00.0000",
    news_2_desc: "Еще один короткий пример текста для структуры страницы.",
    news_3_title: "Третья примерная новость",
    news_3_meta: "Онлайн-издание · 00.00.0000",
    news_3_desc: "Этот блок нужен для структуры. Позже здесь будет реальный контент.",
    law_title: "Почему текущего наказания недостаточно",
    law_intro: "Краткая сравнительная таблица по правовому регулированию жестокого обращения с животными.",
    table_country: "Страна / регион",
    table_fine: "Штраф",
    table_prison: "Лишение свободы",
    table_enforcement: "Применение",
    country_kz: "Казахстан",
    country_kz_fine: "Пример диапазона",
    country_kz_prison: "Пример срока",
    country_kz_enf: "Пример оценки",
    country_de: "Германия",
    country_de_fine: "Пример диапазона",
    country_de_prison: "Пример срока",
    country_de_enf: "Пример оценки",
    country_uk: "Великобритания",
    country_uk_fine: "Пример диапазона",
    country_uk_prison: "Пример срока",
    country_uk_enf: "Пример оценки",
    law_note: "Показатели в таблице сейчас служат только для макета и будут обновлены позже.",
    team_title: "Наша команда",
    team_intro: "Имена будут добавлены после согласования. Сейчас блок показывает структуру.",
    team_1_name: "Имя участника",
    team_1_role: "Координация кампании",
    team_2_name: "Имя участника",
    team_2_role: "Правовое исследование",
    team_3_name: "Имя участника",
    team_3_role: "Коммуникации",
    stories_title: "Личные истории нашей команды",
    stories_intro: "Коротко и искренне делимся, почему мы участвуем в этой кампании.",
    story_1_name: "Айгерим, волонтер",
    story_1_text:
      "Несколько лет назад я увидела травмированного щенка во дворе и с тех пор постоянно участвую в защите животных. В этой кампании я хочу помочь тому, чтобы закон работал не только на бумаге.",
    story_2_name: "Ержан, исследовательская группа",
    story_2_text:
      "Для меня эта инициатива - способ показывать детям культуру сострадания. Безразличие к жестокости к животным снижает уровень общей ответственности в обществе.",
    footer_closing: "Вместе мы можем сформировать справедливую правовую систему защиты животных.",
    footer_values: "Уважение · Ответственность · Вместе",
    cta_join: "Присоединиться",
    cta_feedback: "Оставить отзыв",
    contact_instagram: "Instagram:",
    contact_email: "Email:",
    contact_phone: "Телефон:",
    contact_city: "Город:",
    city_value: "Алматы, Казахстан",
    footer_rights: "Placeholder © название кампании. Все права защищены."
  },
  en: {
    page_title: "Adamgersilik",
    nav_main: "Main",
    nav_news: "News",
    nav_stories: "Stories",
    nav_law: "Law",
    nav_team: "Team",
    nav_contacts: "Contacts",
    hero_title: "Justice for animals starts with stronger law.",
    hero_desc: "We support fair punishment for animal cruelty and clear legal enforcement in practice.",
    hero_cta: "Read the news",
    problem_title: "Cases that shocked society",
    problem_intro: "The materials below are placeholders for layout and will be updated with verified facts.",
    news_1_title: "Sample headline about an animal cruelty case",
    news_1_meta: "National media · 00.00.0000",
    news_1_desc: "Short placeholder summary. This block will be replaced with verified details.",
    news_2_title: "Second sample headline",
    news_2_meta: "Regional outlet · 00.00.0000",
    news_2_desc: "Another short summary used only to keep the page structure clear.",
    news_3_title: "Third sample headline",
    news_3_meta: "Online publication · 00.00.0000",
    news_3_desc: "This section is a layout placeholder and will be updated later.",
    law_title: "Why current punishment is not enough",
    law_intro: "A short comparison table about legal responses to animal cruelty.",
    table_country: "Country / region",
    table_fine: "Fine",
    table_prison: "Custodial term",
    table_enforcement: "Enforcement",
    country_kz: "Kazakhstan",
    country_kz_fine: "Placeholder range",
    country_kz_prison: "Placeholder term",
    country_kz_enf: "Placeholder assessment",
    country_de: "Germany",
    country_de_fine: "Placeholder range",
    country_de_prison: "Placeholder term",
    country_de_enf: "Placeholder assessment",
    country_uk: "United Kingdom",
    country_uk_fine: "Placeholder range",
    country_uk_prison: "Placeholder term",
    country_uk_enf: "Placeholder assessment",
    law_note: "Values in this table are placeholders for layout and will be replaced later.",
    team_title: "Our team",
    team_intro: "Names will be added after consent. This section currently shows structure only.",
    team_1_name: "Team member name",
    team_1_role: "Campaign coordination",
    team_2_name: "Team member name",
    team_2_role: "Legal research",
    team_3_name: "Team member name",
    team_3_role: "Communications",
    stories_title: "Personal stories from our team",
    stories_intro: "We share short and sincere reasons why we joined this campaign.",
    story_1_name: "Aigerim, volunteer",
    story_1_text:
      "A few years ago I saw an injured puppy in our yard, and that moment pushed me to stay involved in animal protection. In this campaign, I want to help make sure the law works in real life, not only on paper.",
    story_2_name: "Erzhan, research team",
    story_2_text:
      "For me, this initiative is also about showing children a culture of compassion. Ignoring cruelty toward animals lowers the level of responsibility in society as a whole.",
    footer_closing: "Together we can build a fair legal system that protects animals.",
    footer_values: "Respect · Responsibility · Together",
    cta_join: "Join us",
    cta_feedback: "Send feedback",
    contact_instagram: "Instagram:",
    contact_email: "Email:",
    contact_phone: "Phone:",
    contact_city: "City:",
    city_value: "Almaty, Kazakhstan",
    footer_rights: "Placeholder © campaign name. All rights reserved."
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.kz
  document.documentElement.lang = lang
  document.title = dict.page_title

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")
    if (key && dict[key]) {
      el.textContent = dict[key]
    }
  })

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
  })

  localStorage.setItem("campaign-lang", lang)
}

const storedLang = localStorage.getItem("campaign-lang")
const defaultLang = storedLang || "kz"
applyLanguage(defaultLang)

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang")
    if (lang) applyLanguage(lang)
  })
})

const revealItems = document.querySelectorAll(".reveal")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

revealItems.forEach((item) => observer.observe(item))
