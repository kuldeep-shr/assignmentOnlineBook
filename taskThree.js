const paranthesisCombination = (n) => {
  const result = []

  const generateParenthesis = (leftP, rightP, partial) => {
    
    if(leftP > rightP) return
    if(!leftP && !rightP) result.push(partial)
    if(leftP > 0) generateParenthesis(leftP -1,rightP, partial +'(')
    if (rightP > 0) generateParenthesis(leftP, rightP -1, partial + ')')
  }
  generateParenthesis(n,n,'')
  const r1 = result
  console.log(r1)
}

paranthesisCombination(3)