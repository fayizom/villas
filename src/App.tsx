import React, { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  MessageCircle,
  Building2,
  User,
  Menu,
  X,
  Send,
  Globe,
  Compass,
} from 'lucide-react';
import heroVillaImg from './assets/images/hero_qatar_villa_1794982282303.jpg';
import lusailVillaImg from './assets/images/villa_lusail_exterior_1794982282417.jpg';
import dohaCompoundImg from './assets/images/villa_doha_compound_1794982282493.jpg';

type Language = 'en' | 'ar';
type PropertyCategory = 'Villas' | 'Flats' | 'Apartments';

interface VillaArea {
  index: string;
  id: string;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  corridorEn: string;
  corridorAr: string;
}

const VILLA_AREAS: VillaArea[] = [
  {
    index: '01',
    id: 'al-thumama',
    nameEn: 'Al Thumama',
    nameAr: 'الثمامة',
    subtitleEn: 'Southern Doha Executive Corridor',
    subtitleAr: 'الممر التنفيذي جنوب الدوحة',
    descriptionEn:
      'Private standalone residences and gated family compounds situated along the E-Ring corridor with effortless access to Hamad International Airport.',
    descriptionAr:
      'فلل مستقلة ومجمعات عائلية خاصة على محور الطريق الدائري الخامس مع وصول مباشر ومريح إلى مطار حمد الدولي.',
    corridorEn: 'Doha South',
    corridorAr: 'جنوب الدوحة',
  },
  {
    index: '02',
    id: 'ain-khaled',
    nameEn: 'Ain Khaled',
    nameAr: 'عين خالد',
    subtitleEn: 'Established Family Compound Enclave',
    subtitleAr: 'منطقة المجمعات السكنية الراقية',
    descriptionEn:
      'Spacious multi-bedroom villas set within serene residential neighborhoods moments from Salwa Road, international academies, and lifestyle retail.',
    descriptionAr:
      'فلل رحبة متعددة الغرف في أحياء سكنية هادئة بالقرب من طريق سلوى والمدارس الدولية والمراكز التجارية.',
    corridorEn: 'Doha West-South',
    corridorAr: 'غرب وجنوب الدوحة',
  },
  {
    index: '03',
    id: 'al-wakrah',
    nameEn: 'Al Wakrah',
    nameAr: 'الوكرة',
    subtitleEn: 'Coastal Promenade & Southern Growth',
    subtitleAr: 'الواجهة الساحلية والامتداد الجنوبي',
    descriptionEn:
      'Generously proportioned family homes along Qatar’s southern coastline combining tranquil coastal ambiance with rapid Doha Metro connectivity.',
    descriptionAr:
      'منازل عائلية واسعة على الساحل الجنوبي لقطر تجمع بين هدوء الواجهة البحرية والربط السريع بشبكة مترو الدوحة.',
    corridorEn: 'Southern Coast',
    corridorAr: 'الساحل الجنوبي',
  },
  {
    index: '04',
    id: 'lusail',
    nameEn: 'Lusail',
    nameAr: 'لوسيل',
    subtitleEn: 'Modern Waterfront & Planned City',
    subtitleAr: 'المدينة العصرية والواجهة البحرية',
    descriptionEn:
      'Contemporary architectural villas in Qatar’s visionary northern hub, surrounded by marina promenades, manicured boulevards, and waterfront dining.',
    descriptionAr:
      'فلل بتصاميم معمارية حديثة في قلب لوسيل المتطورة، محاطة بالواجهات البحرية والمراسي والجادات الراقية.',
    corridorEn: 'Lusail City',
    corridorAr: 'مدينة لوسيل',
  },
  {
    index: '05',
    id: 'old-airport',
    nameEn: 'Old Airport',
    nameAr: 'المطار القديم',
    subtitleEn: 'Central Doha Heritage & Access',
    subtitleAr: 'مركز الدوحة وسهولة التنقل',
    descriptionEn:
      'Centrally positioned residential villas offering direct links to Doha’s commercial districts, cultural landmarks, and everyday conveniences.',
    descriptionAr:
      'فلل سكنية بموقع مركزي في قلب الدوحة توفر ارتباطاً مباشراً بالمناطق التجارية والخدمات اليومية المتكاملة.',
    corridorEn: 'Central Doha',
    corridorAr: 'وسط الدوحة',
  },
  {
    index: '06',
    id: 'al-aziziyah',
    nameEn: 'Al Aziziyah',
    nameAr: 'العزيزية',
    subtitleEn: 'Aspire Zone & West Doha Vicinity',
    subtitleAr: 'محيط أسباير زون وغرب الدوحة',
    descriptionEn:
      'Distinguished family residences bordering Aspire Park and Villaggio, favored for privacy, mature greenery, and immediate main-artery access.',
    descriptionAr:
      'مساكن عائلية مرموقة بالقرب من حديقة أسباير وفيلاجيو، تتميز بالخصوصية والمساحات الخضراء وسهولة الوصول.',
    corridorEn: 'Aspire District',
    corridorAr: 'منطقة أسباير',
  },
];

