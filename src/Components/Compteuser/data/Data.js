import { BsTruck } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

import homme from "../../../Assets/img/home.png";
import femme from "../../../Assets/img/femme.png";
import enfant from "../../../Assets/img/enfant.png";
import equipement from "../../../Assets/img/equipement.png";
import parking from "../../../Assets/img/parking.png";

import garçon from "../../../Assets/img/garçon.png";
import chaussure from "../../../Assets/img/chaussure.png";
import parfum from "../../../Assets/img/parfum.png";
import parfum1 from "../../../Assets/img/parfum1.png";
import sacFille from "../../../Assets/img//sac-fille.png";
import parfumFemme from "../../../Assets/img/parfum-femme.png";
import cocacola from "../../../Assets/img/cocacola.png";
import ceinture from "../../../Assets/img/ceinture.png";
import bote from "../../../Assets/img/bote.png";
import montre from "../../../Assets/img/montre.png";
import storie from "../../../Assets/img/storie.png";
import nike from "../../../Assets/img/nike.png";

import container from "../../../Assets/img/Container.png";

import quote from "../../../Assets/img/quote-up.png";
import elipse from "../../../Assets/img/Ellipse 1.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";

export const headerImg = [
    {
        img: <BsTruck />,
        title: "Service disponible 24h/24"
    },
    {
        img: <BsTruck />,
        title: "Livraison en 24h"
    },
    {
        img: <IoCallOutline />,
        title: "33 000 00 00 "
    },
];

export const serviceImg = [
    {
        link: "produits/hommes",
        title: "Hommes",
        img: homme,
    },
    {
        link: "produits/femmes",
        title: "Femmes",
        img: femme,
    },
    {
        link: "produits/enfants",
        title: "Enfants",
        img: enfant,
    },
    {
        link: "produits/equipement",
        title: "Equipements",
        img: equipement,
    },
    {
        link: "produits/parking",
        title: "Parking",
        img: parking,
    },
];

export const prod = [
    {
        link: "produits/hommes/crown",
        img: garçon,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/chaussure",
        img: chaussure,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/parfum",
        img: parfum,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/parfum1",
        img: parfum1,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/sacFille",
        img: sacFille,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/parfumFemme",
        img: parfumFemme,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/coca",
        img: cocacola,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/ceinture",
        img: ceinture,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/bote",
        img: bote,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/montre",
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/storie",
        img: storie,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes//nike",
        img: nike,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
];
export const temoignage = [
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },

];

export const crown = [
    {
        img: container
    },
    {
        img: container
    },
    {
        img: container
    },
];
export const similaire = [
    {
        img: bote,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: storie,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: nike,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
];
export const side = [
    {
          name: "Mon Profil",
          icon: <BiUser />,
          lien: "/profil",
      
    },
  
    {
        name: "Mes Commande",
        icon: <ImFolderUpload />,
        lien: "/command",
    
  },
    
  {
    name: "Mon Panier",
    icon: <AiOutlineShoppingCart />,
    lien: "/panier",

},
{
    name: "Mes Favoris",
    icon: <AiOutlineHeart />,
    lien: "/favoris",

},
  ];