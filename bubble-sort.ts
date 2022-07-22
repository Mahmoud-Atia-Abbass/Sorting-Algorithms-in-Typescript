const BubbleSort = (list: number[]): number[] => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[i]) {
                [list[i], list[j]] = [list[j], list[i]]
            }
        }
    }
    return list
}
console.log('Sorted List:', BubbleSort([5, 4, 3, 2, 1]))