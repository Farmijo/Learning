export function isAnagram(s: string, t: string): boolean{
    let isAnagram = true;
    if(s.length !== t.length) return false;
    const hashMapS = {};
    const hashMapT= {};

    s.split("").map((char) =>{
        (hashMapS[char] !== undefined) ? hashMapS[char]++ : hashMapS[char]=1
    })

    t.split("").map((char) =>{
        (hashMapT[char] !== undefined) ? hashMapT[char]++ : hashMapT[char]=1
    })

    const keysMapS = Object.keys(hashMapS)
    const keysMapT = Object.keys(hashMapT)

    if(keysMapS.length !== keysMapT.length) return false

    for(let i =0; i<keysMapS.length; i++){
        const keyIndex = keysMapS[i]
        const valueInMapS = keysMapS[keyIndex]
        const valueInMapT = keysMapT[keyIndex]
        if(valueInMapS != valueInMapT) isAnagram = false;
    }

    return isAnagram;
}