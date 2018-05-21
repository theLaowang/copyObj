function copyObj(obj,target = {}){
    for(var i in obj){
        if(typeof obj[i] === 'object'){
            //判断是数组或者是对象
            if(obj[i].constructor === Array){
                target[i] =[]
            }else{
                target[i] = {}
            }
            deepCopy(obj[i],target[i])
        }else{
            target[i] = obj[i]
        }
    }
    return target
}

function copyObj2(targetObj) {
    return JSON.parse(JSON.stringify(targetObj));
}
