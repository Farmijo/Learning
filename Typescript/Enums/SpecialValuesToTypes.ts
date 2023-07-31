// interface InputStream {
//     getNextLine(): string;
//   }

// // How to add EOF support? With a sentinel

// type StreamValue = null | string;
// interface InputStream {
//     getNextLine(): StreamValue;
  
// }

// // Now we can check if the object is null before (claro, que estos son
// //tipos que desaparecen en runtime como sean custom..)
// //ALTERNATIVA

// const EOF = Symbol('EOF');
// type StreamValueWithSymbol = typeof EOF | string;


// //SPECIAL values out of band

interface InputStream<T> {
    getNextValue(): T;
  }

// Can be approached through discriminated unions