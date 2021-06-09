// Sources:
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// https://stackoverflow.com/questions/12317049/how-to-split-a-long-regular-expression-into-multiple-lines-in-javascript
// João Nascimento: https://github.com/nascjoao/nascjoao
const emailReg = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(.\w{2,3})+$/;

export default emailReg;
