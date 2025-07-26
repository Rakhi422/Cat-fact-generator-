function getFact() {
      fetch("https://catfact.ninja/fact")
        .then(function(res){
         return res.json();
                           })
        .then( function (data) {
          document.getElementById("button").innerText = data.fact;
        })
        .catch(function(error) {
          document.getElementByIdl("button").innerText = "Could not load  fact.";
          console.error(error);
        });
    }