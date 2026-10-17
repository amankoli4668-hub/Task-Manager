// JavaScript Console Task Manager
let taskCount = 1;
let tasks = [];

// Function 1: addTask(title, priority)
function addTask(title, priority){
    const newTask = {
        id: taskCount,
        title: title,
        completed: false,
        priority: priority
    }

    tasks.push(newTask);
    taskCount++;
    console.log("success");
}

// Function 2: viewTasks()
function viewTasks(Id="noId"){
    if(tasks.length === 0){
        console.log("No tasks available");
    } else if(Id>=0){
        let check = 0;
        tasks.forEach(function(val){
            if(val.id === Id){
                for(let key in val){
                console.log(`${key}: ${val[key]}`);
                check++;
                }
            }
        });
        if(check===0) console.log("Task not found.")
    } else {
        tasks.forEach(function(val){
            for(let key in val){
                console.log(`${key}: ${val[key]}`);
            }
            console.log("");
        });
    }
}

// Function 3: completeTask(id)
function completeTask(id){
    let check = 0;
    tasks.forEach(function(val){
        if(val.id === id){
            val.completed = true;
            check++;
        }
    });
    check===0?console.log("Task not found"):console.log("Success");
}

// Function 4: deleteTask(id)
function deleteTask(id){
    let OldLength = tasks.length;
    let newArray = tasks.filter(function(val){
        return val.id !== id;
    });
    tasks = newArray;
    OldLength != tasks.length?console.log("Task deleted successfully"):console.log("Task not found");
}

// Function 5: viewPendingTasks()
function viewPendingTasks(){
    let pendingTasks = tasks.filter(function(val){
        if(val.completed === false){
            return val;
        }
    });
    if(pendingTasks.length===0){
        console.log("No pending tasks");
    } else {
        pendingTasks.forEach(function(val){
            for(let key in val){
                console.log(`${key}: ${val[key]}`);
            }
            console.log('');
        });
    }

}

// Function 6: viewCompletedTasks()
function viewCompletedTasks(){
    let CompletedTasks = tasks.filter(function(val){
        if(val.completed === true){
            return val;
        }
    });
    if(CompletedTasks.length===0){
        console.log("No Completed tasks");
    } else {
        CompletedTasks.forEach(function(val){
            for(let key in val){
                console.log(`${key}: ${val[key]}`);
            }
            console.log('');
        });
    }

}

// Function 7: searchTask(keyword)
function searchTask(keyword){
    keyword = keyword.toLowerCase();
    let searchTask = tasks.filter(function(val){
        if(val.title.toLowerCase()===keyword){
            return val;
        }
    });
    if(searchTask.length===0){
        console.log("No matching task found");
    } else {
        searchTask.forEach(function(val){
            for(let key in val){
                console.log(`${key}: ${val[key]}`);
            }
        });
    }
}

// Function 8: updateTask(id, newTitle)
function updateTask(id, newTitle){
    let checking = tasks.some(val => val.id === id);
    if(checking === false){
        console.log("Task not found");
    } else {
        tasks.forEach((val)=>{
            if(val.id === id){
                val.title = newTitle;
                console.log("Task updated successfully");
            }
        });
    }
}

// Function 9: countTasks()
function countTasks(){
    let total = tasks.length;
    let completedTask = tasks.filter(val => val.completed === true).length;
    let pendingTasks = tasks.filter(val => val.completed === false).length;
    console.log(`Total number of tasks is ${total}.`);
    console.log(`Total number of completed tasks is ${completedTask}.`);
    console.log(`Total number of pending tasks is ${pendingTasks}.`);
}

// Function 10: sortByPriority()
function sortByPriority(){
    if(tasks.length === 0 ){
        console.log("No tasks found");
    } else {
        tasks = tasks.sort((a,b)=> b.priority - a.priority);
        tasks.forEach((val)=>{
            for(let key in val){
                console.log(`${key}: ${val[key]}`);
            }
            console.log('');
        });
    }

}

// Add 5 tasks
addTask("Rivision", 7); // success
addTask("Workout", 10); // success
addTask("Sleep", 5); // success
addTask("Reading", 3); // success
addTask("Relax", 9); // success

// View all tasks
viewTasks();
/* id: 1
title: Rivision
completed: false
priority: 7

id: 2
title: Workout
completed: false
priority: 10

id: 3
title: Sleep
completed: false
priority: 5

id: 4
title: Reading
completed: false
priority: 3

id: 5
title: Relax
completed: false
priority: 9 */

// Complete 2 tasks
completeTask(1); // success
completeTask(2); // success

// View completed tasks
viewCompletedTasks();
/* id: 1
title: Rivision
completed: true
priority: 7

id: 2
title: Workout
completed: true
priority: 10 */

// View pending tasks
viewPendingTasks();
/* id: 3
title: Sleep
completed: false
priority: 5

id: 4
title: Reading
completed: false
priority: 3

id: 5
title: Relax
completed: false
priority: 9 */

// Search one task
searchTask('Reading');
// id: 4
// title: Reading
// completed: false
// priority: 3

// Update one task
updateTask(4, "Practice"); // Task updated successfully

// Delete one task
deleteTask(5); // Task deleted successfully

// Count all tasks
countTasks();
// Total number of tasks is 4.
// Total number of completed tasks is 2.
// Total number of pending tasks is 2.

// Sort tasks by priority
sortByPriority();
/* id: 2
title: Workout
completed: true
priority: 10

id: 1
title: Rivision
completed: true
priority: 7

id: 3
title: Sleep
completed: false
priority: 5

id: 4
title: Practice
completed: false
priority: 3 */

// Final Reflection – Answers

// 1. Which function was easiest?
// The addTask() function was the easiest because it only required creating a task object and adding it to the array using push().

// 2. Which function was hardest?
// The sortByPriority() function was the hardest because I had to understand how to compare priority values and arrange tasks in the correct order using sort().

// 3. Why did we use objects?
// We used objects to store the details of each task, such as its ID, title, completion status, and priority, in one place.

// 4. Why did we use arrays?
// We used an array to store and manage multiple tasks together. Arrays also provide methods like push(), filter(), and sort() to manipulate tasks easily.

// 5. What is the role of functions in this project?
// Functions divide the program into smaller, reusable parts. Each function performs a specific operation, such as adding, deleting, searching, updating, or displaying tasks.

// 6. What mistake did you debug?
// I learned to identify and fix mistakes such as using the wrong task ID, writing incorrect conditions, and forgetting to update a task's properties correctly.

// 7. What new JavaScript concept did you understand better?
// I understood arrays of objects, functions, loops, conditional statements, and array methods such as filter(), push(), and sort() better.

// 8. How does the program identify a particular task?
// The program uses the task's unique ID to identify it. Functions like completeTask(), deleteTask(), and updateTask() compare the given ID with each task's ID.

// 9. How does the program distinguish between completed and pending tasks?
// The program uses the completed property. If its value is true, the task is completed; if its value is false, the task is pending.

// 10. What did you learn from building this project?
// I learned how to combine different JavaScript concepts to build a practical application. I also improved my problem-solving skills and understood how to organize and manipulate data using functions, objects, and arrays.