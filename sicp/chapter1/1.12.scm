(define (pascalNum row col)
  (cond
    ((= row 1) 1)
    ((= col 1) 1)
    ((= col row ) 1)
    (else (+ (pascalNum (- row 1) (- col 1))
             (pascalNum (- row 1) col)))))

(pascalNum 5 3)