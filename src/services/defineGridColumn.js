const defineGridColumn = (elementIndex, list, numberOfColumns = 1) => {
    if (elementIndex == undefined || list == undefined) {
        return "";
    }

    const interval = Math.ceil(list.length/numberOfColumns);
    let multiplier = 0;
    let className = "grid-column-";
    do {
        if (elementIndex >= interval*multiplier && elementIndex <= interval * (multiplier+1)) {
            return className += (multiplier + 1);
        }
        multiplier++;        
    } while(true);
}

export default defineGridColumn;