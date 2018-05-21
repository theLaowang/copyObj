function copyObj(obj,target = {}){
    for(var i in obj){
        if(typeof obj[i] === 'object'){
            //要考虑深复制问题了
            if(obj[i].constructor === Array){
                //这是数组
                target[i] =[]
            }else{
                //这是对象
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