function  container(reactElement,container){
    
}

const reactElement={
    type:'a',
    props:{
        href:'google.com',
        target:'_blank'    
    },
    children: 'click me to visit google'

}
let container =document.getElementById('root')
customRender(reactElement,container)