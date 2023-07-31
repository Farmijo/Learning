// Interpretation of CountChange procedure
// (count-change 11)



(define (first-level) (cc 11 5))

(define (second-level) ((+ (cc 11 4) 0)))

//Second Level. 
2.1 Padre: first-level
(cc 11 4)
2.2 Padre: first-level
(cc -14 4)