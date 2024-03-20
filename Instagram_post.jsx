import React, {useEffect} from "react";

function Post(){
    const post_num = 10;

    const [width, setWidth] =useState(window.innerWidth);
    const [height, setHeight] =useState(window.innerHeight);


    useEffect(() =>{
        window.addEventListener('resize', reSize);
        console.log("Event listener");        
    })
    
    function reSize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(

        <>
            <div id="post">
            for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
            </div>
        
        </>
    )
}

export default Post()