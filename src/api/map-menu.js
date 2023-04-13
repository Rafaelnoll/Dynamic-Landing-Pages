export const mapMenu = (menuData = {}) => {
    const {
        open_in_new_tab: newTab = false,
        logo_text: text = '',
        logo_link: link = '',
    } = menuData;
    console.log(menuData);

    const links = menuData.links || menuData.menu_links || menuData.menu || [];
    const srcImg = menuData?.logo?.data?.attributes?.url || '';

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