const Validation = {
  validateEmail: function(obj) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(obj).toLowerCase());
  },
  hasNumber: function(obj) {
    return /\d/.test(obj);
  },
  hasSpecialCharacter: function(obj) {
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(obj);
  }  
};

export default Validation
