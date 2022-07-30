function quickSort(arr: number[]): number[] {
    // Base case
    if (!arr.length) return [];
    const [head, ...tail] = arr,
        left = tail.filter(e => e < head),
        right = tail.filter(e => e >= head);
    return quickSort(left).concat(head, quickSort(right))
}
console.log('quickSort:', quickSort([5, 4, 3, 2, 1]));