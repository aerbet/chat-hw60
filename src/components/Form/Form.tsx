import React, {useState} from 'react';
import './Form.css'

interface FormProps {
  publishMessage: (formData: { message: string; author: string }) => void;
}

const Form: React.FC<FormProps> = ({ publishMessage }) => {
  const [message, setMessage] = useState<string | null>(null)
  const [author, setAuthor] = useState<string | null>(null)

  const updateMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const updateAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (message && author) {
      publishMessage({ message, author });
    }
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" placeholder="Some message ..." onChange={updateMessage} />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" placeholder="Student" onChange={updateAuthor} />
        <button type="submit" id="btn-addMsg" className="btn btn-info">Send</button>
      </form>
    </>
  );
};

export default Form;