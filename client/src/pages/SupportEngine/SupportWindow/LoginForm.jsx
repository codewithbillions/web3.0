import { useState } from 'react';
import axios from 'axios';
const projectID = 'ca564003-df3b-4928-90c5-3a0da89f6cd2';
import styles from './../../../style'
const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className=" bg-blue-300 flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl wrapper" >
      <div className="form ">
        <h1 className="title bg-blue-600 " >Support is offline</h1>
        <form className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}  onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>create ticket</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;