const CONTACT_INFO = {
  companyEn: 'Confident Real Estate',
  companyAr: 'كونفيدنت العقارية',
  personEn: 'Noushad',
  personAr: 'نوشاد',
  phoneDisplay: '+974 3084 8426',
  phoneHref: 'tel:+97430848426',
  whatsappHref: 'https://wa.me/97430848426',
  email: 'confidentrealestateqa@gmail.com',
  emailHref: 'mailto:confidentrealestateqa@gmail.com',
  officeNumber: 'Office B-246',
  officeNumberAr: 'مكتب B-246',
  electricityNo: '1299408',
  waterNo: '1132410',
  lat: '25.220783',
  lng: '51.436157',
  mapsUrl: 'https://maps.google.com/?q=25.220783,51.436157',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=25.220783,51.436157&z=16&output=embed',
};

const ASSETS = {
  logo: '/assets/aistudio/WhatsApp_Image_2026-07-09_at_7.34.31_PM_f4996b4b.jpeg',
  officePlaque: '/assets/aistudio/WhatsApp_Image_2026-07-09_at_7.49.10_PM_6ba1797d.jpeg',
  noushadPortrait: '/assets/aistudio/image_40341ac9.png',
};

const COPY = {
  en: {
    brandPrimary: 'Confident',
    brandSecondary: 'Real Estate',
    nav: {
      residences: 'Residences',
      destinations: 'Destinations',
      advisory: 'Advisory',
      office: 'Office',
      cta: 'Register Interest',
    },
    hero: {
      kicker: 'Confident Real Estate · Doha, Qatar · Office B-246',
      headline: 'Signature Villa Living Across Qatar’s Premier Addresses',
      subheadline:
        'Private standalone villas and distinguished family compounds across Al Thumama, Ain Khaled, Al Wakrah, Lusail, Old Airport, and Al Aziziyah — guided personally by Noushad.',
      primaryCta: 'Schedule Private Viewing',
      secondaryCta: 'WhatsApp Advisory',
      crestCaption: 'Find Your Dream Property in Qatar',
      crestCategories: 'Flats · Villas · Apartments',
    },
    strip: [
      { label: 'Curated Districts', value: '6 Prime Locations', sub: 'Al Thumama to Lusail' },
      { label: 'Residential Scope', value: 'Villas · Flats · Apartments', sub: 'Family & Executive Homes' },
      { label: 'Private Advisor', value: 'Noushad', sub: '+974 3084 8426' },
      { label: 'Doha Headquarters', value: 'Office B-246', sub: '25.220783, 51.436157' },
    ],
    showcase: {
      eyebrow: 'Architectural Standard',
      title: 'Designed Around Space, Privacy & Connectivity',
      body: 'Whether seeking a contemporary waterfront villa in Lusail or a secluded family compound in Al Thumama, Ain Khaled, Al Wakrah, Old Airport, or Al Aziziyah, Confident Real Estate provides direct, transparent representation from initial viewing to handover.',
      card1Title: 'Contemporary Waterfront Living',
      card1Sub: 'Lusail & Northern Corridors',
      card2Title: 'Private Family Compounds',
      card2Sub: 'Al Thumama · Ain Khaled · Al Aziziyah',
    },
    areas: {
      eyebrow: 'Portfolio Destinations',
      title: 'Six Residential Districts in Qatar',
      subtitle:
        'Select your preferred district to register a private viewing inquiry or initiate an immediate WhatsApp consultation.',
      countLabel: '6 Active Villa Zones',
      selectBtn: 'Request Availability',
      selectedBtn: 'Selected for Viewing',
      whatsappBtn: 'WhatsApp',
    },
    advisory: {
      eyebrow: 'Private Client Advisory',
      role: 'Senior Property Advisor · Confident Real Estate',
      officeLine: 'Office B-246 · Doha, Qatar',
      phoneLabel: 'Direct Line & WhatsApp',
      emailLabel: 'Official Email',
      copy: 'Copy',
      copied: 'Copied',
      callBtn: 'Call Noushad',
      emailBtn: 'Send Email',
    },
    form: {
      eyebrow: 'Private Viewing & Availability',
      title: 'Register Your Property Interest',
      subtitle:
        'Share your preferred district and property type to receive current villa availability directly from Noushad.',
      categoryLabel: 'Property Category',
      areaLabel: 'Preferred District',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      contactLabel: 'Phone or Email',
      contactPlaceholder: '+974 ... or email@example.com',
      notesLabel: 'Preferences (Optional)',
      notesPlaceholder: 'Standalone villa or compound, preferred move-in timeline...',
      submitBtn: 'Submit Registration',
      responseNote: 'Direct personal response from Noushad · +974 3084 8426',
      errorName: 'Please enter your full name.',
      errorContact: 'Please enter a valid phone number or email address.',
      readyEyebrow: 'Registration Prepared',
      readyTitle: 'Thank you,',
      readyBody: 'Your property inquiry is formatted. Dispatch it directly to Noushad via WhatsApp or Email:',
      sendWa: 'Send via WhatsApp',
      sendMail: 'Send via Email',
      editBtn: 'Modify Details',
      categories: {
        Villas: 'Villas',
        Flats: 'Flats',
        Apartments: 'Apartments',
      } as Record<PropertyCategory, string>,
    },
    office: {
      eyebrow: 'Visit Our Doha Office',
      title: 'Office B-246',
      subtitle: 'Confident Real Estate · Doha, State of Qatar',
      electricityLabel: 'Electricity No.',
      waterLabel: 'Water No.',
      gpsLabel: 'GPS Coordinates',
      copyGps: 'Copy GPS',
      openMaps: 'Open Location in Google Maps',
      mapHeader: 'Doha, Qatar',
      directions: 'Get Directions',
    },
    footer: {
      tagline: 'Office B-246 · Doha, Qatar · Advisory by Noushad',
      maps: 'Google Maps',
      rights: 'Confident Real Estate. All rights reserved.',
    },
  },
  ar: {
    brandPrimary: 'كونفيدنت',
    brandSecondary: 'العقارية',
    nav: {
      residences: 'العقارات',
      destinations: 'المناطق',
      advisory: 'المستشار',
      office: 'المكتب',
      cta: 'سجّل اهتمامك',
    },
    hero: {
      kicker: 'كونفيدنت العقارية · الدوحة، قطر · مكتب B-246',
      headline: 'أسلوب حياة استثنائي في أرقى أحياء الفلل في قطر',
      subheadline:
        'فلل مستقلة ومجمعات سكنية عائلية راقية في الثمامة وعين خالد والوكرة ولوسيل والمطار القديم والعزيزية — بإشراف واستشارة مباشرة من نوشاد.',
      primaryCta: 'احجز معاينة خاصة',
      secondaryCta: 'استشارة عبر واتساب',
      crestCaption: 'ابحث عن عقار أحلامك في قطر',
      crestCategories: 'شقق · فلل · وحدات سكنية',
    },
    strip: [
      { label: 'مناطق مختارة', value: '٦ أحياء رئيسية', sub: 'من الثمامة إلى لوسيل' },
      { label: 'نطاق المحفظة', value: 'فلل · شقق · وحدات سكنية', sub: 'مساكن عائلية وتنفيذية' },
      { label: 'المستشار العقاري', value: 'نوشاد', sub: '+974 3084 8426' },
      { label: 'مقر المكتب', value: 'مكتب B-246', sub: '25.220783, 51.436157' },
    ],
    showcase: {
      eyebrow: 'معايير السكن الراقي',
      title: 'تصميم يجمع بين الرحابة والخصوصية وسهولة الوصول',
      body: 'سواء كنت تبحث عن فيلا عصرية مطلة على الواجهة البحرية في لوسيل أو فيلا عائلية هادئة في الثمامة أو عين خالد أو الوكرة أو المطار القديم أو العزيزية، نوفر لك في كونفيدنت العقارية متابعة مباشرة وشفافة من المعاينة وحتى التسليم.',
      card1Title: 'مساكن الواجهة البحرية الحديثة',
      card1Sub: 'لوسيل والمحاور الشمالية',
      card2Title: 'مجمعات الفلل العائلية الخاصة',
      card2Sub: 'الثمامة · عين خالد · العزيزية',
    },
    areas: {
      eyebrow: 'وجهات المحفظة العقارية',
      title: 'ست مناطق سكنية متميزة في قطر',
      subtitle:
        'اختر المنطقة المفضلة لديك لتسجيل طلب معاينة خاصة أو بدء محادثة فورية عبر واتساب.',
      countLabel: '٦ مناطق فلل متاحة',
      selectBtn: 'طلب التوفر',
      selectedBtn: 'تم اختيار المنطقة',
      whatsappBtn: 'واتساب',
    },
    advisory: {
      eyebrow: 'الاستشارات العقارية المباشرة',
      role: 'مستشار عقاري أول · كونفيدنت العقارية',
      officeLine: 'مكتب B-246 · الدوحة، قطر',
      phoneLabel: 'الهاتف المباشر والواتساب',
      emailLabel: 'البريد الإلكتروني الرسمي',
      copy: 'نسخ',
      copied: 'تم النسخ',
      callBtn: 'اتصل بنوشاد',
      emailBtn: 'إرسال بريد',
    },
    form: {
      eyebrow: 'حجز المعاينة والاستفسار',
      title: 'سجّل اهتمامك العقاري',
      subtitle:
        'حدد المنطقة ونوع العقار المطلوب للحصول على تفاصيل الفلل المتاحة مباشرة من نوشاد.',
      categoryLabel: 'نوع العقار',
      areaLabel: 'المنطقة المفضلة',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'أدخل اسمك الكامل',
      contactLabel: 'رقم الهاتف أو البريد الإلكتروني',
      contactPlaceholder: '+974 ... أو email@example.com',
      notesLabel: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'فيلا مستقلة أو ضمن مجمع، موعد الانتقال المفضل...',
      submitBtn: 'إرسال الطلب',
      responseNote: 'تواصل مباشر من نوشاد · +974 3084 8426',
      errorName: 'يرجى إدخال الاسم الكامل.',
      errorContact: 'يرجى إدخال رقم هاتف أو بريد إلكتروني صحيح.',
      readyEyebrow: 'الطلب جاهز للإرسال',
      readyTitle: 'شكراً لك،',
      readyBody: 'تم تجهيز طلبك بنجاح. أرسله الآن مباشرة إلى نوشاد عبر واتساب أو البريد الإلكتروني:',
      sendWa: 'إرسال عبر واتساب',
      sendMail: 'إرسال عبر البريد',
      editBtn: 'تعديل البيانات',
      categories: {
        Villas: 'فلل',
        Flats: 'شقق',
        Apartments: 'شقق سكنية',
      } as Record<PropertyCategory, string>,
    },
    office: {
      eyebrow: 'تفضل بزيارة مكتبنا في الدوحة',
      title: 'مكتب B-246',
      subtitle: 'كونفيدنت العقارية · الدوحة، دولة قطر',
      electricityLabel: 'رقم الكهرباء',
      waterLabel: 'رقم الماء',
      gpsLabel: 'إحداثيات الموقع',
      copyGps: 'نسخ الإحداثيات',
      openMaps: 'فتح موقع المكتب في خرائط جوجل',
      mapHeader: 'الدوحة، قطر',
      directions: 'الاتجاهات',
    },
    footer: {
      tagline: 'مكتب B-246 · الدوحة، قطر · بإشراف نوشاد',
      maps: 'خرائط جوجل',
      rights: 'كونفيدنت العقارية. جميع الحقوق محفوظة.',
    },
  },
};

