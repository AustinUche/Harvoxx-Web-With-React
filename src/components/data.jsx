import { IoReceiptOutline, IoShieldOutline } from "react-icons/io5"
import { BiCube, BiImages } from "react-icons/bi"
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import {FiMapPin, FiPhoneCall} from "react-icons/fi"
import service1 from "../images/service1.jpg"
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg"
import harvoxx2 from "../images/harvoxx2.jpg";
import harvoxx4 from "../images/harvoxx4.jpg"
import harvoxx5 from "../images/harvoxx5.jpg"

export const Abouts = [
  {
    id: "diversity",
    label: "Diversity",
    content:
      "We have a community that celebrates differences hence, we encourage every member of the team and client to be proud of their unique qualities and skills.",
    icon: <IoReceiptOutline />,
  },
  {
    id: "impact",
    label: "Impact",
    content:
      "We are determined to impact in our society. Hence, we are steadily ensuring that we find meaning and making great impact through hard work and services.",
    icon: <BiCube />,
  },
  {
    id: "commitment",
    label: "Commitment to Client",
    content:
      "Here, we believe that commitment to client is an essential ingredient for success. We are willing to go above and beyond to deliver and satisfy our clients",
    icon: <BiImages />
  },
  {
    id: "integrity",
    label: "Integrity",
    content:
      "We stay true to our culture and words. We uphold principles and processes that will earn us trust and respect from our clients.",
    icon: <IoShieldOutline />
  },
];


export const Service = [
  {
    id: "website",
    label: "Website and mobile App Design & Development",
    link: "Build With Harvoxx ",
    content:
      "designs & Develops websites for interested clients(individuals, firms, companies, NGOs, government agencies etc) at an affordable rate.",
    img: service1,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
  {
    id: "branding",
    label: "Branding and Marketing",
    content:
      "It is no longer news that we have assembled the best hands to provide our clients the best branding services. We acknowledge the fact that having a top-notch design and branding is to attract customers and clients to your business is phenomenally important.",
    img: service2,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
  {
    id: "consultancy",
    label: "Consultancy",
    content:
      "At Harvoxx Tech Hub, our consultancy arm is the compass guiding businesses through the ever- evolving tech landscape. Leveraging our expertise, we provide strategic insights, innovative solutions, and streamlined processes..",
    img: service3,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
  {
    id: "events",
    label: "Events(TechUp-Ph, LadiesCanTech)",
    link1: "TechUP Port Harcourt ",
    link2: "Ladies Can Tech. ",
    content1:
      "Harvoxx Tech Hub is the convener of two prominent tech events - ",
    content2: "and ",
    content3:
      "TechUP Port Harcourt, the largest tech conference in Niger Delta, aims to foster collaboration, enhance partnerships, and...",
    img: harvoxx2,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
  {
    id: "school",
    label: "Harvoxx School",
    link: "Harvoxx School ",
    content:
      "is committed to empowering individuals with the skills and knowledge needed to thrive in a rapidly evolving world..",
    img: harvoxx4,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
  {
    id: "harvcubation",
    label: "Harvcubation",
    link1: "Techlauncher ",
    content1: "Harvoxx Tech Hub’s ",
    content2:
      ", prides herself as the platform where successful startups emerge. We are focused on ensuring that we help tech startups launch their products successfully and grow exponentially..",
    img: harvoxx5,
    icon: <FaArrowRight />,
    read: "READ MORE",
  },
];

export const ContactCards = [
  {
    id: "address",
    label: "Our Address",
    icon: <FiMapPin />,
    content1: "Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )"
  },
  {
    id: "email",
    label: "Email Us",
    icon: <MdOutlineMail />,
    link1: "Hello@harvoxx.com",
    link2: "Help@harvoxx.com",
    link3: "Admin@harvoxx.com"
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: <FiPhoneCall />,
    content1: "+2349011684637",
    content2: "+2349065308024",
    content3: "+2349030643105"
  }
]