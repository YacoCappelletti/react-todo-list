export const  getAllLocalStorageData = () => {
    const allData = [];
  
    for (let i = 0; i < localStorage.length; i++) {

      const key = localStorage.key(i);

      const task = key ? localStorage.getItem(key.toString()) : "";
      if(task){
        allData.push(JSON.parse(task))
      }
      
    }
  
    return allData;
  }
