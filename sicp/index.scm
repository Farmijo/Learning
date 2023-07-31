; scheme < index.scm
; (define (square x) (* x x))

; (square 4)

; (define (sum-of-squares x y)
; (+ (square x) (square y)))

; (sum-of-squares 8 3)

; (define (f a)
;   (sum-of-squares (square a) (square a) ))

; (f 5)

; Conditionals

(define (abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))

(define (abs2 x)
  (cond ((< x 0) (- x))
  (else x)))


(define (abs3 x)
  (if (< x 0)
      (- x)
      x))

(define absolute15 (abs3 -15))
absolute15
(define a 3)
(define b (+ 1 a))
(* (cond ((> a b) a)
((< a b) b)
(else -1))
(+ a 1))