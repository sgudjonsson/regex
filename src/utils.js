export const output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`)
}