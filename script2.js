// const user = {
//     firstName: prompt("What is your first name?"), 
//     secondName: prompt("What is your second name?"),
//     job: prompt("What is your job title"),
//     friends: [prompt("What is your first friend's name?"), prompt("What is your second friend's name?"), prompt("What is third friend's name?"), "Bob", "Marley", "Stevie", "Nicks"],
//     age: Number(prompt("What is your age?"))
// }

console.table(user)

for (let i = 0; i < user.friends.length; i ++)
    {if (user.friends[i] === "james") 
        alert("Uh oh...")
    }
