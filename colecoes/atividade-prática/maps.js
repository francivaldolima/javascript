function getAdmins(map){
    let admins = [];

    for ( [key,value] of map) {
       
        if(value === "Admin"){
            admins.push(key);
        }
        
    }
    return admins;
} 

const usuarios =  new Map();
usuarios.set('Luiz','Admin');
usuarios.set('Maria','User');
usuarios.set('Pedro','Admin');
usuarios.set('Anna','User');
usuarios.set('Eren','Admin');
usuarios.set('Catharina','User');

console.log(getAdmins(usuarios));


// console.log(myMap.get("Anna"));