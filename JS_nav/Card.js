let menus = [{id:1,  name: "Home", href:"#"}, 
             {id:2, name: "Contact", href:"#"},
             {id:3, name: "Services", href:"#"},
             {id:4, name: "Blog", href:"#", imgSrc:"https://plus.unsplash.com/premium_photo-1663014628171-7339662063a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",}]
let ulEl = document.createElement("ul");
let container = document.getElementById("container");
    for(i = 0; i < menus.length; i++){
        let div = document.createElement("div");
        let img = document.createElement("img"); 
        let title = document.createElement("h1");
        let text = document.createElement("p");
    }