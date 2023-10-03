import sacamain from "../Assets/sacamain.png";
import shose1 from "../Assets/shose1.png";
import parfum2 from "../Assets/parfum2.png";
import coca from "../Assets/coca.png";
import ceinture from "../Assets/ceinture.png";
import montre from "../Assets/montre.png";
import sac from "../Assets/sac.png";
import shose2 from "../Assets/shose2.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { BiChild } from "react-icons/bi";
import { PiWatchDuotone } from "react-icons/pi";

export const header = [
    {
        iconHeader: <GrDeliver />,
        texte: "Service disponible 24h/24",
    },
    {
        iconHeader: <GrDeliver />,
        texte: "Livraison en 24h",
    },
    {
        iconHeader: <BsFillTelephoneFill />,
        texte: "33 00 000 000",
    },

]

export const compteSidebar = [
    {
        lien: "/compte",
        iconSidebar: <FaUserAlt />,
        texte: "Mon profil"
    },
    {
        lien: "/commande",
        iconSidebar: <ImFolderUpload />,
        texte: "Mes commandes"
    },
    {
        lien: "/panier",
        iconSidebar: <FaCartShopping />,
        texte: "Mon panier"
    },
    {
        lien: "/favoris",
        iconSidebar: <AiFillHeart />,
        texte: "Mes favoris"
    },

]

export const logout = [

    {
        lien: "/logout",
        texte: "Déconnexion"
    },

]

export const service = [

    {
        lien: "/produit-homme",
        texte: "Hommes",
        iconService: <IoIosMan />,
    },
    {
        lien: "/produit-homme",
        texte: "Femmes",
        iconService: <ImWoman />,
    },
    {
        lien: "/produit-homme",
        texte: "Enfants",
        iconService: <BiChild />,
    },
    {
        lien: "/produit-homme",
        texte: "Equipement",
        iconService: <PiWatchDuotone />,
    },
]

export const prod = [
    {
        link: "produits/hommes/crown",
        img: sacamain,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/parfum",
        img: parfum2,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/hommes/parfum1",
        img: coca,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/hommes/sacFille",
        img: ceinture,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/hommes/parfumFemme",
        img: shose1,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/parfum",
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/hommes/parfum1",
        img: sac,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/hommes/parfumFemme",
        img: shose2,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    }
];

export const prods = [
    {
        link: "produits/hommes/parfumFemme",
        img: shose1,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },
    {
        link: "produits/parfum",
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },

    {
        link: "produits/hommes/parfum1",
        img: sac,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    },

    {
        link: "produits/hommes/parfumFemme",
        img: shose2,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiOutlineHeart />
    }
];

export const favoirisImg = [
    {

        img: shose1,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiFillHeart />
    },
    {
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiFillHeart />
    },
    {
        link: "produits/hommes/parfum1",
        img: sac,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiFillHeart />
    },
    {
        link: "produits/hommes/sacFille",
        img: shose2,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca",
        icon: <AiFillHeart />
    }
];

