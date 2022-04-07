//creating an update records function for the objects'
//properties in js
var collection = 
{
    "2548" : {
        "album": "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let it Rock",
            "YOu Give Love a Bad Name"
        ]

    },
    "2468": {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist" : "Robert Palmer",
        "tracks" : []
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
}

//keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))

function  updateRecords(id, prop, value){
    if (prop === "tracks")
    {
        collection[id][prop] =  collection[id][prop] || []
        collection[id][prop].push(value)
    }
    else if (value === " ")
    {
        delete collection.id.prop
    }
    else 
    {
        collection[id][prop] = value
    }

    return collection
}

/*
console.log(updateRecords("2468","artist","Sahil"))
console.log(updateRecords("1245","tracks", "Sahil's melodies"))
console.log(updateRecords("5439", "album", ""))
*/

console.log(updateRecords(2468, "tracks", "test"))
console.log(updateRecords(5439, "artist", "ABBA"))