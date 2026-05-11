
import React from "react";
import './../styles/App.css';
import PageLayout from "../PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
        /* Do not remove the main div */
        //header={<h3>Welcome to my website</h3>}

        footer={<p>@2023 My Website. All right reserved.</p>}
        >

       <h1>Welcome to my website</h1>
        <p>This is the content of my website</p>

        </PageLayout>
    </div>
  )
}

export default App
