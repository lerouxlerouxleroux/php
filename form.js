function verif ()
{
    if (document.getElementById('lastname').value == "") {
        alert ("Vous devez remplir tous les champs");
        document.formul.lastname.focus();
        document.formul.lastname.style.backgroundColor = ""
        return false;
    }
   
    if (document.getElementById('firstname').value == "") {
        alert ("Vous devez remplir tous les champs");
        
        return false;
    }
    var male = document.getElementById('Monsieur').cheked;
    var female = document.getElementById('Madame').cheked;
    console.log(male)
        if (!male&&!female) {
            alert("vous devez selectionner votre civilité");
            document.formul.Monsieur.focus();
        document.formul.Monsieur.style.backgroundColor = ""
        
        return false;
        }

    if (document.formul.firstname.value == "") {
        alert ("Vous devez remplir tous les champs");
        document.formul.firstname.focus();
        document.formul.firstname.style.backgroundColor = ""
        //document.formulaire.password.style.backgroundColor = "";
        
        return false;
    }

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(document.getElementById('email').value))
        return true; //vérification email, test - fonction native javascript
    
    else {
        alert ('entrez email valide!')
    }
    
    return false;
    var mobile = /^(01|02|03|04|05|06|07|08|0033\+33)[0-9]{8}/;
    if (mobile.test(document.getElementById('tel').value))
    {
        return true;
    }else {
        alert ("Entrez un numéro de tel valide");
        document.formul.tel.focus();
        document.formul.tel.style.backgroundColor = ""
    }
    var checked = document/getElementById('tnc').checked;
    if (!checked) {
        alert ("vous devez accepter les mentions légales !");
         document.formul.tnc.focus();
        document.formul.tnc.style.backgroundColor = ""
        return false;
    }

