import React from "react";


const Header = () => {
  return (
    <header className='w-full flex justify-center flex-col'>
     
      
      <h1 className='head_text'>
        Trimmr<br/>
      </h1>
      <h2 className='head2_text'>
        Summarise Articles with<br/>
        OpenAI GPT-4
      </h2>
      <h3 className='desc'>
        Make your study sessions more productive with Trimmr, an <br/>
        article summariser that transforms lengthy articles into <br/>
        clear and concise summaries.
      </h3>
    </header>
  );
};

export default Header;
