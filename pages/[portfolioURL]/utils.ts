export const formatPageLink = (item: string) => {
    switch(item) {
        case 'Work' :
            return 'work'
        case 'About Me' :
            return 'about'
        case 'Portfolio' :
            return 'portfolio'
        default:
            return null
    }
}