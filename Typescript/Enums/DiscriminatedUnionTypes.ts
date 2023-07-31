//Syntax tree
// Data structure that represents an expression like
// 1 + 2 + 3
// So: 1 is a syntax tree (with the form of a value)
// 2 + 3 is also a syntax tree (with the form of an addition expression)
// 2 + 3 is composed by the ADDITION of TWO syntax trees


//Syntax tree as class hierarchy
abstract class ClassSyntaxTree {}
class ClassNumberValue extends ClassSyntaxTree {
    constructor(public numberValue: number){
        super();
    }
}
class ClassAddition extends ClassSyntaxTree {
    constructor(public operand1: ClassSyntaxTree, public operand2: ClassSyntaxTree){
        super()
    }
}

const classTree = new ClassAddition(
    new ClassNumberValue(1),
    new ClassAddition(
        new ClassNumberValue(1),
        new ClassNumberValue(2),
    )
)

//Syntax tree as union type

class NumberValueAsType {
    constructor(public numberValue: number){}
}

class AdditionAsType {
    constructor(public operand1: SyntaxTreeType, public operand2: SyntaxTreeType){}
}

type SyntaxTreeType = NumberValueAsType | AdditionAsType;

const treeType = new AdditionAsType(
    new NumberValueAsType(1),
    new AdditionAsType(
        new NumberValueAsType(1),
        new NumberValueAsType(2)
    )
)

// Syntax tree as discriminated union
// The kind property is a discriminant
// LOOK CAREFULLY: the kind type is a literal type value!!!
interface NumberValueInterface {
    kind: 'number-value';
    numberValue: number;
  }

interface AdditionInterface {
    kind: 'addition';
    operand1: SyntaxTreeAsInterfaceUnion;
    operand2: SyntaxTreeAsInterfaceUnion;
}

type SyntaxTreeAsInterfaceUnion = NumberValueInterface | AdditionInterface;

const tree: SyntaxTreeAsInterfaceUnion = {
    kind: 'addition',
    operand1: {
      kind: 'number-value',
      numberValue: 1,
    },
    operand2: {
      kind: 'addition',
      operand1: {
        kind: 'number-value',
        numberValue: 2,
      },
      operand2: {
        kind: 'number-value',
        numberValue: 3,
      },
    }
  };

const value: SyntaxTreeAsInterfaceUnion =  {
    kind: 'number-value',
    numberValue: 2
}

function getNumberValue(tree: SyntaxTreeAsInterfaceUnion) {
    // %inferred-type: SyntaxTreeAsInterfaceUnion
    // Still cannot access numberValue (since we don't know if tree has that property yet)
    tree;
  
    // @ts-expect-error: Property 'numberValue' does not exist on type 'SyntaxTreeAsInterfaceUnion'.
    // Property 'numberValue' does not exist on type 'Addition3'.(2339)
    tree.numberValue; // (B)
  
    if (tree.kind === 'number-value') { // (C)
      // %inferred-type: NumberValue3
      tree; // (D)
      return tree.numberValue; // OK!
    }
    return null;
  }