function firstAccess() {
    if(JSON.parse(localStorage.getItem("firstAccess")) != 1) {
        localStorage.setItem("firstAccess", 1);
        bemVindo();
    }
}

function bemVindo() {
    $('#myModal').modal("show");
    
} 
