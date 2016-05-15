javascript:(function(){
  function spaaace(e){
    if(e.children.length > 0)
      for(var c=0; c<e.children.length; c++)
        spaaace(e.children[c]);
    e.style.color="orange";
  }
  spaaace(document)
})();