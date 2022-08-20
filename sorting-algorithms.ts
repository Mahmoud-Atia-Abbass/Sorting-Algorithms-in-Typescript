export class SortingAlgorithms {
    constructor() { }

    public BubbleSort = (list: number[]): number[] => {
        for (let i = 0; i < list.length - 1; i++) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] < list[i]) {
                    [list[i], list[j]] = [list[j], list[i]]
                }
            }
        }
        return list
    }


    public SelectionSort = (list: number[]): number[] => {
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

    public quickSort(arr: number[]): number[] {
        // Base case
        if (!arr.length) return [];
        const [head, ...tail] = arr,
            left = tail.filter(e => e < head),
            right = tail.filter(e => e >= head);
        return this.quickSort(left).concat(head, this.quickSort(right))
    }


    // Merge Sort functions
    public MergeSort(items: number[]): number[] {
        return this.divide(items);
    }

    private divide(items: number[]): number[] {
        let halfLength = Math.ceil(items.length / 2);
        let low = items.slice(0, halfLength);
        let high = items.slice(halfLength);
        if (halfLength > 1) {
            low = this.divide(low);
            high = this.divide(high);
        }
        return this.combine(low, high);
    }

    private combine(low: number[], high: number[]): number[] {
        let indexLow = 0;
        let indexHigh = 0;
        let lengthLow = low.length;
        let lengthHigh = high.length;
        let combined: number[] = [];
        while (indexLow < lengthLow || indexHigh < lengthHigh) {
            let lowItem = low[indexLow];
            let highItem = high[indexHigh];
            if (lowItem !== undefined) {
                if (highItem === undefined) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    } else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            } else {
                if (highItem !== undefined) {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        return combined;
    }

}

const _bubbleSort = new SortingAlgorithms();
console.log('BubbleSort', _bubbleSort.BubbleSort([5, 4, 3, 2, 1]))

const _selectionSort = new SortingAlgorithms();
console.log('Sorted List:', _selectionSort.SelectionSort([5, 4, 3, 2, 1]));

const _quickSort = new SortingAlgorithms();
console.log('quickSort:', _quickSort.quickSort([5, 4, 3, 2, 1]));

const _mergeSort = new SortingAlgorithms();
console.log('MergeSort:', _mergeSort.MergeSort([5, 4, 3, 2, 1]));