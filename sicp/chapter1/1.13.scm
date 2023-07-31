(define (sqrt x)
    (define (average x y) (/ (+ x y) 2))
    (define (good-enough? guess)
    (< (abs (- (square guess) x)) 0.001))
    (define (improve guess) (average guess (/ x guess)))
    (define (sqrt-iter guess)
    (if (good-enough? guess)
        guess
        (sqrt-iter (improve guess))))
    (sqrt-iter 1.0))

(sqrt 500)

(define (fibonacci n)
(cond 
  ((= n 0) 0)
  ((= n 1) 1)
  (else (+ (fibonacci (- n 1)) (fibonacci (- n 2) ) ))))

(fibonacci 5)


(define (geta) (/ (+ 1 (sqrt 5)) 2)) 
(define (yeta) (/ (- 1 (sqrt 5) 2)))
(yeta)

(define (pow base exponential)
    (define (exp-iter current iteration)
    (cond 
        ((= iteration exponential) current)
        (else (exp-iter (* base current) (+ 1 iteration)))))
    (cond 
        ((= exponential 0) 1)
        (else (exp-iter base 1))))


(define (fibThroughExponential n) 
  (round (/ (pow (geta) n) (sqrt 5))))

(fibThroughExponential 6)

(define (fibInductionTest n) 
    (round (/ (- (pow (geta) n) (pow (yeta) n)) (sqrt 5))))

(fibInductionTest 6)