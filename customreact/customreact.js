function  customRender(reactElement,container){
    // let domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)
    let domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (let prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'google.com',
        target:'_blank'    
    },
    children: 'click me to visit google'

}
let mainContainer =document.getElementById('root')
customRender(reactElement,mainContainer)