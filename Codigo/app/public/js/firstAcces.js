function firstAccess() {
    let first = JSON.parse(localStorage.getItem("firstAccess"));
    if(document.title == "Home") {
        if(first.home == 0) {
            first.home = 1;
            bemVindo();
        }
    }
    else if (document.title == "Quiz") {
        if(first.quiz == 0) {
            first.quiz = 1;
            bemVindo();
        }
    }
    else if (document.title == "Aprender") {
        if(first.aprender == 0) {
            first.aprender = 1;
            bemVindo();
        }
    }
    else if (document.title == "Perfil") {
        if(first.perfil == 0) {
            first.perfil = 1;
            bemVindo();
        }
    }
    else if (document.title == "Configurações") {
        if(first.config == 0) {
            first.config = 1;
            bemVindo();
        }
    }
    localStorage.setItem("firstAccess", JSON.stringify(first));
}

function bemVindo() {
    $('#myModal').modal("show");
} 

