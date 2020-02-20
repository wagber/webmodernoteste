/*OBSERVAÇÕES PARA LEMBRAR 
Complexidade Tempo e Espaço ==> O(n) 
Se tivesse 2 while's, um dentro de outro a 
complexidade seria O(n^2)*/

//Complexidade de Espaço O(n)
function LinkedList(){

    let head = null
    let length = 0
    const Node = (value) => {
        return{
            value,
            next: null
        }
    }

//Complexidade de Tempo O(n)

    const add = (value) => {
        if(!head){
            head = Node(value)
            length++
            return head
        }
        let node = head
        while(node.next){
            node=node.next
        }
        node.next = Node(value)
        length++
        return node.next
        console.log(node)
    }

    return{
        length: () => length,
        add: (value) => add(value),
        print: () => console.log(head)
    }
}
const list = LinkedList()
console.log(list.length())
list.add(1)
list.add(2)
list.add(3)
console.log(list.length())
list.print()