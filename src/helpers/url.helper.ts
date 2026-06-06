
export const getUrlSlug = (url: string): string[] => {
    return url.replace(/^[\s/]+|[\s/]+$/g, "").split('/');
}