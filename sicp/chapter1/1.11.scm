
(define (funcRec n) 
  (cond 
    ((< n 3) n)
    (else (+ (funcRec (- n 1)) 
             (* 2 (funcRec (- n 2)))
             (* 3 (funcRec (- n 3))))))
)


(define (funcIter n)
  (define (funcLoop n-1 n-2 n-3 it)
    (cond 
        ((= n it) n-1)
        (else (funcLoop 
            (+ n-1 (* 2 n-2) (* 3 n-3))
            n-1
            n-2
            (+ 1 it))))
    )
    (cond
        ((< n 3) n)
        (else (funcLoop 2 1 0 2)))
    )

(define value 7)
(funcRec value)
(funcIter value)
