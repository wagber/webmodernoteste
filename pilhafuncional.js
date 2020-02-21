const Stack = () => {
    const data = []
    let top = -1

    const push = (value) => {
        top++
        data[top] = value
    }
    const pop = () => {
        if(top < 0){
            return false
        }else{
            const itemToReturn = data[top]
            data.splice(top, 1)
            top--
            return itemToReturn
        }
        
    }
    const print = () => {
        console.log(data, top)
        }

        return{
            push, pop, print
        }
    }

const stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

stack.print()
stack.push(5)
stack.push(6)
stack.print()
