
import './App.css';

function App() {

let actorsOfTelugu =["AlluArjun","Chiranjeevi","Bhalakrishna","Nagarjuna","Nithin","Prabhas","Venkatesh","Nithin","Tharun","Nagachaithanya","Vijaydevarakonda", "Nani","Nikhil","Viswaksen","Ramcharan","Varuntej" ]

  return (
    <div className="App">
    
    <button type='button' onClick={()=>{
      console.log(actorsOfTelugu);
      delete actorsOfTelugu[6];
      console.log(actorsOfTelugu);
      actorsOfTelugu.splice(6,3);
      console.log(actorsOfTelugu)


    }}>delete</button>
    <button type='button' onClick={()=>{
      let heroins = ["Soudharya","Ramyakrishna","Amala","Raasi","Nagma","Sridevi"];
      let comidians = ["Brahmanandam","Sunil","Ali","ms.Narayana","AVS"];
      let movies = heroins.concat(comidians);
      console.log(heroins);
      console.log(comidians);
      console.log(movies);

    }}>concat</button>
    <button type='button' onClick={()=>{
      
      let animals =["Lion","Tiger","Elephant","Horse","Pig"]
      let birds = ["Sparrow","Peacock","Parrot","Eagle"];
      let petAnimals = [["Puppy","Dog"],"Cat","Cow","Rabbit"];
      let animals1 = [animals,birds,petAnimals];
        console.log(animals1);
      let allAnimals = animals1.flat(2);
      console.log(allAnimals)

    }}>flat</button>
    <button type='button' onClick={()=>{
      console.log(actorsOfTelugu)
     let arr = actorsOfTelugu.slice(4,7);
      console.log(arr);
    }}>slice</button>
    <button type='button' onClick={()=>{
      console.log(actorsOfTelugu);
      let filledArr = actorsOfTelugu.fill("Telugu actors");
      console.log(filledArr)
    }}>fill</button>
    <button type='button' onClick={()=>{
      let movieTitle = "BHARATEEYUDU-2"
      console.log(movieTitle)
      let arr = Array.from(movieTitle);
       console.log(arr)
    }}>from</button>
    <button type='button' onClick={()=>{
      let result = actorsOfTelugu.includes("Sai Dharma Tej");
      console.log(result);
    }}>includes</button>
    <button type='button' onClick={()=>{
      let result = actorsOfTelugu.indexOf("venkatesh");
      console.log(result)
    }}>indexOf</button>
    <button type='button' onClick={()=>{
      let result = actorsOfTelugu.lastIndexOf("Nagarjuna");
      console.log(result)
    }}>lastIndexOf</button>
    <button type='button' onClick={()=>{
      console.log(actorsOfTelugu);
      let arr1 = actorsOfTelugu.reverse();
      console.log(arr1)
    }}>reverse</button>
    <button type='button' onClick={()=>{
      let movie = "Devara"
      let arr = Array.isArray(movie);
      console.log(arr)
    }}>isArray</button>
    <button type='button' onClick={()=>{
      console.log(actorsOfTelugu);
      let actor = actorsOfTelugu.sort();
      console.log(actor);
      let actor1 = actorsOfTelugu.reverse();
      console.log(actor1);

     }}>sort</button>

     <br></br>

     <button type='button' onClick={()=>{
     actorsOfTelugu.forEach((ele,i)=>{
      console.log(`${i} ----- ${ele}`)
     })

   }}>forEach</button>
     <button type='button' onClick={()=>{
      let marksArr = [88,77,66,89,26,76,
        88,77,66,89,86,76,
        88,77,66,89,66,76,
        88,77,66,89,36,76,
        
     ];

     let result = marksArr.every((ele,i)=>{
        return ele >=35
      });
      if(result === true){
          console.log("Student Passed in tenth")
      }else{
        console.log("Student Failed in tenth")
    }
      //console.log(result)
      //if(marksArr[0]>35 &&
        //marksArr[1]>35 &&
       // marksArr[2]>35 &&
      //  marksArr[3]>35 &&
       // marksArr[4]>35 &&
       //</div> marksArr[5]>35 
      //){
       //console.log("Student Passed in tenth")
     // }else{
       // console.log("Student Failed in tenth")
     // }
     }}>every</button>
     <button type='button' onClick={()=>{
       let marksArr = [88,77,66,89,46,76,
        88,77,66,89,86,76,
        88,77,66,89,66,76,
        88,77,66,89,36,76
        
     ];

     let result = marksArr.some((ele,i)=>{
      return ele<35
     });
     if(result === true){
      console.log("failed")
     }else{
      console.log("passed")
     }

     }}>some</button>
     <button type='button' onClick={()=>{
      let marksArr = [66,77,55,44,88,79,89,99,55,44,66,67,33,22,34,56,15];
      let filterArr = marksArr.filter((ele,i)=>{
        //return ele <50;
       // return ele %2 == 0;
        return ele %2 !== 0;
      });
      console.log(filterArr)
     }}>filter</button>
     <button type='button' onClick={()=>{
      let Arr = [33,45,65,76,87,98,90,22,43,55];
      let value = Arr.find((ele,i)=>{
         return ele >70;
      });
      let index = Arr.findIndex((ele,i)=>{
        return ele >70;
     });
      console.log(value);
      console.log(index);
     }}>find/findIndex</button>
     
     <button type='button' onClick={()=>{
      let Arr = [33,45,65,76,87,98,90,22,43,55];
      let value = Arr.findLast((ele,i)=>{
         return ele >70;
      });
      let index = Arr.findLastIndex((ele,i)=>{
        return ele >70;
     });
      console.log(value);
      console.log(index);
    
    }}>findLast/findLastIndex</button>
     <button type='button' onClick={()=>{
       //let Arr = [33,45,65,76,87,98,90,22,43,55];
       let str = ["A","E","I","O","U"]
       let result = str.reduce((tot=0,ele,i)=>{
        return tot + ele
       })
       let result1 = str.reduceRight((tot=0,ele,i)=>{
        return tot + ele;
       });
       console.log(result)
       console.log(result1)
      
      }}>reduce/reduceRight</button>
     
     <button type='button' onClick={()=>{
        let actress = ["Samantha","RaasiKhanna","Kajal","Tamannah","Rashmika","Nayanatara"];
        let result = actress.map((ele,i)=>{
          return `sri ${ele} ji`
        });
        console.log(actress);
       console.log(result);
     }}>map</button>
     {actorsOfTelugu.map((ele,i)=>{
      return <h1>{ele}</h1>
     })}
     <button type='button' onClick={()=>{}}></button>
     <button type='button' onClick={()=>{}}></button>
    </div>
  );
}

export default App;
