#! /usr/bin/env node


import inquirer from "inquirer"


let todo_list: string[] = [];

let while_condition: boolean = true;

while(while_condition === true){
    //................option.........................

    let option = await inquirer.prompt([{

        type: 'list',
        name: 'user_option',
        message: 'select an option',
        choices: ["Add","remove"]

    }])

    //...........................Add................
    if(option.user_option === "Add"){
        let ans = await inquirer.prompt([{
            type: 'input',
            name: 'user_ans',
            message: 'write something to add in the tast list'
        }])
        if(ans.user_ans !== ''){
            todo_list.push(ans.user_ans);
            console.log(todo_list)
        }else{
            console.log('please write something to add in the to do list')
        }
    }

    //..........................remove.......................
    else if (option.user_option === 'remove'){
        let removeChoice = await inquirer.prompt([{
            type: 'list',
            name: 'remove_item',
            message: 'select item to remove',
            choices: todo_list
        }]);
        let index_to_remove = todo_list.indexOf(removeChoice.remove_item);

        if(index_to_remove >= 0){
            todo_list.splice(index_to_remove, 1);
            console.log('you removed :', removeChoice.remove_item);
            console.log(todo_list);
        }
    }
    //.........................confirm........................

    let user_ans = await inquirer.prompt([{
        type: 'confirm',
        name: 'selection',
        message: 'do you want to continue',
        default: true
    }])
    if(user_ans.selection === false){
        while_condition = false;
    }

}
console.log('thank you for using to do list');





















