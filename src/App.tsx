import React, {useEffect, useState } from 'react'
import ChatBox from "./components/ChatBox/ChatBox.tsx";
import Form from "./components/Form/Form.tsx";
import './App.css'

interface FormData {
  message: string;
  author: string;
}

interface Message {
  message: string;
  author: string;
  datetime: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [datetime, setDatetime] = useState(null)

  const endpointURL = 'http://146.185.154.90:8000/messages';
  const intervalRef = React.useRef(null)

  const getNewMessages = (datetimeParam: string | null) => {
    let url = endpointURL;
    if (datetimeParam !== null) {
      url = endpointURL + '?datetime=' + datetimeParam;
    }

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Requestt failed');
      })
      .then(result => {
        if (result.length !== 0) {
          let newData = [...result];
          newData = newData.reverse();
          const updatedMessages = newData.concat(messages);
          const updatedDatetime = result[result.length - 1].datetime;
          setMessages(updatedMessages);
          setDatetime(updatedDatetime);
        }
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  };

  useEffect(() => {
      intervalRef.current
      setInterval(() => {
        getNewMessages(datetime);
      }, 3000);

      return () => {
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
        }
      };
    },
    [datetime]);

  const publishMessage = (formData: FormData) => {
    const data = new URLSearchParams();
    data.set('message', formData.message);
    data.set('author', formData.author);

    fetch(endpointURL, {
      method: 'POST',
      body: data,
    })
      .then(response => {
        if(!response.ok) {
          throw new Error('Failed to publish message');
        }
      })
      .catch(error => {
        console.error('Error publishing message', error);
      });
  };


  return (
    <>
      <div className="App">
        <Form publishMessage={publishMessage}/>
        <ChatBox messages={messages}/>
      </div>
    </>
  )
}

export default App
