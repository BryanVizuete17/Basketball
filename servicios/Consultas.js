
export const consultarResultado =(fecha,equipoA,equipoB,fnCallback)=>{
   

    let idPartido= fecha+"_"+equipoA+"_"+equipoB


    global.bdd
    .collection('partidos')
    .doc(idPartido)
    .get()
    .then((doc)=>{
        console.log(doc.data())
        fnCallback(doc.data())
    }
    
    )
    .catch(error=>{
        console.log("Error",error)
    });
}
    
 