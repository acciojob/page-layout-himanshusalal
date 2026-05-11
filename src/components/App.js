
import React from "react";
import './../styles/App.css';
import PageLayout from "../PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
        /* Do not remove the main div */
        //header={<h3>Welcome to my website</h3>}

        footer={<P>@2023 My Website. All right reserved.</P>}
        >

       <h1>Welcome to my website</h1>
        <P>This is the content of my website</P>

        </PageLayout>
    </div>
  )
}

export default App
