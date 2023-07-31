import { isAnagram } from "../algorithms/alg";

describe('test', ()=>{

    const cases: {description?: string, input: {s: string, t: string}, expected: boolean}[] = [
        {   description: "",
            input: {
                s: "ABCD",
                t: "DABC"
            },
            expected: true
        },
        {   description: "",
            input: {
                s: "AABB",
                t: "BBAA"
            },
            expected: true
        },
        {   description: "",
            input: {
                s: "AAAB",
                t: "AAB"
            },
            expected: false
        },
        {   description: "",
            input: {
                s: "AAAB",
                t: "AABB"
            },
            expected: false
        },
        {   description: "",
            input: {
                s: "AAAB",
                t: "AABB"
            },
            expected: false
        },
        {   description: "",
            input: {
                s: "AAAB",
                t: "AABC"
            },
            expected: false
        },
        {   description: "",
            input: {
                s: "ACBA",
                t: "ABBC"
            },
            expected: false
        },
        {   description: "",
            input: {
                s: "A",
                t: "B"
            },
            expected: false
    },
    ]
    it.only.each(cases)('test',(testCase) => {
        expect(isAnagram(testCase.input.s, testCase.input.t)).toBe(testCase.expected);
    })
})