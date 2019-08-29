function sum(...args) {
    return args.reduce((pre,nex)=>{
        return pre + nex;
    },0);
}

//默认暴露
export default sum;