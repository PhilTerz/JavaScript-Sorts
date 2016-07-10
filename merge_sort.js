var tests = require('./tests.js')

function merge_sort(A, p, r) {
    if (arguments.length < 3) {
        merge_sort(A, 0, A.length - 1)
        return A
    }

    if (p < r) {
        var q = Math.floor((p + r) / 2)
        merge_sort(A, p, q)
        merge_sort(A, q + 1, r)
        merge(A, p, q, r)
    }
}


function merge(A, p, q, r) {
    var a1 = A.slice(p, q + 1),
        a2 = A.slice(q + 1, r + 1),
        i = 0,
        j = 0
    for (i; i < r - p + 1; i++) {
    	if (a2.length == 0 || a1[0] < a2[0]) {
    		A[p + i] = a1.shift()
    	} else {
    		A[p + i] = a2.shift()
    	}
    }

}

tests.run(merge_sort)
