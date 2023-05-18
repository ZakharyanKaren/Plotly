function generateRandomDataArray(length) {
    const min = 100000;
    const max = 10000000;
    const dataArray = [];
    
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      dataArray.push(randomNumber);
    }
    
    return dataArray;
  }
  
  const dataJSON = [
    {
      catalog: 'First',
      arrayX: generateRandomDataArray(20000),
      arrayY: generateRandomDataArray(20000),
      errorY: generateRandomDataArray(20000),
      color: 'black'
    },
    {
      catalog: 'Second',
      arrayX: generateRandomDataArray(20000),
      arrayY: generateRandomDataArray(20000),
      errorY: generateRandomDataArray(20000),
      color: 'red'
    },
    {
      catalog: 'Third',
      arrayX: generateRandomDataArray(20000),
      arrayY: generateRandomDataArray(20000),
      errorY: generateRandomDataArray(20000),
      color: 'blue'
    },
    {
      catalog: 'Fourth',
      arrayX: generateRandomDataArray(20000),
      arrayY: generateRandomDataArray(20000),
      errorY: generateRandomDataArray(20000),
      color: 'yellow'
    },
    {
      catalog: 'Fifth',
      arrayX: generateRandomDataArray(20000),
      arrayY: generateRandomDataArray(20000),
      errorY: generateRandomDataArray(20000),
      color: 'green  '
    }
  ];
  
  export default dataJSON;