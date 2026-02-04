// QUESTION 57 — Validate Parentheses (Multiple Types)

function isValidBrackets(str) {
    if (typeof str !== "string") {
        return false;
    }

    let stack = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{",
    }

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch)
        }
        else if (ch === ")" || ch === "}" || ch === "]") {
            if (stack.length === 0) return false;
            let top = stack.pop()
            if (top !== map[ch]) return false;
        }

    }
    return stack.length === 0;
}

// Expected outputs
console.log(isValidBrackets("()[]{}"));   // true
console.log(isValidBrackets("([{}])"));   // true
console.log(isValidBrackets("(]"));       // false
console.log(isValidBrackets("([)]"));     // false
console.log(isValidBrackets("{[]}"));     // true
console.log(isValidBrackets(""));          // true
