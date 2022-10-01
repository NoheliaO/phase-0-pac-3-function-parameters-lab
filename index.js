function introduction(string) {
    if (string == "Aki") {
        return "Hi, my name is Aki."
    }
    if (string == "Samip") {
        return "Hi, my name is Samip."
    }
}

function introductionWithLanguage(name, language) {
// (`The two values are ${name} and ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}