export const formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear();
    }
}

const entrantOptionsArray = [5,8,16,24,48,100]
const setOptionsArray =[5,8,16,24,48,100]

export const entrantSizeOptions = (maxLength) => {
    return pageOptions(entrantOptionsArray, maxLength)
}

export const setSizeOptions = (maxLength) => {
    return pageOptions(setOptionsArray, maxLength)
}

const pageOptions = (optionsArray, maxLength) => {
    var options = []
    for (var idx=0; idx<optionsArray.length; idx++) {
        if (optionsArray[idx] < maxLength) {
            options.push(optionsArray[idx])
        }
    }
    options.push(maxLength)
    return options
}