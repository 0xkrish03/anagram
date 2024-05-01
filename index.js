function sorting(s){
  s=s.toUpperCase()
  let str=""
  for(let c='A';c<='Z';c++){
    for(let i=0;i<s.length;i++){
      if(s[i]==c){
        str+=c
      }
    }
  }
}
function isAnagram(s,s1){
  if(sorting(s)==sorting(s1)){
    console.log("anagram word confirm")
  }
  else{
    console.log("anagram word not confirm")
  }
}
let s=prompt("enter a word")
let s1=prompt("enter a word")
isAnagram(s,s1)