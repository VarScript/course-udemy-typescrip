export const printObject = (argument:any) => {
    console.log(argument);
}

// The standard for the generic is the letter T but it is may use letter or word
export function genericFunction<T>( argument:T ):T {
    return argument;
}

export const genericFunctionArrow = <T>( argument:T ):T => argument;