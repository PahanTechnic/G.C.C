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
  Founders3
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