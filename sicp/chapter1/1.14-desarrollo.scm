// Interpretation of CountChange procedure
// (count-change 11)

// Generic procedure
(= amount 0) 1
((or (< amount 0) (= kinds-of-coins 0)) 0)
//Fallback
(+ (cc amount (- kinds-of-coins 1) (cc (- amount (first-denomination kinds-of-coins) kinds-of-coins))))

(count-change 11)

// cuarto nivel
(+ (cc 11 2) (cc 1 3))

//Desarrollo (cc 1 3)
(+ (cc 1 2) (cc (- 1 10) 10))
(+ (cc 1 2) (cc -9 10))
(+ (cc 1 2) 0)
//Desarrollo (cc 11 2)

//Desarrollo (cc 6 2)
(+ (cc 6 1) (cc (- 6 5) 2))
(+ (cc 6 1) (cc 1 2))  
// Desarrollo (cc 11 1)
(+ (cc 11 0) (cc (- 11 1) 1))
(+ 0 (cc 10 1))

//Desarrollo (cc 10 1)

(+ (cc 10 0) (cc (- 10 1) 1))
(+ 0 (cc (- 10 1) 1))
(cc 9 1)
