import { BsGithub, TbBrandVercel,SiNetlify} from './Icons'


export const projects = [

    {
        title: "Inscrire",
        type: "Notes App",
        imgURL:"https://res.cloudinary.com/doo5jbomi/image/upload/v1667727531/General/Inscrire_pi652y.jpg",
        techStack: ["ReactJS", "Context-API","React Draft Wysiwyg","TailwindCSS"],
        links: [{
            platform: "GitHub",
            icon: BsGithub,
            hyperlink:"https://github.com/MaruthiPothuganti/Inscrire"
        },{
            platform: "Netlify",
            icon: SiNetlify,
            hyperlink:"https://inscrire.netlify.app/"
        }],
        description:"Users can add notes using the RichText Editor. Can also add priority levels, Tags and change the color of the Note cards. Moreover users can Archive and Trash the notes. Users can also Pin the crucial notes on the HomePage."
    },
    {
        title: "Lube",
        type: "Video Library",
        imgURL:"https://res.cloudinary.com/doo5jbomi/image/upload/v1667727531/General/lube_teiuda.jpg",
        techStack: ["ReactJS", "Redux Tool-Kit","Material-UI"],
        links: [{
            platform: "GitHub",
            icon: BsGithub,
            hyperlink:"https://github.com/MaruthiPothuganti/Lube---Video-Streaming-App"
        },{
            platform: "Vercel",
            icon: TbBrandVercel,
            hyperlink:"https://lube-video-streaming-app-maruthipothuganti.vercel.app/"
        }],
        description:"A Video Streaming App Built with React, Redux ToolKit and Material UI. <br/>Features: Home Page, Video Listing Page, Playlist Management, Like/Dislike, Watch Later, History, DarkMode and Responsive WebApp"
    },
    {
        title: "L-Suitify",
        type: "Ecommerce",
        imgURL:"https://res.cloudinary.com/doo5jbomi/image/upload/v1667727530/General/lsuitify_i5nq6x.jpg",
        techStack: ["ReactJS","VanillaCSS and Light-UI", "Context-API"],
        links: [{
            platform: "GitHub",
            icon: BsGithub,
            hyperlink:"https://github.com/MaruthiPothuganti/L-Suitify"
        },{
            platform: "Vercel",
            icon: TbBrandVercel,
            hyperlink:"https://lsuitify.vercel.app/"
        }],
        description:"An E-commerce App for Suits built with ReactJS <br/> Features:- <br/>Home Page- landing page with a list of featured categories. <br/>Product Listing Page- where users can see all the products listed with filter section. Users can also add products to their wishlist and cart. <br/> Wishlist and Cart Management - where users can manage their products.<br/> Authentication and Payment Integration."
    },{
        title: "Light-UI",
        type: "Component Library",
        imgURL:"https://res.cloudinary.com/doo5jbomi/image/upload/v1667727530/General/lightui_mw1khz.jpg",
        techStack: ["HTML5", " CSS3"],
        links: [{
            platform: "GitHub",
            icon: BsGithub,
            hyperlink:"https://github.com/MaruthiPothuganti/LightUI"
        },{
            platform: "Netlify",
            icon: SiNetlify,
            hyperlink:"https://lightui.netlify.app/"
        }],
        description:"This Library consists of Various components which can be used directly in building Web Apps.<br/>Features: Avatar, Alert, Badges, Button, Card, Image, Toasts, Input, Lists, Navigation, Text-utilities, Modal, Rating, Slider, Grid"
    }
]
