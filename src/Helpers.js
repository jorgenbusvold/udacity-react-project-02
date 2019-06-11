export function getObjectArray(objectEntries) {
    var entries = []; 

    var keys = Object.keys(objectEntries);

    for(var index in keys)
    {
        var entry = objectEntries[keys[index]];
        entries.push(entry);
    }

    return entries;
}

export function getAllItemsExceptFromKeys(allItems, excludeKeys) {
    
    console.log('ENTER getAllItemsExceptFromKeys: ',allItems)
    console.log('excludeKeys: ',excludeKeys)

    var items = []; 

    for(var item in allItems)
    {
      if(!excludeKeys.includes(allItems[item].id))
      {
        items.push(allItems[item]);
      }
    }

    return items; 
  }

  export function getAllItemsWhereKeysExist(allItems,existingKeys){

    console.log('ENTER getAllItemsWhereKeysExist: ',allItems)
    console.log('existingKeys: ',existingKeys)

    var items = []; 

    for(var key in existingKeys)
    {
      var item = allItems[key];
      items.push(item);
    }

    return items;  
  }

  export function getAllItemsWhereKeyValuesExist(allItems,existingKeys){

    console.log('ENTER getAllItemsWhereKeysExist: ',allItems)
    console.log('existingKeys: ',existingKeys)

    var items = []; 

    for(var key in existingKeys)
    {
      var item = allItems[existingKeys[key]];
      items.push(item);
    }

    return items;  
  }
    