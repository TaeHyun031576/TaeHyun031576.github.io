(function () {
    const root = document.documentElement;

    function getStoredLanguage() {
        try {
            return localStorage.getItem('language');
        } catch {
            return null;
        }
    }

    function applyLanguage(language) {
        const active = language === 'zh' ? 'zh' : 'en';
        root.dataset.language = active;
        root.lang = active === 'zh' ? 'zh-CN' : 'en';
    }

    function setupLanguageToggle() {
        const button = document.getElementById('language-toggle');
        if (!button) return;

        const updateLabel = () => {
            const isChinese = root.dataset.language === 'zh';
            button.setAttribute('aria-label', isChinese ? 'Switch language to English' : '切换为简体中文');
        };

        updateLabel();
        button.onclick = () => {
            const language = root.dataset.language === 'zh' ? 'en' : 'zh';
            applyLanguage(language);
            try {
                localStorage.setItem('language', language);
            } catch {}
            updateLabel();
        };
    }

    applyLanguage(getStoredLanguage() || 'en');
    document.addEventListener('astro:page-load', setupLanguageToggle);
    document.addEventListener('astro:after-swap', () => {
        applyLanguage(getStoredLanguage() || 'en');
        setupLanguageToggle();
    });
})();
