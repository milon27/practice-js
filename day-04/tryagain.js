const getUsers = (callback) => {

    const users = []
    setTimeout(() => {
        users = [1, 2, 3, 4, 4]

        callback(users)
    }, 500);

}

getUsers(

    function (newparam) {
        console.log(newparam);
    }
)