function controler(n) {
      var t;
      while(!isNaN(n) && n>=0 && n<=1000){
            t=n;
            break;
            
      }
      
      return t;   
}


function sous_Converter_first(n){
      var tab=['un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf','vingt','trente','quarente','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix','cent','deux-cent','trois-cent','quatre-cent','cinq-cent','six-cent','sept-cent','huit-cent','neuf-cent','milles']
      var m;
      switch (parseInt(n)) {
            case 1:m=tab[0];
                  
                  break;
            case 2:m=tab[1];
                  break;
            case 3:m=tab[2];
                  
                  break;      
            case 4:m=tab[3];
                  
                  break;
            case 5:m=tab[4];
                  
                  break;
            case 6:m=tab[5];
                  
                  break;
            case 7:m=tab[6];
                  
                  break;
            case 8:m=tab[7];
                  
                  break;
            case 9:m=tab[8];
                  
                  break;
            case 10:m=tab[9];
                  
                  break;
            case 11:m=tab[10];
                  
                  break;
            case 12:m=tab[11];
                  
                  break;
            case 13:m=tab[12];
                  
                  break;
            case 14:m=tab[13];
                  
                  break;
            case 15:m=tab[14];
                  
                  break;
            case 16:m=tab[15];
                  
                  break;
            case 17:m=tab[16];
                  
                  break;
            case 18:m=tab[17];
                  break
            case 19:m=tab[18];
                  
                  break;
            case 20:m=tab[19];
                  
                  break;
            case 30:m=tab[20];

                  break;
            case 40:m=tab[21];

                   break;
            case 50:m=tab[22];

                  
                  break;
            case 60:m=tab[23];

                  break;
            case 70:m=tab[24];

                  
                   break;
            case 80:m=tab[25];

                  
                   break;
            case 90:m=tab[26];
      
                   break;

            case 100:m=tab[27];

                  
                  break;
            case 200:m=tab[28];

                  
                  break;
            case 300:m=tab[29];

                  
                  break;
            case 400:m=tab[30];

                  
                  break;
            case 500:m=tab[31];

                  
                  break;
            case 600:m=tab[32];

                  
                  break;
            case 700:m=tab[33];

                  
                  break;
            case 800:m=tab[34];

                  
                  break;
            case 900:m=tab[35];

                  
                  break;
            case 1000:m=tab[36];

                  
                  break;
                  

            default:return true
                  break;
      }
      return m;
}
     
function sous_Converter(n) {
      var ki

     if(n>0 && n<100){
      ki=sous_converter_second(n)
     }

      else if (n<=1000){
            
            var q1=parseInt(n/100);
            var q2=parseInt(n%100);
            var num=q1*100
            if(q2!==0){
            ki=''+sous_Converter_first(num)+' '+sous_converter_second(q2)+''
            }
            else{
            ki=''+sous_Converter_first(num)+''
            }
            
            
}
return ki
  
}
function sous_converter_second(n){
      var tab=['un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf','vingt','trente','quarente','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix','cent','deux-cent','trois-cent','quatre-cent','cinq-cent','six-cent','sept-cent','huit-cent','neuf-cent','milles']
      var x,v;
      if(n==1){
            x=tab[0]
            v=true
            
      }
      if(n==2){
            x=tab[1]
            v=true
            
      }
      if(n==3){
            x=tab[2]
            v=true
      }
      if(n==4){
            x=tab[3]
            v=true
      }
      if(n==5){
            x=tab[4]
            v=true
      }
      if(n==6){
            x=tab[5]
            v=true
      }
      if(n==7){
            x=tab[6]
            v=true
      }
      if(n==8){
            x=tab[7]
            v=true
      }
      if(n==9){
            x=tab[8]
            v=true
      }
      if(n==10){
            x=tab[9]
            v=true
      }
      if(n==11){
            x=tab[10]
            v=true
      }
      if(n==12){
            x=tab[11]
            v=true
      }
      if(n==13){
            x=tab[12]
            v=true
      }
      if(n==14){
            x=tab[13]
            v=true
      }
      if(n==15){
            x=tab[14]
            v=true
      }
      if(n==16){
            x=tab[15]
            v=true
      }
      if(n==17){
            x=tab[16]
            v=true
      }
      if(n==18){
            x=tab[17]
            v=true
      }
      if(n==19){
            x=tab[18]
            v=true
      }
      if(n==20){
            x=tab[19]
            v=true
      }
      if(n==30){
            x=tab[20]
            v=true
            
      }
      if(n==40){
            x=tab[21]
            v=true
            
      }
      if(n==50){
            x=tab[22]
            v=true
            
      }
      if(n==60){
            x=tab[23]
            v=true
            
      }
      if(n==70){
            x=tab[24]
            v=true
           
      }
      if(n==80){
            x=tab[25]
            v=true
            
      }
      if(n==90){
            x=tab[26]
            v=true
           
      }
      if(n==100){
            x=tab[27]
            v=true
            
      }
      if(n==200){
            x=tab[29]
            v=true
      
      }
      if(n==300){
            x=tab[30]
            v=true
      
      }
      if(n==400){
            x=tab[31]
            v=true
      
      }
      if(n==500){
            x=tab[32]
            v=true
      
      }
      if(n==600){
            x=tab[33]
            v=true
      
      }
      if(n==700){
            x=tab[34]
            v=true
      
      }
      if(n==800){
            x=tab[35]
            v=true
      
      }
      if(n==900){
            x=tab[36]
            v=true
      
      }
      else{
            if(n>20 && n<70 && !v){
                  var q=parseInt(n/10);
                  var r=parseInt(n%10);
                  var a=[];
                  a.push(sous_Converter_first(q*10));
                  a.push(sous_Converter_first(r));
                  x=''+a[0]+'-'+a[1]+''
                  
      }     if(n>70 && n<80 && !v){
            var w=(n%10)+10;
            x='soixante-'+sous_Converter_first(w)+''
            

      }
      if(n>80 && n<90 && !v){
            var w=(n%10);
            x='quatre-vingt-'+sous_Converter_first(w)+''
            

      }
      if(n>90 && n<100 && !v){
            var w=(n%10)+10;
            x='quatre-vingt-'+sous_Converter_first(w)+''
            

      }
     
      


      }
      return x;
}

function converter(n) {
      if(isNaN(controler(n)) || !controler(n)){
            var nom;
            nom=alert('Veillez entrer un nombre valide compris entrer 0 et 900.');
      }
      if(n==0){
            nom='zéro'
      }
      else{
            nom=sous_Converter(n)

      }
      return nom
}
      
      alert(converter(prompt('Entrer le nombre à converter')))
      

