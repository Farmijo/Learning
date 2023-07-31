interface NormalValue<T> {
    type: 'normal'; // string literal type
    data: T;
  }

interface Eof {
    type: 'eof'; // string literal type
}

type InputStreamValue<T> = Eof | NormalValue<T>;

interface InputStream<T> {
    getNextValue(): InputStreamValue<T>;
  }

function countValues<T>(is: InputStream<T>, data: T) {
let valueCount = 0;
while (true) {
    // %inferred-type: Eof | NormalValue<T>
    const value = is.getNextValue(); // (A)

    if (value.type === 'eof') break;

    // %inferred-type: NormalValue<T>
    value; // (B)

    if (value.data === data) { // (C)
    valueCount++;
    }
}
return valueCount;
}