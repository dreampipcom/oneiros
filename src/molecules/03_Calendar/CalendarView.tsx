/* eslint jsx-a11y/media-has-caption:0, no-nested-ternary:0, no-unused-vars:0, max-len:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, object-curly-newline:0 */
// @atoms/CalendarView.tsx
import clsx from 'clsx';
import React, { useState, useRef } from 'react';

import LibCal from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import dayGridPlugin from '@fullcalendar/daygrid';
import { Box, Modal } from '@mui/material';

import { Button } from '../../atoms/01_Button';
import { Typography } from '../../atoms/02_Typography';
import { ESystemIcon } from '../../atoms/05_SystemIcon';

export const EventLocale = {
  default: {
    locale: 'en-us',
    timezone: 'Europe/Rome',
    email: 'Email Address',
    name: 'Name',
    phone: 'Phone',
    'phone-helper':
      "Your phone should be in the format '+12345678' with the country code.",
    artists: 'Artists',
    country: 'Country',
    city: 'City',
    when: 'When',
    related: 'Other episodes from our guests',
    episodes: "Listen to this event's episodes",
    back: 'Back to events',
    countdown: 'Countdown',
    photos: 'Photos',
    local: 'Local time',
    already: "You're already registered for this event, hope to see you there!",
    register: 'Click here to add your name to the list',
    buy: 'Click here to buy tickets',
    calendar: 'Add to calendar',
    or: 'Or, add your name to the event discount list:',
    reset: 'Reset filters',
    countries: 'Countries',
    events: 'Events',
    eventsDescription:
      'A list of our events. Brought with love to your boroughs.',
    D: 'Day',
    W: 'Week',
    Q: 'Quarter',
    M: 'Month',
    timeframe: 'Timeframe',
    space: 'Space',
    time: 'Time',
    know: 'Know more at',
    brought: 'Brought to you by',
    T: 'Today',
    L: 'List',
    allDay: 'all day',
    terms: 'Terms',
    calendarPrompt: 'Would you like to add this event to your calendar?',
    redirectPrompt: 'Would you like to be redirected to the event page?',
    ctaMessage: "Don't see your event?",
    sendEmail: 'Add it',
    mode: 'Switch view',
  },
  'it-it': {
    locale: 'it-it',
    timezone: 'Europe/Rome',
    email: 'Indirizzo e-mail',
    name: 'Nome',
    phone: 'Numero di cellulare',
    'phone-helper':
      "Il tuo telefono deve essere nel formato '+393123123123', con il prefisso del paese.",
    artists: 'Artisti',
    country: 'Nazione',
    city: 'Città',
    when: 'Quando',
    related: 'Altri episodi dei nostri ospiti',
    episodes: 'Ascolta gli episodi di questo evento',
    back: 'Vedi altri eventi',
    countdown: 'Conto alla rovescia',
    photos: 'Fotografie',
    local: 'Ora locale',
    already: 'Sei già registrato per questo evento, spero di vederti lì!',
    register: "Clicca qui per iscriverti alla lista dell'evento.",
    buy: 'Clicca qui per acquistare i biglietti',
    calendar: 'Aggiungi a calendario',
    or: "Oppure, iscriverti alla lista sconti dell'evento:",
    reset: 'Ripristina filtri',
    countries: 'Paesi',
    events: 'Eventi',
    eventsDescription:
      'Un elenco dei nostri eventi. Portato con amore nei tuoi quartieri.',
    D: 'Giorno',
    W: 'Settimana',
    Q: 'Trimestre',
    M: 'Mese',
    timeframe: 'Arco temporale',
    space: 'Spazio',
    time: 'Tempo',
    know: 'Scopri di più su',
    brought: 'Portato a voi da',
    T: 'Oggi',
    L: 'Lista',
    allDay: 'tutto il giorno',
    terms: 'Termini',
    calendarPrompt: 'Vuoi aggiungere questo evento al tuo calendario?',
    redirectPrompt: "Vuoi essere reindirizzato alla pagina dell'evento?",
    ctaMessage: 'Non vedi il tuo evento?',
    sendEmail: 'Aggiungilo',
    mode: 'Cambia visualizzazione',
  },
  'pt-br': {
    locale: 'pt-br',
    timezone: 'America/Bahia',
    email: 'Endereço de email',
    name: 'Nome',
    phone: 'Celular',
    'phone-helper':
      "Seu telefone deve estar no formato '+5571991234567', com o código do país e da cidade.",
    artists: 'Artistas',
    country: 'País',
    city: 'Cidade',
    when: 'Quando',
    related: 'Outros episódios por nossos convidados',
    episodes: 'Escute os episódios desse evento',
    back: 'Veja outros eventos',
    countdown: 'Contagem regressiva',
    photos: 'Fotos',
    local: 'Horário local',
    already: 'Você já se inscreveu para este evento, espero ver-te lá!',
    register: 'Clique aqui e adicione seu nome na lista',
    buy: 'Clique aqui para comprar ingressos',
    calendar: 'Adicione ao calendário',
    or: 'Ou adicione seu nome na lista de desconto:',
    reset: 'Redefinir filtros',
    countries: 'Países',
    events: 'Eventos',
    eventsDescription:
      'Uma lista de nossos eventos. Trazidos com amor para seus bairros.',
    D: 'Dia',
    W: 'Semana',
    Q: 'Trimestre',
    M: 'Mês',
    timeframe: 'Período',
    space: 'Espaço',
    time: 'Tempo',
    know: 'Saiba mais em',
    brought: 'Trazido até você por',
    T: 'Hoje',
    L: 'Lista',
    allDay: 'o dia todo',
    terms: 'Termos',
    calendarPrompt: 'Você quer adicionar este evento ao seu calendário?',
    redirectPrompt: 'Você quer ser redirecionado para a página do evento?',
    ctaMessage: 'Não vê seu evento?',
    sendEmail: 'Adicione-o',
    mode: 'Mudar visualização',
  },
  'es-es': {
    locale: 'es-es',
    timezone: 'Europe/Madrid',
    email: 'Dirección de correo',
    name: 'Nombre',
    phone: 'Teléfono',
    'phone-helper':
      "Tu teléfono debe estar en el formato '+34911234567', con el código del país.",
    artists: 'Artistas',
    country: 'País',
    city: 'Ciudad',
    when: 'Cuándo',
    related: 'Otros episodios de nuestros invitados',
    episodes: 'Escucha los episodios de este evento',
    back: 'Ver otros eventos',
    countdown: 'Cuenta regresiva',
    photos: 'Fotos',
    local: 'Hora local',
    already: 'Ya estás inscrito para este evento, ¡esperamos verte allí!',
    register: 'Haz clic aquí para añadir tu nombre a la lista',
    buy: 'Haz clic aquí para comprar entradas',
    calendar: 'Añadir al calendario',
    or: 'O añade tu nombre a la lista de descuentos del evento:',
    reset: 'Restablecer filtros',
    countries: 'Países',
    events: 'Eventos',
    eventsDescription:
      'Una lista de nuestros eventos. Traído con amor a tus barrios.',
    D: 'Día',
    W: 'Semana',
    Q: 'Trimestre',
    M: 'Mes',
    timeframe: 'Periodo de tiempo',
    space: 'Espacio',
    time: 'Tiempo',
    know: 'Conoce más en',
    brought: 'Traído a ti por',
    T: 'Hoy',
    L: 'Lista',
    allDay: 'todo el día',
    terms: 'Términos',
    calendarPrompt: '¿Quieres agregar este evento a tu calendario?',
    redirectPrompt: '¿Quieres ser redirigido a la página del evento?',
    ctaMessage: '¿No ves tu evento?',
    sendEmail: 'Añádelo',
    mode: 'Cambiar vista',
  },
  'de-de': {
    locale: 'de-de',
    timezone: 'Europe/Berlin',
    email: 'E-Mail-Adresse',
    name: 'Name',
    phone: 'Telefon',
    'phone-helper':
      "Ihre Telefonnummer sollte im Format '+49123456789' mit der Ländervorwahl sein.",
    artists: 'Künstler',
    country: 'Land',
    city: 'Stadt',
    when: 'Wann',
    related: 'Weitere Episoden von unseren Gästen',
    episodes: 'Hören Sie die Episoden dieses Events',
    back: 'Zurück zu den Veranstaltungen',
    countdown: 'Countdown',
    photos: 'Fotos',
    local: 'Ortszeit',
    already:
      'Du bist bereits für diese Veranstaltung angemeldet, wir hoffen, dich dort zu sehen!',
    register: 'Klicken Sie hier, um Ihren Namen zur Liste hinzuzufügen',
    buy: 'Klicken Sie hier, um Tickets zu kaufen',
    calendar: 'Zum Kalender hinzufügen',
    or: 'Oder fügen Sie Ihren Namen zur Rabattliste des Events hinzu:',
    reset: 'Filter zurücksetzen',
    countries: 'Länder',
    events: 'Veranstaltungen',
    eventsDescription:
      'Eine Liste unserer Veranstaltungen. Mit Liebe in deine Bezirke gebracht.',
    D: 'Tag',
    W: 'Woche',
    Q: 'Quartal',
    M: 'Monat',
    timeframe: 'Zeitraum',
    space: 'Raum',
    time: 'Zeit',
    know: 'Erfahren Sie mehr unter',
    brought: 'Präsentiert von',
    T: 'Heute',
    L: 'Liste',
    allDay: 'ganztägig',
    terms: 'Bedingungen',
    calendarPrompt:
      'Möchten Sie diese Veranstaltung zu Ihrem Kalender hinzufügen?',
    redirectPrompt:
      'Möchten Sie zur Veranstaltungsseite weitergeleitet werden?',
    ctaMessage: 'Siehst du dein Event nicht?',
    sendEmail: 'Füge es hinzu',
    mode: 'Ansicht wechseln',
  },
  'fr-fr': {
    locale: 'fr-fr',
    timezone: 'Europe/Paris',
    email: 'Adresse e-mail',
    name: 'Nom',
    phone: 'Téléphone',
    'phone-helper':
      "Votre téléphone doit être au format '+33123456789', avec l'indicatif du pays.",
    artists: 'Artistes',
    country: 'Pays',
    city: 'Ville',
    when: 'Quand',
    related: 'Autres épisodes de nos invités',
    episodes: 'Écoutez les épisodes de cet événement',
    back: "Voir d'autres événements",
    countdown: 'Compte à rebours',
    photos: 'Photos',
    local: 'Heure locale',
    already: 'Vous êtes déjà inscrit à cet événement, espérons vous y voir !',
    register: 'Cliquez ici pour ajouter votre nom à la liste',
    buy: 'Cliquez ici pour acheter des billets',
    calendar: 'Ajouter au calendrier',
    or: "Ou ajoutez votre nom à la liste de réduction de l'événement:",
    reset: 'Réinitialiser les filtres',
    countries: 'Pays',
    events: 'Événements',
    eventsDescription:
      'Une liste de nos événements. Apportée avec amour dans vos quartiers.',
    D: 'Jour',
    W: 'Semaine',
    Q: 'Trimestre',
    M: 'Mois',
    timeframe: 'Période',
    space: 'Espace',
    time: 'Temps',
    know: 'En savoir plus sur',
    brought: 'Présenté par',
    T: "Aujourd'hui",
    L: 'Liste',
    allDay: 'toute la journée',
    terms: 'Termes',
    calendarPrompt: 'Voulez-vous ajouter cet événement à votre calendrier?',
    redirectPrompt: "Voulez-vous être redirigé vers la page de l'événement?",
    ctaMessage: 'Vous ne voyez pas votre événement?',
    sendEmail: 'Ajoutez-le',
    mode: 'Changer de vue',
  },
  ro: {
    locale: 'ro',
    timezone: 'Europe/Bucharest',
    email: 'Adresa de email',
    name: 'Nume',
    phone: 'Telefon',
    'phone-helper':
      "Numărul tău de telefon ar trebui să fie în formatul '+40123456789', cu codul țării.",
    artists: 'Artiști',
    country: 'Țară',
    city: 'Oraș',
    when: 'Când',
    related: 'Alte episoade cu invitații noștri',
    episodes: 'Ascultă episoadele acestui eveniment',
    back: 'Înapoi la evenimente',
    countdown: 'Numărătoare inversă',
    photos: 'Fotografii',
    local: 'Ora locală',
    already:
      'Ești deja înregistrat pentru acest eveniment, sper să te văd acolo!',
    register: 'Apasă aici pentru a-ți adăuga numele în listă',
    buy: 'Apasă aici pentru a cumpăra bilete',
    calendar: 'Adaugă în calendar',
    or: 'Sau, adaugă-ți numele în lista de reduceri a evenimentului:',
    reset: 'Resetează filtrele',
    countries: 'Țări',
    events: 'Evenimente',
    eventsDescription:
      'O listă a evenimentelor noastre. Adusă cu dragoste în cartierele tale.',
    D: 'Zi',
    W: 'Săptămână',
    Q: 'Trimestru',
    M: 'Lună',
    timeframe: 'Perioadă de timp',
    space: 'Spațiu',
    time: 'Timp',
    know: 'Aflați mai multe la',
    brought: 'Adus pentru tine de',
    T: 'Astăzi',
    L: 'Listă',
    allDay: 'toată ziua',
    terms: 'Termeni',
    calendarPrompt: 'Doriți să adăugați acest eveniment în calendarul dvs?',
    redirectPrompt: 'Doriți să fiți redirecționat către pagina evenimentului?',
    ctaMessage: 'Nu vezi evenimentul tău?',
    sendEmail: 'Adaugă-l',
    mode: 'Schimbă vizualizarea',
  },
  'pl-pl': {
    locale: 'pl-pl',
    timezone: 'Europe/Rome',
    email: 'Adres e-mail',
    name: 'Imię',
    phone: 'Telefon',
    'phone-helper':
      "Twój numer telefonu powinien mieć format '+12345678' z kodem kraju.",
    artists: 'Artyści',
    country: 'Kraj',
    city: 'Miasto',
    when: 'Kiedy',
    related: 'Inne odcinki z naszymi gośćmi',
    episodes: 'Słuchaj odcinków z tego wydarzenia',
    back: 'Powrót do wydarzeń',
    countdown: 'Odliczanie',
    photos: 'Zdjęcia',
    local: 'Czas lokalny',
    already:
      'Jesteś już zarejestrowany na to wydarzenie, mamy nadzieję, że się tam zobaczymy!',
    register: 'Kliknij tutaj, aby dodać swoje imię do listy',
    buy: 'Kliknij tutaj, aby kupić bilety',
    calendar: 'Dodaj do kalendarza',
    or: 'Lub dodaj swoje imię do listy zniżek na wydarzenie:',
    reset: 'Zresetuj filtry',
    countries: 'Kraje',
    events: 'Wydarzenia',
    eventsDescription:
      'Lista naszych wydarzeń. Przygotowane z miłością do twoich dzielnic.',
    D: 'Dzień',
    W: 'Tydzień',
    Q: 'Kwartał',
    M: 'Miesiąc',
    timeframe: 'Okres czasu',
    space: 'Przestrzeń',
    time: 'Czas',
    know: 'Dowiedz się więcej na',
    brought: 'Przedstawione przez',
    T: 'Dziś',
    L: 'Lista',
    allDay: 'Cały dzień',
    terms: 'Warunki',
    calendarPrompt: 'Czy chcesz dodać to wydarzenie do swojego kalendarza?',
    redirectPrompt: 'Czy chcesz zostać przekierowany na stronę wydarzenia?',
    ctaMessage: 'Nie widzisz swojego wydarzenia?',
    sendEmail: 'Dodaj je',
    mode: 'Zmień widok',
  },
  'cs-cz': {
    locale: 'cs-cz',
    timezone: 'Europe/Rome',
    email: 'E-mailová adresa',
    name: 'Jméno',
    phone: 'Telefon',
    'phone-helper': "Váš telefon by měl mít formát '+12345678' s kódem země.",
    artists: 'Umělci',
    country: 'Země',
    city: 'Město',
    when: 'Kdy',
    related: 'Další epizody od našich hostů',
    episodes: 'Poslouchejte epizody z této události',
    back: 'Zpět na události',
    countdown: 'Odpočítávání',
    photos: 'Fotografie',
    local: 'Místní čas',
    already: 'Na tuto událost jste již registrováni, těšíme se na vás!',
    register: 'Klikněte zde, abyste se přidali na seznam',
    buy: 'Klikněte zde pro nákup vstupenek',
    calendar: 'Přidat do kalendáře',
    or: 'Nebo se přidejte na seznam slev k události:',
    reset: 'Resetovat filtry',
    countries: 'Země',
    events: 'Události',
    eventsDescription: 'Seznam našich událostí. S láskou pro vaše obvody.',
    D: 'Den',
    W: 'Týden',
    Q: 'Čtvrtletí',
    M: 'Měsíc',
    timeframe: 'Časový rámec',
    space: 'Prostor',
    time: 'Čas',
    know: 'Více informací na',
    brought: 'Přináší vám',
    T: 'Dnes',
    L: 'Seznam',
    allDay: 'Celý den',
    terms: 'Podmínky',
    calendarPrompt: 'Chcete přidat tuto událost do svého kalendáře?',
    redirectPrompt: 'Chcete být přesměrováni na stránku události?',
    ctaMessage: 'Nevidíte svou událost?',
    sendEmail: 'Přidejte ji',
    mode: 'Změnit zobrazení',
  },
  'sv-se': {
    locale: 'sv-se',
    timezone: 'Europe/Rome',
    email: 'E-postadress',
    name: 'Namn',
    phone: 'Telefon',
    'phone-helper':
      "Ditt telefonnummer ska vara i formatet '+12345678' med landskod.",
    artists: 'Artister',
    country: 'Land',
    city: 'Stad',
    when: 'När',
    related: 'Andra avsnitt från våra gäster',
    episodes: 'Lyssna på detta evenemangs avsnitt',
    back: 'Tillbaka till evenemang',
    countdown: 'Nedräkning',
    photos: 'Foton',
    local: 'Lokal tid',
    already: 'Du är redan registrerad för detta evenemang, hoppas vi ses där!',
    register: 'Klicka här för att lägga till ditt namn i listan',
    buy: 'Klicka här för att köpa biljetter',
    calendar: 'Lägg till i kalender',
    or: 'Eller, lägg till ditt namn i evenemangets rabattlista:',
    reset: 'Återställ filter',
    countries: 'Länder',
    events: 'Evenemang',
    eventsDescription:
      'En lista över våra evenemang. Levererat med kärlek till dina stadsdelar.',
    D: 'Dag',
    W: 'Vecka',
    Q: 'Kvartal',
    M: 'Månad',
    timeframe: 'Tidsram',
    space: 'Utrymme',
    time: 'Tid',
    know: 'Läs mer på',
    brought: 'Presenteras av',
    T: 'Idag',
    L: 'Lista',
    allDay: 'Hela dagen',
    terms: 'Villkor',
    calendarPrompt: 'Vill du lägga till denna händelse i din kalender?',
    redirectPrompt: 'Vill du omdirigeras till evenemangssidan?',
    ctaMessage: 'Ser du inte ditt evenemang?',
    sendEmail: 'Lägg till det',
    mode: 'Byt vy',
  },
  'et-ee': {
    locale: 'et-ee',
    timezone: 'Europe/Rome',
    email: 'E-posti aadress',
    name: 'Nimi',
    phone: 'Telefon',
    'phone-helper':
      "Teie telefoninumber peaks olema formaadis '+12345678' koos riigikoodiga.",
    artists: 'Kunstnikud',
    country: 'Riik',
    city: 'Linn',
    when: 'Millal',
    related: 'Teised episoodid meie külalistelt',
    episodes: 'Kuula selle sündmuse episoode',
    back: 'Tagasi ürituste juurde',
    countdown: 'Loendur',
    photos: 'Fotod',
    local: 'Kohalik aeg',
    already:
      'Olete juba sellele üritusele registreerunud, loodame teid seal näha!',
    register: 'Klõpsake siin, et lisada oma nimi nimekirja',
    buy: 'Klõpsake siin, et osta pileteid',
    calendar: 'Lisa kalendrisse',
    or: 'Või lisage oma nimi ürituse soodustuste nimekirja:',
    reset: 'Lähtesta filtrid',
    countries: 'Riigid',
    events: 'Üritused',
    eventsDescription:
      'Nimekiri meie üritustest. Toome armastusega teie linnaosadesse.',
    D: 'Päev',
    W: 'Nädal',
    Q: 'Kvartal',
    M: 'Kuu',
    timeframe: 'Ajaraam',
    space: 'Ruum',
    time: 'Aeg',
    know: 'Rohkem teavet leiate',
    brought: 'Teieni toob',
    T: 'Täna',
    L: 'Nimekiri',
    allDay: 'Terve päev',
    terms: 'Tingimused',
    calendarPrompt: 'Kas soovite selle sündmuse oma kalendrisse lisada?',
    redirectPrompt: 'Kas soovite suunata sündmuse lehele?',
    ctaMessage: 'Ei näe oma sündmust?',
    sendEmail: 'Lisa see',
    mode: 'Vaheta vaadet',
  },
  'ja-jp': {
    locale: 'ja-jp',
    timezone: 'Europe/Rome',
    email: 'メールアドレス',
    name: '名前',
    phone: '電話',
    'phone-helper':
      "電話番号は国コードを含む '+12345678' の形式である必要があります。",
    artists: 'アーティスト',
    country: '国',
    city: '市',
    when: 'いつ',
    related: 'ゲストからの他のエピソード',
    episodes: 'このイベントのエピソードを聴く',
    back: 'イベントに戻る',
    countdown: 'カウントダウン',
    photos: '写真',
    local: '現地時間',
    already: 'すでにこのイベントに登録されています、お待ちしています！',
    register: 'リストに名前を追加するにはこちらをクリック',
    buy: 'チケットを購入するにはこちらをクリック',
    calendar: 'カレンダーに追加',
    or: 'または、イベントの割引リストに名前を追加してください：',
    reset: 'フィルターをリセット',
    countries: '国々',
    events: 'イベント',
    eventsDescription: '私たちのイベントのリスト。あなたの地区への愛を込めて。',
    D: '日',
    W: '週',
    Q: '四半期',
    M: '月',
    timeframe: '期間',
    space: 'スペース',
    time: '時間',
    know: '詳しくはこちらで',
    brought: '提供元：',
    T: '今日',
    L: 'リスト',
    allDay: '終日',
    terms: '利用規約',
    calendarPrompt: 'このイベントをカレンダーに追加しますか？',
    redirectPrompt: 'イベントページにリダイレクトしますか？',
    ctaMessage: 'イベントが見えませんか？',
    sendEmail: '追加してください',
    mode: '表示切替',
  },
  country: {
    Brazil: 'pt-br',
    Italy: 'it-it',
    Spain: 'es-es',
    Germany: 'de-de',
    France: 'fr-fr',
    Romania: 'ro',
    Poland: 'pl-pl',
    'Czech Republic': 'cs-cz',
    Sweden: 'sv-se',
    Estonia: 'et-ee',
    Japan: 'ja-jp',
    default: 'en-us',
  },
};