export function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('confident_lang');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const isRtl = lang === 'ar';
  const t = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('confident_lang', lang);
    } catch {
      // Ignore storage restriction
    }
  }, [lang, isRtl]);

  const [selectedAreaId, setSelectedAreaId] = useState<string>(VILLA_AREAS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('Villas');
  const [copiedKey, setCopiedKey] = useState<'phone' | 'email' | 'coords' | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Image error fallbacks (Zero-Broken-Image Policy)
  const [heroError, setHeroError] = useState(false);
  const [lusailError, setLusailError] = useState(false);
  const [compoundError, setCompoundError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [portraitError, setPortraitError] = useState(false);
  const [plaqueError, setPlaqueError] = useState(false);

  // Form state
  const [visitorName, setVisitorName] = useState('');
  const [visitorContact, setVisitorContact] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    name: string;
    contact: string;
    areaName: string;
    category: PropertyCategory;
    notes: string;
  } | null>(null);

  const activeArea = VILLA_AREAS.find((a) => a.id === selectedAreaId) || VILLA_AREAS[0];
  const activeAreaLabel = isRtl ? activeArea.nameAr : activeArea.nameEn;

  const handleCopy = async (text: string, key: 'phone' | 'email' | 'coords') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  const handleSelectAreaForInquiry = (areaId: string) => {
    setSelectedAreaId(areaId);
    setSubmittedSummary(null);
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const buildWhatsAppLink = (areaLabel?: string, category?: PropertyCategory, customNotes?: string) => {
    const targetArea = areaLabel || activeAreaLabel;
    const targetCategory = category || selectedCategory;
    const categoryLabel = t.form.categories[targetCategory];

    if (isRtl) {
      const msg = customNotes
        ? `مرحباً ${CONTACT_INFO.personAr}، أنا ${visitorName || 'عميل مهتم'} (${visitorContact}). أود الاستفسار عن ${categoryLabel} المتاحة في منطقة ${targetArea}. ${customNotes}`
        : `مرحباً ${CONTACT_INFO.personAr}، أود الاستفسار عن ${categoryLabel} المتاحة في منطقة ${targetArea} (كونفيدنت العقارية).`;
      return `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(msg)}`;
    }

    const msg = customNotes
      ? `Hello ${CONTACT_INFO.personEn}, my name is ${visitorName || 'a prospective client'} (${visitorContact}). I am inquiring about available ${targetCategory} in ${targetArea}. ${customNotes}`
      : `Hello ${CONTACT_INFO.personEn}, I would like to request availability for ${targetCategory} in ${targetArea} (Confident Real Estate).`;
    return `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(msg)}`;
  };

  const buildMailtoLink = (areaLabel?: string, category?: PropertyCategory, customNotes?: string) => {
    const targetArea = areaLabel || activeAreaLabel;
    const targetCategory = category || selectedCategory;
    const subject = isRtl
      ? `استفسار عقاري — ${targetArea} | كونفيدنت العقارية`
      : `${targetCategory} Inquiry — ${targetArea} | Confident Real Estate`;
    const body = isRtl
      ? `مرحباً ${CONTACT_INFO.personAr}،\n\nالاسم: ${visitorName}\nالتواصل: ${visitorContact}\nنوع العقار: ${t.form.categories[targetCategory]}\nالمنطقة: ${targetArea}\n\nالتفاصيل:\n${customNotes || ''}`
      : `Hello ${CONTACT_INFO.personEn},\n\nName: ${visitorName}\nContact: ${visitorContact}\nCategory: ${targetCategory}\nDistrict: ${targetArea}\n\nDetails:\n${customNotes || ''}`;
    return `${CONTACT_INFO.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = visitorName.trim();
    const trimmedContact = visitorContact.trim();
    const trimmedNotes = inquiryNotes.trim();

    if (!trimmedName) {
      setFormError(t.form.errorName);
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const isPhone = /^[+\d\s()-]{7,20}$/.test(trimmedContact);
    if (!trimmedContact || (!isEmail && !isPhone)) {
      setFormError(t.form.errorContact);
      return;
    }

    setFormError(null);
    setSubmittedSummary({
      name: trimmedName,
      contact: trimmedContact,
      areaName: activeAreaLabel,
      category: selectedCategory,
      notes:
        trimmedNotes ||
        (isRtl
          ? `طلب تفاصيل التوفر في منطقة ${activeAreaLabel}.`
          : `Requesting current availability in ${activeAreaLabel}.`),
    });
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-arabesque text-ink flex flex-col">
      {/* TOP BAR CONTRACT: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-sm border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-ink whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-4"
          >
            {t.brandPrimary} <span className="text-crimson">{t.brandSecondary}</span>
          </a>

          {/* Zone 2: 4 clean single-line text nav links */}
          <nav
            aria-label={isRtl ? 'التنقل الرئيسي' : 'Primary Navigation'}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted"
          >
            <a
              href="#showcase"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.residences}
            </a>
            <a
              href="#areas"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.destinations}
            </a>
            <a
              href="#contact"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.advisory}
            </a>
            <a
              href="#office"
              className="hover:text-ink hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.office}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#inquire"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold bg-ink text-surface hover:bg-crimson transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-crimson focus-visible:outline-offset-2"
            >
              <span>{t.nav.cta}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-expanded={mobileNavOpen}
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-border-hairline bg-surface text-ink hover:border-ink transition-colors"
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-border-hairline bg-surface px-4 py-4 space-y-2">
            <a
              href="#showcase"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink border-b border-border-hairline"
            >
              {t.nav.residences}
            </a>
            <a
              href="#areas"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink border-b border-border-hairline"
            >
              {t.nav.destinations}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink border-b border-border-hairline"
            >
              {t.nav.advisory}
            </a>
            <a
              href="#office"
              onClick={() => setMobileNavOpen(false)}
              className="block py-2.5 text-sm font-medium text-ink border-b border-border-hairline"
            >
              {t.nav.office}
            </a>
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setLang(lang === 'en' ? 'ar' : 'en');
                  setMobileNavOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold border border-border-hairline bg-canvas text-ink"
              >
                <Globe className="h-4 w-4 text-crimson" />
                <span>{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <a
                href="#inquire"
                onClick={() => setMobileNavOpen(false)}
                className="flex-1 inline-flex items-center justify-center px-4 py-3 text-xs font-semibold bg-crimson text-surface"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* SECTION 1: FULL-BLEED LUXURY CAMPAIGN HERO */}
        <section className="relative bg-ink text-surface overflow-hidden border-b border-border-hairline">
          {/* Background Architectural Hero Photograph */}
          <div className="absolute inset-0">
            {!heroError ? (
              <img
                src={heroVillaImg}
                alt={
                  isRtl
                    ? 'فيلا فاخرة حديثة في الدوحة قطر وقت الغروب'
                    : 'Luxury modern architectural villa in Doha Qatar at twilight'
                }
                referrerPolicy="no-referrer"
                onError={() => setHeroError(true)}
                className="w-full h-full object-cover object-center opacity-85"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-ink via-[#1c1a17] to-[#2b1212]" />
            )}
            <div
              className={`absolute inset-0 ${
                isRtl
                  ? 'bg-gradient-to-l from-black/90 via-black/65 to-black/30'
                  : 'bg-gradient-to-r from-black/90 via-black/65 to-black/30'
              }`}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-8 lg:pb-24">
            {/* Hero Utility Bar: Language Switcher (EN / العربية) + Quick Direct Line */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-10 lg:pb-14 border-b border-surface/15">
              <div className="text-xs font-medium text-surface/80 flex flex-wrap items-center gap-2">
                <span className="text-crimson font-bold">CR</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.kicker}</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={CONTACT_INFO.phoneHref}
                  dir="ltr"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-surface/85 hover:text-surface transition-colors tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5 text-crimson" aria-hidden="true" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>

                <div
                  role="group"
                  aria-label="Language switch"
                  className="inline-flex items-center bg-black/50 backdrop-blur-sm border border-surface/25 p-0.5"
                >
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      lang === 'en'
                        ? 'bg-surface text-ink'
                        : 'text-surface/75 hover:text-surface'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('ar')}
                    className={`px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      lang === 'ar'
                        ? 'bg-surface text-ink'
                        : 'text-surface/75 hover:text-surface'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pt-10 lg:pt-14">
              <div className="lg:col-span-8 space-y-6">
                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-surface leading-[1.08] text-balance max-w-3xl">
                  {t.hero.headline}
                </h1>

                <p className="text-base sm:text-lg text-surface/85 max-w-2xl leading-relaxed">
                  {t.hero.subheadline}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#inquire"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold bg-crimson text-surface hover:bg-crimson-hover transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold bg-surface/10 backdrop-blur-sm border border-surface/35 text-surface hover:bg-surface hover:text-ink transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>{t.hero.secondaryCta}</span>
                  </a>
                </div>
              </div>

              {/* Brand Crest Card */}
              <div className="lg:col-span-4">
                <div className="bg-surface text-ink border border-border-hairline p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 shrink-0 bg-canvas border border-border-hairline flex items-center justify-center overflow-hidden p-1.5">
                      {!logoError ? (
                        <img
                          src={ASSETS.logo}
                          alt="Confident Real Estate Crest"
                          referrerPolicy="no-referrer"
                          onError={() => setLogoError(true)}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-display text-xl font-extrabold">
                          <span className="text-crimson">C</span>R
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 space-y-1">
                      <p className="font-display text-sm font-bold text-ink leading-snug">
                        {t.hero.crestCaption}
                      </p>
                      <p className="text-xs font-medium text-crimson">
                        {t.hero.crestCategories}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-COLUMN ARCHITECTURAL FACT STRIP */}
        <section className="bg-surface border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-border-hairline">
              {t.strip.map((item, idx) => (
                <div key={idx} className="py-6 sm:px-6 first:sm:ps-0 last:sm:pe-0 space-y-1">
                  <p className="text-xs font-medium text-ink-muted">{item.label}</p>
                  <p className="font-display text-lg font-bold text-ink">{item.value}</p>
                  <p dir="ltr" className={`text-xs font-mono text-crimson tabular-nums ${isRtl ? 'text-right' : ''}`}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: ARCHITECTURAL LIFESTYLE & DESTINATIONS SHOWCASE */}
        <section id="showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Editorial Narrative */}
            <div className="lg:col-span-5 bg-surface border border-border-hairline p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-crimson">{t.showcase.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight text-balance">
                  {t.showcase.title}
                </h2>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {t.showcase.body}
                </p>
              </div>

              <div className="pt-6 border-t border-border-hairline flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-medium text-ink-muted">
                  <span>{isRtl ? 'مكتب B-246' : 'Office B-246'}</span>
                  <span aria-hidden="true" className="mx-2">·</span>
                  <span>{isRtl ? 'الدوحة، قطر' : 'Doha, Qatar'}</span>
                </div>
                <a
                  href="#areas"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-crimson transition-colors"
                >
                  <span>{t.nav.destinations}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Dual Architectural Photography Showcase */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <figure className="bg-surface border border-border-hairline flex flex-col">
                <div className="aspect-[4/3] bg-surface-muted overflow-hidden">
                  {!lusailError ? (
                    <img
                      src={lusailVillaImg}
                      alt={t.showcase.card1Title}
                      referrerPolicy="no-referrer"
                      onError={() => setLusailError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center text-xs text-ink-muted">
                      {t.showcase.card1Title}
                    </div>
                  )}
                </div>
                <figcaption className="p-5 border-t border-border-hairline space-y-1">
                  <p className="font-display text-base font-bold text-ink">{t.showcase.card1Title}</p>
                  <p className="text-xs text-ink-muted">{t.showcase.card1Sub}</p>
                </figcaption>
              </figure>

              <figure className="bg-surface border border-border-hairline flex flex-col">
                <div className="aspect-[4/3] bg-surface-muted overflow-hidden">
                  {!compoundError ? (
                    <img
                      src={dohaCompoundImg}
                      alt={t.showcase.card2Title}
                      referrerPolicy="no-referrer"
                      onError={() => setCompoundError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-center text-xs text-ink-muted">
                      {t.showcase.card2Title}
                    </div>
                  )}
                </div>
                <figcaption className="p-5 border-t border-border-hairline space-y-1">
                  <p className="font-display text-base font-bold text-ink">{t.showcase.card2Title}</p>
                  <p className="text-xs text-ink-muted">{t.showcase.card2Sub}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* SECTION 3: SIX SIGNATURE VILLA DISTRICTS */}
        <section id="areas" className="border-t border-border-hairline bg-surface/90 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-crimson">{t.areas.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                  {t.areas.title}
                </h2>
                <p className="text-sm sm:text-base text-ink-muted">{t.areas.subtitle}</p>
              </div>
              <div className="text-xs font-mono text-ink-muted tabular-nums shrink-0">
                {t.areas.countLabel}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VILLA_AREAS.map((area) => {
                const isSelected = selectedAreaId === area.id;
                const areaName = isRtl ? area.nameAr : area.nameEn;
                const areaSub = isRtl ? area.subtitleAr : area.subtitleEn;
                const areaDesc = isRtl ? area.descriptionAr : area.descriptionEn;
                const areaCorridor = isRtl ? area.corridorAr : area.corridorEn;

                return (
                  <article
                    key={area.id}
                    className={`bg-surface border transition-colors p-6 sm:p-7 flex flex-col justify-between gap-6 ${
                      isSelected
                        ? 'border-ink ring-1 ring-ink'
                        : 'border-border-hairline hover:border-ink/60'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4 text-xs">
                        <span className="font-mono font-semibold text-crimson tabular-nums">
                          {area.index}.
                        </span>
                        <span className="text-ink-muted flex items-center gap-1.5">
                          <Compass className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                          <span>{areaCorridor}</span>
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">{areaName}</h3>
                        <p className="text-xs font-medium text-ink-muted mt-1">{areaSub}</p>
                      </div>

                      <p className="text-sm text-ink-muted leading-relaxed">{areaDesc}</p>
                    </div>

                    <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => handleSelectAreaForInquiry(area.id)}
                        className={`px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 min-h-[40px] ${
                          isSelected
                            ? 'bg-ink text-surface'
                            : 'bg-surface-muted text-ink hover:bg-ink hover:text-surface'
                        }`}
                      >
                        {isSelected ? t.areas.selectedBtn : t.areas.selectBtn}
                      </button>

                      <a
                        href={buildWhatsAppLink(areaName)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-crimson hover:text-crimson-hover transition-colors whitespace-nowrap shrink-0 py-2"
                      >
                        <span>{t.areas.whatsappBtn}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: PRIVATE ADVISORY (NOUSHAD) & REGISTRATION FORM */}
        <section id="contact" className="border-t border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Contact Representative Card: Noushad */}
              <div className="lg:col-span-5 bg-ink text-surface p-6 sm:p-8 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs text-surface/75">
                    <User className="h-3.5 w-3.5 text-crimson" aria-hidden="true" />
                    <span>{t.advisory.eyebrow}</span>
                  </div>

                  {/* Portrait + Identity */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5">
                    <div className="w-full sm:w-36 lg:w-full xl:w-36 h-48 sm:h-36 lg:h-52 xl:h-36 shrink-0 bg-surface/10 border border-surface/15 overflow-hidden">
                      {!portraitError ? (
                        <img
                          src={ASSETS.noushadPortrait}
                          alt={`${CONTACT_INFO.personEn} — ${CONTACT_INFO.companyEn}`}
                          referrerPolicy="no-referrer"
                          onError={() => setPortraitError(true)}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-surface/70 font-display text-2xl font-bold">
                          N
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface">
                        {isRtl ? CONTACT_INFO.personAr : CONTACT_INFO.personEn}
                      </h2>
                      <p className="text-sm text-surface/80">{t.advisory.role}</p>
                      <p className="text-xs font-mono text-surface/60">{t.advisory.officeLine}</p>
                    </div>
                  </div>

                  {/* Direct Contact Channels */}
                  <div className="space-y-4 pt-4 border-t border-surface/15">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-xs text-surface/65">{t.advisory.phoneLabel}</p>
                        <a
                          href={CONTACT_INFO.phoneHref}
                          dir="ltr"
                          className="font-mono text-base sm:text-lg font-semibold text-surface hover:text-crimson transition-colors tabular-nums inline-block mt-0.5"
                        >
                          {CONTACT_INFO.phoneDisplay}
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(CONTACT_INFO.phoneDisplay, 'phone')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-surface/10 hover:bg-surface/20 text-surface transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                      >
                        {copiedKey === 'phone' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{t.advisory.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>{t.advisory.copy}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-surface/10">
                      <div className="min-w-0">
                        <p className="text-xs text-surface/65">{t.advisory.emailLabel}</p>
                        <a
                          href={CONTACT_INFO.emailHref}
                          dir="ltr"
                          className="font-mono text-sm font-medium text-surface hover:text-crimson transition-colors break-all inline-block mt-0.5"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-surface/10 hover:bg-surface/20 text-surface transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                      >
                        {copiedKey === 'email' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{t.advisory.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>{t.advisory.copy}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold bg-crimson text-surface hover:bg-crimson-hover transition-colors whitespace-nowrap min-h-[44px]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{t.advisory.callBtn}</span>
                  </a>
                  <a
                    href={CONTACT_INFO.emailHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold border border-surface/30 text-surface hover:bg-surface hover:text-ink transition-colors whitespace-nowrap min-h-[44px]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{t.advisory.emailBtn}</span>
                  </a>
                </div>
              </div>

              {/* VIP Inquiry Form */}
              <div id="inquire" className="lg:col-span-7 bg-surface border border-border-hairline p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-crimson">{t.form.eyebrow}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    {t.form.title}
                  </h2>
                  <p className="text-sm text-ink-muted">{t.form.subtitle}</p>
                </div>

                {submittedSummary ? (
                  <div className="bg-canvas border border-border-hairline p-6 space-y-5 my-auto">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-crimson">{t.form.readyEyebrow}</p>
                      <h3 className="font-display text-xl font-bold text-ink">
                        {t.form.readyTitle} {submittedSummary.name}
                      </h3>
                      <p className="text-sm text-ink-muted">{t.form.readyBody}</p>
                    </div>

                    <div className="text-xs font-mono text-ink-muted space-y-1.5 pt-3 border-t border-border-hairline">
                      <div>
                        {t.form.categoryLabel}: {t.form.categories[submittedSummary.category]}
                      </div>
                      <div>
                        {t.form.areaLabel}: {submittedSummary.areaName}
                      </div>
                      <div>
                        {t.form.contactLabel}: {submittedSummary.contact}
                      </div>
                      <div>{submittedSummary.notes}</div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={buildWhatsAppLink(
                          submittedSummary.areaName,
                          submittedSummary.category,
                          submittedSummary.notes
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold bg-crimson text-surface hover:bg-crimson-hover transition-colors whitespace-nowrap min-h-[44px]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{t.form.sendWa}</span>
                      </a>
                      <a
                        href={buildMailtoLink(
                          submittedSummary.areaName,
                          submittedSummary.category,
                          submittedSummary.notes
                        )}
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold bg-ink text-surface hover:bg-ink/90 transition-colors whitespace-nowrap min-h-[44px]"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{t.form.sendMail}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmittedSummary(null)}
                        className="px-4 py-3 text-xs font-semibold text-ink-muted hover:text-ink transition-colors whitespace-nowrap min-h-[44px]"
                      >
                        {t.form.editBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                    {/* Property Category Segmented Buttons */}
                    <div>
                      <span className="block text-xs font-semibold text-ink mb-2">
                        {t.form.categoryLabel}
                      </span>
                      <div className="grid grid-cols-3 gap-2 p-1 bg-canvas border border-border-hairline">
                        {(['Villas', 'Flats', 'Apartments'] as PropertyCategory[]).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`py-2 px-3 text-xs font-semibold transition-colors whitespace-nowrap ${
                              selectedCategory === cat
                                ? 'bg-ink text-surface'
                                : 'text-ink-muted hover:text-ink'
                            }`}
                          >
                            {t.form.categories[cat]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="villa-area" className="block text-xs font-semibold text-ink mb-2">
                        {t.form.areaLabel}
                      </label>
                      <select
                        id="villa-area"
                        value={selectedAreaId}
                        onChange={(e) => setSelectedAreaId(e.target.value)}
                        className="w-full h-11 px-3.5 bg-canvas border border-border-hairline text-sm font-medium text-ink focus:outline-none focus:border-ink"
                      >
                        {VILLA_AREAS.map((area) => (
                          <option key={area.id} value={area.id}>
                            {isRtl
                              ? `${area.nameAr} — ${area.subtitleAr}`
                              : `${area.nameEn} — ${area.subtitleEn}`}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="visitor-name" className="block text-xs font-semibold text-ink mb-2">
                          {t.form.nameLabel}
                        </label>
                        <input
                          id="visitor-name"
                          type="text"
                          value={visitorName}
                          onChange={(e) => setVisitorName(e.target.value)}
                          placeholder={t.form.namePlaceholder}
                          className="w-full h-11 px-3.5 bg-canvas border border-border-hairline text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink"
                        />
                      </div>

                      <div>
                        <label htmlFor="visitor-contact" className="block text-xs font-semibold text-ink mb-2">
                          {t.form.contactLabel}
                        </label>
                        <input
                          id="visitor-contact"
                          type="text"
                          value={visitorContact}
                          onChange={(e) => setVisitorContact(e.target.value)}
                          placeholder={t.form.contactPlaceholder}
                          className="w-full h-11 px-3.5 bg-canvas border border-border-hairline text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-ink mb-2">
                        {t.form.notesLabel}
                      </label>
                      <textarea
                        id="inquiry-notes"
                        rows={3}
                        value={inquiryNotes}
                        onChange={(e) => setInquiryNotes(e.target.value)}
                        placeholder={t.form.notesPlaceholder}
                        className="w-full p-3.5 bg-canvas border border-border-hairline text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink resize-none"
                      />
                    </div>

                    {formError && (
                      <p role="alert" className="text-xs font-semibold text-crimson">
                        {formError}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-ink text-surface hover:bg-crimson transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>{t.form.submitBtn}</span>
                      </button>

                      <span dir="ltr" className="text-xs text-ink-muted">
                        {t.form.responseNote}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: OFFICE ADDRESS & GOOGLE MAPS LOCATION */}
        <section id="office" className="border-t border-border-hairline bg-surface/90 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Office Address & Plaque */}
              <div className="lg:col-span-5 bg-surface border border-border-hairline p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-crimson">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    <span>{t.office.eyebrow}</span>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      {t.office.title}
                    </h2>
                    <p className="text-sm text-ink-muted mt-1">{t.office.subtitle}</p>
                  </div>

                  {/* Uploaded Office Plaque Photo */}
                  <div className="bg-canvas border border-border-hairline overflow-hidden">
                    {!plaqueError ? (
                      <img
                        src={ASSETS.officePlaque}
                        alt="Confident Real Estate Office B-246 Plaque"
                        referrerPolicy="no-referrer"
                        onError={() => setPlaqueError(true)}
                        className="w-full h-56 object-cover object-center"
                      />
                    ) : (
                      <div className="h-44 flex flex-col items-center justify-center p-6 text-center">
                        <p className="font-display text-2xl font-extrabold text-ink">OFFICE B-246</p>
                        <p className="text-xs font-mono text-ink-muted mt-2">
                          {t.office.electricityLabel}: {CONTACT_INFO.electricityNo} · {t.office.waterLabel}:{' '}
                          {CONTACT_INFO.waterNo}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tabular Office Identifiers */}
                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="border-t border-border-hairline pt-3">
                      <span className="text-ink-muted block">{t.office.electricityLabel}</span>
                      <span className="font-mono font-semibold text-ink tabular-nums mt-0.5 block">
                        {CONTACT_INFO.electricityNo}
                      </span>
                    </div>
                    <div className="border-t border-border-hairline pt-3">
                      <span className="text-ink-muted block">{t.office.waterLabel}</span>
                      <span className="font-mono font-semibold text-ink tabular-nums mt-0.5 block">
                        {CONTACT_INFO.waterNo}
                      </span>
                    </div>
                    <div className="col-span-2 border-t border-border-hairline pt-3 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-ink-muted block">{t.office.gpsLabel}</span>
                        <span dir="ltr" className="font-mono font-semibold text-ink tabular-nums mt-0.5 inline-block">
                          {CONTACT_INFO.lat}, {CONTACT_INFO.lng}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(`${CONTACT_INFO.lat},${CONTACT_INFO.lng}`, 'coords')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border-hairline bg-canvas hover:border-ink text-ink transition-colors whitespace-nowrap shrink-0"
                      >
                        {copiedKey === 'coords' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span>{t.advisory.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>{t.office.copyGps}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold bg-crimson text-surface hover:bg-crimson-hover transition-colors whitespace-nowrap min-h-[44px]"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{t.office.openMaps}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="lg:col-span-7 bg-surface border border-border-hairline flex flex-col min-h-[380px] lg:min-h-full">
                <div className="px-6 py-4 border-b border-border-hairline flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-ink-muted">
                    <MapPin className="h-4 w-4 text-crimson" aria-hidden="true" />
                    <span className="font-semibold text-ink">{t.office.mapHeader}</span>
                    <span aria-hidden="true">·</span>
                    <span dir="ltr" className="font-mono tabular-nums">
                      {CONTACT_INFO.lat}, {CONTACT_INFO.lng}
                    </span>
                  </div>
                  <a
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-crimson hover:underline underline-offset-4 whitespace-nowrap"
                  >
                    {t.office.directions}
                  </a>
                </div>

                <div className="relative flex-1 bg-canvas min-h-[340px]">
                  <iframe
                    title="Confident Real Estate Office B-246 Location Map"
                    src={CONTACT_INFO.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[340px] border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUIET FOOTER */}
      <footer className="border-t border-border-hairline bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-display text-base font-extrabold text-ink">
              {t.brandPrimary} <span className="text-crimson">{t.brandSecondary}</span>
            </p>
            <p className="text-xs text-ink-muted">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-muted">
            <a
              href={CONTACT_INFO.phoneHref}
              dir="ltr"
              className="font-mono hover:text-ink transition-colors tabular-nums"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              dir="ltr"
              className="font-mono hover:text-ink transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {t.footer.maps}
            </a>
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-crimson transition-colors"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
