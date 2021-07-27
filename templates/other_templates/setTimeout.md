.then(sentMessage => {
                setTimeout(() => {
                    sentMessage.delete()
                }, 5000)
            })           