function getAnEgg(){
  const eggCount = 12;
  const promise = new Promise((resolve,reject)=>{
  if  (eggCount>0){
    resolve('true');
  }else{
    reject('Run out of egg');
  }
})
return promise;
}

function pickAnPot(){
  const isPotinUse = false;
  const promise = new Promise ((resolve, reject) => {
    if(!isPotinUse){
      resolve('true');
    }else {
      reject('Pot is in use');
    }
  });
  return promise;
}

function fillWater(){
  const isWaterRunning = true;
  const promise new Promise((resolve, reject) =>{
    if(isWaterRunning){
      resolve(true);
    }else{
      reject('No water');
    }
  });
  return promise
}

function startStove(){
  const isStoveWorking = true;
  return new Promise((resolve, reject) => {
    if(isStoveWorking){
      resolve('true');
    }else{
      reject('Stove is not working');
    }
  });
}

function boilEgg(){
  const timer = 10;
  return new Promise((resolve, reject) => {
    if(timer >= 10){
      resolve('Cooked egg')
    }else{
      reject('timer was too short got raw egg')
    }
  });
}

const cookedEgg = getAnEgg()
.then (()=>{
  console.log('picked an egg');
  pickAnPot();
})
.then(()=>{
  console.log('picked an pot');
  fillWater;
})
.then(()=>{
  console.log('filled pot');
  startStove;
  
})
.then(()=>{
  console.log('start stove');
  boilEgg;
  .then(()=>{
  console.log('boiled an egg');
  console.log(res);
.catch((err)=>{
  console.error(err);
});