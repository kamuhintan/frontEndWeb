import helloWorld from './helloWorld.js';  //no 1
import ambilDataUser from './ambilDataUser.js'; //no 2
import ambilDataUserAsync from './ambilDataUserAsync.js';   //no 3

async function messages (){
    let msg = await helloWorld();
    console.log(msg);
}

messages(); //no 1
ambilDataUser();    //no 2
ambilDataUserAsync();   //no 3