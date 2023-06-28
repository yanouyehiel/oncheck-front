export function extractParamsUrl(url) {
    url = url.split()
}

export function dateParser(date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    return newDate;
}