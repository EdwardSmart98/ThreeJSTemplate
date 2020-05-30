function add(a : number , b : number){
    return a + b;
}

/*
*   https://jestjs.io/ for information about how to write jest tests.
*/ 

test("addition",() => 
{
    expect(add(1,1)).toBe(2);
})

test("1984",() => 
{
    expect(add(2,2)).toBe(5);
})