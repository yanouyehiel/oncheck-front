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

export function longueurTexte(word) {
    let sentence = new String(word)
    if (sentence.length > 15) {
        return sentence.substring(0, 16) + '...'
    } else {
        return sentence
    }
}