import { mapSectionTwoColumns, mapSections } from "./map-sections"

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
})