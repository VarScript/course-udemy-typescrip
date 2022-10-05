(() => {
    const error = (message: string):(never | number) => {
        if (false) {
            throw new Error(message)            
        }
        return 1;
    }

    error('Please');
    console.log('Hello word');
    
})()