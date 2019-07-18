const express = require('express')

const userCtrl = require('./userCtrl')

const app = express()

app.use(express.json())


app.listen(3000, () => console.log(`It's over Anakin. I have the 3000 port`))

app.get('/api/user', userCtrl.getAll)
app.get('/api/user/:userId', userCtrl.getUserById,)
app.get('/api/admin', userCtrl.getAllAdmin)
app.get('/api/nonadmin', userCtrl.getAllNonAdmin)
app.get('/api/user/:userType', userCtrl.getUsersByType)

app.put('/api/user/:userId', userCtrl.updateUserById)

app.post('/api/user', userCtrl.createUser)

app.delete('/api/user/:id', userCtrl.deleteUser)