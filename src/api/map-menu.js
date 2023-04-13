export const mapMenu = (menuData = {}) => {
    const {
        open_in_new_tab: newTab = false,
        logo_text: text = '',
        logo_link: link = '',
        logo: { data: { attributes: { url: srcImg = '' } } } = '',
        menu_links: links = []
    } = menuData;
    return {
        newTab,
        text,
        srcImg,
        link,
        links: mapMenuLinks(links),
    }
}

export const mapMenuLinks = (links = []) => {
    return links.map(item => {
        const {
            open_in_new_tab: newTab = false,
            link_text: children = '',
            url: link = '',
        } = item;

        return {
            newTab,
            children,
            link
        }
    })
}