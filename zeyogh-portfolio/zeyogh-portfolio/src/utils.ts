export const getImageUrl = (path: string): string => {
    return new URL(`assets/${path}`, import.meta.url).href; //takes base url of website, appending a passed-in relative path, and then passing back whatever path. Makes it easier to dynamically import images into components.
}