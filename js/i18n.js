var savedLang = "en";
var ptI18N={
    
    "menu.projects":"Projetos",
    "menu.education":"Formação",
    "menu.courses":"Cursos",
    "menu.contact":"Contato",
    
    "languages.english": "Ingês",
    "languages.portuguese": "Português",
    "languages.japanese": "Japonês",
    
    "languages.english.proficiency":"Fluente",
    "languages.portuguese.proficiency":"Nativo",
    "languages.japanese.proficiency":"Básico",
    
    "education.mba":"MBA em Gestão Bancária",
    "education.degree":"Graduação em Análise de Sistemas",
    "education.itil":"Certificação ITIL Foundation",
    "education.microsoft":"Microsoft Certified Professional",
    
    "header.projects": "Portfólio de Projetos",
    "sub.projects":"Ao longo de mais de 15 anos de carreira, participei ativamente da concepção, desenvolvimento e evolução de sistemas para empresas de diversos setores.",
    
    "header.education": "Formação e Certificações",
    "sub.education": "Capacitações estratégicas e técnicas, aliando visão de negócios a domínio de ferramentas e frameworks consolidados no mercado.",
    
    "header.idioms": "Idiomas",
    "sub.idioms": "",
    
    "header.courses": "Capacitações Complementares",
    "sub.courses": "Atualizações regulares por meio de plataformas especializadas, com foco em aprofundar habilidades e expandir horizontes profissionais.",
    
    "header.technologies": "Stack de Tecnologias",
    "sub.technologies": "Experiência do back ao front, cobrindo todo o ciclo de desenvolvimento de software.",
    
    "header.contact": "Contato",
    "sub.contact": "Onde me encontrar",
    
    "computer-clip":"Experiência na criação de APIs, desenvolvimento de hotsites voltados à presença digital e construção de arquiteturas de sistemas complexos, com integrações a ERPs e Data Warehouses. Soluções entregues com eficiência e aderência aos desafios específicos de cada projeto.",
    
    "coffee-clip":"Que tal um café?\nEntre em contato através de:\n\nhttps://www.linkedin.com/in/allancarvalho/\nhttps://instagram.com/allancpp",

    "picture-clip":"Na minha vida pessoal, sou leitor ávido, apreciador de café forte e de boas ideias.",

    "companies-clip":"Acumulei experiência atuando em projetos estratégicos para empresas como Globo, Embratel, GVT, HP, EDS, Granado, entre outras referências do setor.",

    "id-clip":"Prazer, sou Allan Ferreira\nDesenvolvedor full stack com mais de 15 anos de experiência, combinando visão de negócio, domínio técnico e criatividade. \n\nVamos transformar ideias em soluções?",

    "papers-clip":"Sou movido por desafios e pela oportunidade de transformar ideias em soluções reais. Valorizo o aprendizado contínuo, boas conversas e ambientes colaborativos. Acredito que a tecnologia, aliada à empatia e ao entendimento do negócio, pode gerar impactos significativos.",

    "books-clip":"Acredito no aprendizado como um processo contínuo. Ao longo da minha trajetória, concluí diversos cursos e mergulhei em livros que contribuíram significativamente para meu desenvolvimento técnico, criativo e estratégico.",

    "certifications-clip":"Acredito que a tecnologia só entrega valor quando alinhada ao entendimento do negócio. Por isso, além de evoluir tecnicamente, busco sempre compreender os desafios estratégicos, unindo visão analítica e expertise para desenvolver soluções mais relevantes.",
};

var enI18N = {
    "menu.projects": "Projects",
    "menu.education": "Education",
    "menu.courses": "Courses",
    "menu.contact": "Contact",
    
    "languages.english": "English",
    "languages.portuguese": "Portuguese",
    "languages.japanese": "Japanese",
    
    "languages.english.proficiency":"C2 Proficient",
    "languages.portuguese.proficiency":"Native",
    "languages.japanese.proficiency":"Basic",
    
    "education.mba":"MBA in Banking Management",
    "education.degree":"Degree in Systems Analysis",
    "education.itil":"ITL Foundation Certification",
    "education.microsoft":"Microsoft Certified Professional",

    "header.projects": "Project Portfolio",
    "sub.projects": "With over 15 years of experience, I have actively contributed to the design, development, and evolution of systems for companies across various industries.",
    
    "header.education": "Education & Certifications",
    "sub.education": "Strategic and technical qualifications that combine business insight with mastery of widely adopted tools and frameworks.",
    
    "header.idioms": "Languages",
    "sub.idioms": "",
    
    "header.courses": "Additional Training",
    "sub.courses": "Continuous learning through specialized platforms, focused on deepening skills and broadening professional perspectives.",
    
    "header.technologies": "Technology Stack",
    "sub.technologies": "End-to-end development experience, from backend to frontend, covering the full software development lifecycle.",
    
    "header.contact": "Contact",
    "sub.contact": "Feel free to get in touch to discuss new projects, collaborations, or professional opportunities.",
    
    "computer-clip": "Experienced in building APIs, developing hotsites focused on digital presence, and designing complex system architectures integrated with ERPs and Data Warehouses. Solutions delivered efficiently and tailored to each project's unique challenges.",

    "coffee-clip": "How about a coffee?\nLet's connect through:\n\nhttps://www.linkedin.com/in/allancarvalho/\nhttps://instagram.com/allancpp",

    "picture-clip": "In my personal life, I'm an avid reader, a fan of strong coffee, and a lover of great ideas.",

    "companies-clip": "I've gained experience working on strategic projects for major companies such as Globo, Embratel, GVT, HP, EDS, Granado, and other industry leaders.",

    "id-clip": "Nice to meet you, I'm Allan Ferreira.\nA full-stack developer with over 15 years of experience, blending business insight, technical expertise, and creativity.\n\nShall we turn ideas into solutions?",

    "papers-clip": "I'm driven by challenges and the opportunity to turn ideas into real solutions. I value continuous learning, meaningful conversations, and collaborative environments. I believe technology, when combined with empathy and business understanding, can create significant impact.",

    "books-clip": "I believe learning is a lifelong journey. Throughout my career, I've completed numerous courses and explored books that have greatly contributed to my technical, creative, and strategic growth.",

    "certifications-clip": "I believe technology only creates value when aligned with business understanding. That’s why, in addition to advancing technically, I constantly strive to understand strategic challenges, combining analytical thinking and expertise to develop more impactful solutions."
};


function loadLanguage(lang) {

    let translations = getLanguageSet(lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[key] || `[${key}]`;
    });

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    savedLang = lang;
}

function getLanguageSet(lang){
    let translations = enI18N;

    if(lang == "pt"){
        translations = ptI18N;
    }
    return translations;
}

function setLanguagewww(lang) {
    loadLanguage(lang);
}

