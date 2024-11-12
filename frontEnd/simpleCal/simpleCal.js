    const appendToDisplay = (value)=>{
        document.getElementById('display').value += value;
    }

    function clearDisplay(){
        document.getElementById('display').value = '';
    }

    const cal = ()=>{
        try {
            let result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
            console.log(result);
        } catch (error) {
            document.getElementById('display').value = 'Error';
            console.error("Invalid expression", error);
        }
    }
