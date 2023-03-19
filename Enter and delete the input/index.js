let num = prompt("Length of input")
        let arr = []
        for(let i =0; i<num;i++){
            let input = prompt("Enter your element")
            
            arr.push(input)
            
        }
        document.getElementById("print").innerHTML = arr;

        let dele = prompt("How many num : ")
        for(let i=0;i<dele;i++){
            let deleElement = prompt("Enter dele element");
            
            
            arr=arr.filter(function(data){return data!=deleElement;
            })
            }
        document.getElementById("updated").in