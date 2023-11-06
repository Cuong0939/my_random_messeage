const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }

function getRandomChoice(num){
    return Math.floor(Math.random() * (num.length))
}

let Advices = [];

for (arr in collectiveWisdom){
    console.log(collectiveWisdom[arr][getRandomChoice(collectiveWisdom[arr])])
}