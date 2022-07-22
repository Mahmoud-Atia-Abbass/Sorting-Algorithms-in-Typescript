const SelectionSort = (list: number[]): number[] => {
    for (let i = 0; i < list.length - 1; i++) {
        let min = i;
        // get smallest in each iterate 
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[i]) {
                min = j
            }
        }
        // swap smallest with the current list[i]
        [list[min], list[i]] = [list[i], list[min]];

    }
    return list;
}

console.log('Sorted List:', SelectionSort([5, 4, 3, 2, 1]));