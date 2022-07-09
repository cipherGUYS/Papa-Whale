const edit = (session, JSONdata, User) => {
    User.findById(session, async (err, docs) => {
        if (JSONdata.name != null) {
            await User.updateOne(
                { _id: session }, {
                $set: { name: JSONdata.name }
            })
        }
        if (JSONdata.phone != null) {
            await User.updateOne(
                { _id: session }, {
                $set: { phone: JSONdata.phone }
            })
        }
        if (JSONdata.dob != null) {
            await User.updateOne(
                { _id: session }, {
                $set: { dob: JSONdata.dob }
            })
        }
        if (JSONdata.level != null) {
            await User.updateOne(
                { _id: session }, {
                $set: { level: JSONdata.level }
            })
        }
    })
}

module.exports = { edit }