export const DEFAULT_EVENTS = {
  calData: [
    {
      id: '[musica, samba] Banda - Samba do São Lázaro',
      title: '[musica, samba] Banda - Samba do São Lázaro',
      url: 'https://instagram.com/samba_do_sl',
      location:
        'Largo de São Lázaro - Ondina, Salvador - BA, 40170-010, Brazil',
      start: '2024-08-09T17:00:00-03:00',
      end: '2024-08-09T20:00:00-03:00',
      classNames: ['musica', 'samba'],
      allDay: false,
      terms: ['musica', 'samba'],
      city: 'salvador',
      artists: ['Banda'],
      project: ['Samba do São Lázaro'],
      timeframe: 'W',
    },
  ],
  mapData: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-38.5120851, -13.0076901],
        },
        properties: {
          name: '[musica, samba] Banda - Samba do São Lázaro',
          terms: ['musica', 'samba'],
          city: 'salvador',
          artists: ['Banda'],
          project: ['Samba do São Lázaro'],
          starttime: '2024-08-09T17:00:00-03:00',
          endtime: '2024-08-09T20:00:00-03:00',
          location:
            'Largo de São Lázaro - Ondina, Salvador - BA, 40170-010, Brazil',
          link: 'https://instagram.com/samba_do_sl',
          timeframe: 'W',
          clusterId: 'molecule__MapView',
        },
      },
    ],
    timeframe: 'W',
  },
};

