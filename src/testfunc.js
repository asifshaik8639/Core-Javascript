function updateUsers(users, userObject, item) {
    //write your code here
    let inputUsers = users || [];
    let inputObject = userObject || {};
    let currentUserName = !!inputObject.name && inputObject.name || 'noUserNameInput';
    let inputUsersLength = inputUsers.length || 0;
    let inputItem = item || '';
    let userExist = false;
    for (let index = 0 ; index < inputUsersLength; index++) {
        let currentUserObj = inputUsers[index];
        if(currentUserObj.name == currentUserName && currentUserName !== 'noUserNameInput') {
           userExist = true;
           break;
        }
    }
    if(!userExist) {
        inputUsers.push(inputObject);
            if(!!inputItem) {
                let newObject = {};
                if(!!inputObject.orders && inputObject.orders.isArray()) {
                    let inputOrdersArray = inputObject.orders || [];
                    let idCount = 0;
                    let itemAlreadyExist = false;
                    for (const itemObj of inputOrdersArray) {
                       let id =  itemObj.id;
                       let orderItem =  itemObj.name;
                       if(orderItem == inputItem) {
                          itemAlreadyExist = true;
                          break;
                       }
                       idCount = id; 
                    }
                    if(!itemAlreadyExist) {
                        console.log('in success');
                        newObject.id = idCount++;
                        newObject.name = inputItem;
                        inputObject.orders.push(newObject);
                    }

                } else {
                    inputObject.orders = [];
                    newObject.id = 0;
                    newObject.name = inputItem;
                    inputObject.orders.push(newObject);
                }
            }
    }

    return inputUsers;
}

let users = [
    {
        "name": "Rajneesh",
        "age": 34,
        "address": {
            "local": "22 Alaknanda",
            "city": "Dehradun",
            "state": "UK"
        },
        "orders": [
            {
                "id": 1,
                "name": "GOT Book Series"
            }
        ]
    },
    {
        "name": "Bhavesh",
        "age": 37,
        "address": {
            "local": "48 DT Row",
            "city": "Hyderabad",
            "state": "AP"
        }
    },
    {
        "name": "Jasbir",
        "age": 38,
        "address": {
            "local": "196 Lama Bhavan",
            "city": "Gangtok",
            "state": "Sikkim"
        }
    },
    {
      name: 'Shaik',
      age: 38,
      address: { local: '196 Lama Bhavan', city: 'Gangtok', state: 'Sikkim' }
    }
];

let input = {
    "name": "Shaik",
    "age": 38,
    "address": {
        "local": "196 Lama Bhavan",
        "city": "Gangtok",
        "state": "Sikkim"
    }
};

let output = updateUsers(
    users,
    input);

console.log('answer is ==> ', output);