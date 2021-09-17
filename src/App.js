import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([]);
  const [url, setUrl]=useState('');
  const [word, setWord] = useState('')
  const [letter, setLetter] = useState('')

  const getData=()=>{
    setUrl("")
    if (word[0] == "A") 
      {
      setUrl("DA.json") 
    } 
    else if (word[0] == "B") {
      setUrl("DB.json") 
    }
    else if (word[0] == "C") {
      setUrl("DC.json") 
    }
    else if (word[0] == "D") {
      setUrl("DD.json") 
    }
    else if (word[0] == "E") {
      setUrl("DE.json") 
    }
    else if (word[0] == "F") {
      setUrl("DF.json") 
    }
    else if (word[0] == "G") {
      setUrl("DG.json") 
    }
    else if (word[0] == "H") {
      setUrl("DH.json") 
    }
    else if (word[0] == "I") {
      setUrl("DI.json") 
    }
    else if (word[0] == "J") {
      setUrl("DJ.json") 
    }
    else if (word[0] == "K") {
      setUrl("DK.json") 
    }
    else if (word[0] == "L") {
      setUrl("DL.json") 
    }
    else if (word[0] == "M") {
      setUrl("DM.json") 
    }
    else if (word[0] == "N") {
      setUrl("DN.json") 
    }
    else if (word[0] == "O") {
      setUrl("DO.json") 
    }
    else if (word[0] == "P") {
      setUrl("DP.json") 
    }
    else if (word[0] == "Q") {
      setUrl("DQ.json") 
    }
    else if (word[0] == "R") {
      setUrl("DR.json") 
    }
    else if (word[0] == "S") {
      setUrl("DS.json") 
    }
    else if (word[0] == "T") {
      setUrl("DT.json") 
    }
    else if (word[0] == "U") {
      setUrl("DU.json") 
    }
    else if (word[0] == "V") {
      setUrl("DV.json") 
    }
    else if (word[0] == "W") {
      setUrl("DW.json") 
    }
    else if (word[0] == "X") {
      setUrl("DX.json") 
    }
    else if (word[0] == "Y") {
      setUrl("DY.json") 
    }
    else if (word[0] == "Z") {
      setUrl("DZ.json") 
    }
      fetch(url
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            //console.log(myJson.A.MEANINGS[6]);
            setData(myJson)
          });
   
    
  }

  useEffect(()=>{  
    
  },[])
  return (
<div style={{backgroundImage: "url(pattern.jpg)", minHeight: "100vh"}} >
      <header>
        <a href="/home" className="logo"><img src="/images/logo.png" /></a>

        <nav>
          <ul>
            
          </ul>
        </nav>
      </header>
<div style={{display: "flex", justifyContent: "center", alignItems: "center" }} className="App">

      <div style={{ width: "60vw", height: "80vh", overflowY: "scroll", padding: "20px"  }} >
        <div className="">
          <h1>{word}</h1>

          <input
            autoFocus
            type="text"
            value={word}
            onChange={(e) => { setWord(e.target.value); getData() }}
          />
 <p>
          {data[word]?.MEANINGS[1] && data[word].MEANINGS[1].map(function (el,index) {
                  return <h3 key={index} >{el}<br/></h3> 
              } )}
          {data[word]?.MEANINGS[2] && data[word].MEANINGS[2].map(function (el,index) {
                  return <p key={index} >{el}</p>
              } )}
          {data[word]?.MEANINGS[3] && data[word].MEANINGS[3].map(function (el,index) {
                      return <p key={index} >{el}</p>
                  } )}
          {data[word]?.MEANINGS[4] && data[word].MEANINGS[4].map(function (el,index) {
                  return <p key={index} >{el}</p>
              } )}
          {data[word]?.MEANINGS[5] && data[word].MEANINGS[5].map(function (el,index) {
                  return <p key={index} >{el}</p>
              })}
          {data[word]?.MEANINGS[6] && data[word].MEANINGS[6].map(function (el,index) {
                  return <p key={index} >{el}</p>
              })}
          {data[word]?.MEANINGS[7] && data[word].MEANINGS[7].map(function (el,index) {
                      return <p key={index} >{el}</p>
                  } )}
          {data[word]?.MEANINGS[8] && data[word].MEANINGS[8].map(function (el,index) {
                  return <p key={index} >{el}</p>
              } )}
          {data[word]?.MEANINGS[9] && data[word].MEANINGS[9].map(function (el,index) {
                  return <p key={index} >{el}</p>
              } )}
          {data[word]?.MEANINGS[10] && data[word].MEANINGS[10].map(function (el,index) {
                  return <p key={index} >{el}</p>
              } )}
          </p>
          <h3> SYNONYMS: 
              {data[word]?.SYNONYMS && data[word].SYNONYMS.join(", ")}
          </h3>
			
        </div>

      </div>


    </div>
  
</div>
    
    
  );
}

export default App;