export enum ECalendarViewVariant {
  DEFAULT = 'default',
}

export interface IBackgroundImage {
  mobile?: string;
  desktop?: string;
}

export interface IAudioTrack {
  id?: string;
  className?: string;
  onPlay?: () => void;
  title?: string;
  url?: string;
  isPlaying?: boolean;
}

export interface ICalendarView {
  id?: string;
  className?: string;
  events?: any[];
  locale?: string;
  initialView?: string;
  headerToolbar?: any;
  nowIndicator?: boolean;
  theme?: 'light' | 'dark';
}

export const HCalendarView = function ({
  id = 'atom__CalendarView',
  className = '',
  events = DEFAULT_EVENTS.calData,
  locale,
  initialView = 'timeGridWeek',
  headerToolbar = {
    left: 'title',
    center: '',
    right: '',
  },
  nowIndicator = false,
  theme = 'light',
}: ICalendarView) {
  const calendarRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [modalPrompt, setModalPrompt] = useState('');
  const [askedCal, setAskedCal] = useState(false);
  const [info, setInfo] = useState({});
  // to-do add localization
  const localization = EventLocale[locale] || EventLocale.default;
  const gridSx = [
    {
      [`class03
        relative
        flex
        flex-col
        w-full
        h-full
        col-span-full col-start-0
        content-center
        items-center
        align-center
        justify-center
        [&_*]:text-body-light
        [&_.fc-event_*]:text-body-dark
        [&_*]:dark:text-body-dark
        [&_.fc-event_*]:dark:text-body-light
        [&_.fc]:w-full
        `]: true,
    },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const gridStyles = `${clsx(gridSx)} ${className}`;

  const redirectConsent = () => {
    setModalPrompt(localization.redirectPrompt);
    setOpen(true);
  };

  const handleOKModalClick = async () => {
    if (!askedCal) {
      // const cal = await import('../lib/cal');
      // const { createICal } = cal;
      // const { download } = cal;
      // const invite = await createICal({
      //   start: info.event.start,
      //   end: info.event.end,
      //   title: info.event.title,
      //   url: info.event.url,
      //   location: info.event.extendedProps.location,
      //   locale,
      // });
      // await download(`purizu-external-${info.event.title}.ics`, invite);
      setAskedCal(true);
      setTimeout(() => {
        redirectConsent();
      }, 1000);
    }
    setOpen(false);
    if (askedCal) {
      window.open(info.event.url);
      setAskedCal(false);
    }
  };

  const handleCancelModalClick = () => {
    setOpen(false);
    if (!askedCal) {
      setAskedCal(true);
      setTimeout(() => {
        redirectConsent();
      }, 1000);
    } else {
      setAskedCal(false);
    }
  };

  const handlePreviousClick = () => {
    const calendarAPI = calendarRef?.current?.getApi();
    calendarAPI?.prev();
  };

  const handleNextClick = () => {
    const calendarAPI = calendarRef?.current?.getApi();
    calendarAPI?.next();
  };

  const handleTodayClick = () => {
    const calendarAPI = calendarRef?.current?.getApi();
    calendarAPI?.today();
  };

  return (
    <div className={gridStyles}>
      <LibCal
        id={id}
        key={theme}
        plugins={[timeGridPlugin, dayGridPlugin]}
        headerToolbar={headerToolbar}
        initialView={initialView}
        nowIndicator={nowIndicator}
        locale={locale}
        events={events}
        height={600}
        aspectRatio={1.5}
        firstDay={1}
        ref={calendarRef}
        allDayText={localization.allDay}
        eventColor={theme === 'dark' ? '#fff' : '#1b1b1b'}
        eventTextColor={theme === 'dark' ? '#1b1b1b' : '#fff'}
        eventClick={(info) => {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          setModalPrompt(localization.calendarPrompt);
          setOpen(true);
          setInfo(info);
        }}
        viewDidMount={(info) => {
          try {
            const delta =
              info?.view?.calendar?.currentData?.dateProfile?.renderRange
                ?.start || 0;
            info?.view?.calendar?.scrollToTime(new Date() - delta);
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <div className="flex relative">
        <Button
          className="m-a1"
          theme={theme}
          icon={ESystemIcon['arrow-left']}
          onClick={handlePreviousClick}
        />
        <Button
          className="m-a1"
          theme={theme}
          icon={ESystemIcon.calendar}
          onClick={handleTodayClick}
        />
        <Button
          className="m-a1"
          theme={theme}
          icon={ESystemIcon['arrow-right']}
          onClick={handleNextClick}
        />
      </div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, maxWidth: 400, width: '90%' }}>
          {/* <h2 id="parent-modal-title">1/2</h2> */}
          <Typography
            inherit
            className="mr-a2 text-body-light"
            id="parent-modal-description"
          >
            {modalPrompt}
          </Typography>
          <Button
            className="my-a2"
            theme={theme}
            onClick={handleCancelModalClick}
          >
            Cancel
          </Button>
          <Button theme={theme} onClick={handleOKModalClick}>
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default HCalendarView;
