import Ticket1TopImage from "./assets/Image/standard-top-icon.svg";
import Ticket1BottomImage from "./assets/Image/standard-bottom-left-icon.svg";

import Ticket2TopImage from "./assets/Image/dots_img.svg";
import Ticket2BottomImage from "./assets/Image/bussion_bottom_icon_new.svg";

import Ticket3TopImage from "./assets/Image/close-icon.svg";
import Ticket3BottomImage from "./assets/Image/vip_bottom_icon.svg";


export const Tickets = [
  {
    title: "STANDARD",
    topclass: '',
    bottomclass: '',
    price: "US$ 295",
    date: "Valid till February 15, 2022",
    delayticket: '0.3s',
    topicon: '/Image/standard-top-icon.svg',
    bottomicon: '/Image/standard-bottom-left-icon.svg',
    include: [
      "Conference access",
      "Executive luncheons on both days",
      "Networking coffee breaks",
      "Exhibition area",
    ],
    exclude: [
      "After-party access",
      "VIP and speaker lounge access",
      "Access to pre-event investor dinner",
    ],
  },
  {
    title: "BUSINESS",
    price: "US$ 595",
    date: "Valid till February 15, 2022",
    topclass: 'bussiness_top_icon',
    bottomclass: 'bussiness_bottom_left',
    delayticket: '0.5s',
    topicon: '/Image/dots_img.svg',
    bottomicon: '/Image/bussion_bottom_icon_new.svg',
    include: [
      "Conference access",
      "Executive luncheons on both days",
      "Networking coffee breaks",
      "Exhibition area",
    ],
    exclude: [
      "After-party access",
      "VIP and speaker lounge access",
      "Access to pre-event investor dinner",
    ],
  },
  {
    title: "STANDARD",
    price: "US$ 295",
    date: "Valid till February 15, 2022",
    delayticket: '0.7s',
    topclass: 'vip_standard_top',
    bottomclass: 'vip_standard_bottom',
    topicon: '/Image/close-icon.svg',
    bottomicon: '/Image/vip_bottom_icon.svg',
    include: [
      "Conference access",
      "Executive luncheons on both days",
      "Networking coffee breaks",
      "Exhibition area",
    ],
    exclude: [
      "After-party access",
      "VIP and speaker lounge access",
      "Access to pre-event investor dinner",
    ],
  },
];
export const Badges = [
  {
    count: "0",
    total: "M+",
    description: "GENERAL MEDIA",
    delaybadge: ".1s",
  },
  {
    count: "0",
    total: "M+",
    description: "TARGETED MEDIA",
    delaybadge: ".2s",
  },
  {
    count: "100",
    total: "K+",
    description: "TWITTER",
    delaybadge: ".3s",
  },
  {
    count: "50",
    total: "K+",
    description: "LINKEDIN",
    delaybadge: ".4s",
  },
  {
    count: "20",
    total: "K+",
    description: "DIRECT EMAIL",
    delaybadge: ".5s",
  },
];

export const ShowCaseData = [
  {
    title: "19",
    sign: "",
    description: "GLOBAL EDITIONS",
    delay: '0.3s'
  },
  {
    title: "2500",
    sign: "+",
    description: "C-LEVEL ATTENDEES"
    ,
    delay: '0.4s'
  },
  {
    title: "1050",
    sign: "+",
    description: "GLOBAL EDITIONS",
    delay: '0.5s'
  },
  {
    title: "5100",
    sign: "+",
    description: "INVESTORS",
    delay: '0.6s'
  },
  {
    title: "800",
    sign: "+",
    description: "COUNTRIES REPRESENTED",
    delay: '0.7s'
  },
  {
    title: "52",
    sign: "+",
    description: "COUNTRIES REPRESENTED",
    delay: '0.8s'
  },
]