export const mapSections = (sections = []) => {
    return sections.map(section => {
        if (section.__component === 'section.section-two-columns') {
            return mapSectionTwoColumns(section);
        }

        if (section.__component === 'section.section-content') {

        }

        if (section.__component === 'section.section-grid') {

        }

        return section
    })
}

export const mapSectionTwoColumns = (section = {}) => {
    const {
        __component: component = '',
        title = '',
        description: text = '',
        image: { url: srcImg = '' } = '',
        metadata: { background = false, section_id: sectionId = '' } = false,
    } = section;


    return {
        component,
        title,
        text,
        srcImg,
        background,
        sectionId
    };
}

export const mapSectionContent = (section = {}) => {
    const {
        __component: component = '',
        title = '',
        content: html = '',
        metadata: { background = false, section_id: sectionId = '' } = false,
    } = section;

    return {
        component,
        title,
        html,
        sectionId,
        background,
    }
}

export const mapSectionGrid = (section) => {
    return section;
}