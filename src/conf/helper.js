import tender from "./tender";
import bargaining from "./bargaining";
export default {
    getName(field, key){
        var obj = tender[field] ;
        var kObj = {};
        obj.map(it => (kObj[it.id]=it.name));
        return kObj[key] ? kObj[key] : '未定义';
    },
    bargaining: {
        getName(field, key){
            var obj = bargaining[field] ;
            var kObj = {};
            obj.map(it => (kObj[it.id]=it.name));
            return kObj[key] ? kObj[key] : '未定义';
        },
    },
    getRandomNumber(){
        return (new Date()).getTime();
    },
    downFile(fileName, filePath){
        let elink = document.createElement('a');
        elink.download = fileName ;
        elink.style.display = 'none';
        elink.href = filePath ;
        elink.target = '_blank';
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href); // 释放URL 对象
        document.body.removeChild(elink)
    }
};
