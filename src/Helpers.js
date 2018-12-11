export function getObjectArray(objectEntries) {
    var entries = []; 

    var i = 0;

    var keys = Object.keys(objectEntries);

    for(var key in keys)
    {
        console.log(key);
        var entry = objectEntries[keys[i]];
        entries.push(entry);
        i++;
    }

    return entries;
}

export function getAllItemsExceptFromKeys(allItems, exceptFromKeys) {

    var items = []; 

    for(var item in allItems)
    {
      if(!exceptFromKeys.includes(item.id))
      {
        items.push(item);
      }
    }

    return items;  
  }

  export function getAllItemsWhereKeysExist(allItems,existingKeys){

    var items = []; 

    for(var key in existingKeys)
    {
      var item = allItems[key];
      items.push(item);
    }

    return items;  
  }

    