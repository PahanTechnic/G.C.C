import { Bolt, FigmaIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
import { UserCheck, Star, Palette, Shield, Crown ,Clock, Bell, Heart, CheckCircle,  BookOpen, Calendar, Ban, Dumbbell, Coffee, Award, AlertCircle,  } from "lucide-react";



import logo from '../src/assets/school-Logo.png'
import side1 from '../src/assets/hero1.png'
import side2 from '../src/assets/hero2.png'
import side3 from '../src/assets/hero3.png'
import side4 from '../src/assets/hero4.png'
import about from '../src/assets/about.png'
import counter from '../src/assets/counter.png'
import blog1 from '../src/assets/blog-1.png'
import blog2 from '../src/assets/blog-2.png'
import blog3 from '../src/assets/blog-3.png'
import blogbg from '../src/assets/blog-bg.svg'
import blogshape from '../src/assets/blog-shape.png'
import slide1 from '../src/assets/slide1.png'
import slide2 from '../src/assets/slide2.png'
import slide3 from '../src/assets/slide3.png'
import slide4 from '../src/assets/slide4.png'
import slide5 from '../src/assets/slide5.png'
import History from '../src/assets/history_of_the_school.png'
import Founders1 from '../src/assets/Founders1.png'
import Founders2 from '../src/assets/Founders2.png'
import Founders3 from '../src/assets/Founders3.png'
import SchoolSong from '../src/assets/school-song.mp3'
import Flag from '../src/assets/flag.png'
import Uniform1 from '../src/assets/school-uniform-1.png'
import Uniform2 from '../src/assets/school-uniform-2.png'
import Uniform3 from '../src/assets/school-uniform-3.png'
import Flag1 from '../src/assets/school-flag-1.png'
import Flag2 from '../src/assets/school-flag-2.png'
import Flag3 from '../src/assets/school-flag-3.png'


export const Menus = [

  {
    name: "Home"
  },
  {
    name: "About Our School",
    subMenuHeading: ["Our history and traditions", "Identity", "School disciplinary rules"],
    subMenu: [
      // Our history and traditions
      {
        heading: "Our history and traditions",
        items: [
          {
            name: "History of the school",
            desc: "Our proud legacy",
            icon: BookOpenText,
          },
          {
            name: "Founders",
            desc: "School originators",
            icon: Users,
          },
          {
            name: "Former principals",
            desc: "Past leadership",
            icon: BriefcaseBusiness,
          },
        ],
      },
      {
        heading: "Identity",
        items: [
          {
            name: "School Profile",
            desc: "Basic details",
            icon: BookOpenText,
          },
          {
            name: "Vision and Mission",
            desc: "Our goals and direction",
            icon: Bolt,
          },
          {
            name: "School song",
            desc: "Our anthem",
            icon: Play,
          },
          {
            name: "Logo and motto",
            desc: "Visual identity",
            icon: ShieldPlus,
          },
          {
            name: "School flag",
            desc: "Institutional flag",
            icon: Figma,
          },
          {
            name: "Official school colors",
            desc: "Our theme colors",
            icon: Figma,
          },
          {
            name: "School uniform",
            desc: "Dress code",
            icon: ShoppingBag,
          },
          {
            name: "School quarters",
            desc: "Staff accommodation",
            icon: ShoppingBag,
          },
        ],
      },
      {
        heading: "School disciplinary rules",
        items: [
          {
            name: "School Code of Conduct",
            desc: "Discipline and rules",
            icon: Lock,
          },
        ],
      },
    ],
    gridCols: 3,
  },
  {
    name: "Studieses",
    subMenuHeading: ["Curriculum", "Administration", "Staff"],
    subMenu: [
      {
        heading: "Curriculum",
        items: [
          {
            name: "Secondary sector",
            desc: "Discipline and rules",
            icon: Lock,
          },
        ],
      },
      {
        heading: "Administration",
        items: [
          {
            name: "Management structure",
            desc: "Discipline and rules",
            icon: Lock,
          },
          {
            name: "Administrative Committee",
            desc: "Discipline and rules",
            icon: Lock,
          },
        ],
      },
      {
        heading: "Staff",
        items: [
          {
            name: "Principal's message",
            desc: "Discipline and rules",
            icon: Lock,
          },
          {
            name: "Deputy Principal's Message",
            desc: "Discipline and rules",
            icon: Lock,
          },
          {
            name: "Academic staff",
            desc: "Discipline and rules",
            icon: Lock,
          },
          {
            name: "Non-academic staff",
            desc: "Discipline and rules",
            icon: Lock,
          },
          {
            name: "Student Council",
            desc: "Discipline and rules",
            icon: Lock,
          },
        ],
      },
    ],
    gridCols: 3,
  },
  {
    name: "News and special events"
  },
  {
    name: "Achievements"
  },
  {
    name: "Clubs and associations",
  },
  {
    name: "Gallery",
  },
  {
    name: "Contact us",
  },
];

export const assets = {
  logo,
  about,
  counter,
  blog1,
  blog2,
  blog3,
  blogbg,
  blogshape,
  History,
  Founders1,
  Founders2,
  Founders3,
  SchoolSong,
  Flag,
  Uniform1,
  Uniform2,
  Uniform3,
  Flag1,
  Flag2,
  Flag3
}

// Sample slider items (replace with your actual data)
export const sliderItems = [
  {
    id: 1,
    title: "WlLcome",
    name: "Back to",
    description: "Welcome Back To Our School Website",
    image: side1,
  },
  {
    id: 2,
    title: "oUR ",
    name: "sCHOol",
    description: "A Place of Excellence and Learning",
    image: side2,
  },
  {
    id: 3,
    title: "Galigamuwa Central",
    name: "College",
    description: "Discover Our Programs and Activities",
    image: side3,
  },
  {
    id: 4,
    title: "Official",
    name: "Website",
    description: "Join Us in This Exciting Journey",
    image: side4,
  },
];


export const newsArticles = [
  {
    image: blog1,
    category: "Sports",
    title: "Annual Sports Meet 2025 - Kg/Galigamuwa Central College",
    date: "Mar 06, 2024",
    comments: "Com 19",
    description:
      "ගලිගමුව මද්‍ය විද්‍යාලීය සිසුන් සහ කාර්යය මන්ඩලය මගින් සංවිදානය කරනු ලබන sports meet 2025 Mar 06, 2025 දින පැවත්වුනි. එහි photo කිහිපයක් පහත වේ....",
  },
  {
    image: blog2,
    category: "Technology",
    title: "Tec Day 2024 - Kg/Galigamuwa Central College",
    date: "Oct 12, 2024",
    comments: "Com 09",
    description:
      "ගලිගමුව මධ්‍ය විද්‍ර්‍යාලයීය තාක්ෂණික දිනය පසුගිය දින පැවැත්වුණු අතර එහි විශේෂ අවස්ථාවන්හි ජායාරූප කිහිපයක්...",
  },
  {
    image: blog3,
    category: "Dance",
    title: "වෙස් මංගල්‍ය - Kg/Galigamuwa Central College",
    date: "Oct 10, 2021",
    comments: "Com 09",
    description:
      "2024 වර්ෂයේ ගලිගමුව මධ්‍ය විද්‍යලයිය සිසු දරුවන්ගේ හිස වෙස් පැලදීවීමේ මංගල්‍යයේ විශේෂ අවස්ථාවන්හි ජායාරූප......",
  },
];

export const slides = [
  {
    image: slide1,
    title: "Discover Nature's Beauty",
    animation: "fade-up"
  },
  {
    image: slide2,
    title: "Explore Amazing Destinations",
    animation: "fade-down"
  },
  {
    image: slide3,
    title: "Experience Adventure",
    animation: "fade-right"
  },
  {
    image: slide4,
    title: "Create Lasting Memories",
    animation: "fade-left"
  }
];

export const founders = [
  {
    id: 1,
    name: "ගරු පුංචිබණ්ඩා බාලසූරිය මහතා",
    image: Founders1,
    alt: "Founders1"
  },
  {
    id: 2,
    name: "ගරු විමලා කන්නන්ගර ඇමතිතුමිය",
    image: Founders2,
    alt: "Founders2"
  },
  {
    id: 3,
    name: "අබිලීනු බාස් උන්නැහේ",
    image: Founders3,
    alt: "Founders3"
  }

];

export const principals = [
  {
    id: 1,
    name: "දයා කරුණාරත්න මයා",
    period: "January 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 2,
    name: "ඒ.එම්. ලියනගේ මයා",
    period: "February 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 3,
    name: "එම්.සේනාරත්න මයා",
    period: "March 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 4,
    name: "එම්.බී. හේරත් මයා",
    period: "April 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 5,
    name: "එම්.නන්දසේන මයා",
    period: "June 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 6,
    name: "ඩී.ඩී. ගෝමස් මයා",
    period: "July 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 7,
    name: "හේමකීර්ති ලියනගේ මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 8,
    name: "සුමනරත්න මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 9,
    name: "ආර්.එම්.කේ. රණතුංග මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 10,
    name: "පී.මනම්පේරි මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 11,
    name: "ඩබ්.එම්.ඒ. වනසිංහ මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 12,
    name: "ඩී.කේ. අතුකෝරාල මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 13,
    name: "එච්.ආර්. විජිත බණ්ඩාර මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  },
  {
    id: 14,
    name: "ආර්.ආර්.සිරිසේන මයා",
    period: "August 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus totam"
  }
];


export const schoolData = [
  { title: "පාසල ආරම්භ වූ දිනය", value: "1967 ජූනි 07" },
  { title: "පාසල රජයට පවරා ගත් දිනය", value: "1967.ජූලි.07" },
  { title: "ජාතික පාසලක් වූ දිනය", value: "2022.04.29" },
  { title: "පාසල් වර්ගය", value: "1AB" },
  { title: "පාසල් අංකය", value: "13162" },
  { title: "සංගණන අංකය", value: "24520" },
  { title: "පාසල සතු භුමියේ ප්‍ර‍මාණය", value: "අක් 06 රූඩ් 03 පර්චස් 08" },
  { title: "පාසල පිහිටි පළාත", value: "සබරගමුව" },
  { title: "දිස්ත්‍රික්කය", value: "කෑගල්ල" },
  { title: "කලාපය", value: "කෑගල්ල" },
  { title: "කොට්ඨාසය", value: "ගලිගමුව" },
  { title: "ප්‍රාදේශීය ලේකම් කොට්ඨාසය", value: "ගලිගමුව" },
  { title: "ග්‍රාම සේවක වසම", value: "ගලිගමුව" },
  { title: "ග්‍රාම සේවා කොට්ඨාස අංකය", value: "106" },
  { title: "මුළු ශ්‍රේණි ගණන", value: "13" },
  { title: "මුළු පන්ති ගණන", value: "42" },
  { title: "2019 ජූනි මාසයට මුළු ශීෂ්‍ය ගණන", value: "1154" },
  { title: "2019 ජූනි මාසය වන විට මුළු ගුරුවරුන්ගේ ගණන", value: "95" },
  { title: "පාසලේ වර්ණය", value: "කොළ , සුදු" },
];

export const lyrics = [ // The lyrics array to make the code more DRY
  "සිහ නුඹුන් සද මවන සමන්ත්",
  "අර නීල කතර යුගු",
  "ගගෙමුල ළඳි මව විදුහල මංගලේ",
  "නාදෙන සද සෙරින",
  "සෙරිනදෙයි සෙරිනදෙයි",
  "සෙරින පෑ වරී නුඹුන් වී බෙලිවෙල් කෝරල රුජු අනු පුජිත",
  "උතස්සම පඤ්ච ගුණී",
  "සෙරින කුමරු ද නුඹු",
  "සෙරිනදෙයි සෙරිනදෙයි //",
  "විදු නුඹ වාසී ගුණිමළු සදුරා",
  "සෙරින අප මව් //",
  "ගෞරව ඔබ දෙනා ළිම නායකෙනා",
  "දරන කාල අධි මවටම රුජු",
  "සිහ නුඹුන් සද //"
];


export const colorData = [
  {
    name: 'කොළ',
    english: 'Green',
    bg: 'bg-green-700',
    hoverBg: 'hover:bg-green-800',
    textColor: 'text-white',
    description: 'ශක්තිය සහ වර්ධනය',
    symbolism: 'Growth & Vitality'
  },
  {
    name: 'සුදු',
    english: 'White',
    bg: 'bg-white',
    hoverBg: 'hover:bg-gray-50',
    textColor: 'text-gray-800',
    description: 'පවිත්‍රතාව සහ සාමය',
    symbolism: 'Purity & Peace'
  }
];

export const uniformData = [
  {
    title: "ප්‍රාථමික පිරිමි සිසුන්",
    englishTitle: "Primary Male Students",
    icon: Users,
    image: Uniform1,
    color: "from-blue-500 to-blue-700",
    guidelines: [
      "මානවීය පෙනුමක් ඇති පිරිසිදු පිළියමක්. (පළඳනිය කොන්දේසි දින අනුව 1/2)",
      "සුදු මුළු සිරිත පෙනුමක්. පිළිවෙලට ඇති කොලු සහ සිවීමේ නිමාව.",
      "පාසලේ ලාංඡනය සහිතව දකුණ පැත්තේ කමිසයට නිවැරදිව එකතුකිරීම.",
      "අනවශ්‍ය වාටිකා සහ බෙරැලි දාගැනීමෙන් වලකින්න.",
      "වැඩි මදිව නැතිව නිවැරදිව සිවූ බිම්වල සිවීම සහ දරුවාට අනූව දිග පවත්වන්න.",
      "නිසි පිරිසිදුකමක් සහිත පාද ආවරණයක් (සියුම් වර්ණයකින්).",
      "දරුවාගේ නම සහ පංතිය පළලිය යුතුය."
    ]
  },
  {
    title: "ප්‍රාථමික ගැහැණු සිසුන්",
    englishTitle: "Primary Female Students",
    icon: UserCheck,
    image: Uniform2,
    color: "from-pink-500 to-pink-700",
    guidelines: [
      "මානවීය පෙනුමක් ඇති පිරිසිදු පිළියමක්. (පළඳනිය කොන්දේසි දින අනුව 1/2)",
      "සුදු මුළු සිරිත පෙනුමක්. පිළිවෙලට ඇති කොලු සහ සිවීමේ නිමාව.",
      "පාසලේ ලාංඡනය සහිතව දකුණ පැත්තේ කමිසයට නිවැරදිව එකතුකිරීම.",
      "අනවශ්‍ය වාටිකා සහ බෙරැලි දාගැනීමෙන් වලකින්න.",
      "වැඩි මදිව නැතিව නිවැරදිව සිවූ බිම්වල සිවීම සහ දරුවාට අනූව දිග පවත්වන්න.",
      "නිසි පිරිසිදුකමක් සහිත පාද ආවරණයක් (සියුම් වර්ණයකින්).",
      "දරුවාගේ නම සහ පංතිය පළලිය යුතුය."
    ]
  },
  {
    title: "විශේෂ දින නිල ඇඳුම",
    englishTitle: "Special Day Uniform",
    icon: Star,
    image: Uniform3,
    color: "from-purple-500 to-purple-700",
    guidelines: [
      "මානවීය පෙනුමක් ඇති පිරිසිදු පිළියමක්. (පළඳනිය කොන්දේසි දින අනුව 1/2)",
      "සුදු මුළු සිරිත පෙනුමක්. පිළිවෙලට ඇති කොලු සහ සිවීමේ නිමාව.",
      "පාසලේ ලාංඡනය සහිතව දකුණ පැත්තේ කමිසයට නිවැරදිව එකතුකිරීම.",
      "අනවශ්‍ය වාටිකා සහ බෙරැලි දාගැනීමෙන් වලකින්න.",
      "වැඩි මදිව නැතිව නිවැරදිව සිවූ බිම්වල සිවීම සහ දරුවාට අනූව දිග පවත්වන්න.",
      "නිසි පිරිසිදුකමක් සහිත පාද ආවරණයක් (සියුම් වර්ණයකින්).",
      "දරුවাගේ නම සහ පංතිය පළලිය යුතුය."
    ]
  }
];

export const houses = [
  {
    id: 1,
    name: 'විජය',
    englishName: 'Vijaya',
    badge: 'විජය',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    hoverColor: 'hover:border-red-400',
    icon: Crown,
    image: Flag1,
    description: 'විජය නිල නිවාසය අපගේ පාසලේ නිල නිවාස අතර ඉතා කීර්තිමත් නිවාසයකි. එහි නායකත්වය, කණ්ඩායම් හැඟීම සහ ජයග්‍රාහී චරිතය පාසලේ අභිමානයකි.',
    stats: ['Leadership', 'Victory', 'Pride']
  },
  {
    id: 2,
    name: 'ගැමුණු',
    englishName: 'Gamunu',
    badge: 'ගැමුණු',
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    borderColor: 'border-red-200',
    hoverColor: 'hover:border-red-400',
    icon: Shield,
    image: Flag2,
    description: 'ගැමුණු නිල නිවාසය ශක්තිමත් සංස්කෘතියක් සහ ඉහළ ක්‍රීඩා හැකියාවන් සහිත කණ්ඩායමකි. සෑම අභියෝගයකදීම අප්‍රතිහත ධෛර්යය පෙන්වයි.',
    stats: ['Strength', 'Culture', 'Sports']
  },
  {
    id: 3,
    name: 'පැරකුම්',
    englishName: 'Parakum',
    badge: 'පැරකුම්',
    color: 'from-yellow-400 to-yellow-500',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    hoverColor: 'hover:border-yellow-400',
    icon: Palette,
    image: Flag3,
    description: 'පැරකුම් නිල නිවාසය නිර්මාණශීලීත්වය සහ කලා කුසලතා සඳහා ප්‍රසිද්ධයි. සෑම උත්සවයකදීම විශිෂ්ට දක්ෂතා පෙන්නුම් කරයි.',
    stats: ['Creativity', 'Arts', 'Excellence']
  }
];


export const rules = [
    {
      title: 'උදෑසන වගකීම් සහ තහනම් වේලාවන්',
      englishTitle: 'Morning Responsibilities & Prohibited Times',
      text: 'සෑම ශිෂ්‍ය ශිෂ්‍යාවක ම පෙ.ව. 7.15 ට පෙර පාසලට පැමිණිය යුතු අතර පෙ.ව. 7.30 ට පෙර පංතිකාමර හා වෙන්කර දී ඇති ස්ථාන පවිත්‍ර කොට අවසන් කළ යුතුය. මේ සම්බන්ධයෙන් පන්තිභාර ගුරුවරයා හා අදාළ ශිෂ්‍ය නායක නායිකාවන් වගකීමනේ ක්‍රියා කළ යුතුය. අවසරයකින් තොරව පෙ.ව. 6.45 ට පෙර පාසලට ඇතුළුවීම සපුරා තහනම් වේ.',
      icon: Clock,
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200',
      category: 'Time Management'
    },
    {
      title: 'පාසල් දිනයේ ආරම්භය',
      englishTitle: 'School Day Commencement',
      text: 'පාසල ආරම්භ කිරීමේ සීනුව නාදකිරීමත් සමගම සියලුම දරුවන් ගුරු භවතුන් රැස්වීම් පැවැත්වෙන නියමිත ස්ථානවලට පැමිණිය යුතුය.',
      icon: Bell,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
      category: 'Assembly'
    },
    {
      title: 'අධ්‍යාපනික නොවන කටයුතු වලදී ගෞරව දැක්වීම',
      englishTitle: 'Respect During Non-Academic Activities',
      text: 'උදෑසන ආගමික වතාවත් හා ජාතික ගීතය පාසල් ගීතය වාදනය වන විටත් හවස ඡත්ථමානවක ගාථා වාදනය වන විටත් සිසු දරුවන් ගුරු භවතුන් අනධ්‍යයන කාර්ය මණ්ඩලය හා පාසල තුළ රුකී සිටින සියලු දෙනා ස්වකීය කාර්යභාරයන්ගෙන් වැලකී එම කටයුතුවලට ගෞරවයෙන් හා සක්‍රීයව සහභාගී විය යුතුය.',
      icon: Heart,
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-200',
      category: 'Respect'
    },
    {
      title: 'පාසල් නිමවීමට පෙර හැසිරීම් නීති',
      englishTitle: 'Behavioral Rules Before School Dismissal',
      text: 'සියලුම සිසුන් පාසල නිමවන තෙක් තම පන්ති කාමරය තුළම රැදී සිටිය යුතු අතර කිසිදු හේතුවක් නිසා වෙනත් පන්තියක ක්‍රීඩා පිටියේ හෝ වෙනත් ස්ථානයක රැදී නොසිටිය යුතුය. අවශ්‍යතාවක් සදහා වෙනත් පන්ති කාමරයකට යන්නේ නම් අවසර ලබා ගත යුතුය.',
      icon: Users,
      color: 'from-lime-500 to-lime-700',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
      borderColor: 'border-lime-200',
      category: 'Discipline'
    },
    {
      title: 'විෂය මාරුවීම් අතර නීතිමය හැසිරීම',
      englishTitle: 'Legal Behavior During Subject Changes',
      text: 'සෑම කාලපරිච්ඡේදයක් අවසානයේම නියමිත ගුරුවරයා පැමිණෙන තුරු නිහඩව ඊළග විෂයයට සූදානම් විය යුතුය. විනාඩි 10 ක් තුළ අදාළ ගුරුවරයා නොපැමිණෙන්නේ නම් පන්ති නායක නායිකාව හෝ විෂය නායක නායිකාව විසින් අංශභාර ගුරුවරයාගෙන් විමසිය යුතුය.',
      icon: BookOpen,
      color: 'from-emerald-600 to-emerald-800',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200',
      category: 'Academic'
    },
    {
      title: 'කාණ්ඩ විෂයයන් සදහා පිවිසුම් සහ පිටවීම් නීති',
      englishTitle: 'Entry & Exit Rules for Group Subjects',
      text: 'කාණ්ඩ විෂයයන් සදහා වෙනත් ස්ථානයකට යනවිට හා නැවත පන්තියට පැමිණෙන විට පේලියට යා යුතුය. එක් එක් විෂයට අදාල සිසුන්ගේ නාමලේඛනයක් විෂය භාර ගුරුවරයා විසින් පවත්වාගනේ යා යුතු අතර සහභාගී වූ /නොවූ බව සටහන්කොට විෂය නායකයා/නායිකාව මගින් පන්තිභාර ගුරුවරයා වෙත යැවිය යුතුය.',
      icon: Calendar,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
      category: 'Movement'
    },
    {
      title: 'ගැටළු දැන්වීමේ නිසි ක්‍රමය',
      englishTitle: 'Proper Method of Reporting Issues',
      text: 'දරුවන්ට මතුවන ඕනෑම ගැටළුවක් ප්‍රථමයෙන් පන්තිභාර ගුරුවරයාට දැනුම් දිය යුතුය. අදාල ගුරුවරයා නොමැති අවස්ථාවක පමණක් අංශ භාර හෝ විෂය භාර ගුරුවරයාට දැන්විය යුතුය.',
      icon: AlertCircle,
      color: 'from-teal-600 to-teal-800',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-200',
      category: 'Communication'
    },
    {
      title: 'වැරදි සටහන් කිරීමේ ක්‍රමවේදය',
      englishTitle: 'Error Recording Methodology',
      text: 'පන්තිභාර ගුරුවරයා විසින් තම සිසුන් වෙනුවෙන් පෙර වැරදි පොතක් භාවිත කළ යුතුය. වැරදි තුනකට වඩා සටහන් වන අවස්ථාවකදී අංශභාර ගුරුවරයා වෙත යොමු කළ යුතුය. වර්ෂ අවසානයේ එම පොත ඊළග පන්තිභාර ගුරුවරයාට භාරදිය යුතුය.',
      icon: Shield,
      color: 'from-lime-600 to-lime-800',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
      borderColor: 'border-lime-200',
      category: 'Documentation'
    },
    {
      title: 'පාසල් ආරක්ෂාව සහ විනය සඳහා සීමාකිරීම්',
      englishTitle: 'Security & Discipline Restrictions',
      text: 'පාසල් වේලාව තුළ කවර හෝ බාහිර අයෙකු සමග සබඳතා පැවැත්වීම තහනම් වේ.',
      icon: Shield,
      color: 'from-emerald-700 to-emerald-900',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200',
      category: 'Security'
    },
    {
      title: 'පාසලට තහනම් කර ඇති ද්‍රව්‍ය',
      englishTitle: 'Prohibited Items at School',
      text: 'පාසල් අධ්‍යාපන ක්‍රියාවලියට අදාල නොවන පුවත්පත් ඡායරූප, ලිපි, ජංගම දුරකථන, සංයුක්ත තැටි වෙනත් උපකරණ රැගෙන ඒම හා ළග තබා ගැනීම සපුරා තහනම් වේ. එබඳු දෑ ළග තබාගෙන අසුවුවහොත් පාසලෙන් නිල වශයෙන් අස්වී යනතුරු ආපසු ලබා දෙනු නොලැබේ.',
      icon: Ban,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-200',
      category: 'Prohibited'
    },
    {
      title: 'ක්‍රීඩා ඇඳුම් භාවිතය සඳහා නියමිත සීමා',
      englishTitle: 'Sports Uniform Usage Limits',
      text: 'පාසල් අධ්‍යයන කාලය තුළ අවසරයකින් තොරව කිසිදු ක්‍රීඩා පුහුණු කටයුත්තකට සහභාගී වීමට අවසර නොලැබේ. ක්‍රීඩා ඇඳුම් සහිතව ක්‍රීඩා පිටියේ හැර වෙනත් කිසිදු ස්ථානයක රැදී නොසිටිය යුතුය.',
      icon: Dumbbell,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      category: 'Sports'
    },
    {
      title: 'විවේක අවසානයේ සිසුන්ගේ වගකීම්',
      englishTitle: 'Student Responsibilities at Break End',
      text: 'විවේක කාලය අවසන් වූ වහාම තම පන්ති කාමරයට පැමිණිය යුతුය',
      icon: Coffee,
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200',
      category: 'Break Time'
    },
    {
      title: 'සිසුන්ගේ පැමිණීම සහ පන්ති උපකරණ පිළිබඳ වගකීම්',
      englishTitle: 'Student Attendance & Class Equipment Responsibilities',
      text: 'පාසලේ හා පන්ති කාමරයේ උපකරණ ආරක්ෂා කළ යුතුය. ඉදල් කොසු ආදිය පිරිසිදු කිරීමෙන් පසු අදාළ ස්ථානයක ගෙනවිත් තැබිය යුතුය. දරුවෙකු දින දෙකකට වඩා පාසලට නොපැමිණෙන්නේ නම් දෙමාපියන් විසින් පන්තිභාර ගුරුතුමාට දැනුම් දිය යුතුය.',
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      category: 'Attendance'
    },
    {
      title: 'නිල අවස්ථාවන් සඳහා හැසිරීම් මාර්ගෝපදේශය',
      englishTitle: 'Behavioral Guidelines for Official Occasions',
      text: 'පාසල නියෝජනය කරමින් සහභාගී වන ඕනෑම අවස්ථාවකට පාසල් නිල ඇදුමෙන් සහභාගී විය යුතු අතර පාසලේ ගෞරවය ආරක්ෂා වන පරිදි හැසිරිය යුතුය.',
      icon: Award,
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-200',
      category: 'Representation'
    }
  ];