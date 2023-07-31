interface IteratorYieldResult<TYield> {
    done?: false; // boolean literal type
    value: TYield;
}

interface IteratorReturnResult<TReturn> {
    done: true; // boolean literal type
    value: TReturn;
  }

  type IteratorerResult<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;