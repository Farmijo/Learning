type UndefinedLiteralType = undefined;
type NullLiteralType = null;

//Symbol alike
const symbolism: 'symbolism' = 'symbolism'

// Enum to union type

type NoYesStrings = 'NO' | 'YES';

function toGerman(value: NoYesStrings): string {
    switch (value) {
      case 'NO':
        return 'Nein';
      case 'YES':
        return 'Ja';
    }
  }

// Type exhaustiveness
//This throws error
// function toGerman3(value: NoYesStrings): string {
//     switch (value) {
//       case 'Yes':
//         return 'Ja';
//       case
//     }
//   }

  // Symbols as union types

const off = Symbol('off');
const info = Symbol('info');
const warn = Symbol('warn');
const error = Symbol('error');
//Needs to be typeof to avoid use a value as type.
type LogLevel =
  | typeof off
  | typeof info
  | typeof warn
  | typeof error
;