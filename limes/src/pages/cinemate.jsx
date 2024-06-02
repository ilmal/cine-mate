import {useState} from "react"

const CineMate = ()=>{
    const [hasSelectedList, setHasSelectedList] = useState(false);

    const tempList = [
        {
            "id": "nms",
            "name": "Nils måste se",
            "description": "Filmer som nils måste se om inte han vill bli kallad för en uncultured swine.",
            "list": [
                {
                    "name": "My neighbor Totoro",
                    "image": "",
                    "prio": 1,
                    "watched": false
                }
            ],
            "color": "white"
        },
        {
            "id": "ems",
            "name": "Emilie måste se",
            "description": "Filmer som Emilie måste se om inte hon vill bli kallad för en uncultured swine.",
            "list": [
                {
                    "name": "The Phantom Menace",
                    "image": "",
                    "prio": 2,
                    "watched": false
                }
            ],
            "color": "white"
        },
    ]

    const displayLists = ()=> {
        const returnList = []
        tempList.forEach((list) => {
            console.log(list)
            returnList.push ((
                <div key={list.name} className="lists" style={{
                    backgroundColor: list.color
                }} onClick={()=> {setHasSelectedList(list.id)}}>
                    <div className="image">

                    </div>
                    <div className="title">
                        <h1>{list.name}</h1>
                    </div>
                    <div className="line"/>
                    <div className="content">
                        <span>{list.description}</span>
                    </div>
                </div>
            ))
        });
        return returnList
    }

    const displayWonkyList = ()=> {

        return (
            <h3>WONKY LIST</h3>
        )
    }   

    return(
            <div className="cineMate">
                {
                    hasSelectedList?
                        displayWonkyList() 
                    :
                        displayLists()
                }
            </div>
    )
}

export default CineMate;