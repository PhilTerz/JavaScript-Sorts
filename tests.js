module.exports = new(function() {
    this.cases = [{
            'set': [1, 99, -5, 878, 2, 7, 3, 9, -1],
            'solution': [-5, -1, 1, 2, 3, 7, 9, 99, 878]
        },

        {
            'set': [-9, 3, 7, 0, 101],
            'solution': [-9, 0, 3, 7, 101]
        }
    ]

    this.check = function(set, solution) {
        for (var i = 0; i < set.length; i++) {
            if (set[i] !== solution[i]) {
                return false
            }
        }

        return true
    }

    this.run = function(fn) {
        for (var i = 0; i < this.cases.length; i++) {
            var deepCopy = []

            for (var j = 0; j < this.cases[i].set.length; j++) {
                deepCopy[j] = this.cases[i].set[j]
            }

            var candidate = fn(deepCopy)

            if (this.check(deepCopy, this.cases[i].solution)) {
                console.log('Case" `' + JSON.stringify(this.cases[i].set) + '` => passed')
            } else {
                console.warn('\nCase" `' + JSON.stringify(this.cases[i].set) + '` => did not pass')
                console.warn('Err: `' + JSON.stringify(candidate) + '`\n')
            }
        }
    }
})()
