let object = {
    init: function () {
        document.querySelector('#btn').addEventListener('click', this) //Here (this) is calling a Object(handleEvent) 
        document.querySelector('#btn').addEventListener('blur', this)
        document.querySelector('#btn').addEventListener('focus', this)
    },
    handleEvent: function (ev) { //handleEvent is Build in Function
        switch (ev.type) {
            case 'click':
                this.something(ev); 
                break;
            case 'blur':
                this.something(ev);
                break;
            case 'focus':
                this.something(ev);
                break;
        }
    },
    something(ev)
    {
        console.log('btn  '+ ev.type +' was Clicked');
    }
}

object.init();