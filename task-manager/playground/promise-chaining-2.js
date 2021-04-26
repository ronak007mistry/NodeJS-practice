require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6085cb423db1c55a5882fa98').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6085cd5dcaccd531c0ac63ea').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
