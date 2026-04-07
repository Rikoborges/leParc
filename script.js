/* LE PARC - VALENCE 
    Engine: Translation & Interaction v5.0
*/

const translations = {
    fr: {
        'main-subtitle': 'BAR & TABAC',
        'cat-cocktails': 'COCKTAILS SIGNATURE',
        'cat-food': 'AMUSE-BOUCHES MAISON',
        'cat-coffee': 'CAFÉTÉRIA',
        'cat-drinks': 'BOISSONS & BIÈRES',
        'cat-vins': 'SÉLECTION DE VINS',
        'cat-tabac-games': 'TABAC & JEUX',
        // Itens de destaque
        'item-caipirinha-name': '🍹 Caïpirinha Classique',
        'item-caipirinha-desc': 'Recette traditionnelle : Cachaça, citron vert frais et sucre de canne.',
        'item-mojito-name': '🍃 Mojito Cubain',
        'item-mojito-desc': 'Rhum blanc, menthe fraîche du jardin, citron vert et eau gazeuse.',
        'item-coxinha-name': '🍗 Coxinha',
        'item-quibe-name': '🧆 Kébbé',
        // Lista de Cafetaria
        'label-espresso': '☕ Espresso',
        'label-allonge': '☕ Café Allongé',
        'label-noisette': '☕ Café Noisette',
        'label-chocolat': '🍫 Chocolat Chaud',
        'label-the': '🫖 Thé / Infusion',
        // Lista de Bebidas
        'label-pression': '🍺 Bière Pression (25cl)',
        'label-pression-50': '🍺 Bière Pression (50cl)',
        'label-tourtel': '🍺 Tourtel (Sans Alcool)',
        'label-soda': '🥤 Softs / Sodas',
        'label-water': '💧 Eau Minérale (50cl)',
        'label-water-gaz': '🫧 Eau Gazeuse',
        'label-diabolo': '🥤 Diabolo',
        'label-limonade': '🍋 Limonade / Sirop',
        'label-vins': '🍷 Verre de Vin (B/R/R)',
        // Outros
        'label-cigarettes': '🚬 Cigarettes & Tabac',
        'label-fdj': '🍀 Jeux FDJ / Grattage',
        'tabac-label': 'TABAC • FDJ • PRESSE',
        'footer-hours': 'Ouvert du Mardi au Dimanche'
    },
    pt: {
        'main-subtitle': 'BAR & TABACO',
        'cat-cocktails': 'COCKTAILS ASSINATURA',
        'cat-food': 'PETISCOS CASEIROS',
        'cat-coffee': 'CAFETERIA',
        'cat-drinks': 'BEBIDAS & CERVEJAS',
        'cat-vins': 'SELEÇÃO DE VINHOS',
        'cat-tabac-games': 'TABACO & JOGOS',
        // Itens de destaque
        'item-caipirinha-name': '🍹 Caipirinha Clássica',
        'item-caipirinha-desc': 'Receita tradicional: Cachaça, limão fresco e açúcar de cana.',
        'item-mojito-name': '🍃 Mojito Cubano',
        'item-mojito-desc': 'Rum branco, hortelã fresca, limão e água com gás.',
        'item-coxinha-name': '🍗 Coxinha de Frango',
        'item-quibe-name': '🧆 Quibe de Carne',
        // Lista de Cafetaria
        'label-espresso': '☕ Café Expresso',
        'label-allonge': '☕ Café Longo',
        'label-noisette': '☕ Café Noisette',
        'label-chocolat': '🍫 Chocolate Quente',
        'label-the': '🫖 Chá / Infusão',
        // Lista de Bebidas
        'label-pression': '🍺 Cerveja Imperial (25cl)',
        'label-pression-50': '🍺 Cerveja Caneca (50cl)',
        'label-tourtel': '🍺 Tourtel (Sem Álcool)',
        'label-soda': '🥤 Refrigerantes',
        'label-water': '💧 Água Mineral (50cl)',
        'label-water-gaz': '🫧 Água com Gás',
        'label-diabolo': '🥤 Diabolo',
        'label-limonade': '🍋 Limonada / Xarope',
        'label-vins': '🍷 Taça de Vinho (B/R/R)',
        // Outros
        'label-cigarettes': '🚬 Cigarros & Tabaco',
        'label-fdj': '🍀 Jogos FDJ / Raspadinhas',
        'tabac-label': 'TABACO • FDJ • IMPRENSA',
        'footer-hours': 'Aberto de Terça a Domingo'
    },
    ar: {
        'main-subtitle': 'بار و تبغ',
        'cat-cocktails': 'كوكتيلات مميزة',
        'cat-food': 'مقبلات منزلية',
        'cat-coffee': 'كافتيريا',
        'cat-drinks': 'مشروبات وبيرة',
        'cat-vins': 'مجموعة النبيذ',
        'cat-tabac-games': 'تبغ وألعاب',
        // Itens
        'item-caipirinha-name': '🍹 كايبيرينيا كلاسيك',
        'item-caipirinha-desc': 'وصفة تقليدية: كاشاسا، ليمون طازج وسكر قصب.',
        'item-mojito-name': '🍃 موهيتو كوبي',
        'item-mojito-desc': 'روم أبيض، نعناع طازج، ليمون وماء فوار.',
        'item-coxinha-name': '🍗 كوشينيا دجاج',
        'item-quibe-name': '🧆 كبة لحم',
        // Lista de Cafetaria
        'label-espresso': '☕ إسبريسو',
        'label-allonge': '☕ قهوة طويلة',
        'label-noisette': '☕ نوزيت',
        'label-chocolat': '🍫 شوكولاتة ساخنة',
        'label-the': '🫖 شاي',
        // Lista de Bebidas
        'label-pression': '🍺 بيرة (٢٥ سل)',
        'label-pression-50': '🍺 بيرة (٥٠ سل)',
        'label-tourtel': '🍺 تورتيل',
        'label-soda': '🥤 مشروبات غازية',
        'label-water': '💧 مياه معدنية',
        'label-water-gaz': '🫧 مياه غازية',
        'label-diabolo': '🥤 ديابولو',
        'label-limonade': '🍋 ليموناضة',
        'label-vins': '🍷 كأس نبيذ',
        // Outros
        'label-cigarettes': '🚬 سجائر وتبغ',
        'label-fdj': '🍀 ألعاب الحظ',
        'tabac-label': 'تبغ • ألعاب • صحف',
        'footer-hours': 'مفتوح من الثلاثاء إلى الأحد'
    }
};

/* FUNÇÃO DE TROCA DE IDIOMA */
function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    // Suporte para leitura da direita para esquerda no Árabe
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Se for o subtítulo principal ou cabeçalhos, usamos animação de fade
            element.style.opacity = 0;
            setTimeout(() => {
                element.textContent = translations[lang][id];
                element.style.opacity = 1;
            }, 150);
        }
    });

    // Atualiza o estado visual dos botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

/* INTERSECTION OBSERVER (ANIMAÇÃO AO SCROLL) */
const revealOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

/* INICIALIZAÇÃO */
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(savedLang);
    
    revealOnScroll();

    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});