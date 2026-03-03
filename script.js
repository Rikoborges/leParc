/**
 * LE PARC - VALENCE 
 * Engine de Tradução e Animação de Movimento (v4.1)
 */

const translations = {
    fr: {
        subtitle: "BAR & TABAC",
        cat_cocktails: "COCKTAILS SIGNATURE",
        cat_food: "AMUSE-BOUCHES MAISON",
        cat_coffee: "CAFÉTÉRIE",
        cat_drinks: "BOISSONS & BIÈRES",
        cat_tabac_games: "TABAC & JEUX",
        
        caip_n: "Caïpirinha Classique",
        caip_d: "Recette traditionnelle : Cachaça, citron vert frais et sucre de canne.",
        moj_n: "Mojito Cubain",
        moj_d: "Rhum blanc, menthe fraîche du jardin, citron vert et eau gazeuse.",
        
        cox_n: "Coxinha de Frango",
        cox_d: "Poulet effiloché croustillant.",
        quibe_n: "Kébbé Traditionnel",
        quibe_d: "Bœuf haché et blé concassé.",

        espresso: "Espresso",
        allonge: "Café Allongé",
        capuccino: "Capuccino",
        pression: "Bière Pression (25cl)",
        soda: "Softs / Sodas",
        water: "Eau Minérale",
        cigarettes: "Cigarettes & Tabac",
        fdj: "Jeux FDJ / Grattage",
        presse: "Presse & Magazines",

        tabac: "TABAC • PRESSE • FDJ",
        age: "INTERDIT AUX MINEURS (-18)",
        health: "Fumer tue. L'abus d'alcool est dangereux pour la santé.",
        hours: "Ouvert du Mardi au Dimanche",
        privacy: "Conformément au RGPD, ce site ne collecte aucune donnée personnelle.",
        legal_link: "Mentions Légales",
        contact_link: "Contact"
    },
    pt: {
        subtitle: "BAR E TABACARIA",
        cat_cocktails: "COQUETÉIS DE ASSINATURA",
        cat_food: "PETISCOS CASEIROS",
        cat_coffee: "CAFETERIA",
        cat_drinks: "BEBIDAS & CERVEJAS",
        cat_tabac_games: "TABACO & JOGOS",

        caip_n: "Caipirinha Clássica",
        caip_d: "Receita tradicional: Cachaça, limão taiti fresco e açúcar de cana.",
        moj_n: "Mojito Cubano",
        moj_d: "Rum branco, hortelã fresca, limão e água com gás.",

        cox_n: "Coxinha de Frango",
        cox_d: "Frango desfiado crocante.",
        quibe_n: "Quibe Caseiro",
        quibe_d: "Carne bovina e trigo integral.",

        espresso: "Café Expresso",
        allonge: "Café Carioca",
        capuccino: "Capuccino",
        pression: "Chope (25cl)",
        soda: "Refrigerantes",
        water: "Água Mineral",
        cigarettes: "Cigarros & Tabaco",
        fdj: "Jogos da Sorte / Raspadinhas",
        presse: "Revistas & Jornais",

        tabac: "TABACO • JOGOS • CONVENIÊNCIA",
        age: "PROIBIDO PARA MENORES (-18)",
        health: "Fumar mata. O abuso de álcool é perigoso para a saúde.",
        hours: "Aberto de Terça a Domingo",
        privacy: "De acordo com o RGPD, este site não coleta dados pessoais.",
        legal_link: "Termos Legais",
        contact_link: "Contato"
    },
    ar: {
        subtitle: "بار و تبغ",
        cat_cocktails: "كوكتيلات مميزة",
        cat_food: "مقبلات منزلية",
        cat_coffee: "كافيتيريا",
        cat_drinks: "مشروبات وبيرة",
        cat_tabac_games: "تبغ وألعاب",

        caip_n: "كايبيرينيا كلاسيكية",
        caip_d: "الوصفة التقليدية: كاشاسا، ليمون طازج وسكر قصب.",
        moj_n: "موهيتو كوبي",
        moj_d: "روم أبيض، نعناع طازج، ليمون ومياه غازية.",

        cox_n: "كوشينيا دجاج",
        cox_d: "دجاج مفروم مقرمش.",
        quibe_n: "كبة تقليدية",
        quibe_d: "لحم بقري وبرغل.",

        espresso: "إسبريسو",
        allonge: "قهوة طويلة",
        capuccino: "كابتشينو",
        pression: "بيرة برميل (25cl)",
        soda: "مشروبات غازية",
        water: "مياه معدنية",
        cigarettes: "سجائر وتبغ",
        fdj: "ألعاب اليانصيب",
        presse: "صحف ومجلات",

        tabac: "تبغ • صحافة • ألعاب اليانصيب",
        age: "ممنوع للقاصرين (-18)",
        health: "التدخين يقتل. الإفراط في تناول الكحول يضر بالصحة.",
        hours: "مفتوح من الثلاثاء إلى الأحد",
        privacy: "وفقًا لـ RGPD، لا يجمع هذا الموقع أي بيانات شخصية.",
        legal_link: "الإشعارات القانونية",
        contact_link: "اتصل بنا"
    }
};

function setLanguage(lang) {
    if (navigator.vibrate) navigator.vibrate(10);
    document.body.style.opacity = "0";

    setTimeout(() => {
        const t = translations[lang];

        const elements = {
            'main-subtitle': t.subtitle,
            'cat-cocktails': t.cat_cocktails,
            'cat-food': t.cat_food,
            'cat-coffee': t.cat_coffee,
            'cat-drinks': t.cat_drinks,
            'cat-tabac-games': t.cat_tabac_games,
            'item-caipirinha-name': t.caip_n,
            'item-caipirinha-desc': t.caip_d,
            'item-mojito-name': t.moj_n,
            'item-mojito-desc': t.moj_d,
            'item-coxinha-name': t.cox_n,
            'item-coxinha-desc': t.cox_d,
            'item-quibe-name': t.quibe_n,
            'item-quibe-desc': t.quibe_d,
            'label-espresso': t.espresso,
            'label-allonge': t.allonge,
            'label-capuccino': t.capuccino,
            'label-pression': t.pression,
            'label-soda': t.soda,
            'label-water': t.water,
            'label-cigarettes': t.cigarettes,
            'label-fdj': t.fdj,
            'label-presse': t.presse,
            'tabac-label': t.tabac,
            'legal-mineur': t.age,
            'health-text': t.health,
            'footer-hours': t.hours,
            'footer-privacy-text': t.privacy,
            'link-legal': t.legal_link,
            'link-contact': t.contact_link
        };

        Object.keys(elements).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerText = elements[id];
        });

        // Suporte a leitura Árabe (RTL) e alinhamento de texto
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.body.style.textAlign = (lang === 'ar') ? 'right' : 'left';
        document.documentElement.lang = lang;

        localStorage.setItem('leparc_lang', lang);
        document.body.style.opacity = "1";
        handleReveal();
    }, 250);
}

function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('leparc_lang');
    const browser = navigator.language.split('-')[0];
    const defaultLang = translations[saved] ? saved : (translations[browser] ? browser : 'fr');

    setLanguage(defaultLang);
    window.addEventListener('scroll', handleReveal);
});