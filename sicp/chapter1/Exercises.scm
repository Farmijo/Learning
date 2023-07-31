(/
  (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5)))))
  (* 3 (- 6 2) (- 2 7)))

(define (square x)
    (* x x))

(define (square-sum a b)
  (+ (square a) (square b)))


(define (squares x y z)
    (if (> x y)
      (square-sum x 
                  (if (> y z) 
                  y 
                  z))
      (square-sum y (if (> x z)
                     x 
                     z))))


(squares 1 2 3)