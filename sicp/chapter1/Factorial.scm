; Usando la recursión para ello
(define (factorial n)
  (if (= n 1)
    1
    (* n (factorial (- n 1) ))))


; Usando un algoritmo de trozeado: counter y producto
; Donde Counter es un conntador que corre hasta que counter = n
; Donde productor es igual a Counter por producto
; Donde el algoritmo corre hasta que Counter es mayor que producto

(define (factorialCounter n) 
  (define (factiter product counter)
    (if (> counter n)
    product
    (factiter 
        (* product counter)
        (+ 1 counter))))
  (factiter 1 1))

(factorialCounter 3)
