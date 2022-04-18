import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <div>
        <h2>authorizetion vs authentication</h2>
        <h5>
          Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. Authorization
          system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
          Despite the similar-sounding terms, authentication and authorization are separate steps in the login process. Understanding the difference between the two is key to successfully implementing an IAM solution.
        </h5>
      </div>
      <br />
      <div>
        <h2>why I am use firebase</h2>
         <h5>
        Firebase Authentication  to make building secure authentication systems.  while improving the sign-in and onboarding experience for end users. It provides  identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, etc.
        authentication withuot farebase 
        </h5>
      </div>
      <br />

      <div>
        <h2>firebase service list withuot authentication</h2>
        <h5>
          firebase many service provided withuot authentication
          Cloud Firestore,Hosting, Cloud Storage, Google Analytics , Predictions, Cloud ,Dynamic Links
          Messaging, Remote Config, Cloud Function


        </h5>
      </div>
    </div>
  );
};

export default Blog;