import { createStep } from '../../lib/utils'

// ─────────────────────────────────────────────
// EUCLIDEAN GCD  (Euclidean modulo vs naive subtraction)
// ─────────────────────────────────────────────

export function generateEuclideanGCDSteps(a, b) {
  const steps = []
  let x = a,
    y = b

  steps.push(
    createStep({
      lineKey: 'start',
      type: 'start',
      array: [x, y],
      message: `Start: gcd(${x}, ${y})`,
      variables: { a: x, b: y },
      duration: 700,
    })
  )

  while (y !== 0) {
    const remainder = x % y
    steps.push(
      createStep({
        lineKey: 'modulo',
        type: 'compare',
        array: [x, y],
        indices: [0, 1],
        message: `gcd(${x}, ${y}) → ${x} % ${y} = ${remainder}`,
        variables: { a: x, b: y, remainder },
        duration: 900,
      })
    )
    x = y
    y = remainder
    steps.push(
      createStep({
        lineKey: 'assign',
        type: 'swap',
        array: [x, y],
        indices: [0, 1],
        message: `→ gcd(${x}, ${y})`,
        variables: { a: x, b: y },
        duration: 700,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'result',
      type: 'complete',
      array: [x, 0],
      message: `GCD = ${x}`,
      variables: { result: x },
      duration: 900,
    })
  )

  return steps
}

export function generateNaiveGCDSteps(a, b) {
  const steps = []
  let x = a,
    y = b

  steps.push(
    createStep({
      lineKey: 'start',
      type: 'start',
      array: [x, y],
      message: `Start: naive gcd(${x}, ${y}) — subtract smaller from larger`,
      variables: { a: x, b: y },
      duration: 700,
    })
  )

  while (x !== y) {
    steps.push(
      createStep({
        lineKey: 'compare',
        type: 'compare',
        array: [x, y],
        indices: [0, 1],
        message: `${x} ≠ ${y} — subtract`,
        variables: { a: x, b: y },
        duration: 500,
      })
    )
    if (x > y) {
      x -= y
    } else {
      y -= x
    }
    steps.push(
      createStep({
        lineKey: 'subtract',
        type: 'swap',
        array: [x, y],
        indices: [0, 1],
        message: `→ (${x}, ${y})`,
        variables: { a: x, b: y },
        duration: 450,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'result',
      type: 'complete',
      array: [x, x],
      message: `GCD = ${x}`,
      variables: { result: x },
      duration: 900,
    })
  )

  return steps
}

// ─────────────────────────────────────────────
// FAST EXPONENTIATION  (binary expo vs naive)
// ─────────────────────────────────────────────

export function generateFastExpoSteps(base, exp) {
  const steps = []
  let result = 1
  let b = base
  let e = exp
  const bits = e.toString(2).split('').map(Number)

  steps.push(
    createStep({
      lineKey: 'start',
      type: 'start',
      array: bits,
      message: `Compute ${base}^${exp}. Binary of ${exp} = ${bits.join('')}`,
      variables: { base, exp, result, b },
      duration: 900,
    })
  )

  let bitIdx = bits.length - 1
  while (e > 0) {
    const bit = e & 1
    const currentBitPos = bitIdx

    steps.push(
      createStep({
        lineKey: 'checkBit',
        type: 'compare',
        array: bits,
        indices: [currentBitPos],
        message: `Bit ${bit}: ${bit === 1 ? `result × b → ${result} × ${b} = ${result * b}` : 'bit is 0, skip multiply'}`,
        variables: { bit, b, result, e },
        duration: 850,
      })
    )

    if (bit === 1) {
      result *= b
      steps.push(
        createStep({
          lineKey: 'multiply',
          type: 'swap',
          array: bits,
          indices: [currentBitPos],
          message: `result = ${result}`,
          variables: { bit, b, result, e },
          duration: 700,
        })
      )
    }

    b *= b
    e >>= 1
    bitIdx--

    if (e > 0) {
      steps.push(
        createStep({
          lineKey: 'square',
          type: 'inner-loop',
          array: bits,
          message: `Square base: b = ${b}`,
          variables: { b, result, e },
          duration: 650,
        })
      )
    }
  }

  steps.push(
    createStep({
      lineKey: 'result',
      type: 'complete',
      array: bits,
      message: `${base}^${exp} = ${result}`,
      variables: { result },
      duration: 900,
    })
  )

  return steps
}

export function generateNaiveExpoSteps(base, exp) {
  const steps = []
  let result = 1

  steps.push(
    createStep({
      lineKey: 'start',
      type: 'start',
      array: [result],
      message: `Compute ${base}^${exp} naively — multiply ${exp} times`,
      variables: { base, exp, result },
      duration: 700,
    })
  )

  for (let i = 1; i <= exp; i++) {
    result *= base
    steps.push(
      createStep({
        lineKey: 'multiply',
        type: 'compare',
        array: [result],
        indices: [0],
        message: `Step ${i}: result × ${base} = ${result}`,
        variables: { step: i, base, result },
        duration: 500,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'result',
      type: 'complete',
      array: [result],
      message: `${base}^${exp} = ${result}`,
      variables: { result },
      duration: 900,
    })
  )

  return steps
}

// ─────────────────────────────────────────────
// BIT MANIPULATION
// ─────────────────────────────────────────────

export function generateBitOpSteps(a, b, operation) {
  const steps = []

  const toBits = (n) => {
    const bits = []
    for (let i = 7; i >= 0; i--) bits.push((n >> i) & 1)
    return bits
  }

  const bitsA = toBits(a)
  const bitsB = toBits(b)

  let result
  let opLabel
  switch (operation) {
    case 'AND':
      result = a & b
      opLabel = 'AND'
      break
    case 'OR':
      result = a | b
      opLabel = 'OR'
      break
    case 'XOR':
      result = a ^ b
      opLabel = 'XOR'
      break
    case 'NOT':
      result = ~a & 0xff
      opLabel = 'NOT'
      break
    case 'LSHIFT':
      result = (a << 1) & 0xff
      opLabel = 'LEFT SHIFT'
      break
    case 'RSHIFT':
      result = a >> 1
      opLabel = 'RIGHT SHIFT'
      break
    default:
      result = a & b
      opLabel = 'AND'
  }

  const bitsResult = toBits(result)

  steps.push(
    createStep({
      lineKey: 'start',
      type: 'start',
      array: bitsA,
      message: `Operation: ${a} ${opLabel} ${operation === 'NOT' || operation === 'LSHIFT' || operation === 'RSHIFT' ? '' : b}`,
      variables: { a, b, operation },
      duration: 700,
    })
  )

  for (let i = 0; i < 8; i++) {
    let msg
    if (operation === 'AND')
      msg = `Bit ${7 - i}: ${bitsA[i]} AND ${bitsB[i]} = ${bitsResult[i]}`
    else if (operation === 'OR')
      msg = `Bit ${7 - i}: ${bitsA[i]} OR ${bitsB[i]} = ${bitsResult[i]}`
    else if (operation === 'XOR')
      msg = `Bit ${7 - i}: ${bitsA[i]} XOR ${bitsB[i]} = ${bitsResult[i]}`
    else if (operation === 'NOT')
      msg = `Bit ${7 - i}: NOT ${bitsA[i]} = ${bitsResult[i]}`
    else if (operation === 'LSHIFT')
      msg = `Bit ${7 - i}: shift left → ${bitsResult[i]}`
    else msg = `Bit ${7 - i}: shift right → ${bitsResult[i]}`

    steps.push(
      createStep({
        lineKey: 'bitOp',
        type: bitsResult[i] !== bitsA[i] ? 'swap' : 'compare',
        array: bitsA,
        indices: [i],
        message: msg,
        variables: {
          bitIndex: 7 - i,
          aBit: bitsA[i],
          bBit: bitsB[i],
          resultBit: bitsResult[i],
        },
        duration: 600,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'result',
      type: 'complete',
      array: bitsResult,
      message: `Result: ${result} (${bitsResult.join('')})`,
      variables: { result },
      duration: 900,
    })
  )

  return steps
}
