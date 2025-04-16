interface triangle{
  a: number
  b: number
  c: number
}


const t1: triangle = {
    a: 7,
    b: 10,
    c: 5
  }
  const t2: triangle = {
    a: 2,
    b: 3,
    c: 6
  }
  
  
  const isValidTriangle = ({a, b, c}: triangle) => {
   return (b + c) > a && (a + c) > b && (a + b) > c
  }
  
  console.log(isValidTriangle(t1));
  console.log(isValidTriangle(t2)); 