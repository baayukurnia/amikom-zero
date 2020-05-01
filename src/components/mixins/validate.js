export default {
    methods: {
        isNumericInput(event){
            const key = event.keyCode;
            return ((key >= 48 && key <= 57) || // Allow number line
                (key >= 96 && key <= 105) // Allow number pad
            );
        },
        isModifierKey(event){
            const key = event.keyCode;
            return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
                (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
                (key > 36 && key < 41) || // Allow left, up, right, down
                (
                    // Allow Ctrl/Command + A,C,V,X,Z
                    (event.ctrlKey === true || event.metaKey === true) &&
                    (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
                )
        },
        enforceFormat(event){
            // Input must be of a valid number format or a modifier key, and not longer than ten digits
            if(!this.isNumericInput(event) && !this.isModifierKey(event)){
                event.preventDefault();
            }
        },
        formatNim(event){
            if(this.isModifierKey(event)) {return;}
        
            // I am lazy and don't like to type things more than once
            const target = event.target;
            const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
            const thn = input.substring(0,2);
            const prodi = input.substring(2,4);
            const id = input.substring(4,8);
        
            if(input.length >= 4){target.value = `${thn}.${prodi}.${id}`}
            else if(input.length >= 2){target.value = `${thn}.${prodi}`}
            else if(input.length > 0){target.value = `${thn}`}
        }
    }
  }