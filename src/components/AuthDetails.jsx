import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { UserIcon } from "../assets";
import { useDispatch } from "react-redux";
import { setActiveUser, setLogOut } from "../services/user_slice"


const AuthDetails = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        dispatch(setActiveUser({
          email: user.email
        }));
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);


  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setLogOut())
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(setActiveUser({
          email: userCredential.user.email
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className='w-full flex justify-end items-end mb-10 pt-3'>
      {authUser ? (
        <>
          <img
            src={UserIcon}
            alt='user-icon'
            className='py-1.5 mr-1 w-4'
          /><p className='font-inter text-sm font-bold py-1.5 text-gray-700 text-center mx-3'>{`${authUser.email}`}</p>
          <button onClick={userSignOut} className='black_btn'>LOG OUT</button>
        </>
      ) : (
        <><input
            className='log_input'
            type="email"
            placeholder="Enter your email"
            name ="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        ></input><input
            className='log_input'
            type="password"
            placeholder="Enter your password"
            name ="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={signIn} className='black_btn'>LOG IN</button></>
      )}
    </nav>
  );
};

export default AuthDetails;