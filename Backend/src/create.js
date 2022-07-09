const create = (User, JSONData) => {
    const data = new User({
        "_id": JSONData.name,
        "name": "",
        "phone": "",
        "dob": "",
        "level": 0,
        "coins": 100
    })
    try {
        data.save()
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { create }