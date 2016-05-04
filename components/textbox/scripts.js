Polymer({
    is: 'es-textbox',
    properties: {
        value: String,
        errorMessage: String,
        displayError: Boolean
    },
    _onBlur: function(){
        this.validate();
    },
    validate: function(){
        this.displayError = !this.value || this.value.trim() === '';
    }
});