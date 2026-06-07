const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');

describe('Frontend files', () => {
    describe('Admin interface', () => {
        it('manager/index.html exists and is valid HTML', () => {
            const file = path.join(ROOT, 'public', 'manager', 'index.html');
            assert.ok(fs.existsSync(file), 'public/manager/index.html should exist');
            const content = fs.readFileSync(file, 'utf8');
            assert.ok(content.includes('<!DOCTYPE html>'), 'should have DOCTYPE');
            assert.ok(content.includes('<html'), 'should have html tag');
            assert.ok(content.includes('</html>'), 'should have closing html tag');
            assert.ok(content.includes('<head>'), 'should have head section');
            assert.ok(content.includes('<body'), 'should have body section');
        });

        it('loads required CSS and JS files', () => {
            const file = path.join(ROOT, 'public', 'manager', 'index.html');
            const content = fs.readFileSync(file, 'utf8');
            assert.ok(content.includes('tailwind.css'), 'should reference tailwind.css');
            assert.ok(content.includes('sortable.min.js'), 'should reference sortable.min.js');
        });

        it('manager tailwind.css exists', () => {
            const file = path.join(ROOT, 'public', 'manager', 'tailwind.css');
            assert.ok(fs.existsSync(file), 'public/manager/tailwind.css should exist');
        });

        it('manager sortable.min.js exists', () => {
            const file = path.join(ROOT, 'public', 'manager', 'sortable.min.js');
            assert.ok(fs.existsSync(file), 'public/manager/sortable.min.js should exist');
        });

        it('uses a restrained technical dossier admin theme instead of harsh purple/dense grid styling', () => {
            const file = path.join(ROOT, 'public', 'manager', 'index.html');
            const content = fs.readFileSync(file, 'utf8');

            assert.ok(content.includes('Technical dossier admin theme'), 'admin CSS should document the dossier-inspired theme');
            assert.ok(content.includes('--admin-paper: #f4f3ee'), 'admin theme should use the attached paper tone');
            assert.ok(content.includes('rgba(var(--admin-grid-rgb), .025)'), 'admin grid should be softened to low-opacity dots');
            assert.ok(content.includes('radial-gradient(circle'), 'admin background should use dotmatrix dots, not harsh full grid lines');
            assert.ok(content.includes('Final dossier compatibility overrides'), 'admin CSS should end with overrides that beat old Tailwind/picker styles');
            assert.ok(content.includes('main > div[id^="section"] > div'), 'admin sections should use dossier-width content sheets');
            assert.ok(content.includes('main h1,'), 'admin page titles should be restyled globally for the dossier UI');
            assert.ok(content.includes('.builder-mini-preview'), 'compact section picker preview should use builder mini preview styling');
            assert.ok(content.includes('.builder-section-option'), 'section picker should use compact list options');
            assert.ok(content.includes('.field:focus{border-color:var(--admin-ink);box-shadow:0 0 0 2px rgba(var(--admin-grid-rgb),.10);'), 'runtime field styles should use dossier focus styling');
            assert.ok(!content.includes('linear-gradient(var(--dot-matrix-border) 1px'), 'admin background should not use the harsh line grid');
            assert.ok(!content.includes('--color-brand: #6366f1'), 'default purple brand should be removed from admin CSS');
        });

        it('uses the same dossier topbar shell as the public site instead of the old sidebar app shell', () => {
            const file = path.join(ROOT, 'public', 'manager', 'index.html');
            const content = fs.readFileSync(file, 'utf8');

            assert.ok(content.includes('class="topbar"'), 'admin should use the source topbar component');
            assert.ok(content.includes('class="wrap topbar-inner"'), 'admin topbar should use the source wrap/topbar-inner structure');
            assert.ok(content.includes('class="identity"'), 'admin should use the source identity component');
            assert.ok(content.includes('class="theme-switcher"'), 'admin should expose the source light/dark theme switcher');
            assert.ok(content.includes('site-theme-mode'), 'admin should share the same light/dark persistence key as the public page');
            assert.ok(content.includes('html[data-theme="dark"]'), 'admin should use the same data-theme dark-mode hook as the public page');
            assert.ok(content.includes('--admin-paper: #080808'), 'admin dark mode should use the same dark paper token as public');
            assert.ok(content.includes('class="stamp'), 'admin action controls should use stamp-style buttons');
            assert.ok(content.includes('id="adminNav"'), 'admin nav should be horizontal topbar navigation');
            assert.ok(!content.includes('id="sidebar"'), 'admin should not render the old fixed left sidebar');
            assert.ok(!content.includes('mobile-topbar'), 'admin should not render the old separate mobile sidebar topbar');
            assert.ok(!content.includes('id="mobileMenu"'), 'admin should not render a second legacy nav shell');
        });

        it('uses a structural page-builder editor instead of duplicating the public hero in admin', () => {
            const file = path.join(ROOT, 'public', 'manager', 'index.html');
            const content = fs.readFileSync(file, 'utf8');

            assert.ok(content.includes('id="sectionPage" class="hidden admin-builder-page"'), 'sectionPage should use the compact admin builder page shell');
            assert.ok(content.includes('class="builder-shell"'), 'admin editor should render a builder shell');
            assert.ok(content.includes('class="builder-header"'), 'admin editor should render a compact editing header');
            assert.ok(content.includes('id="pageEditorTitle">Editing: Home'), 'admin editor title should be a builder title, not public page copy');
            assert.ok(content.includes('id="pageEditorSectionCount"'), 'builder header should expose section count status');
            assert.ok(content.includes('id="pageEditorSaveState"'), 'builder header should expose save state status');
            assert.ok(content.includes('id="pageEditorSections" class="builder-section-list"'), 'real section list should keep the existing pageEditorSections id');
            assert.ok(content.includes('id="pageEditorEmpty" class="builder-empty hidden"'), 'empty state should keep the existing pageEditorEmpty id');
            assert.ok(content.includes('id="addSectionPicker" class="builder-add-section hidden"'), 'add-section UI should keep the existing addSectionPicker id');
            assert.ok(content.includes('class="builder-preview-panel"'), 'admin editor should include the right live preview panel');
            assert.ok(content.includes('id="builderLivePreview"'), 'live preview should have a stable id');
            assert.ok(content.includes('id="sectionSearchInput"'), 'compact add-section drawer should include search');
            assert.ok(content.includes('selectSectionPreview'), 'compact drawer should keep preview selection hooks');
            assert.ok(content.includes('addSelectedSection ? addSelectedSection() : addPageSection'), 'compact drawer should keep add-section fallback hook');
            assert.ok(!content.includes('class="hero wrap admin-editor-dossier"'), 'admin editor must not duplicate the public hero/dossier layout');
            assert.ok(!content.includes('<div class="file-label">Editing dossier</div>'), 'admin editor must not show the old Editing dossier label');
            assert.ok(!content.includes('id="pageEditorFactTarget"'), 'old public-style dossier fact panel should be removed');
            assert.ok(!content.includes('picker-card-info'), 'giant 2x2 section picker cards should be replaced');
            assert.ok(!content.includes('picker-preview-scaled'), 'giant scaled picker previews should be replaced');
            assert.ok(!content.includes('Welcome to My Site'), 'admin editor should not present generic public-site demo title copy');
        });

        it('shared scripts.js exists', () => {
            const file = path.join(ROOT, 'public', 'shared', 'scripts.js');
            assert.ok(fs.existsSync(file), 'public/shared/scripts.js should exist');
        });

        it('shared styles.css exists', () => {
            const file = path.join(ROOT, 'public', 'shared', 'styles.css');
            assert.ok(fs.existsSync(file), 'public/shared/styles.css should exist');
        });
    });

    describe('Public interface', () => {
        it('index.html exists and is valid HTML', () => {
            const file = path.join(ROOT, 'public-readonly', 'index.html');
            assert.ok(fs.existsSync(file), 'public-readonly/index.html should exist');
            const content = fs.readFileSync(file, 'utf8');
            assert.ok(content.includes('<!DOCTYPE html>'), 'should have DOCTYPE');
            assert.ok(content.includes('<html'), 'should have html tag');
            assert.ok(content.includes('</html>'), 'should have closing html tag');
            assert.ok(content.includes('<meta name="description"'), 'should have meta description');
            assert.ok(content.includes('<meta name="robots"'), 'should have robots meta');
        });

        it('loads shared styles', () => {
            const file = path.join(ROOT, 'public-readonly', 'index.html');
            const content = fs.readFileSync(file, 'utf8');
            assert.ok(content.includes('styles.css'), 'should reference styles.css');
        });

        it('robots.txt exists', () => {
            const file = path.join(ROOT, 'public-readonly', 'robots.txt');
            assert.ok(fs.existsSync(file), 'public-readonly/robots.txt should exist');
        });

        it('sitemap.xml exists', () => {
            const file = path.join(ROOT, 'public-readonly', 'sitemap.xml');
            assert.ok(fs.existsSync(file), 'public-readonly/sitemap.xml should exist');
        });
    });

    describe('Server entry point', () => {
        it('server.js exists', () => {
            const file = path.join(ROOT, 'src', 'server.js');
            assert.ok(fs.existsSync(file), 'src/server.js should exist');
        });

        it('does not seed fake portfolio page content on fresh installs', () => {
            const file = path.join(ROOT, 'src', 'server.js');
            const content = fs.readFileSync(file, 'utf8');

            const forbiddenSeedSnippets = [
                'insert' + 'Block.run(',
                'Seed example ' + 'blocks into default pages',
                'Seeded example ' + 'content into default pages',
                "Hi, I'm " + 'Your Name',
                'Example ' + 'Project',
                'Your Name' + ' · Your Role',
                'Alex' + ' Rivera',
                'Ver' + 'cel',
                'Str' + 'ipe',
                'alex' + 'rivera',
            ];

            for (const snippet of forbiddenSeedSnippets) {
                assert.ok(!content.includes(snippet), `server.js should not contain seeded portfolio snippet: ${snippet}`);
            }
        });

        it('package.json has required fields', () => {
            const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
            assert.ok(pkg.name, 'should have name');
            assert.ok(pkg.version, 'should have version');
            assert.ok(pkg.main, 'should have main entry');
            assert.ok(pkg.scripts?.start, 'should have start script');
        });

        it('Dockerfile exists', () => {
            const file = path.join(ROOT, 'Dockerfile');
            assert.ok(fs.existsSync(file), 'Dockerfile should exist');
        });

        it('public site renders an empty page with the correct styled shell', () => {
            const file = path.join(ROOT, 'public-readonly', 'site.html');
            const content = fs.readFileSync(file, 'utf8');

            assert.ok(content.includes('function renderEmptyPage'), 'site renderer should have a dedicated styled empty-page renderer');
            assert.ok(content.includes('empty-page-shell'), 'empty page should use the shared public-site shell styles');
            assert.ok(content.includes('Start building this page'), 'empty page should guide users without fake portfolio content');
        });

        it('supports selectable built-in public site themes while preserving custom CSS', () => {
            const manager = fs.readFileSync(path.join(ROOT, 'public', 'manager', 'index.html'), 'utf8');
            const site = fs.readFileSync(path.join(ROOT, 'public-readonly', 'site.html'), 'utf8');

            assert.ok(manager.includes('settingSiteTheme'), 'settings UI should include a public site theme selector');
            assert.ok(manager.includes('github-pages-dossier'), 'settings UI should expose the GitHub Pages dossier theme');
            assert.ok(manager.includes('customCssInput'), 'custom CSS editor should remain available');
            assert.ok(manager.includes('Technical dossier — attached resume layout'), 'settings UI should describe the dossier theme as the attached layout style');

            assert.ok(site.includes('applySiteTheme'), 'public site should apply the selected built-in theme');
            assert.ok(site.includes('theme-github-pages-dossier'), 'public site should include the GitHub Pages dossier theme class');
            assert.ok(site.includes('--paper: #f4f3ee'), 'dossier theme should use the attached paper tone');
            assert.ok(site.includes('--grid-rgb: 5,5,5'), 'dossier theme should use the attached grid variable');
            assert.ok(site.includes('IBM Plex Sans'), 'dossier theme should use the attached typography stack');
            assert.ok(site.includes('box-shadow: 0 10px 26px rgba(var(--grid-rgb), .10)'), 'dossier theme should use the attached dossier card shadow');
            assert.ok(site.includes('body.classList.add(`theme-${theme}`)'), 'public site should apply theme classes without removing custom CSS support');
            assert.ok(site.includes('applyCustomCss'), 'public site should still apply user custom CSS');
            assert.ok(site.includes('style.id = \'custom-css\''), 'custom CSS should be injected as a separate style tag');
            assert.ok(site.includes('class="topbar"'), 'public renderer should use the exact source topbar component');
            assert.ok(site.includes('class="wrap topbar-inner"'), 'topbar should use the source wrap/topbar-inner structure');
            assert.ok(site.includes('class="identity"'), 'topbar identity should use the source identity class');
            assert.ok(site.includes('class="hero wrap"'), 'hero should use the source hero wrap structure');
            assert.ok(site.includes('class="dossier"'), 'hero should use the source dossier container');
            assert.ok(site.includes('class="hero-main"'), 'hero should use the source hero-main panel');
            assert.ok(site.includes('class="side-sheet"'), 'hero should use the source side-sheet metadata panel');
            assert.ok(site.includes('class="file-label"'), 'hero should keep the source file-label marker');
            assert.ok(site.includes('class="stamp primary"'), 'actions should use source stamp-style buttons');
            assert.ok(site.includes('class="columns"'), 'sections should use source columns layout');
            assert.ok(site.includes('class="rail"'), 'sections should use source metadata rails');
            assert.ok(site.includes('class="work-list"'), 'timeline should use the exact source work-list class');
            assert.ok(site.includes('class="company"'), 'timeline should group roles in source company cards');
            assert.ok(site.includes('class="company-head"'), 'timeline should use source company-head headers');
            assert.ok(site.includes('class="role-stack"'), 'timeline should use source vertical role-stack');
            assert.ok(site.includes("'role-step'"), 'timeline should render source role-step items');
            assert.ok(site.includes("'role-step current'"), 'timeline should mark current item with source filled marker class');
            assert.ok(site.includes('class="theme-switcher"'), 'public renderer should include the source light/dark theme switcher');
            assert.ok(site.includes('html[data-theme="dark"]'), 'CSS should include the exact source dark theme variable hook');
            assert.ok(site.includes('grid-template-columns: 132px 1fr'), 'role-step CSS should preserve the source timeline columns');
            assert.ok(!site.includes('rounded-xl'), 'public renderer should not keep rounded SaaS card classes');
            assert.ok(!site.includes('from-indigo'), 'public renderer should not keep gradient utility classes');
            assert.ok(!site.includes('shadow-lg'), 'public renderer should not keep soft SaaS shadow utility classes');
            assert.ok(manager.includes('itl-company-summary'), 'admin timeline editor should expose employer summary for grouped employer cards');
            assert.ok(manager.includes('itl-tags'), 'admin timeline editor should expose role tags for timeline pills');
            assert.ok(manager.includes('id="${p}sidebar"'), 'admin timeline editor should expose the employment sidebar note');
            assert.ok(!site.includes('Epworth' + ' Healthcare'), 'timeline layout must not copy personal employer content from the screenshot');
            assert.ok(site.includes('function renderContact(c, sectionId = \'contact\')'), 'public contact section should support the single-page #contact anchor');
            assert.ok(site.includes('class="referee"'), 'public contact section should include the two-column referee container');
            assert.ok(site.includes('class="form-card"'), 'public contact section should use form-card panels');
            assert.ok(site.includes('Prepare email'), 'public contact form should prepare a mailto enquiry email');
            assert.ok(site.includes('Organisation'), 'public contact form should include the organisation field from the supplied UI');
            assert.ok(site.includes('Request referees'), 'public contact form should include enquiry type options');
            assert.ok(manager.includes('referee_title'), 'admin contact editor should expose referee title as an editable field');
            assert.ok(manager.includes('referee_summary'), 'admin contact editor should expose referee summary as an editable field');
            assert.ok(manager.includes('referee_tags'), 'admin contact editor should expose referee tags as editable template data');
            assert.ok(manager.includes('enquiry_email'), 'admin contact editor should expose the mailto target as editable template data');
            const server = fs.readFileSync(path.join(ROOT, 'src', 'server.js'), 'utf8');
            assert.ok(server.includes("'site_theme', 'github-pages-dossier'"), 'fresh installs should default to the technical dossier theme');

            const forbiddenPersonalContent = [
                'Aedan' + ' Kerr',
                'Epworth' + ' Healthcare',
                'Melbourne' + ', Australia',
                'Technical Dossier' + '</title>',
            ];
            for (const snippet of forbiddenPersonalContent) {
                assert.ok(!site.includes(snippet), `public template should not copy personal attached-resume content: ${snippet}`);
                assert.ok(!manager.includes(snippet), `admin template should not copy personal attached-resume content: ${snippet}`);
            }
        });

        it('supports repeatable hero/header buttons and custom titled pages', () => {
            const manager = fs.readFileSync(path.join(ROOT, 'public', 'manager', 'index.html'), 'utf8');
            const site = fs.readFileSync(path.join(ROOT, 'public-readonly', 'site.html'), 'utf8');
            const server = fs.readFileSync(path.join(ROOT, 'src', 'server.js'), 'utf8');

            assert.ok(manager.includes('function heroButtonRow(button = {})'), 'admin hero button helper should keep a valid JS function signature');
            assert.ok(manager.includes('class="hero-button-row"'), 'admin hero editor should render repeatable hero button rows');
            assert.ok(manager.includes('function addHeroButton'), 'admin should let users add more hero buttons');
            assert.ok(manager.includes('function collectHeroButtons'), 'admin should save repeatable hero buttons into hero content');
            assert.ok(site.includes('function renderHeroButtons'), 'public hero should render a configurable button array');
            assert.ok(site.includes('headerButtons'), 'site settings should support extra header buttons');
            assert.ok(server.includes('headerButtons'), 'server should persist extra header buttons');
            assert.ok(manager.includes('settingHeaderButtonsList'), 'admin settings should expose repeatable header buttons');
            assert.ok(manager.includes('function addHeaderButton'), 'admin should let users add header buttons');
            assert.ok(manager.includes('pageSettingsList'), 'admin settings should list editable pages');
            assert.ok(manager.includes('function createCustomPage'), 'admin should create extra pages');
            assert.ok(manager.includes('function savePageMeta'), 'admin should save custom page titles');
            assert.ok(manager.includes('function renderAdminPageNav'), 'admin navigation should be generated from pages, not hardcoded');
            assert.ok(site.includes('function getSlugFromPath'), 'public router should support custom page slugs');
            assert.ok(site.includes("slugToPath[p.slug] || ('/' + p.slug)"), 'public nav should link extra pages by slug');
        });

        it('supports admin-editable branding, theme controls, structure mode, and PDF export without changing dossier UI', () => {
            const manager = fs.readFileSync(path.join(ROOT, 'public', 'manager', 'index.html'), 'utf8');
            const site = fs.readFileSync(path.join(ROOT, 'public-readonly', 'site.html'), 'utf8');
            const server = fs.readFileSync(path.join(ROOT, 'src', 'server.js'), 'utf8');

            for (const id of [
                'settingSiteTitle', 'settingSiteTagline', 'settingHeroMediaEnabled', 'settingHeroMediaImageUrl',
                'settingHeroMediaAltText', 'settingHeroMediaPlaceholderText', 'settingThemeShowGrid',
                'settingThemeShowHeroMediaPattern', 'settingThemeShowMetadataPanel', 'settingThemeShowSystemStatus',
                'settingThemeDensity', 'settingSiteStructureMode', 'settingEnabledHome', 'settingEnabledProjects',
                'settingEnabledCv', 'settingEnabledContact', 'settingSinglePageOrder'
            ]) {
                assert.ok(manager.includes(`id="${id}"`), `admin settings should expose ${id}`);
            }

            assert.ok(server.includes('const defaultSiteSettings = {'), 'server should define safe default site settings');
            assert.ok(server.includes('function mergeSiteSettings'), 'server should merge missing nested defaults for old configs');
            assert.ok(server.includes('heroMedia: {'), 'defaults should include hero media');
            assert.ok(server.includes('siteStructure: {'), 'defaults should include site structure');

            assert.ok(site.includes('const defaultSiteSettings = {'), 'public renderer should define client-side defaults');
            assert.ok(site.includes('function mergeSiteSettings'), 'public renderer should merge missing settings safely');
            assert.ok(site.includes('siteTitle'), 'public renderer should use editable siteTitle');
            assert.ok(site.includes('siteTagline'), 'public renderer should use editable siteTagline');
            assert.ok(site.includes('renderHeroMedia'), 'public renderer should render editable hero media');
            assert.ok(site.includes('theme-grid-off'), 'public renderer should support disabling grid background');
            assert.ok(site.includes('theme-density-compact'), 'public renderer should support compact density');
            assert.ok(site.includes('theme-density-spacious'), 'public renderer should support spacious density');
            assert.ok(site.includes('showMetadataPanel'), 'public renderer should support hiding metadata panel');
            assert.ok(site.includes('showSystemStatus'), 'public renderer should support hiding system status');
            assert.ok(site.includes('showHeroMediaPattern'), 'public renderer should support disabling hero media pattern');
            assert.ok(site.includes('function loadSinglePage'), 'public renderer should support single-page mode');
            assert.ok(site.includes('href="#projects"'), 'single-page nav should generate anchor links');
            assert.ok(site.includes('window.print()'), 'public site should include print/PDF export action');
            assert.ok(site.includes('@media print'), 'public site should include print CSS');
            assert.ok(site.includes('@page'), 'print CSS should set A4 page size');
            assert.ok(site.includes('.no-print'), 'print CSS should hide no-print UI');
            assert.ok(site.includes('.section-label'), 'section headings should split/hide descriptive labels in print');
            assert.ok(site.includes('class="section-heading"'), 'sections should use printable split heading structure');
            assert.ok(!site.includes('optional logo<br>or project graphic'), 'hero placeholder should not be hardcoded');
        });
    });

    describe('i18n translation files', () => {
        const i18nDir = path.join(ROOT, 'public', 'shared', 'i18n');
        const enFile = path.join(i18nDir, 'en.json');

        it('en.json exists and is valid JSON', () => {
            assert.ok(fs.existsSync(enFile), 'en.json should exist');
            const data = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            assert.ok(Object.keys(data).length > 0, 'en.json should have keys');
        });

        it('i18n.js registers languages that have matching JSON files', () => {
            const i18nJs = fs.readFileSync(path.join(ROOT, 'public', 'shared', 'i18n.js'), 'utf8');
            const codeMatches = i18nJs.match(/code:\s*'([a-z]{2})'/g) || [];
            const registeredCodes = codeMatches.map(m => m.match(/'([a-z]{2})'/)[1]);
            assert.ok(registeredCodes.length >= 2, 'should have at least 2 registered languages');
            for (const code of registeredCodes) {
                const file = path.join(i18nDir, `${code}.json`);
                assert.ok(fs.existsSync(file), `${code}.json should exist for registered language '${code}'`);
            }
        });

        it('all locale files have the exact same keys as en.json', () => {
            const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            const enKeys = Object.keys(en).sort();
            const localeFiles = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json') && f !== 'en.json');

            assert.ok(localeFiles.length > 0, 'should have at least one non-English locale');

            for (const file of localeFiles) {
                const locale = file.replace('.json', '');
                const data = JSON.parse(fs.readFileSync(path.join(i18nDir, file), 'utf8'));
                const localeKeys = Object.keys(data).sort();

                const missingKeys = enKeys.filter(k => !localeKeys.includes(k));
                const extraKeys = localeKeys.filter(k => !enKeys.includes(k));

                assert.deepStrictEqual(
                    missingKeys, [],
                    `${locale}.json is missing keys: ${missingKeys.join(', ')}`
                );
                assert.deepStrictEqual(
                    extraKeys, [],
                    `${locale}.json has extra keys not in en.json: ${extraKeys.join(', ')}`
                );
            }
        });

        it('no translation values are empty strings', () => {
            const localeFiles = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));
            for (const file of localeFiles) {
                const locale = file.replace('.json', '');
                const data = JSON.parse(fs.readFileSync(path.join(i18nDir, file), 'utf8'));
                const emptyKeys = Object.entries(data)
                    .filter(([, v]) => typeof v === 'string' && v.trim() === '')
                    .map(([k]) => k);
                assert.deepStrictEqual(
                    emptyKeys, [],
                    `${locale}.json has empty values for: ${emptyKeys.join(', ')}`
                );
            }
        });

        it('interpolation placeholders match between en.json and all locales', () => {
            const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            const placeholderRe = /\{\{(\w+)\}\}/g;

            const getPlaceholders = (str) => {
                const matches = [];
                let m;
                while ((m = placeholderRe.exec(str)) !== null) matches.push(m[1]);
                return matches.sort();
            };

            const localeFiles = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json') && f !== 'en.json');
            for (const file of localeFiles) {
                const locale = file.replace('.json', '');
                const data = JSON.parse(fs.readFileSync(path.join(i18nDir, file), 'utf8'));
                for (const key of Object.keys(en)) {
                    if (!data[key]) continue;
                    const enPlaceholders = getPlaceholders(en[key]);
                    if (enPlaceholders.length === 0) continue;
                    const localePlaceholders = getPlaceholders(data[key]);
                    assert.deepStrictEqual(
                        localePlaceholders, enPlaceholders,
                        `${locale}.json key "${key}" has mismatched placeholders: expected {{${enPlaceholders.join('}}, {{')}}} but got {{${localePlaceholders.join('}}, {{')}}}`
                    );
                }
            }
        });
    });
});
