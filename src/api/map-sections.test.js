import {
    mapTextGrid,
    mapSectionContent,
    mapSectionTwoColumns,
    mapSections
} from "./map-sections"

describe('map-sections', () => {
    it('should render predefined section if no data', () => {
        const data = mapSections();
        expect(data).toEqual([]);
    })

    it('should map section two columns if no data', () => {
        const data = mapSectionTwoColumns();
        expect(data.background).toBe(false);
        expect(data.component).toBe('');
        expect(data.sectionId).toBe('');
        expect(data.srcImg).toBe('');
        expect(data.title).toBe('');
    })

    it('should map section two columns to match keys and values required', () => {
        const data = mapSectionTwoColumns({
            __component: "section.section-two-columns",
            title: "January brings us Firefox 85",
            description: "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
            metadata: {
                background: true,
                section_id: "home",
            },
            image: {
                url: "a.svg",
            }
        });

        expect(data.background).toBe(true);
        expect(data.component).toBe("section.section-two-columns");
        expect(data.sectionId).toBe("home");
        expect(data.srcImg).toBe("a.svg");
        expect(data.title).toBe("January brings us Firefox 85");
    })

    it('should map section content if no data', () => {
        const data = mapSectionContent();

        expect(data.background).toBe(false);
        expect(data.component).toBe('');
        expect(data.sectionId).toBe('');
        expect(data.title).toBe('');
        expect(data.html).toBe('');
    })

    it('should map section content to match keys and values required', () => {
        const data = mapSectionContent({
            __component: "section.section-content",
            title: "title1",
            content: "abc",
            metadata: {
                background: false,
                section_id: "intro",
            }
        });

        expect(data.background).toBe(false);
        expect(data.component).toBe("section.section-content");
        expect(data.sectionId).toBe("intro");
        expect(data.title).toBe("title1");
        expect(data.html).toBe("abc");
    })

    it('should map section Text Grid if no data', () => {
        const data = mapTextGrid();

        expect(data.background).toBe(false);
        expect(data.component).toBe('');
        expect(data.description).toBe('');
        expect(data.title).toBe('');
        expect(data.grid).toEqual([]);
        expect(data.sectionId).toBe('');
    })

    it('should map section Text Grid to match keys and values required', () => {
        const data = mapTextGrid({
            __component: "section.section-grid",
            description: "123",
            title: "title123",
            text_grid: [
                {
                    title: "Teste1",
                    description: "abc",
                },
                {
                    title: "Teste2",
                    description: "def",
                },
            ],
            metadata: {
                background: true,
                section_id: "grid-one",
            }
        });

        expect(data.component).toBe("section.section-grid");
        expect(data.description).toBe('123');
        expect(data.title).toBe('title123');
        expect(data.grid[0].title).toBe('Teste1');
        expect(data.grid[0].description).toBe('abc');
        expect(data.background).toBe(true);
        expect(data.sectionId).toBe('grid-one');
    })
})