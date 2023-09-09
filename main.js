let theinput = document.querySelector('.get-rep input');
let thebuuton = document.querySelector('.get-button')
let therepoData = document.querySelector('.show-data')

thebuuton.onclick = function () {
    getrepo();
  }
function getrepo(){
if(theinput.value==''){
    therepoData.innerHTML = '<span> please enter arepo </span>';
}else{
fetch(`https://api.github.com/users/${theinput.value}/repos`).then((repos)=>{
   return repos.json()
}).then((data)=>{
    therepoData.innerHTML=''
    data.forEach(repo => {
   let maindiv = document.createElement('div')
   let reponame = document.createTextNode(repo.name)
   maindiv.appendChild(reponame)
   let theurl =document.createElement('a')
   let theurlText = document.createTextNode('visit')
   theurl.appendChild(theurlText)
   theurl.href=`https://github.com/${theinput.value}/${repo.name}`
   theurl.setAttribute('target','blank')
   maindiv.appendChild(theurl)
   let spanstars = document.createElement('span')
   let starcounttext = document.createTextNode(`stars ${repo.stargazers_count}`)
   spanstars.appendChild(starcounttext)
   maindiv.appendChild(spanstars)
   maindiv.classList='repo-box'
   therepoData.appendChild(maindiv)
    });
})
}
}