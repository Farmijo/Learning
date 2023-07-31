export function groupAnagrams(strs: string[]): any {
    const map = {};
    strs.map(value=>{
        const key = value.split("").sort().join("")
        map[key] === undefined 
    })
    return true;
};

const func = async () => {
    const ret = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
    console.log(ret)
}

func()